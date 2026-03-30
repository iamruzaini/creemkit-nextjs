# Supabase Auth - Authentication and User Management Server

Supabase Auth is a production-ready authentication server written in Go that provides comprehensive user management and authentication capabilities. Originally forked from Netlify's GoTrue, it has evolved into a feature-rich authentication solution powering Supabase's authentication infrastructure. The server issues JWT tokens, integrates seamlessly with PostgREST for Row Level Security, and supports multiple authentication methods including email/password, phone/SMS, OAuth providers, SAML SSO, and Web3 wallet authentication. As of version 2.184.0, Supabase Auth can operate in dual modes: as an OAuth client connecting to external providers and as an OAuth 2.1 server with OpenID Connect support allowing other applications to use it as an identity provider.

The server is designed for scalability and security, implementing industry-standard protocols like OAuth 2.1, PKCE, and SAML 2.0. It features multi-factor authentication with TOTP, phone, and WebAuthn (passkey) support, refresh token rotation with reuse detection, customizable hooks for extending functionality, and comprehensive observability through OpenTelemetry. With support for 18 OAuth providers (including Google, GitHub, Apple, Azure, Discord, Twitter/X, and more), 4 SMS providers, extensive notification capabilities for account changes, and comprehensive configuration options, Supabase Auth provides enterprise-grade authentication that can be self-hosted or used through Supabase's managed service.

## API Endpoints and Functions

### User Registration with Email and Password

Sign up a new user with email and password credentials. Supports PKCE flow for enhanced security and custom user metadata.

```bash
# Basic signup with email confirmation
curl -X POST 'https://your-project.supabase.co/auth/v1/signup' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com",
    "password": "securepassword123",
    "data": {
      "full_name": "John Doe",
      "age": 30
    }
  }'

# Response when confirmation required:
{
  "id": "11111111-2222-3333-4444-5555555555555",
  "email": "user@example.com",
  "confirmation_sent_at": "2023-09-15T20:49:40Z",
  "created_at": "2023-09-15T19:53:12Z",
  "updated_at": "2023-09-15T19:53:12Z"
}

# Signup with PKCE for mobile/SPA apps
curl -X POST 'https://your-project.supabase.co/auth/v1/signup' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com",
    "password": "securepassword123",
    "code_challenge": "elU6u5zyqQT2f92GRQUq6PautAeNDf4DQPayyR0ek_c",
    "code_challenge_method": "s256"
  }'

# Phone signup
curl -X POST 'https://your-project.supabase.co/auth/v1/signup' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "+1234567890",
    "password": "securepassword123"
  }'

# Response with auto-confirm enabled:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "expires_at": 1694808552,
  "refresh_token": "4nYUCw0wZR_DNOTSDbSGMQ",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "user_metadata": {"full_name": "John Doe"},
    "app_metadata": {"provider": "email"}
  }
}
```

### User Login with Password Grant

Authenticate users with email/phone and password to receive access and refresh tokens.

```bash
# Email login
curl -X POST 'https://your-project.supabase.co/auth/v1/token?grant_type=password' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com",
    "password": "securepassword123"
  }'

# Phone login
curl -X POST 'https://your-project.supabase.co/auth/v1/token?grant_type=password' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "+1234567890",
    "password": "securepassword123"
  }'

# Response:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk0ODA4NTUyLCJpYXQiOjE2OTQ4MDQ5NTIsImlzcyI6Imh0dHBzOi8veW91ci1wcm9qZWN0LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJ1c2VyLXV1aWQiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIn0sInVzZXJfbWV0YWRhdGEiOnsiZnVsbF9uYW1lIjoiSm9obiBEb2UifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTY5NDgwNDk1Mn1dLCJzZXNzaW9uX2lkIjoic2Vzc2lvbi11dWlkIn0...",
  "token_type": "bearer",
  "expires_in": 3600,
  "expires_at": 1694808552,
  "refresh_token": "new-refresh-token-string",
  "user": {
    "id": "11111111-2222-3333-4444-5555555555555",
    "email": "user@example.com",
    "phone": "+1234567890",
    "email_confirmed_at": "2023-09-15T19:53:12Z",
    "last_sign_in_at": "2023-09-20T10:00:00Z",
    "user_metadata": {"full_name": "John Doe"},
    "app_metadata": {"provider": "email"}
  }
}

# Error response for invalid credentials:
{
  "error": "invalid_grant",
  "error_description": "Invalid login credentials"
}
```

### Refresh Access Token

Exchange a refresh token for a new access token and optionally a new refresh token (with rotation enabled).

```bash
curl -X POST 'https://your-project.supabase.co/auth/v1/token?grant_type=refresh_token' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "refresh_token": "4nYUCw0wZR_DNOTSDbSGMQ"
  }'

# Response:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "expires_at": 1694808552,
  "refresh_token": "new-refresh-token-if-rotation-enabled",
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  }
}

# If refresh token is invalid or revoked:
{
  "error": "invalid_grant",
  "error_description": "Invalid Refresh Token"
}
```

### Email and Phone Verification

Verify email or phone confirmation tokens to activate user accounts.

```bash
# Verify via GET (typically from email link)
curl 'https://your-project.supabase.co/auth/v1/verify?token=confirmation-token&type=signup&redirect_to=https://app.example.com'

# Verify via POST
curl -X POST 'https://your-project.supabase.co/auth/v1/verify' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "signup",
    "token": "confirmation-token-from-email",
    "email": "user@example.com"
  }'

# Phone verification with OTP
curl -X POST 'https://your-project.supabase.co/auth/v1/verify' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "sms",
    "token": "123456",
    "phone": "+1234567890"
  }'

# Response:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "expires_at": 1694808552,
  "refresh_token": "refresh-token-string",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "email_confirmed_at": "2023-09-15T20:50:00Z",
    "confirmed_at": "2023-09-15T20:50:00Z"
  }
}
```

### OAuth Provider Authentication

Initiate and complete OAuth flows with external providers like Google, GitHub, Apple, etc.

```bash
# Step 1: Redirect to OAuth provider
curl 'https://your-project.supabase.co/auth/v1/authorize?provider=google&redirect_to=https://app.example.com&scopes=email profile'
# Returns: 302 redirect to Google authorization page

# With PKCE for mobile/SPA
curl 'https://your-project.supabase.co/auth/v1/authorize?provider=github&code_challenge=elU6u5zyqQT2f92GRQUq6PautAeNDf4DQPayyR0ek_c&code_challenge_method=s256&redirect_to=https://app.example.com'

# Step 2: After user authorizes, provider redirects to callback
# GET /auth/v1/callback?code=AUTH_CODE&state=STATE_TOKEN

# Step 3: Auth server handles callback and redirects user with tokens
# Redirect to: https://app.example.com#access_token=JWT&refresh_token=REFRESH&expires_in=3600&token_type=bearer&type=signup

# Supported providers (18 total):
# - Google: provider=google
# - GitHub: provider=github
# - Apple: provider=apple
# - Facebook: provider=facebook
# - Azure (Microsoft): provider=azure
# - GitLab: provider=gitlab
# - Discord: provider=discord
# - Twitch: provider=twitch
# - Spotify: provider=spotify
# - LinkedIn: provider=linkedin
# - Slack: provider=slack
# - Notion: provider=notion
# - WorkOS: provider=workos
# - Keycloak: provider=keycloak
# - Bitbucket: provider=bitbucket
# - Figma: provider=figma
# - Snapchat: provider=snapchat
# - Twitter (X): provider=twitter
```

### Send One-Time Password (OTP)

Send magic link via email or OTP via SMS for passwordless authentication.

```bash
# Send email magic link
curl -X POST 'https://your-project.supabase.co/auth/v1/otp' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com",
    "create_user": true,
    "data": {
      "full_name": "John Doe"
    }
  }'

# Send SMS OTP
curl -X POST 'https://your-project.supabase.co/auth/v1/otp' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "+1234567890",
    "channel": "sms",
    "create_user": false
  }'

# Response:
{
  "message_id": "msgid123456"
}

# User then verifies with:
curl -X POST 'https://your-project.supabase.co/auth/v1/verify' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "sms",
    "token": "123456",
    "phone": "+1234567890"
  }'
```

### Password Recovery

Request password reset email and complete the recovery process.

```bash
# Step 1: Request password recovery
curl -X POST 'https://your-project.supabase.co/auth/v1/recover' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com"
  }'

# Response:
{}

# Step 2: User clicks link in email and is redirected with recovery token
# GET /verify?token=RECOVERY_TOKEN&type=recovery

# Step 3: Update password with new token
curl -X PUT 'https://your-project.supabase.co/auth/v1/user' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer RECOVERY_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "password": "new-secure-password-456"
  }'

# Response:
{
  "id": "uuid",
  "email": "user@example.com",
  "updated_at": "2023-09-20T15:30:00Z"
}
```

### Get Current User Profile

Retrieve the authenticated user's profile information.

```bash
curl -X GET 'https://your-project.supabase.co/auth/v1/user' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN'

# Response:
{
  "id": "11111111-2222-3333-4444-5555555555555",
  "aud": "authenticated",
  "role": "authenticated",
  "email": "user@example.com",
  "phone": "+1234567890",
  "email_confirmed_at": "2023-09-15T19:53:12Z",
  "phone_confirmed_at": "2023-09-16T10:00:00Z",
  "last_sign_in_at": "2023-09-20T10:00:00Z",
  "user_metadata": {
    "full_name": "John Doe",
    "age": 30
  },
  "app_metadata": {
    "provider": "email",
    "providers": ["email", "google"]
  },
  "identities": [
    {
      "id": "identity-uuid",
      "user_id": "user-uuid",
      "provider": "email",
      "created_at": "2023-09-15T19:53:12Z"
    },
    {
      "id": "identity-uuid-2",
      "user_id": "user-uuid",
      "provider": "google",
      "identity_data": {
        "email": "user@example.com",
        "name": "John Doe"
      },
      "created_at": "2023-09-18T14:20:00Z"
    }
  ],
  "factors": [
    {
      "id": "factor-uuid",
      "friendly_name": "My Authenticator",
      "factor_type": "totp",
      "status": "verified",
      "created_at": "2023-09-19T12:00:00Z"
    }
  ],
  "created_at": "2023-09-15T19:53:12Z",
  "updated_at": "2023-09-20T10:00:00Z"
}
```

### Update User Profile

Update user email, phone, password, or metadata.

```bash
# Update user metadata
curl -X PUT 'https://your-project.supabase.co/auth/v1/user' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "full_name": "John Doe Updated",
      "age": 31
    }
  }'

# Update email (triggers confirmation)
curl -X PUT 'https://your-project.supabase.co/auth/v1/user' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "newemail@example.com"
  }'

# Update password
curl -X PUT 'https://your-project.supabase.co/auth/v1/user' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "password": "new-password-123"
  }'

# Update phone
curl -X PUT 'https://your-project.supabase.co/auth/v1/user' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "phone": "+19876543210"
  }'

# Response:
{
  "id": "uuid",
  "email": "user@example.com",
  "email_change": "newemail@example.com",
  "email_change_sent_at": "2023-09-20T15:45:00Z",
  "phone": "+1234567890",
  "phone_change": "+19876543210",
  "phone_change_sent_at": "2023-09-20T15:45:00Z",
  "user_metadata": {
    "full_name": "John Doe Updated",
    "age": 31
  },
  "updated_at": "2023-09-20T15:45:00Z"
}
```

### Enroll MFA Factor (TOTP, Phone, WebAuthn)

Enroll a new multi-factor authentication method. Supports TOTP, phone, and WebAuthn (passkey).

```bash
# Enroll TOTP (Time-based One-Time Password)
curl -X POST 'https://your-project.supabase.co/auth/v1/factors' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "factor_type": "totp",
    "friendly_name": "My Authenticator App",
    "issuer": "MyCompany"
  }'

# Response:
{
  "id": "factor-uuid",
  "type": "totp",
  "friendly_name": "My Authenticator App",
  "status": "unverified",
  "totp": {
    "qr_code": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
    "secret": "JBSWY3DPEHPK3PXP",
    "uri": "otpauth://totp/MyCompany:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=MyCompany"
  }
}

# Enroll phone factor
curl -X POST 'https://your-project.supabase.co/auth/v1/factors' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "factor_type": "phone",
    "phone": "+1234567890",
    "friendly_name": "My Phone"
  }'

# Enroll WebAuthn (Passkey) - Step 1: Request challenge
curl -X POST 'https://your-project.supabase.co/auth/v1/factors' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "factor_type": "webauthn",
    "friendly_name": "My Security Key"
  }'

# Response with challenge for WebAuthn registration:
{
  "id": "factor-uuid",
  "type": "webauthn",
  "friendly_name": "My Security Key",
  "status": "unverified"
}
```

### Challenge and Verify MFA Factor

Create a challenge for MFA verification and verify the response.

```bash
# Step 1: Create challenge
curl -X POST 'https://your-project.supabase.co/auth/v1/factors/FACTOR_UUID/challenge' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{}'

# Response:
{
  "id": "challenge-uuid",
  "type": "totp",
  "expires_at": 1694808552
}

# For phone factor with SMS:
curl -X POST 'https://your-project.supabase.co/auth/v1/factors/FACTOR_UUID/challenge' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "channel": "sms"
  }'

# Step 2: Verify challenge with code
curl -X POST 'https://your-project.supabase.co/auth/v1/factors/FACTOR_UUID/verify' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "challenge_id": "challenge-uuid",
    "code": "123456"
  }'

# Response (upgraded to AAL2):
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "new-refresh-token",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "factors": [
      {
        "id": "factor-uuid",
        "status": "verified"
      }
    ]
  }
}
```

### Unenroll MFA Factor

Remove a multi-factor authentication method from user's account.

```bash
curl -X DELETE 'https://your-project.supabase.co/auth/v1/factors/FACTOR_UUID' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN'

# Response:
{
  "id": "factor-uuid"
}
```

### User Logout

Logout user by revoking refresh tokens and optionally sessions.

```bash
# Logout from current session
curl -X POST 'https://your-project.supabase.co/auth/v1/logout' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN'

# Response: 204 No Content

# Logout from all sessions (global scope)
curl -X POST 'https://your-project.supabase.co/auth/v1/logout?scope=global' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN'

# Logout from all other sessions (keep current)
curl -X POST 'https://your-project.supabase.co/auth/v1/logout?scope=others' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN'
```

### Invite User (Admin)

Invite a new user via email with admin privileges.

```bash
curl -X POST 'https://your-project.supabase.co/auth/v1/invite' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "newuser@example.com",
    "data": {
      "role": "admin",
      "department": "Engineering"
    }
  }'

# Response:
{
  "id": "user-uuid",
  "email": "newuser@example.com",
  "invited_at": "2023-09-20T16:00:00Z",
  "confirmation_sent_at": "2023-09-20T16:00:00Z",
  "created_at": "2023-09-20T16:00:00Z",
  "updated_at": "2023-09-20T16:00:00Z"
}
```

### List Users (Admin)

Retrieve paginated list of all users in the system.

```bash
# List users with pagination
curl -X GET 'https://your-project.supabase.co/auth/v1/admin/users?page=1&per_page=50' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY'

# Response:
{
  "users": [
    {
      "id": "user-uuid-1",
      "email": "user1@example.com",
      "phone": "+1234567890",
      "created_at": "2023-09-15T19:53:12Z",
      "last_sign_in_at": "2023-09-20T10:00:00Z"
    },
    {
      "id": "user-uuid-2",
      "email": "user2@example.com",
      "created_at": "2023-09-16T12:30:00Z",
      "last_sign_in_at": "2023-09-19T14:20:00Z"
    }
  ],
  "aud": "authenticated"
}
```

### Get User by ID (Admin)

Retrieve detailed information for a specific user.

```bash
curl -X GET 'https://your-project.supabase.co/auth/v1/admin/users/USER_UUID' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY'

# Response: User object with all fields
{
  "id": "user-uuid",
  "email": "user@example.com",
  "phone": "+1234567890",
  "user_metadata": {"full_name": "John Doe"},
  "app_metadata": {"provider": "email"},
  "identities": [...],
  "factors": [...],
  "created_at": "2023-09-15T19:53:12Z",
  "updated_at": "2023-09-20T10:00:00Z"
}
```

### Create or Update User (Admin)

Create a new user or update existing user with admin privileges.

```bash
# Create new user (POST)
curl -X POST 'https://your-project.supabase.co/auth/v1/admin/users' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "newuser@example.com",
    "password": "password123",
    "email_confirm": true,
    "phone": "+1234567890",
    "phone_confirm": true,
    "user_metadata": {
      "full_name": "Jane Smith"
    },
    "app_metadata": {
      "role": "premium"
    }
  }'

# Update existing user (PUT)
curl -X PUT 'https://your-project.supabase.co/auth/v1/admin/users/USER_UUID' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "updated@example.com",
    "user_metadata": {
      "full_name": "Jane Smith Updated"
    },
    "app_metadata": {
      "role": "admin"
    },
    "ban_duration": "24h"
  }'

# Unban user
curl -X PUT 'https://your-project.supabase.co/auth/v1/admin/users/USER_UUID' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "ban_duration": "none"
  }'
```

### Generate Magic Link (Admin)

Generate signup, recovery, or magic link for users programmatically.

```bash
# Generate signup link
curl -X POST 'https://your-project.supabase.co/auth/v1/admin/generate_link' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "signup",
    "email": "user@example.com",
    "password": "password123",
    "data": {
      "full_name": "John Doe"
    },
    "redirect_to": "https://app.example.com/welcome"
  }'

# Generate recovery link
curl -X POST 'https://your-project.supabase.co/auth/v1/admin/generate_link' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "recovery",
    "email": "user@example.com"
  }'

# Response:
{
  "action_link": "http://localhost:9999/verify?token=TOKEN&type=signup&redirect_to=https://app.example.com/welcome",
  "email_otp": "123456",
  "hashed_token": "hashed-token-value",
  "verification_type": "signup",
  "redirect_to": "https://app.example.com/welcome"
}
```

### Delete User (Admin)

Permanently delete a user account.

```bash
curl -X DELETE 'https://your-project.supabase.co/auth/v1/admin/users/USER_UUID' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer SERVICE_ROLE_KEY'

# Response: 200 OK
```

### Get Public Settings

Retrieve public configuration and enabled authentication methods.

```bash
curl -X GET 'https://your-project.supabase.co/auth/v1/settings' \
  -H 'apikey: YOUR_ANON_KEY'

# Response:
{
  "external": {
    "apple": true,
    "azure": false,
    "bitbucket": false,
    "discord": true,
    "facebook": false,
    "figma": false,
    "github": true,
    "gitlab": false,
    "google": true,
    "keycloak": false,
    "linkedin": false,
    "notion": false,
    "slack": false,
    "snapchat": false,
    "spotify": false,
    "twitch": false,
    "twitter": true,
    "workos": false,
    "email": true,
    "phone": true,
    "anonymous": false
  },
  "disable_signup": false,
  "mailer_autoconfirm": false,
  "phone_autoconfirm": false,
  "saml_enabled": false,
  "mfa_enabled": true
}
```

### Health Check Endpoint

Check service health and version information.

```bash
curl -X GET 'https://your-project.supabase.co/auth/v1/health'

# Response:
{
  "version": "v2.40.1",
  "name": "GoTrue",
  "description": "GoTrue is a user registration and authentication API"
}
```

### PKCE Token Exchange

Exchange authorization code for tokens using PKCE (Proof Key for Code Exchange).

```bash
# After receiving auth_code from signup/verification with code_challenge
curl -X POST 'https://your-project.supabase.co/auth/v1/token?grant_type=pkce' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "auth_code": "009e5066-fc11-4eca-8c8c-6fd82aa263f2",
    "code_verifier": "ktPNXpR65N6JtgzQA8_5HHtH6PBSAahMNoLKRzQEa0Tzgl.vdV~b6lPk004XOd.4lR0inCde..."
  }'

# Response:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "refresh-token",
  "user": {...}
}
```

### Resend Confirmation

Resend confirmation email or SMS for pending verifications.

```bash
# Resend email confirmation
curl -X POST 'https://your-project.supabase.co/auth/v1/resend' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "signup",
    "email": "user@example.com"
  }'

# Resend SMS confirmation
curl -X POST 'https://your-project.supabase.co/auth/v1/resend' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "sms",
    "phone": "+1234567890"
  }'

# Response:
{
  "message_id": "msgid123456"
}
```

### Request Reauthentication Nonce

Request reauthentication nonce for sensitive operations like password change.

```bash
curl -X GET 'https://your-project.supabase.co/auth/v1/reauthenticate' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN'

# Response: 200 OK (nonce sent via email or SMS)

# Use nonce to update password:
curl -X PUT 'https://your-project.supabase.co/auth/v1/user' \
  -H 'apikey: YOUR_ANON_KEY' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "password": "new-secure-password",
    "nonce": "123456"
  }'
```

## Configuration and Environment Variables

### Basic Server Configuration

```bash
# .env file example

# Site URL - Base URL for your application
GOTRUE_SITE_URL=https://app.example.com

# API Configuration
API_EXTERNAL_URL=https://auth.example.com
GOTRUE_API_HOST=0.0.0.0
PORT=9999

# Database
GOTRUE_DB_DRIVER=postgres
DATABASE_URL=postgres://user:password@localhost:5432/auth_db
GOTRUE_DB_MAX_POOL_SIZE=10

# JWT Configuration
GOTRUE_JWT_SECRET=your-super-secret-jwt-token-with-at-least-32-characters-long
GOTRUE_JWT_EXP=3600
GOTRUE_JWT_AUD=authenticated
GOTRUE_JWT_ADMIN_ROLES=supabase_admin,service_role

# Allow List for Redirects
GOTRUE_URI_ALLOW_LIST=https://app.example.com,https://*.example.com

# Disable public signups (invite-only)
GOTRUE_DISABLE_SIGNUP=false

# External authentication
GOTRUE_EXTERNAL_EMAIL_ENABLED=true
GOTRUE_EXTERNAL_PHONE_ENABLED=true

# Logging
LOG_LEVEL=info
GOTRUE_LOG_FILE=/var/log/auth/auth.log
```

### Email (SMTP) Configuration

```bash
# SMTP Server Configuration
GOTRUE_SMTP_HOST=smtp.sendgrid.net
GOTRUE_SMTP_PORT=587
GOTRUE_SMTP_USER=apikey
GOTRUE_SMTP_PASS=SG.your-sendgrid-api-key
GOTRUE_SMTP_ADMIN_EMAIL=noreply@example.com
GOTRUE_SMTP_SENDER_NAME=Example App
GOTRUE_SMTP_MAX_FREQUENCY=60

# Email Templates
GOTRUE_MAILER_AUTOCONFIRM=false
GOTRUE_MAILER_OTP_EXP=3600
GOTRUE_MAILER_URLPATHS_CONFIRMATION=/auth/confirm
GOTRUE_MAILER_URLPATHS_INVITE=/auth/invite
GOTRUE_MAILER_URLPATHS_RECOVERY=/auth/reset-password
GOTRUE_MAILER_URLPATHS_EMAIL_CHANGE=/auth/confirm-email-change

# Email Subjects
GOTRUE_MAILER_SUBJECTS_CONFIRMATION=Confirm Your Email
GOTRUE_MAILER_SUBJECTS_RECOVERY=Reset Your Password
GOTRUE_MAILER_SUBJECTS_MAGIC_LINK=Your Magic Link
GOTRUE_MAILER_SUBJECTS_EMAIL_CHANGE=Confirm Email Change
GOTRUE_MAILER_SUBJECTS_INVITE=You've been invited

# Notification Emails
GOTRUE_MAILER_NOTIFICATIONS_PASSWORD_CHANGED_ENABLED=true
GOTRUE_MAILER_NOTIFICATIONS_EMAIL_CHANGED_ENABLED=true
GOTRUE_MAILER_NOTIFICATIONS_PHONE_CHANGED_ENABLED=true
GOTRUE_MAILER_NOTIFICATIONS_IDENTITY_LINKED_ENABLED=true
GOTRUE_MAILER_NOTIFICATIONS_IDENTITY_UNLINKED_ENABLED=true
GOTRUE_MAILER_NOTIFICATIONS_MFA_FACTOR_ENROLLED_ENABLED=true
GOTRUE_MAILER_NOTIFICATIONS_MFA_FACTOR_UNENROLLED_ENABLED=true

# Custom Email Templates (URLs)
GOTRUE_MAILER_TEMPLATES_CONFIRMATION=https://example.com/templates/confirmation.html
GOTRUE_MAILER_TEMPLATES_RECOVERY=https://example.com/templates/recovery.html
```

### OAuth Provider Configuration

```bash
# Google OAuth
GOTRUE_EXTERNAL_GOOGLE_ENABLED=true
GOTRUE_EXTERNAL_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOTRUE_EXTERNAL_GOOGLE_SECRET=GOCSPX-your-client-secret
GOTRUE_EXTERNAL_GOOGLE_REDIRECT_URI=https://auth.example.com/callback

# GitHub OAuth
GOTRUE_EXTERNAL_GITHUB_ENABLED=true
GOTRUE_EXTERNAL_GITHUB_CLIENT_ID=your-github-client-id
GOTRUE_EXTERNAL_GITHUB_SECRET=your-github-client-secret
GOTRUE_EXTERNAL_GITHUB_REDIRECT_URI=https://auth.example.com/callback

# Apple OAuth
GOTRUE_EXTERNAL_APPLE_ENABLED=true
GOTRUE_EXTERNAL_APPLE_CLIENT_ID=com.example.app
GOTRUE_EXTERNAL_APPLE_SECRET=generated-client-secret-jwt
GOTRUE_EXTERNAL_APPLE_REDIRECT_URI=https://auth.example.com/callback

# Azure (Microsoft) OAuth
GOTRUE_EXTERNAL_AZURE_ENABLED=true
GOTRUE_EXTERNAL_AZURE_CLIENT_ID=azure-client-id
GOTRUE_EXTERNAL_AZURE_SECRET=azure-client-secret
GOTRUE_EXTERNAL_AZURE_REDIRECT_URI=https://auth.example.com/callback
GOTRUE_EXTERNAL_AZURE_URL=https://login.microsoftonline.com/common

# Facebook OAuth
GOTRUE_EXTERNAL_FACEBOOK_ENABLED=true
GOTRUE_EXTERNAL_FACEBOOK_CLIENT_ID=your-app-id
GOTRUE_EXTERNAL_FACEBOOK_SECRET=your-app-secret
GOTRUE_EXTERNAL_FACEBOOK_REDIRECT_URI=https://auth.example.com/callback

# Discord, Slack, Notion, etc. follow same pattern:
# GOTRUE_EXTERNAL_{PROVIDER}_ENABLED=true
# GOTRUE_EXTERNAL_{PROVIDER}_CLIENT_ID=...
# GOTRUE_EXTERNAL_{PROVIDER}_SECRET=...
# GOTRUE_EXTERNAL_{PROVIDER}_REDIRECT_URI=...

# GitLab (self-hosted)
GOTRUE_EXTERNAL_GITLAB_ENABLED=true
GOTRUE_EXTERNAL_GITLAB_CLIENT_ID=gitlab-client-id
GOTRUE_EXTERNAL_GITLAB_SECRET=gitlab-client-secret
GOTRUE_EXTERNAL_GITLAB_REDIRECT_URI=https://auth.example.com/callback
GOTRUE_EXTERNAL_GITLAB_URL=https://gitlab.example.com

# Keycloak
GOTRUE_EXTERNAL_KEYCLOAK_ENABLED=true
GOTRUE_EXTERNAL_KEYCLOAK_CLIENT_ID=keycloak-client
GOTRUE_EXTERNAL_KEYCLOAK_SECRET=keycloak-secret
GOTRUE_EXTERNAL_KEYCLOAK_REDIRECT_URI=https://auth.example.com/callback
GOTRUE_EXTERNAL_KEYCLOAK_URL=https://keycloak.example.com/realms/myrealm
```

### Phone/SMS Configuration

```bash
# SMS Provider
GOTRUE_SMS_PROVIDER=twilio
GOTRUE_SMS_AUTOCONFIRM=false
GOTRUE_SMS_MAX_FREQUENCY=60
GOTRUE_SMS_OTP_EXP=300
GOTRUE_SMS_OTP_LENGTH=6

# Twilio Configuration
GOTRUE_SMS_TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GOTRUE_SMS_TWILIO_AUTH_TOKEN=your-auth-token
GOTRUE_SMS_TWILIO_MESSAGE_SERVICE_SID=MGxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# MessageBird Configuration (alternative)
# GOTRUE_SMS_PROVIDER=messagebird
# GOTRUE_SMS_MESSAGEBIRD_ACCESS_KEY=your-access-key
# GOTRUE_SMS_MESSAGEBIRD_ORIGINATOR=+1234567890

# Vonage/Nexmo Configuration (alternative)
# GOTRUE_SMS_PROVIDER=vonage
# GOTRUE_SMS_VONAGE_API_KEY=your-api-key
# GOTRUE_SMS_VONAGE_API_SECRET=your-api-secret
# GOTRUE_SMS_VONAGE_FROM=YourBrand

# TextLocal Configuration (alternative)
# GOTRUE_SMS_PROVIDER=textlocal
# GOTRUE_SMS_TEXTLOCAL_API_KEY=your-api-key
# GOTRUE_SMS_TEXTLOCAL_SENDER=TXTSENDER
```

### Security Configuration

```bash
# Password Security
GOTRUE_PASSWORD_MIN_LENGTH=8
GOTRUE_PASSWORD_REQUIRED_CHARACTERS=abcdefghijklmnopqrstuvwxyz:ABCDEFGHIJKLMNOPQRSTUVWXYZ:0123456789:!@#$%^&*

# Have I Been Pwned Integration
GOTRUE_PASSWORD_HIBP_ENABLED=true
GOTRUE_PASSWORD_HIBP_USER_AGENT=MyApp-Auth-Service
GOTRUE_PASSWORD_HIBP_BLOOM_ENABLED=true
GOTRUE_PASSWORD_HIBP_BLOOM_ITEMS=1000000
GOTRUE_PASSWORD_HIBP_BLOOM_FALSE_POSITIVES=0.01

# Refresh Token Security
GOTRUE_SECURITY_REFRESH_TOKEN_ROTATION_ENABLED=true
GOTRUE_SECURITY_REFRESH_TOKEN_REUSE_INTERVAL=10

# CAPTCHA Protection
GOTRUE_SECURITY_CAPTCHA_ENABLED=true
GOTRUE_SECURITY_CAPTCHA_PROVIDER=hcaptcha
GOTRUE_SECURITY_CAPTCHA_SECRET=0x0000000000000000000000000000000000000000
GOTRUE_SECURITY_CAPTCHA_TIMEOUT=10

# For Cloudflare Turnstile:
# GOTRUE_SECURITY_CAPTCHA_PROVIDER=turnstile
# GOTRUE_SECURITY_CAPTCHA_SECRET=your-turnstile-secret

# Reauthentication
GOTRUE_SECURITY_UPDATE_PASSWORD_REQUIRE_REAUTHENTICATION=true

# Rate Limiting
GOTRUE_RATE_LIMIT_HEADER=X-Forwarded-For
GOTRUE_RATE_LIMIT_EMAIL_SENT=3600
```

### Multi-Factor Authentication Configuration

```bash
# MFA Settings
GOTRUE_MFA_ENABLED=true
GOTRUE_MFA_CHALLENGE_EXPIRY_DURATION=300
GOTRUE_MFA_FACTOR_EXPIRY_DURATION=300
GOTRUE_MAX_VERIFIED_FACTORS=10

# WebAuthn Support
GOTRUE_MFA_WEB_AUTHN_ENROLL_ENABLED=true
GOTRUE_MFA_MFA_WEB_AUTHN_VERIFY_ENABLED=true
GOTRUE_MFA_WEB_AUTHN_RP_ID=example.com
GOTRUE_MFA_WEB_AUTHN_RP_ORIGINS=https://app.example.com,https://www.example.com
```

### Session Configuration

```bash
# Session Timeouts
GOTRUE_SESSIONS_TIMEBOX=86400
GOTRUE_SESSIONS_INACTIVITY_TIMEOUT=3600
GOTRUE_SESSIONS_SINGLE_PER_USER=false

# Anonymous Users
GOTRUE_EXTERNAL_ANONYMOUS_USERS_ENABLED=true
```

### Hook Configuration

```bash
# Custom Access Token Hook
GOTRUE_HOOK_CUSTOM_ACCESS_TOKEN_ENABLED=true
GOTRUE_HOOK_CUSTOM_ACCESS_TOKEN_URI=https://api.example.com/hooks/access-token
GOTRUE_HOOK_CUSTOM_ACCESS_TOKEN_SECRETS=webhook-secret-key

# After User Created Hook (v2.181.0+)
GOTRUE_HOOK_AFTER_USER_CREATED_ENABLED=true
GOTRUE_HOOK_AFTER_USER_CREATED_URI=https://api.example.com/hooks/after-user-created
GOTRUE_HOOK_AFTER_USER_CREATED_SECRETS=webhook-secret-key

# Custom SMS Provider Hook
GOTRUE_HOOK_CUSTOM_SMS_PROVIDER_ENABLED=true
GOTRUE_HOOK_CUSTOM_SMS_PROVIDER_URI=https://api.example.com/hooks/sms
GOTRUE_HOOK_CUSTOM_SMS_PROVIDER_SECRETS=webhook-secret-key

# Email Send Hook
GOTRUE_HOOK_SEND_EMAIL_ENABLED=true
GOTRUE_HOOK_SEND_EMAIL_URI=https://api.example.com/hooks/email
GOTRUE_HOOK_SEND_EMAIL_SECRETS=webhook-secret-key

# MFA Verification Attempt Hook
GOTRUE_HOOK_MFA_VERIFICATION_ATTEMPT_ENABLED=true
GOTRUE_HOOK_MFA_VERIFICATION_ATTEMPT_URI=https://api.example.com/hooks/mfa
GOTRUE_HOOK_MFA_VERIFICATION_ATTEMPT_SECRETS=webhook-secret-key

# Password Verification Attempt Hook
GOTRUE_HOOK_PASSWORD_VERIFICATION_ATTEMPT_ENABLED=true
GOTRUE_HOOK_PASSWORD_VERIFICATION_ATTEMPT_URI=https://api.example.com/hooks/password
GOTRUE_HOOK_PASSWORD_VERIFICATION_ATTEMPT_SECRETS=webhook-secret-key
```

### Observability Configuration

```bash
# Tracing
GOTRUE_TRACING_ENABLED=true
GOTRUE_TRACING_EXPORTER=opentelemetry

# OpenTelemetry Configuration
OTEL_SERVICE_NAME=auth-service
OTEL_EXPORTER_OTLP_PROTOCOL=grpc
OTEL_EXPORTER_OTLP_ENDPOINT=https://api.honeycomb.io:443
OTEL_EXPORTER_OTLP_HEADERS=x-honeycomb-team=your-api-key,x-honeycomb-dataset=auth

# Metrics
GOTRUE_METRICS_ENABLED=true
GOTRUE_METRICS_EXPORTER=prometheus
OTEL_EXPORTER_PROMETHEUS_HOST=0.0.0.0
OTEL_EXPORTER_PROMETHEUS_PORT=9100

# Custom Resource Attributes
OTEL_RESOURCE_ATTRIBUTES=environment=production,region=us-east-1

# Debug Mode
DEBUG=true
```

### SAML SSO Configuration

```bash
# SAML Settings (Experimental)
GOTRUE_SAML_ENABLED=true
GOTRUE_SAML_PRIVATE_KEY=/path/to/private-key.pem
GOTRUE_SAML_SIGNING_CERT=/path/to/signing-cert.pem
```

### OAuth Server Configuration (Experimental)

```bash
# Enable OAuth Server Mode (v2.180.0+, OpenID Connect support added in v2.183.0)
# Allows Supabase Auth to act as an OAuth 2.1 and OpenID Connect identity provider
GOTRUE_OAUTH_SERVER_ENABLED=true

# OAuth Server Settings
GOTRUE_OAUTH_SERVER_DEFAULT_TOKEN_EXPIRES_IN=3600
GOTRUE_OAUTH_SERVER_DEFAULT_REFRESH_TOKEN_EXPIRES_IN=2592000

# OAuth clients can be registered via the admin API
# This enables other applications to use your Auth instance
# for OAuth 2.1 and OpenID Connect authentication with PKCE support
# Includes authorization list and revoke endpoints (v2.182.0+)
```

### Database Migration

```bash
# Run migrations on startup
./auth migrate

# Docker migration
docker run --rm supabase/auth:latest gotrue migrate

# Environment-specific migration
DATABASE_URL=postgres://user:pass@host:5432/db ./auth migrate
```

## Use Cases and Integration Patterns

Supabase Auth serves as a complete authentication backend for modern applications, handling everything from basic email/password authentication to complex multi-factor flows. The most common use case is building a secure authentication system for web and mobile applications without managing the complexity of user registration, password hashing, email verification, and session management. Developers integrate Supabase Auth with their frontend applications using REST API calls, receiving JWT tokens that can be validated by backend services or used with PostgREST for automatic Row Level Security enforcement.

For enterprise applications, Supabase Auth provides advanced integration patterns including OAuth 2.1 as both a client (connecting to providers like Google, GitHub, Microsoft) and as a server (allowing your app to act as an identity provider for other services through the experimental OAuth Server mode). The webhook system enables customization of critical flows: the custom access token hook allows injecting additional claims based on external data sources, the after-user-created hook enables post-registration workflows, the custom SMS provider hook enables using proprietary messaging systems, and the email send hook allows routing authentication emails through custom delivery infrastructure. Multi-factor authentication can be enforced at the application level by checking the AAL (Authenticator Assurance Level) claim in JWT tokens, requiring AAL2 for sensitive operations like financial transactions or administrative actions. MFA supports three factor types: TOTP authenticator apps, phone-based SMS codes, and WebAuthn (passkeys/security keys) for hardware-backed authentication. The refresh token rotation with automatic revocation on reuse detection provides robust security against token theft, while session timeboxing and inactivity timeouts ensure sessions don't remain valid indefinitely. Users can be notified via email about critical account changes including password changes, email modifications, phone number updates, identity linking/unlinking, and MFA factor enrollment/unenrollment. For microservices architectures, the service role key allows backend services to perform administrative operations like creating users programmatically or fetching user data without going through the standard authentication flow, enabling seamless integration with existing systems while maintaining security boundaries.
