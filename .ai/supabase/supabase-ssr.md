# @supabase/ssr

`@supabase/ssr` is a framework-agnostic library for using the Supabase JavaScript client in server-side rendering (SSR) frameworks like Next.js, Remix, SvelteKit, and others. It provides a unified solution for managing authentication sessions via cookies, replacing the deprecated framework-specific `@supabase/auth-helpers-*` packages with a single, consistent API.

The library handles the complexities of cookie-based session storage including cookie chunking for large sessions, Base64-URL encoding for safe cookie values, and automatic session refresh on the server. It exposes two main client creation functions: `createBrowserClient` for client-side usage with automatic `document.cookie` integration, and `createServerClient` for server-side middleware, API routes, and server components with customizable cookie handlers.

## createBrowserClient

Creates a Supabase client for browser environments. By default, it uses the `document.cookie` API automatically and implements singleton pattern to ensure a single client instance. The client handles session persistence in cookies, automatic token refresh, and PKCE authentication flow.

```typescript
import { createBrowserClient } from '@supabase/ssr'

// Basic usage - uses document.cookie automatically
const supabase = createBrowserClient(
  'https://your-project.supabase.co',
  'your-anon-key'
)

// With custom database types
const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// With custom cookie options
const supabase = createBrowserClient(
  'https://your-project.supabase.co',
  'your-anon-key',
  {
    cookieOptions: {
      name: 'my-app-auth',
      path: '/',
      sameSite: 'lax',
      secure: true
    },
    cookieEncoding: 'base64url', // default, safer encoding
    isSingleton: true // default in browser environments
  }
)

// Usage with auth operations
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123'
})

// Get current session (unverified - from cookies)
const { data: { session } } = await supabase.auth.getSession()

// Get verified user (contacts auth server)
const { data: { user } } = await supabase.auth.getUser()
```

## createServerClient

Creates a Supabase client for server-side environments including middleware, API routes, and server components. Requires explicit cookie handlers (`getAll` and `setAll`) to read from request cookies and write to response cookies. Uses lazy session initialization and handles token refresh with cookie updates.

```typescript
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Next.js Middleware example
export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
            response.cookies.set(name, value, options)
          })
        }
      }
    }
  )

  // Refresh session - MUST be called before response is sent
  await supabase.auth.getUser()

  return response
}

// Next.js Server Component (read-only cookies)
async function ServerComponent() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        }
        // setAll omitted - server components can't set cookies
      }
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  return <div>Hello {user?.email}</div>
}

// Next.js Route Handler with full cookie access
export async function POST(request: Request) {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        }
      }
    }
  )

  await supabase.auth.signOut()
  return Response.json({ success: true })
}
```

## parseCookieHeader

Parses a `Cookie` HTTP header string into an array of cookie name-value objects. Decodes cookie names and values from URI encoding.

```typescript
import { parseCookieHeader } from '@supabase/ssr'

// Parse Cookie header from request
const cookieHeader = 'session=abc123; theme=dark; user=John%20Doe'
const cookies = parseCookieHeader(cookieHeader)

// Result:
// [
//   { name: 'session', value: 'abc123' },
//   { name: 'theme', value: 'dark' },
//   { name: 'user', value: 'John Doe' }
// ]

// Usage in server frameworks without built-in cookie parsing
import { createServerClient, parseCookieHeader } from '@supabase/ssr'

function handleRequest(request: Request) {
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          // Handle setting cookies via response headers
        }
      }
    }
  )
}
```

## serializeCookieHeader

Converts cookie name, value, and options to a valid `Set-Cookie` header string. URI encodes non US-ASCII characters and forbidden cookie characters.

```typescript
import { serializeCookieHeader } from '@supabase/ssr'

// Create Set-Cookie header
const setCookieHeader = serializeCookieHeader(
  'session',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  }
)

// Result: "session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800"

// Usage in server frameworks setting response headers
import { createServerClient, serializeCookieHeader } from '@supabase/ssr'

function handleRequest(request: Request) {
  const headers = new Headers()

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
          })
        }
      }
    }
  )

  return new Response('OK', { headers })
}
```

## createChunks

Splits a large string value into multiple cookie-sized chunks (max 3180 bytes each). Returns an array of chunk objects with names formatted as `key.0`, `key.1`, etc. for chunked values, or just `key` if the value fits in a single cookie.

```typescript
import { createChunks } from '@supabase/ssr'

// Small value - single cookie
const smallChunks = createChunks('auth-token', 'short-value')
// Result: [{ name: 'auth-token', value: 'short-value' }]

// Large value - multiple chunks
const largeSession = JSON.stringify({
  access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  refresh_token: 'abc123def456...',
  user: { id: '123', email: 'user@example.com', /* ... large user object */ }
})

const chunks = createChunks('sb-session', largeSession)
// Result: [
//   { name: 'sb-session.0', value: '{"access_token":"eyJhbGci...' },
//   { name: 'sb-session.1', value: '...continued data...' },
//   { name: 'sb-session.2', value: '...more data..."}' }
// ]

// Custom chunk size
const customChunks = createChunks('data', largeValue, 2000)
```

## combineChunks

Reconstructs a value from multiple cookie chunks. Handles both single-cookie values and chunked values by sequentially retrieving chunks until no more are found.

```typescript
import { combineChunks } from '@supabase/ssr'

// Mock cookie retrieval function
const cookies = {
  'sb-session.0': '{"access_token":"eyJ...',
  'sb-session.1': 'abc123","refresh_token',
  'sb-session.2': '":"xyz789"}'
}

const retrieveChunk = async (name: string) => {
  return cookies[name] || null
}

// Combine chunks back into original value
const session = await combineChunks('sb-session', retrieveChunk)
// Result: '{"access_token":"eyJabc123","refresh_token":"xyz789"}'

// Works for non-chunked values too
const simpleCookies = { 'theme': 'dark' }
const theme = await combineChunks('theme', (name) => simpleCookies[name] || null)
// Result: 'dark'
```

## stringToBase64URL

Converts a JavaScript string to Base64-URL encoding (URL-safe Base64 without padding). First encodes the string as UTF-8, then converts to Base64-URL. Used internally for safely encoding session data in cookies.

```typescript
import { stringToBase64URL } from '@supabase/ssr'

// Encode simple string
const encoded = stringToBase64URL('Hello, World!')
// Result: 'SGVsbG8sIFdvcmxkIQ'

// Encode JSON session data
const sessionData = JSON.stringify({
  access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U',
  user: { email: 'user@example.com', name: '用户' } // Unicode characters
})

const encodedSession = stringToBase64URL(sessionData)
// Safely stores any Unicode characters in cookie-safe format

// For cookie storage, the library prefixes with 'base64-'
const cookieValue = 'base64-' + stringToBase64URL(sessionData)
```

## stringFromBase64URL

Decodes a Base64-URL encoded string back to the original JavaScript string. Handles UTF-8 decoding for Unicode character support.

```typescript
import { stringFromBase64URL } from '@supabase/ssr'

// Decode simple string
const decoded = stringFromBase64URL('SGVsbG8sIFdvcmxkIQ')
// Result: 'Hello, World!'

// Decode session data
const encodedSession = 'eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSklVekkxTmlKOS4uLiJ9'
const sessionJson = stringFromBase64URL(encodedSession)
const session = JSON.parse(sessionJson)
// Result: { access_token: 'eyJhbGciOiJIUzI1NiJ9...' }

// When reading from cookies with base64- prefix
const cookieValue = 'base64-eyJhY2Nlc3NfdG9rZW4iOi...'
if (cookieValue.startsWith('base64-')) {
  const decoded = stringFromBase64URL(cookieValue.substring(7))
  const data = JSON.parse(decoded)
}
```

## isBrowser

Utility function that detects if code is running in a browser environment by checking for `window` and `window.document` existence.

```typescript
import { isBrowser } from '@supabase/ssr'

// Check environment
if (isBrowser()) {
  // Client-side code
  console.log('Running in browser')
  const supabase = createBrowserClient(url, key)
} else {
  // Server-side code
  console.log('Running on server')
  const supabase = createServerClient(url, key, { cookies: {...} })
}

// Conditional singleton behavior
const client = createBrowserClient(url, key, {
  isSingleton: isBrowser() // Only singleton in actual browser
})
```

## DEFAULT_COOKIE_OPTIONS

Default cookie options used by the library when setting cookies. Provides secure defaults including 400-day max age, lax same-site policy, and root path.

```typescript
import { DEFAULT_COOKIE_OPTIONS } from '@supabase/ssr'

// Default values:
// {
//   path: '/',
//   sameSite: 'lax',
//   httpOnly: false,
//   maxAge: 34560000 // 400 days in seconds
// }

// Override defaults when creating client
const supabase = createServerClient(url, key, {
  cookies: { getAll, setAll },
  cookieOptions: {
    ...DEFAULT_COOKIE_OPTIONS,
    httpOnly: true,
    secure: true,
    domain: '.example.com'
  }
})
```

## Summary

The primary use case for `@supabase/ssr` is implementing secure authentication flows in SSR applications. The middleware pattern is essential: create a server client in middleware that refreshes the session before any page renders, ensuring cookies stay synchronized between browser and server. For pages and components, create clients that read cookies to access user state. The library automatically handles token refresh, cookie chunking for large sessions, and Base64-URL encoding for safe cookie values.

Integration typically involves three client instances: a browser client for client-side interactivity, a middleware client with full `getAll`/`setAll` for session refresh, and read-only server clients for server components. Key patterns include always calling `getUser()` or `getSession()` early in request handlers before response is committed, using `getUser()` instead of `getSession()` for authorization decisions (as `getSession()` data is unverified), and handling concurrent requests gracefully since refresh tokens are single-use. The library supports all major SSR frameworks through its framework-agnostic cookie interface.
