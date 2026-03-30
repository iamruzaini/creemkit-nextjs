### Install Postgres.js via npm

Source: https://supabase.com/docs/guides/database/postgres-js

Install the Postgres.js package and its dependencies using npm. This is the first step to set up Postgres.js in your Node.js or Deno project.

```shell
npm i postgres
```

--------------------------------

### Install Supabase Client Libraries

Source: https://supabase.com/docs/guides/realtime/getting_started

Install the necessary Supabase client libraries for your specific platform. This step is required to interact with Supabase services like Realtime, Database, and Auth.

```bash
npm install @supabase/supabase-js
```

```bash
flutter pub add supabase_flutter
```

```swift
let package = Package(
    // ...
    dependencies: [
        // ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        ),
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                ),
            ]
        )
    ]
)
```

```bash
pip install supabase
```

```bash
conda install -c conda-forge supabase
```

--------------------------------

### Scaffold TanStack Start App and Install Dependencies

Source: https://supabase.com/docs/guides/getting-started/quickstarts/tanstack

Commands to initialize a new TanStack Start project using the official CLI and install the Supabase JavaScript client library.

```bash
npm create @tanstack/start@latest my-app -- --package-manager npm --toolchain biome
cd my-app && npm install @supabase/supabase-js
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/gte

Install the Supabase C# package from NuGet and initialize a new client with your project URL and public key from the admin panel.

```APIDOC
## Installation

### Method
NuGet Package Installation

### Installation Command
```
dotnet add package supabase
```

## Client Initialization

### Description
Initialize a new Supabase client with your project credentials and options.

### Method
Client Constructor

### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase public key from the admin panel
- **options** (SupabaseOptions) - Optional - Configuration options for the client

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Notes
- Supabase is heavily dependent on Models deriving from `BaseModel`
- Use `Table`, `PrimaryKey`, and `Column` attributes to map C# properties to database columns
- All models must be specified to interact with the API
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/select

Install the Supabase C# package from NuGet and initialize a new client with your project credentials and configuration options.

```APIDOC
## Installation and Client Initialization

### Description
Install the Supabase C# package and initialize a client instance for interacting with your Supabase project.

### Installation via NuGet
```
dotnet add package supabase
```

### Initialization

#### Method
Client Constructor

#### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase project public API key
- **options** (SupabaseOptions) - Optional - Configuration options for the client

#### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Notes
- Models must derive from `BaseModel` to interact with the API
- Use `Table`, `PrimaryKey`, and `Column` attributes to specify custom names for classes and properties
```

--------------------------------

### Install and Generate Prisma Client

Source: https://supabase.com/docs/guides/database/prisma

Installs the `@prisma/client` package and then runs `prisma generate` to create the Prisma Client based on the `schema.prisma` file. This client is essential for interacting with the database from application code.

```bash
npm install @prisma/client
npx prisma generate
```

```bash
pnpm install @prisma/client
pnpx prisma generate
```

```bash
yarn add @prisma/client
npx prisma generate
```

```bash
bun install @prisma/client
bunx prisma generate
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/python/delete

Install the Supabase Python client library via PyPI and initialize a new Supabase client with your project credentials.

```APIDOC
## Installation

### Description
Install and initialize the Supabase Python client library for your project.

### Installation Method
PyPI (Python > 3.8)

### Installation Command
```
pip install supabase
```

### Initialization

#### Method
Function: `create_client()`

#### Parameters
- **supabase_url** (string) - Required - The unique Supabase URL from your project dashboard
- **supabase_key** (string) - Required - The unique Supabase Key from your project dashboard
- **options** (ClientOptions) - Optional - Options to change Auth behaviors

#### Request Example
```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

#### Response
Returns a `Client` object that serves as the entrypoint to all Supabase functionality.
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/python/auth-refreshsession

Install the supabase-py package via PyPI and initialize a Supabase client with your project credentials. The client serves as the main entry point for all Supabase functionality.

```APIDOC
## Installation and Client Initialization

### Description
Install the Supabase Python library and create a client instance to interact with your Supabase project.

### Installation
```bash
pip install supabase
```
Requires Python > 3.8

### Initialization Method
`create_client(supabase_url, supabase_key, options=None)`

### Parameters
- **supabase_url** (string) - Required - The unique Supabase URL from your project dashboard
- **supabase_key** (string) - Required - The unique Supabase Key from your project dashboard
- **options** (ClientOptions) - Optional - Options to customize Auth behaviors

### Request Example
```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

### Response
Returns a `Client` object that provides access to all Supabase services including database operations, authentication, and file management.
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/using-modifiers

Install the Supabase C# package from NuGet and initialize the client with your project credentials. The library requires models to derive from BaseModel for API interactions.

```APIDOC
## Installation and Client Initialization

### Description
Set up the Supabase C# client library by installing the NuGet package and initializing a new client instance with your project URL and public API key.

### Installation
Install via NuGet Package Manager:
```
dotnet add package supabase
```

### Initialization

#### Method
Initialize with Standard Dependency Injection

#### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase public API key from the admin panel
- **options** (SupabaseOptions) - Optional - Configuration options including AutoConnectRealtime

#### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Important Notes
- Models must derive from `BaseModel` to interact with the API
- Use `Table`, `PrimaryKey`, and `Column` attributes to map C# property names to database column names
- The library is maintained by the Supabase community, not an official library
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/storage-from-remove

Install the Supabase C# package from NuGet and initialize a client with your project credentials. The library requires models to derive from BaseModel to interact with the API.

```APIDOC
## Installation and Client Initialization

### Installation
Install the Supabase package from NuGet:
```bash
dotnet add package supabase
```

### Initialization
Initialize a new Supabase client with your project URL and public key:

```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Model Definition
Define models inheriting from BaseModel and use attributes to map to database structure:

```csharp
[Table("cities")]
class City : BaseModel
{
    [PrimaryKey("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("country_id")]
    public int CountryId { get; set; }
}
```

### Attributes
- **Table** - Specifies the database table name
- **PrimaryKey** - Marks the primary key column
- **Column** - Maps property to database column name
```

--------------------------------

### Supabase CLI: Basic Start Command Execution

Source: https://supabase.com/docs/reference/cli/supabase-config-push

This example demonstrates the simplest way to start the Supabase local development stack, initiating all default services without any exclusions or health check overrides.

```bash
supabase start
```

--------------------------------

### Initialize Prisma Project

Source: https://supabase.com/docs/guides/database/prisma

Commands to set up a new Prisma project using different package managers including dependency installation and Prisma initialization.

```bash
mkdir hello-prisma
cd hello-prisma

npm init -y
npm install prisma typescript ts-node @types/node --save-dev
npx tsc --init
npx prisma init
```

```bash
pnpm init -y
pnpm install prisma typescript ts-node @types/node --save-dev
pnpx tsc --init
pnpx prisma init
```

```bash
yarn init -y
yarn add prisma typescript ts-node @types/node --save-dev
npx tsc --init
npx prisma init
```

```bash
bun init -y
bun install prisma typescript ts-node @types/node --save-dev
bunx tsc --init
bunx prisma init
```

--------------------------------

### Initialize SvelteKit Application using Terminal

Source: https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit

Uses the 'sv' create command to scaffold a new SvelteKit project directory named 'my-app'.

```bash
npx sv create my-app
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/textsearch

Install the Supabase C# package from NuGet and initialize a new client with your project URL and API key. Configuration through SupabaseOptions allows customization of client behavior.

```APIDOC
## Installation and Client Initialization

### Description
Install the Supabase NuGet package and initialize a client instance with your project credentials and options.

### Installation
Install from NuGet package manager:
```
dotnet add package supabase
```

### Client Initialization
Initialize the Supabase client with project URL, API key, and optional configuration:

### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase public API key from the admin panel
- **options** (SupabaseOptions) - Optional - Client configuration options

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### SupabaseOptions
- **AutoConnectRealtime** (bool) - Optional - Automatically establish real-time connection on initialization
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/python/update

Install the supabase-py package via pip and initialize a new Supabase client with your project credentials. The client serves as the main entry point for all Supabase functionality.

```APIDOC
## Installation and Client Initialization

### Description
Install the Supabase Python library and create a client instance to interact with your Supabase project.

### Installation
```bash
pip install supabase
```
Requires Python > 3.8

### Initialization

#### Method
Factory function

#### Function
`create_client(supabase_url, supabase_key, options=None)`

#### Parameters
- **supabase_url** (string) - Required - The unique Supabase URL from your project dashboard
- **supabase_key** (string) - Required - The unique Supabase Key from your project dashboard
- **options** (ClientOptions) - Optional - Configuration options to customize Auth behaviors

#### Request Example
```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

#### Response
Returns a `Client` instance ready for database operations, authentication, and file management.
```

--------------------------------

### Initialize Supabase Client

Source: https://supabase.com/docs/guides/realtime/getting_started

Configure and initialize the Supabase client using your project URL and API key. This setup allows your application to authenticate and communicate with your Supabase backend.

```ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://<project>.supabase.co', '<anon_key or sb_publishable_key>')
```

```dart
import 'package:supabase_flutter/supabase_flutter.dart';

void main() async {
  await Supabase.initialize(
    url: 'https://<project>.supabase.co',
    anonKey: '<anon_key or sb_publishable_key>',
  );
  runApp(MyApp());
}

final supabase = Supabase.instance.client;
```

```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://<project>.supabase.co")!,
  supabaseKey: "<anon_key or sb_publishable_key>"
)
```

```python
from supabase import create_client, Client

url: str = "https://<project>.supabase.co"
key: str = "<anon_key or sb_publishable_key>"
supabase: Client = create_client(url, key)
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/python/auth-reauthentication

Install the supabase-py package via PyPI and initialize a Supabase client with your project credentials. The client serves as the entry point for all Supabase functionality.

```APIDOC
## Installation and Client Initialization

### Description
Install supabase-py via PyPI and create a Supabase client instance to interact with your Postgres database and Supabase services.

### Installation
```
pip install supabase
```

### Method
Python Package Installation

### Requirements
- Python > 3.8

### Initialization: create_client()

### Parameters
#### Required Parameters
- **supabase_url** (string) - Required - The unique Supabase URL from your project dashboard
- **supabase_key** (string) - Required - The unique Supabase Key from your project dashboard

#### Optional Parameters
- **options** (ClientOptions) - Optional - Options to customize Auth behaviors

### Request Example
```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

### Response
#### Success Response
- **supabase** (Client) - Initialized Supabase client instance ready for database operations
```

--------------------------------

### Client Setup: Install Supabase Client

Source: https://supabase.com/docs/reference/csharp/auth-signout

Instructions on how to install the Supabase C# client library into your .NET project via NuGet package manager.

```APIDOC
## Client Setup: Install Supabase Client

### Description
This section describes how to install the Supabase C# client library into your .NET project using NuGet. This is a prerequisite for using any of the Supabase client functionalities.

### Installation Method
NuGet Package Manager

### Command
```
dotnet add package supabase
```
```

--------------------------------

### Start or Restart Local Supabase Instance (Bash)

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

These bash commands are used to apply configuration changes to your local Supabase instance. Running `supabase start` initializes the services, while `supabase stop && supabase start` ensures a clean restart, picking up any updates made to the `config.toml` file. This is crucial after modifying OAuth server settings.

```bash
supabase start
# or if already running:
supabase stop && supabase start
```

--------------------------------

### Setup Python Environment and Install Dependencies

Source: https://supabase.com/docs/guides/getting-started/quickstarts/flask

Commands to initialize a project directory, create a Python virtual environment, and install the necessary packages including Flask, the Supabase client, and python-dotenv.

```bash
mkdir my-app && cd my-app
python3 -m venv venv
source venv/bin/activate
pip install flask supabase python-dotenv
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/storage-getbucket

Install the Supabase C# package from NuGet and initialize a new client with your project URL and public API key. The client requires models derived from BaseModel to interact with the API.

```APIDOC
## SETUP Installation and Initialization

### Description
Install and initialize the Supabase C# client library for database and API interactions.

### Installation
Install from NuGet package manager:
```
dotnet add package supabase
```

### Initialization
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Configuration
- **url** (string) - Required - Your Supabase project URL from admin panel
- **key** (string) - Required - Your Supabase public API key from admin panel
- **AutoConnectRealtime** (bool) - Optional - Enable automatic real-time connection

### Requirements
- Models must derive from `BaseModel`
- Use `Table`, `PrimaryKey`, and `Column` attributes to map C# properties to database schema
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/python/auth-resetpasswordforemail

Install the Supabase Python client library via PyPI and initialize a new Supabase client with your project credentials. The client serves as the main entrypoint for all Supabase functionality.

```APIDOC
## Installation and Client Initialization

### Description
Install supabase-py and create a Supabase client instance to interact with your Supabase project.

### Installation
```bash
pip install supabase
```

Requires Python > 3.8

### Method
Client Initialization via `create_client()`

### Parameters
- **supabase_url** (string) - Required - The unique Supabase URL from your project dashboard
- **supabase_key** (string) - Required - The unique Supabase Key from your project dashboard
- **options** (ClientOptions) - Optional - Options to change Auth behaviors

### Request Example
```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

### Response
Returns a `Client` object that provides access to all Supabase services including database operations, authentication, and file management.
```

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/python/using-modifiers

Install the supabase-py package via PyPI and initialize a new Supabase client with your project credentials. The client serves as the main entry point for all Supabase functionality.

```APIDOC
## Installation and Client Initialization

### Description
Install the Supabase Python library and create a client instance to interact with your Supabase project.

### Installation
```bash
pip install supabase
```
Requires Python > 3.8

### Initialization Method
`create_client(supabase_url, supabase_key, options=None)`

### Parameters
- **supabase_url** (string) - Required - The unique Supabase URL from your project dashboard
- **supabase_key** (string) - Required - The unique Supabase API key from your project dashboard
- **options** (ClientOptions) - Optional - Configuration options to customize Auth behaviors

### Request Example
```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

### Response
Returns a `Client` instance that provides access to all Supabase services including database operations, authentication, and file management.
```

--------------------------------

### Configure Supabase Environment Variables

Source: https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit

Sets up the necessary environment variables in a .env file to store the Supabase project URL and public API key.

```text
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

--------------------------------

### Start local Supabase services and serve Edge Function

Source: https://supabase.com/docs/guides/functions/quickstart

Starts all local Supabase services, including the database and storage, and then serves the 'hello-world' Edge Function locally. This allows for testing the function in a local development environment with hot reloading enabled, facilitating rapid iteration.

```bash
supabase start  # Start all Supabase services
supabase functions serve hello-world
```

--------------------------------

### Install and Start Roboflow Inference Server

Source: https://supabase.com/docs/guides/ai/integrations/roboflow

This command installs the necessary Python packages for Roboflow Inference (inference, inference-cli, inference-sdk) and then starts the local inference server. Docker must be installed and running for this to work. The server will be available at `http://localhost:9001`.

```bash
pip install inference inference-cli inference-sdk && inference server start
```

--------------------------------

### Initialize Supabase Client in SvelteKit

Source: https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit

Creates a shared Supabase client instance using environment variables. This client is used to interact with Supabase services throughout the app.

```javascript
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY)
```

```typescript
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY)
```

--------------------------------

### Installation Methods

Source: https://supabase.com/docs/reference/javascript/delete

Install @supabase/supabase-js using npm, yarn, pnpm, CDN, or JSR for Deno runtime. Multiple installation options are available depending on your project setup and environment.

```APIDOC
## Installation

### NPM Package Installation

**Description**: Install @supabase/supabase-js via npm package manager

**Command**:
```
npm install @supabase/supabase-js
```

### CDN Installation

**Description**: Install @supabase/supabase-js via CDN links for browser usage

**Options**:
```
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
```

Or:
```
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
```

### Deno Runtime Installation

**Description**: Use @supabase/supabase-js in Deno runtime via JSR

**Import**:
```
import { createClient } from 'npm:@supabase/supabase-js@2'
```
```

--------------------------------

### Installation Methods

Source: https://supabase.com/docs/reference/javascript/auth-signout

Install @supabase/supabase-js via npm, CDN, or JSR for Deno runtime environments. Multiple installation options are available depending on your project setup and environment.

```APIDOC
## Installation Methods

### NPM Installation
Install @supabase/supabase-js via npm package manager.

```bash
npm install @supabase/supabase-js
```

### CDN Installation
Include @supabase/supabase-js directly in your HTML via CDN links.

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<!-- or -->
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
```

### Deno Runtime Installation
Import @supabase/supabase-js in Deno via JSR.

```typescript
import { createClient } from 'npm:@supabase/supabase-js@2'
```
```

--------------------------------

### Initialize Supabase with Interactive Mode

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-blocking

Start Supabase initialization with interactive mode enabled to configure IDE settings during setup. This provides a guided configuration experience for local development.

```bash
supabase init --interactive
```

--------------------------------

### Refresh Token Flow - Implementation Guide

Source: https://supabase.com/docs/guides/auth/oauth-server/oauth-flows

Guide for implementing the refresh token flow in client applications. Includes JavaScript examples for both public and confidential OAuth clients, and best practices for when to refresh access tokens.

```APIDOC
## Refresh Token Flow

### Description
Refresh tokens allow clients to obtain new access tokens without requiring the user to re-authenticate. This guide covers when to refresh and how to implement refresh logic in your application.

### When to Refresh

Clients should refresh access tokens when:
- The access token is expired (check the `exp` claim)
- The access token is about to expire (proactive refresh)
- An API call returns a 401 Unauthorized error

### Implementation - Public Clients

```javascript
// Public clients (token_endpoint_auth_method: none)
async function refreshAccessToken(refreshToken) {
  const response = await fetch(`https://<project-ref>.supabase.co/auth/v1/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: '<client-id>',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to refresh token')
  }

  return await response.json()
}
```

### Implementation - Confidential Clients (Basic Auth)

```javascript
// Confidential clients (token_endpoint_auth_method: client_secret_basic)
async function refreshAccessTokenConfidential(refreshToken) {
  const response = await fetch(`https://<project-ref>.supabase.co/auth/v1/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa('<client-id>:<client-secret>'),
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to refresh token')
  }

  return await response.json()
}
```

### Important Notes
- Refresh tokens may be rotated; always update your stored refresh token when a new one is provided
- Store refresh tokens securely (e.g., in secure HTTP-only cookies or secure storage)
- Implement error handling for failed refresh attempts
```

--------------------------------

### Start Local Database - Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-functions-serve

Starts the local Supabase database instance. Supports optional restoration from a logical backup file using the --from-backup flag to initialize the database with existing data.

```bash
supabase db start [flags]
```

--------------------------------

### Start Supabase Local Development Stack

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-replication-slots

The `supabase start` command initializes and runs the local Supabase development stack. It requires a `supabase/config.toml` file, created via `supabase init`, in the current working directory. Users can exclude specific service containers using the `-x` flag and ignore health check errors with `--ignore-health-check`. It's recommended to have at least 7GB of RAM for all services.

```bash
supabase start [flags]
```

```bash
supabase start
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/python/auth-unlinkidentity

Install the Supabase Python client library using pip. Requires Python version 3.8 or higher. This is the first step to get started with supabase-py.

```APIDOC
## Installation

### Description
Install the Supabase Python client library via pip package manager.

### Command
```bash
pip install supabase
```

### Requirements
- Python > 3.8

### Package
- **supabase-py** - Official Supabase Python client library
```

--------------------------------

### Initialize an existing project with Supabase CLI

Source: https://supabase.com/docs/guides/functions/quickstart

Navigates to an existing project directory and initializes Supabase if it hasn't been configured already. This ensures the project has the required `supabase` folder and `config.toml` for local development, allowing it to interact with Supabase services.

```bash
cd your-existing-project
supabase init # Initialize Supabase, if you haven't already
```

--------------------------------

### Installation - Add Supabase Flutter Package

Source: https://supabase.com/docs/reference/dart/order

Install the Supabase Flutter package from pub.dev to get started with Supabase in your Flutter application. This command adds the supabase_flutter dependency to your project.

```APIDOC
## Installation

### Description
Install the Supabase Flutter package from pub.dev to integrate Supabase services into your Flutter application.

### Command
```bash
flutter pub add supabase_flutter
```

### Requirements
- Flutter SDK installed
- Active Flutter project
- pub.dev access

### Package Details
- **Package Name**: supabase_flutter
- **Current Version**: v2.0.0 or higher
- **Repository**: pub.dev

### Next Steps
After installation, initialize the Supabase client in your main.dart file with your project credentials.
```

--------------------------------

### Installation - Flutter Package Setup

Source: https://supabase.com/docs/reference/dart/auth-getuser

Install the supabase_flutter package from pub.dev for Flutter projects. This is the first step to integrate Supabase into your Flutter application.

```APIDOC
## Installation - Flutter Package

### Description
Install the Supabase Flutter package from pub.dev to enable Supabase functionality in your Flutter project.

### Package Name
supabase_flutter

### Installation Command
```
flutter pub add supabase_flutter
```

### Version Requirement
- **Version**: ^2.0.0 or higher
- **Required**: Yes

### Supported Platforms
- Flutter applications
- Non-Flutter Dart projects (use supabase package)

### Installation via pubspec.yaml
```yaml
dependencies:
  supabase_flutter: ^2.0.0
```

### Notes
- For non-Flutter Dart projects, use the `supabase` package instead
- Ensure your Flutter environment is properly configured before installation
```

--------------------------------

### Execute Parameterized SQL Query with Postgres.js

Source: https://supabase.com/docs/guides/database/postgres-js

Execute a parameterized SQL query using Postgres.js template literals to safely query the database. The example retrieves users above a specified age, with parameters automatically escaped to prevent SQL injection. Returns an array of result objects.

```typescript
import sql from './db.js'

async function getUsersOver(age) {
  const users = await sql`
    select name, age
    from users
    where age > ${ age }
  `
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return users
}
```

--------------------------------

### OAuth Client Registration Response Format

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Example of the JSON response returned by the Supabase Auth server upon successful client registration, containing the client_id and client_secret.

```json
{
  "client_id": "9a8b7c6d-5e4f-3a2b-1c0d-9e8f7a6b5c4d",
  "client_secret": "verysecret-1234567890abcdef...",
  "name": "My Third-Party App",
  "redirect_uris": ["https://my-app.com/auth/callback", "https://my-app.com/auth/silent-callback"],
  "client_type": "confidential",
  "token_endpoint_auth_method": "client_secret_basic",
  "created_at": "2025-01-15T10:30:00.000Z"
}
```

--------------------------------

### Create Migration Directory for Prisma

Source: https://supabase.com/docs/guides/database/prisma

Creates a new directory `prisma/migrations/0_init_supabase` to store a new Prisma migration file. The `-p` flag ensures that parent directories are created if they don't already exist.

```bash
mkdir -p prisma/migrations/0_init_supabase
```

--------------------------------

### supabase functions serve

Source: https://supabase.com/docs/reference/cli/supabase-snippets-list

Serve all Functions locally. `supabase functions serve` command includes additional flags to assist developers in debugging Edge Functions via the v8 inspector protocol, allowing for debugging via Chrome DevTools, VS Code, and IntelliJ IDEA for example. Refer to the docs guide for setup instructions.

```APIDOC
## CLI Command: supabase functions serve

### Description
Serve all Functions locally. `supabase functions serve` command includes additional flags to assist developers in debugging Edge Functions via the v8 inspector protocol, allowing for debugging via Chrome DevTools, VS Code, and IntelliJ IDEA for example. Refer to the docs guide for setup instructions.

### Method
CLI Command: supabase functions serve

### Endpoint
supabase functions serve [flags]

### Parameters
#### Query Parameters
- **--env-file** (string) - Optional - Path to an env file to be populated to the Function environment.
- **--import-map** (string) - Optional - Path to import map file.
- **--inspect** (boolean) - Optional - Alias of --inspect-mode brk.
- **--inspect-main** (boolean) - Optional - Allow inspecting the main worker.
- **--inspect-mode** (string) - Optional - Activate inspector capability for debugging. (Values: `run | brk | wait`)
- **--no-verify-jwt** (boolean) - Optional - Disable JWT verification for the Function.

### Request Example
```
supabase functions serve --inspect-mode brk --env-file .env.local
```
```

--------------------------------

### Create Example Table and Data for Testing Explain

Source: https://supabase.com/docs/guides/api/rest/debugging-performance

SQL commands to create an 'instruments' table and populate it with sample data to demonstrate query planning and performance analysis.

```sql
create table instruments (
  id int8 primary key,
  name text
);

insert into books
  (id, name)
values
  (1, 'violin'),
  (2, 'viola'),
  (3, 'cello');
```

--------------------------------

### Manage Read Replicas using Supabase Management API (Bash)

Source: https://supabase.com/docs/guides/platform/read-replicas/getting-started

This snippet demonstrates how to programmatically create and delete read replicas using cURL and the Supabase Management API. It requires a project reference and a personal access token to authenticate requests for regional setup or removal via database identifiers.

```bash
# Get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

# Create a new Read Replica
curl -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/read-replicas/setup" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "region": "us-east-1"
  }'

# Delete a Read Replica
curl -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/read-replicas/remove" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "database_identifier": "abcdefghijklmnopqrst"
  }'
```

--------------------------------

### Generate Bash Autocompletion for Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-config-push

This command generates the autocompletion script for the Bash shell. It requires the 'bash-completion' package to be installed. Instructions are provided for loading completions in the current session and for permanent setup on both Linux and macOS systems. The command itself does not list specific flags in the usage example provided.

```bash
source <(supabase completion bash)
```

```bash
supabase completion bash > /etc/bash_completion.d/supabase
```

```bash
supabase completion bash > $(brew --prefix)/etc/bash_completion.d/supabase
```

```bash
supabase completion bash
```

--------------------------------

### Initialize and start local Supabase environment

Source: https://supabase.com/docs/guides/ai/examples/mixpeek-video-search

Use the Supabase CLI to initialize the project configuration and spin up a local development stack including the database and API gateway.

```shell
supabase init
supabase start
```

--------------------------------

### Start Supabase Local Development Stack

Source: https://supabase.com/docs/reference/cli/supabase-network-bans

Starts the Supabase local development stack with all service containers. Requires supabase/config.toml to exist in the current working directory. Containers can be excluded using the -x flag, and health checks are automatically performed. Recommended to have at least 7GB of RAM.

```bash
supabase start
```

```bash
supabase start -x gotrue,imgproxy
```

```bash
supabase start --ignore-health-check
```

--------------------------------

### Initialize RedwoodJS App with `create redwood-app`

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs

This command initializes a new RedwoodJS application with the specified name. It sets up the basic project structure and installs necessary dependencies. The `cd` command then navigates into the newly created project directory.

```bash
yarn create redwood-app supabase-redwoodjs
cd supabase-redwoodjs
```

--------------------------------

### Test Prisma Client Database Connection in TypeScript

Source: https://supabase.com/docs/guides/database/prisma

Provides a TypeScript example to test the Prisma client connection and query the database. It initializes `PrismaClient`, performs a `findMany` operation on a placeholder table, logs the result, and ensures proper disconnection.

```typescript
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  //change to reference a table in your schema
  const val = await prisma..findMany({
    take: 10,
  });
  console.log(val);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  process.exit(1);
});
```

--------------------------------

### Configure pgTAP Extensions and Test Utilities

Source: https://supabase.com/docs/guides/local-development/testing/pgtap-extended

Initialize pgTAP testing environment by installing required extensions (pgtap, http, pg_tle), setting up the supabase-dbdev package manager, and installing test helpers. Includes a verification test to confirm successful setup. This setup file runs before all other tests due to its 000- naming prefix.

```sql
-- install tests utilities
-- install pgtap extension for testing
create extension if not exists pgtap with schema extensions;
/*
---------------------
---- install dbdev ----
----------------------
Requires:
  - pg_tle: https://github.com/aws/pg_tle
  - pgsql-http: https://github.com/pramsey/pgsql-http
*/
create extension if not exists http with schema extensions;
create extension if not exists pg_tle;
drop extension if exists "supabase-dbdev";
select pgtle.uninstall_extension_if_exists('supabase-dbdev');
select
    pgtle.install_extension(
        'supabase-dbdev',
        resp.contents ->> 'version',
        'PostgreSQL package manager',
        resp.contents ->> 'sql'
    )
from extensions.http(
    (
        'GET',
        'https://api.database.dev/rest/v1/'
        || 'package_versions?select=sql,version'
        || '&package_name=eq.supabase-dbdev'
        || '&order=version.desc'
        || '&limit=1',
        array[
            ('apiKey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdXB0cHBsZnZpaWZyYndtbXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxMDczNzIsImV4cCI6MTk5NTY4MzM3Mn0.z2CN0mvO2No8wSi46Gw59DFGCTJrzM0AQKsu_5k134s')::extensions.http_header
        ],
        null,
        null
    )
) x,
lateral (
    select
        ((row_to_json(x) -> 'content') #>> '{}')::json -> 0
) resp(contents);
create extension "supabase-dbdev";
select dbdev.install('supabase-dbdev');
drop extension if exists "supabase-dbdev";
create extension "supabase-dbdev";
-- Install test helpers
select dbdev.install('basejump-supabase_test_helpers');
create extension if not exists "basejump-supabase_test_helpers" version '0.0.6';

-- Verify setup with a no-op test
begin;
select plan(1);
select ok(true, 'Pre-test hook completed successfully');
select * from finish();
rollback;
```

--------------------------------

### Example SQL for manual Supabase migration

Source: https://supabase.com/docs/guides/cli/managing-environments

Provides an example of a SQL `CREATE TABLE` statement to be placed inside a manually created Supabase migration file, defining an `employees` table.

```sql
create table public.employees (
  id integer primary key generated always as identity,
  name text
);
```

--------------------------------

### Supabase CLI Commands for Headless Vector Search Setup

Source: https://supabase.com/docs/guides/ai/examples/headless-vector-search

This sequence of shell commands is used to set up a Supabase project for the headless vector search toolkit. It involves cloning the repository, linking it to a remote Supabase project, applying database migrations, configuring an OpenAI API key as a secret, and deploying necessary Edge Functions. This prepares the database schema and serverless functions required for the generative Q&A system.

```bash
git clone git@github.com:supabase/headless-vector-search.git
supabase link --project-ref XXX
supabase db push
supabase secrets set OPENAI_API_KEY=sk-xxx
supabase functions deploy --no-verify-jwt
```

--------------------------------

### supabase functions serve

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db

Serve all Functions locally. `supabase functions serve` command includes additional flags to assist developers in debugging Edge Functions via the v8 inspector protocol, allowing for debugging via Chrome DevTools, VS Code, and IntelliJ IDEA for example. Refer to the docs guide for setup instructions.

```APIDOC
## CLI Command: supabase functions serve

### Description
Serve all Functions locally. `supabase functions serve` command includes additional flags to assist developers in debugging Edge Functions via the v8 inspector protocol, allowing for debugging via Chrome DevTools, VS Code, and IntelliJ IDEA for example. Refer to the docs guide for setup instructions.

### Method
CLI Command

### Endpoint
supabase functions serve

### Parameters
#### Path Parameters
- No path parameters for this command.

#### Query Parameters
- **--env-file** (string) - Optional - Path to an env file to be populated to the Function environment.
- **--import-map** (string) - Optional - Path to import map file.
- **--inspect** (boolean) - Optional - Alias of --inspect-mode brk.
- **--inspect-main** (boolean) - Optional - Allow inspecting the main worker.
- **--inspect-mode** ([ run | brk | wait ]) - Optional - Activate inspector capability for debugging.
- **--no-verify-jwt** (boolean) - Optional - Disable JWT verification for the Function.

#### Request Body
- Not applicable for CLI commands.

### Request Example
{
  "example": "Not applicable for CLI commands"
}

### Response
#### Success Response (200)
- No specific HTTP response fields for CLI commands.

#### Response Example
{
  "example": "Not applicable for CLI commands"
}
```

--------------------------------

### GET /auth/v1/admin/oauth/clients

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Retrieves a list of all registered OAuth clients for the Supabase project. This endpoint requires administrator privileges and a secret key for authentication.

```APIDOC
## GET /auth/v1/admin/oauth/clients

### Description
This endpoint allows administrators to retrieve a list of all registered OAuth clients associated with the Supabase project. It is typically used for managing and auditing OAuth client configurations.

### Method
GET

### Endpoint
`/auth/v1/admin/oauth/clients`

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
```bash
curl 'https://<project-ref>.supabase.co/auth/v1/admin/oauth/clients' \
  -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}"
```

### Response
#### Success Response (200)
- **array of objects** (array) - An array of OAuth client objects.
  - **id** (string) - The unique identifier of the OAuth client.
  - **name** (string) - The name of the OAuth client.
  - **client_id** (string) - The public client ID.
  - **redirect_uris** (array of strings) - An array of registered redirect URIs for the client.
  - **created_at** (string) - Timestamp of client creation (ISO 8601 format).
  - **updated_at** (string) - Timestamp of last client update (ISO 8601 format).

#### Response Example
```json
[
  {
    "id": "some-uuid-1",
    "name": "My Web App",
    "client_id": "client-id-123",
    "redirect_uris": ["https://mywebapp.com/callback"],
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-01T12:00:00Z"
  },
  {
    "id": "some-uuid-2",
    "name": "Another App",
    "client_id": "client-id-456",
    "redirect_uris": ["https://anotherapp.com/auth/callback", "http://localhost:3000/callback"],
    "created_at": "2023-02-01T10:00:00Z",
    "updated_at": "2023-02-01T10:00:00Z"
  }
]
```
```

--------------------------------

### Generate Initial Prisma Migration SQL Script

Source: https://supabase.com/docs/guides/database/prisma

Generates a SQL migration script by comparing an empty database state with the current `prisma/schema.prisma` file. The output script is then redirected to `prisma/migrations/0_init_supabase/migration.sql` to initialize the database schema.

```bash
npx prisma migrate diff \
--from-empty \
--to-schema prisma/schema.prisma \
--script > prisma/migrations/0_init_supabase/migration.sql
```

```bash
pnpx prisma migrate diff \
--from-empty \
--to-schema prisma/schema.prisma \
--script > prisma/migrations/0_init_supabase/migration.sql
```

```bash
bunx prisma migrate diff \
--from-empty \
--to-schema prisma/schema.prisma \
--script > prisma/migrations/0_init_supabase/migration.sql
```

--------------------------------

### Clean Up Supabase Realtime Channel Subscriptions Across Multiple Languages

Source: https://supabase.com/docs/guides/realtime/getting_started

These examples demonstrate how to properly unsubscribe from Supabase Realtime channels in TypeScript (React), Dart (Flutter), Swift (SwiftUI), and Python. Cleaning up subscriptions is essential for freeing up resources, preventing memory leaks, and ensuring efficient application performance when a component or scope is no longer active.

```ts
// React example
import { useEffect } from 'react'

useEffect(() => {
  const channel = supabase.channel('room:123:messages')

  return () => {
    supabase.removeChannel(channel)
  }
}, [])
```

```dart
// Flutter example
class _MyWidgetState extends State {
  RealtimeChannel? _channel;

  @override
  void initState() {
    super.initState();
    _channel = supabase.channel('room:123:messages');
  }

  @override
  void dispose() {
    _channel?.unsubscribe();
    super.dispose();
  }
}
```

```swift
// SwiftUI example
struct ContentView: View {
  @State private var channel: RealtimeChannelV2?

  var body: some View {
    // Your UI here
    .onAppear {
      channel = supabase.realtimeV2.channel("room:123:messages")
    }
    .onDisappear {
      Task {
        await channel?.unsubscribe()
      }
    }
  }
}
```

```python
# Python example with context manager
class RealtimeManager:
    def __init__(self):
        self.channel = None

    def __enter__(self):
        self.channel = supabase.channel('room:123:messages')
        return self.channel

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.channel:
            self.channel.unsubscribe()

# Usage
with RealtimeManager() as channel:
    # Use channel here
    pass
```

--------------------------------

### POST - Sign Up User

Source: https://supabase.com/docs/reference/csharp/lt

Creates a new user account with email and password. Email verification may be required depending on project settings. Returns user and session information upon successful sign up.

```APIDOC
## POST - Sign Up

### Description
Creates a new user account with email and password authentication.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with email and metadata
- **session** (object|null) - Session object if email confirmation is disabled, null if enabled

### Notes
- By default, users must verify their email address before logging in
- Disable "Confirm email" in project settings to allow immediate login
- If email confirmation is enabled, session will be null
- User receives confirmation email with redirect to SITE_URL
- For existing confirmed users: returns obfuscated user object if both email and phone confirmation are enabled, otherwise returns "User already registered" error
```

--------------------------------

### explain() Method

Source: https://supabase.com/docs/reference/dart/auth-reauthentication

Generates the PostgreSQL query execution plan for debugging and performance analysis.

```APIDOC
## explain() Method

### Description
Generates the PostgreSQL query execution plan for debugging and performance analysis.

### Method
explain()

### Endpoint
/table_name.explain (Conceptual)

### Parameters
#### Request Body
- **analyze** (boolean) - Optional - If `true`, the query will be executed and the actual run time will be returned.
- **verbose** (boolean) - Optional - If `true`, the query identifier will be returned and `data` will include the output columns of the query.
- **settings** (boolean) - Optional - If `true`, include information on configuration parameters that affect query planning.
- **buffers** (boolean) - Optional - If `true`, include information on buffer usage.
- **wal** (boolean) - Optional - If `true`, include information on WAL record generation.

### Code Example
```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain();
```

### Request Example
{}

### Response
#### Success Response (200)
- **data** (string) - A string or object containing the PostgreSQL execution plan.

#### Response Example
{}
```

--------------------------------

### Initialize Python project using Poetry

Source: https://supabase.com/docs/guides/ai/examples/mixpeek-video-search

Install the Poetry package manager and create a new project directory structure for the video search application.

```shell
pip install poetry
poetry new video-search
```

--------------------------------

### Supabase CLI: Start Local Development Stack

Source: https://supabase.com/docs/reference/cli/supabase-config-push

The `supabase start` command initializes and runs the Supabase local development environment. It requires a `supabase/config.toml` file and starts all service containers by default. Users can exclude specific services using the `-x` flag or ignore health checks with `--ignore-health-check`. It is recommended to have at least 7GB of RAM.

```bash
supabase start [flags]
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp

Creates a new user account with email and password credentials. Email verification may be required depending on project settings. Returns user and session information upon successful signup.

```APIDOC
## POST /auth/signup

### Description
Creates a new user. By default, the user needs to verify their email address before logging in. To turn this off, disable Confirm email in your project.

### Method
POST

### Endpoint
/auth/signup

### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, and other user metadata
- **session** (object or null) - Session object if Confirm email is disabled, null if enabled
  - **access_token** (string) - JWT access token
  - **refresh_token** (string) - Refresh token for session renewal

#### Response Example
```json
{
  "user": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "email": "user@example.com",
    "user_metadata": {}
  },
  "session": null
}
```

### Notes
- If Confirm email is enabled, a user is returned but session is null
- If Confirm email is disabled, both user and session are returned
- Users are redirected to SITE_URL upon confirming their email
```

--------------------------------

### Initialize Project and Install Expo Image Picker

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native

Terminal commands to start the development server and install the expo-image-picker dependency required for handling profile photo uploads in an Expo environment.

```bash
npm start
npx expo install expo-image-picker
```

--------------------------------

### Installation - Flutter Package Setup

Source: https://supabase.com/docs/reference/dart/auth-signinanonymously

Install the Supabase Flutter package from pub.dev to add Supabase functionality to your Flutter application. This is the first step in integrating Supabase into your project.

```APIDOC
## Installation

### Description
Install the Supabase Flutter package from pub.dev to enable Supabase functionality in your Flutter application.

### Package
supabase_flutter

### Installation Command
```
flutter pub add supabase_flutter
```

### Requirements
- Flutter SDK installed
- pub.dev package manager

### Version
Recommended: supabase_flutter: ^2.0.0

### Supported Platforms
- Flutter applications
- Non-Flutter Dart projects (use supabase package)
```

--------------------------------

### RedwoodJS Supabase Auth Setup Output

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs

This output confirms the successful setup of Supabase authentication in the RedwoodJS project. It indicates that the `auth.js` file was written, auth configurations were added to web and GraphQL, and required packages were installed. It also provides a crucial reminder to add Supabase environment variables.

```bash
✔ Generating auth lib...
  ✔ Successfully wrote file `./api/src/lib/auth.js`
  ✔ Adding auth config to web...
  ✔ Adding auth config to GraphQL API...
  ✔ Adding required web packages...
  ✔ Installing packages...
  ✔ One more thing...

  You will need to add your Supabase URL (SUPABASE_URL), public API KEY,
  and JWT SECRET (SUPABASE_KEY, and SUPABASE_JWT_SECRET) to your .env file.
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/getchannels

Creates a new user account with email and password authentication. User email verification may be required depending on project settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. Email verification may be required based on project configuration.

### Method
POST

### Endpoint
/auth/v1/signup

### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object (may be null if email confirmation required)
  - **id** (string) - User ID
  - **email** (string) - User email
- **session** (object) - Session object (null if email confirmation enabled)
  - **access_token** (string) - JWT access token
  - **refresh_token** (string) - Refresh token

### Notes
- If **Confirm email** is enabled: user returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- User is redirected to SITE_URL after email confirmation
```

--------------------------------

### Setup Zsh Shell Completion - Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-inspect-report

Generate and configure autocompletion for the Supabase CLI in zsh shell. Provides multiple installation methods for current session and permanent setup on Linux and macOS systems.

```bash
echo "autoload -U compinit; compinit" >> ~/.zshrc
```

```bash
source <(supabase completion zsh)
```

```bash
supabase completion zsh > "${fpath[1]}/_supabase"
```

```bash
supabase completion zsh > $(brew --prefix)/share/zsh/site-functions/_supabase
```

--------------------------------

### Setup Bash Shell Completion - Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-inspect-report

Generate and configure autocompletion for the Supabase CLI in bash shell. Requires bash-completion package and provides installation methods for current session and permanent setup on Linux and macOS.

```bash
source <(supabase completion bash)
```

```bash
supabase completion bash > /etc/bash_completion.d/supabase
```

```bash
supabase completion bash > $(brew --prefix)/etc/bash_completion.d/supabase
```

--------------------------------

### Interact with Supabase 'todos' API using JavaScript and cURL

Source: https://supabase.com/docs/guides/api/creating-routes

This snippet provides examples for interacting with the 'todos' API route. The JavaScript example shows how to initialize the Supabase client and perform a SELECT operation. The cURL example demonstrates a direct HTTP GET request to the API endpoint, including the required API key headers for authentication.

```javascript
// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

// Make a request
const { data: todos, error } = await supabase.from('todos').select('*')
```

```bash
# Append /rest/v1/ to your URL, and then use the table name as the route
curl '/rest/v1/todos' \
-H "apikey: " \
-H "Authorization: Bearer "
```

--------------------------------

### Supabase Start Command - Launch Local Development Stack

Source: https://supabase.com/docs/reference/cli/supabase-db-dump

Starts all Supabase local development service containers. Requires supabase/config.toml created by supabase init. Supports excluding specific containers via -x flag and ignoring health checks with --ignore-health-check flag. Recommends minimum 7GB RAM.

```bash
supabase start [flags]
supabase start
supabase start -x gotrue,imgproxy
supabase start --ignore-health-check
```

--------------------------------

### Initialize Vue App and Install Supabase Client

Source: https://supabase.com/docs/guides/getting-started/quickstarts/vue

Commands to scaffold a new Vue project and install the official Supabase JavaScript client library.

```bash
npm init vue@latest my-app
cd my-app && npm install @supabase/supabase-js
```

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/swift/select

Provides instructions for initializing the Supabase Auth Admin client, which requires a `service_role` key and should only be used on a trusted server.

```APIDOC
## Auth Admin Client Setup

### Description
Any method under the `supabase.auth.admin` namespace requires a `service_role` key. These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the browser.

### Method
(N/A - Client Setup)

### Endpoint
(N/A - Client Setup)

### Parameters
(N/A - Client Setup)

### Request Example
(N/A - Client Setup)

### Response
(N/A - Client Setup)

### Code Example (Swift)
```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: supabaseURL,
  supabaseKey: serviceRoleKey
)

// Access auth admin api
let adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### Get All Buckets API Response Example

Source: https://supabase.com/docs/reference/self-hosting-storage/moves-an-object

Example JSON response showing a list of all storage buckets. Each bucket object includes details such as ID, name, public status, file size limit, allowed MIME types, owner, and creation/update timestamps.

```json
[
  {
    "id": "bucket2",
    "name": "bucket2",
    "public": false,
    "file_size_limit": 1000000,
    "allowed_mime_types": [
      "image/png",
      "image/jpeg"
    ],
    "owner": "4d56e902-f0a0-4662-8448-a4d9e643c142",
    "created_at": "2021-02-17T04:43:32.770206+00:00",
    "updated_at": "2021-02-17T04:43:32.770206+00:00"
  }
]
```

--------------------------------

### Initialize Supabase Client in Kotlin

Source: https://supabase.com/docs/guides/getting-started/quickstarts/kotlin

Creates a Supabase client instance with project URL and public anon key, installing the Postgrest plugin for database operations. Place this code in MainActivity.kt below imports for global access to the client.

```kotlin
import ...

val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "your_public_anon_key"
  ) {
    install(Postgrest)
}
...
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/storage-createbucket

Creates a new user account with email and password authentication. Email verification may be required depending on project settings. Returns user object and optional session based on confirmation settings.

```APIDOC
## POST /auth/signup - Create New User

### Description
Creates a new user account in the authentication system.

### Method
POST

### Endpoint
Auth.SignUp(email, password)

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, and metadata
- **session** (object or null) - Session object if email confirmation disabled, null if enabled

### Notes
- By default, users must verify their email address before logging in
- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- Users are redirected to SITE_URL after email confirmation
- For existing confirmed users: returns obfuscated user object or "User already registered" error depending on settings
```

--------------------------------

### Install Poetry Package Manager

Source: https://supabase.com/docs/guides/ai/examples/image-search-openai-clip

Install Poetry via pip to enable Python project packaging and dependency management. Poetry simplifies project setup and virtual environment handling for Python applications.

```shell
pip install poetry
```

--------------------------------

### Initialize Supabase and Create Migrations via CLI

Source: https://supabase.com/docs/guides/ai/examples/nextjs-vector-search

Commands to initialize a new Supabase project locally and generate a new migration file for database schema changes.

```bash
supabase init
supabase migration new init
```

--------------------------------

### Create Postgres Publication for All Tables in Schema

Source: https://supabase.com/docs/guides/database/replication/replication-setup

Creates a publication that tracks changes for all existing and future tables within a specific schema. This example targets the public schema and will automatically include new tables added to it.

```sql
create publication pub_all_public for tables in schema public;
```

--------------------------------

### Get Bucket Details API Response Example

Source: https://supabase.com/docs/reference/self-hosting-storage/moves-an-object

Example JSON response providing detailed information for a specific storage bucket. It includes attributes like ID, name, owner, public status, type, and creation/update timestamps.

```json
{
  "id": "lorem",
  "name": "lorem",
  "owner": "lorem",
  "owner_id": "lorem",
  "public": true,
  "type": "STANDARD",
  "created_at": "lorem",
  "updated_at": "lorem"
}
```

--------------------------------

### Supabase DB Start - Initialize Local Database

Source: https://supabase.com/docs/reference/cli/supabase-network-bans-remove

Starts the local Supabase database. Supports restoring from a logical backup file via the --from-backup flag to initialize database state.

```bash
supabase db start [flags]
```

```bash
supabase db start --from-backup <string>
```

--------------------------------

### Create SQL Test File using Bash

Source: https://supabase.com/docs/guides/database/testing

This command creates an empty file named `hello_world.test.sql` inside the `supabase/tests/database` directory. This `.sql` file will serve as the container for your database tests, which will be written using SQL and leverage the pgTAP extension.

```bash
touch ./supabase/tests/database/hello_world.test.sql
```

--------------------------------

### Install Ollama and Run Server Locally

Source: https://supabase.com/docs/guides/functions/ai-models

These commands guide you through installing the Ollama server and pulling the Mistral model. Running `ollama serve` makes the local AI inference endpoint available for integration with Supabase Edge Functions.

```bash
ollama pull mistral
```

```bash
ollama serve
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/generates-an-email-action-link

Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

### Method
GET

### Endpoint
/callback

### Parameters
#### Path Parameters
No parameters

#### Query Parameters
No parameters

#### Request Body
No request body

### Request Example
No request example

### Response
#### Success Response (302)
(Redirect response)

#### Response Example
No response example
```

--------------------------------

### Create Postgres Publication with Row Filtering

Source: https://supabase.com/docs/guides/database/replication/replication-setup

Creates publications that filter which rows to replicate using WHERE clauses. This example shows filtering for active users and recent orders based on specific conditions.

```sql
create publication pub_active_users
for table users where (status = 'active');

create publication pub_recent_orders
for table orders where (created_at > '2024-01-01');
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/passwordless-sign-in-method-for-email-or-phone

Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

### Method
GET

### Endpoint
/callback

### Response
#### Redirect Response (302)
- Redirects to the application with authentication tokens

### Response Codes
- **302** - Redirect to application with tokens
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/limit

Creates a new user account with email and password. Email confirmation may be required depending on project settings. Returns user object and session token if confirmation is disabled.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account. By default, the user needs to verify their email address before logging in. This behavior can be configured in project settings.

### Method
POST

### Endpoint
/auth/v1/signup

### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
If **Confirm email** is enabled:
- **user** (object) - User object (session is null)
- **user.id** (string) - User identifier
- **user.email** (string) - User email address
- **session** (null) - No session returned

If **Confirm email** is disabled:
- **user** (object) - User object
- **session** (object) - Authentication session with access token
- **session.access_token** (string) - JWT access token

#### Response Example
```json
{
  "user": {
    "id": "user-123",
    "email": "user@example.com"
  },
  "session": null
}
```

### Notes
- **Confirm email** determines if users need to verify their email
- If confirmed, users are redirected to SITE_URL
- For existing confirmed users: obfuscated/fake user object or "User already registered" error is returned
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/storage-from-download

Creates a new user account with email and password credentials. Email verification may be required depending on project settings. Returns user object and optionally a session token if email confirmation is disabled.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with email and password.

### Method
POST

### Endpoint
/auth/signup

### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Code Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
- **user** (object) - User object with authentication details
- **session** (object) - Session object (null if email confirmation enabled, populated if disabled)

### Notes
- By default, users must verify their email before logging in
- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- For existing confirmed users: returns obfuscated user object or "User already registered" error
- Users are redirected to SITE_URL upon email confirmation
```

--------------------------------

### Setup Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/gte

Initialize a Supabase client with service_role key to access admin authentication methods. This setup must be done on a trusted server and the service_role key must never be exposed in the browser.

```APIDOC
## Setup Auth Admin Client

### Description
Initialize a Supabase client with service_role key to access admin authentication methods.

### Configuration
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```

### Important Notes
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should be called on a trusted server
- Never expose your `service_role` key in the browser
```

--------------------------------

### CLI Command: Get SSO Configuration

Source: https://supabase.com/docs/guides/auth/sso/auth-sso-saml

Supabase CLI command to retrieve SAML 2.0 setup information for your project, including metadata URLs and endpoint configuration.

```APIDOC
## CLI: Get SSO Configuration

### Description
Retrieve SAML 2.0 setup information for your Supabase project using the Supabase CLI.

### Command
```bash
supabase sso info --project-ref <your-project>
```

### Parameters
- **--project-ref** (string) - Required - Your Supabase project reference ID

### Output
Returns configuration information including:
- EntityID
- Metadata URL
- ACS URL
- SLO URL
- NameID requirements

### Example
```bash
supabase sso info --project-ref abc123def456
```

### Usage Notes
- Alternative to manually constructing URLs
- Useful for scripting and automation
- Provides all necessary configuration for identity provider setup
- Requires Supabase CLI to be installed and authenticated
```

--------------------------------

### Initialize a new Supabase project using CLI

Source: https://supabase.com/docs/guides/functions/quickstart

Initializes a new Supabase project in the current directory, creating a `supabase` folder with configuration and an empty `functions` directory. This command sets up the necessary local structure for Supabase development, preparing it for function creation and deployment.

```bash
supabase init my-edge-functions-project
cd my-edge-functions-project
```

--------------------------------

### Supabase Start Command Response

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Shows the output after successfully starting the Supabase local development stack, including database role creation, migration application, data seeding, and confirmation of startup.

```text
Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.
```

--------------------------------

### POST /auth/v1/signup - Create a New User

Source: https://supabase.com/docs/reference/csharp/lte

Registers a new user with an email and password. Email verification might be required based on project settings, affecting the session return.

```APIDOC
## POST /auth/v1/signup - Create a New User

### Description
Creates a new user account. By default, email verification is required. If 'Confirm email' is enabled, a user object is returned, but the session will be null until the email is verified. If 'Confirm email' is disabled, both a user and a session are returned.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.

### Request Example
```json
{
  "email": "newuser@example.com",
  "password": "securePassword123"
}
```
(C# SDK usage:
```csharp
var session = await supabase.Auth.SignUp(email, password);
```)

### Response
#### Success Response (200/201)
Returns the newly created user object and, conditionally, a session object.

#### Response Example
```json
{
  "user": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "newuser@example.com",
    "email_confirmed_at": null,
    "phone_confirmed_at": null,
    "created_at": "2023-10-27T10:00:00Z",
    "updated_at": "2023-10-27T10:00:00Z"
  },
  "session": null
}
```
*(Example with 'Confirm email' enabled, session is null)*

```json
{
  "user": {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "newuser@example.com",
    "email_confirmed_at": "2023-10-27T10:00:00Z",
    "phone_confirmed_at": null,
    "created_at": "2023-10-27T10:00:00Z",
    "updated_at": "2023-10-27T10:00:00Z"
  },
  "session": {
    "access_token": "eyJ...",
    "refresh_token": "xyz...",
    "expires_in": 3600,
    "token_type": "bearer",
    "user": {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "email": "newuser@example.com",
      "aud": "authenticated"
    }
  }
}
```
*(Example with 'Confirm email' disabled, session is returned)*

#### Error Response (400)
```json
{
  "code": "400",
  "msg": "User already registered"
}
```
```

--------------------------------

### Initialize Supabase C# Client

Source: https://supabase.com/docs/reference/csharp/contains

Guide on how to initialize a new Supabase client instance with your project URL and API key. This setup includes options for automatic Realtime connection and integration with `BaseModel` for data operations.

```APIDOC
## Initialize Supabase C# Client

### Description
Initialize the Supabase C# client with your project URL and API key, configuring options like Realtime connectivity.

### Method
N/A (Initialization Step)

### Endpoint
N/A

### Parameters
N/A

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Response
N/A
```

--------------------------------

### GET /v1/projects/{ref}/custom-hostname

Source: https://supabase.com/docs/reference/api/v1-get-postgres-upgrade-status

Gets project's custom hostname configuration. This beta endpoint retrieves the current custom hostname setup including SSL validation status and ownership verification details.

```APIDOC
## GET /v1/projects/{ref}/custom-hostname

### Description
Retrieves the custom hostname configuration for a project.

### Method
GET

### Endpoint
`/v1/projects/{ref}/custom-hostname`

### Authentication
- OAuth scopes: `domains:read`
- Fine-grained token permissions: `custom_domain_read`

### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **status** (string) - Current activation status
- **custom_hostname** (string) - The custom hostname
- **data** (object) - Configuration data including SSL validation records and ownership verification
  - **result.ssl.validation_records** (array) - DNS TXT records for validation
  - **result.ownership_verification** (object) - Ownership verification details
  - **result.status** (string) - Current status of the custom hostname

#### Response Example
```json
{
  "status": "1_not_started",
  "custom_hostname": "api.example.com",
  "data": {
    "success": true,
    "result": {
      "id": "hostname_123",
      "hostname": "api.example.com",
      "ssl": {
        "status": "pending",
        "validation_records": [
          {
            "txt_name": "_acme-challenge.api.example.com",
            "txt_value": "validation_token_here"
          }
        ]
      },
      "ownership_verification": {
        "type": "CNAME",
        "name": "api.example.com",
        "value": "verify.supabase.com"
      },
      "status": "active"
    }
  }
}
```

### Response Codes
- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too Many Requests
- **500** - Internal Server Error
```

--------------------------------

### GET /auth/v1/admin/users

Source: https://supabase.com/docs/reference/swift/functions-invoke

Lists all users registered in the system. This method supports pagination (though not explicitly shown in the example).

```APIDOC
## GET /auth/v1/admin/users

### Description
Lists all users registered in the system. This method supports pagination (though not explicitly shown in the example).

### Method
GET

### Endpoint
/auth/v1/admin/users

### Parameters
No parameters shown in example, but typically supports query parameters for pagination (e.g., `page`, `per_page`).

### Request Example
```swift
let users = try await supabase.auth.admin.listUsers()
```

### Response
#### Success Response (200)
- **users** (array) - An array of user objects.

#### Response Example
```json
[
  {
    "id": "715ed5db-f090-4b8c-a067-640ecee36aa0",
    "email": "user@email.com",
    "created_at": "2023-01-01T12:00:00Z"
  },
  {
    "id": "another-user-id",
    "email": "another@example.com",
    "created_at": "2023-01-02T13:00:00Z"
  }
]
```
```

--------------------------------

### Initialize Nuxt Application

Source: https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs

Creates a new Nuxt project using the nuxi command-line tool. This sets up the basic Nuxt application structure and configuration files.

```bash
npx nuxi@latest init my-app
```

--------------------------------

### Initialize Nuxt 3 Project and Install Supabase

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-nuxt-3

Commands to create a new Nuxt 3 application using nuxi and install the Supabase module as a development dependency.

```bash
npx nuxi init nuxt-user-management

cd nuxt-user-management

npm install @nuxtjs/supabase --save-dev
```

--------------------------------

### Generate a new Supabase Edge Function with CLI

Source: https://supabase.com/docs/guides/functions/quickstart

Generates a new Edge Function named 'hello-world' within the project's `supabase/functions` directory. This command creates a new file with a basic template, providing a starting point for developing the function's logic.

```bash
supabase functions new hello-world
```

--------------------------------

### Configure Prisma DIRECT_URL Environment Variable for Supabase

Source: https://supabase.com/docs/guides/database/prisma

Defines the `DIRECT_URL` environment variable for Prisma, used for direct database connections, especially for migrations. Users need to replace placeholders like `[DB-USER]`, `[PROJECT-REF]`, and `[PRISMA-PASSWORD]` with their specific Supabase credentials.

```bash
DIRECT_URL="postgres://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:5432/postgres"
```

--------------------------------

### POST /buckets - Create a bucket

Source: https://supabase.com/docs/reference/csharp/initializing

Creates a new Storage bucket. Requires `buckets` insert permissions.

```APIDOC
## POST /buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/buckets

### Request Body
- **name** (string) - Required - Name of the bucket to create
- **public** (boolean) - Optional - Whether the bucket should be public

### Policy Permissions Required
- **buckets** - insert
- **objects** - none

### Response
#### Success Response (201)
- **id** (string) - Bucket identifier
- **name** (string) - Bucket name
- **owner** (string) - Bucket owner
- **public** (boolean) - Whether bucket is public
- **created_at** (string) - Creation timestamp
- **updated_at** (string) - Last update timestamp

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
```
```

--------------------------------

### Match String Start with Regular Expression - BigQuery SQL

Source: https://supabase.com/docs/guides/platform/advanced-log-filtering

Uses the caret (^) anchor to match patterns only at the beginning of a string. This example finds log messages that start with the word 'connection', useful for filtering events by their initial content.

```sql
-- find only messages that start with connection
regexp_contains(event_message, '^connection')
```

--------------------------------

### GET /auth/v1/admin/users

Source: https://supabase.com/docs/reference/swift/storage-getbucket

Lists all users registered in the system. Supports pagination (though not explicitly shown in the example). Requires a `service_role` key.

```APIDOC
## GET /auth/v1/admin/users

### Description
Lists all users registered in the system. Supports pagination (though not explicitly shown in the example). Requires a `service_role` key.

### Method
GET

### Endpoint
/auth/v1/admin/users

### Parameters
#### Path Parameters
- None

#### Query Parameters
- **page** (integer) - Optional - The page number for pagination.
- **perPage** (integer) - Optional - The number of users per page.

#### Request Body
- None

### Request Example
(No request body for GET)

### Response
#### Success Response (200)
- **users** (array) - An array of user objects.

#### Response Example
{
  "users": [
    {
      "id": "715ed5db-f090-4b8c-a067-640ecee36aa0",
      "email": "user1@email.com"
    },
    {
      "id": "another-user-id",
      "email": "user2@email.com"
    }
  ]
}
```

--------------------------------

### Initialize and Start Refine Development Server

Source: https://supabase.com/docs/guides/getting-started/quickstarts/refine

Commands to navigate into the project directory, open the project in VS Code, and launch the local development server. The app defaults to port 5173.

```bash
cd my-app
code .
npm run dev
```

--------------------------------

### Start Supabase self-hosting stack with Docker Compose

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-endpoint

This shell command navigates to the `docker` directory within the Supabase repository and starts the self-hosting stack using `docker compose`. It assumes the `docker-compose.yml` file has been previously configured for the BigQuery backend as per the setup instructions. This command initiates all services defined in the `docker-compose.yml` file.

```shell
# assuming you clone the supabase/supabase repo.
cd docker
docker compose -f docker-compose.yml
```

--------------------------------

### Execute an HTTP GET Request using net.http_get in PostgreSQL

Source: https://supabase.com/docs/guides/database/extensions/pg_net

This example demonstrates how to use the `net.http_get` function to send an asynchronous HTTP GET request to a specified URL. It returns a `request_id` which can be used to track the request's status or retrieve its response later.

```sql
select
    net.http_get('https://news.ycombinator.com')
    as request_id;
request_id
----------
         1
(1 row)
```

--------------------------------

### GET /v1/projects/{ref}/custom-hostname

Source: https://supabase.com/docs/reference/api/v1-oauth-authorize-project-claim

Gets project's custom hostname configuration. This beta endpoint retrieves the current custom hostname setup including SSL validation and ownership verification details. Requires domains:read OAuth scope.

```APIDOC
## GET /v1/projects/{ref}/custom-hostname

### Description
Gets project's custom hostname config.

### Method
GET

### Endpoint
`/v1/projects/{ref}/custom-hostname`

### Authentication
- OAuth scopes: `domains:read`
- Fine-grained token permissions: `custom_domain_read`

### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **status** (string) - Configuration status
- **custom_hostname** (string) - The custom hostname
- **data** (object) - Detailed configuration data
  - **success** (boolean) - Operation success status
  - **errors** (array) - List of errors if any
  - **messages** (array) - List of messages
  - **result** (object) - Result details
    - **id** (string) - Hostname ID
    - **hostname** (string) - Hostname value
    - **ssl** (object) - SSL configuration
      - **status** (string) - SSL status
      - **validation_records** (array) - DNS validation records
      - **validation_errors** (array) - Validation errors
    - **ownership_verification** (object) - Ownership verification details
    - **custom_origin_server** (string) - Origin server
    - **verification_errors** (array) - Verification errors
    - **status** (string) - Overall status

#### Response Example
```json
{
  "status": "1_not_started",
  "custom_hostname": "example.com",
  "data": {
    "success": true,
    "errors": [],
    "messages": [],
    "result": {
      "id": "hostname-123",
      "hostname": "example.com",
      "ssl": {
        "status": "pending",
        "validation_records": [
          {
            "txt_name": "_acme-challenge.example.com",
            "txt_value": "validation-token"
          }
        ],
        "validation_errors": []
      },
      "ownership_verification": {
        "type": "CNAME",
        "name": "example.com",
        "value": "verify.supabase.co"
      },
      "custom_origin_server": "origin.supabase.co",
      "verification_errors": [],
      "status": "active"
    }
  }
}
```

### Response Codes
- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too Many Requests
- **500** - Internal Server Error
```

--------------------------------

### Import dependencies and configure environment variables in Python

Source: https://supabase.com/docs/guides/ai/examples/mixpeek-video-search

Set up the main Python script by importing the required clients and loading configuration from environment variables.

```python
from supabase import create_client, Client
from mixpeek import Mixpeek
import os

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_API_KEY")
MIXPEEK_API_KEY = os.getenv("MIXPEEK_API_KEY")
```

--------------------------------

### Resolve Prisma Migration as Applied

Source: https://supabase.com/docs/guides/database/prisma

Marks a specific migration as 'applied' in the Prisma migration history table without actually running the SQL. This is useful for resolving conflicts or manually managing migration states, especially after an initial schema setup.

```bash
npx prisma migrate resolve --applied 0_init_supabase
```

```bash
pnpx prisma migrate resolve --applied 0_init_supabase
```

```bash
bunx prisma migrate resolve --applied 0_init_supabase
```

--------------------------------

### Auth Admin Setup

Source: https://supabase.com/docs/reference/javascript/storage-updatebucket

Initialize a server-side auth client with service_role key for accessing admin authentication methods. This setup is required before calling any admin auth methods.

```APIDOC
## Auth Admin Setup

### Description
Initialize a server-side authentication client using the service_role key to access admin authentication methods.

### Important Security Notes
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should only be called on a trusted server
- Never expose your `service_role` key in the browser

### Setup Code
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin
```

### Parameters
- **supabase_url** (string) - Your Supabase project URL
- **service_role_key** (string) - Your service role key for admin operations
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-api

Create a new user account with email or phone and password. Returns user object and session based on email/phone confirmation settings. Supports additional user metadata and redirect URLs.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Email or phone confirmation requirements depend on project settings.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom metadata object to store additional user information
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object (null if email confirmation is enabled)

### Notes
- If Confirm email is enabled, user is returned but session is null
- If Confirm email is disabled, both user and session are returned
- For existing confirmed users, returns obfuscated user object or 'User already registered' error
- Users are redirected to SITE_URL after email confirmation by default
```

--------------------------------

### Setup Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/initializing

Initialize a Supabase client with service_role key to access admin authentication methods. This setup should only be done on trusted servers and the service_role key must never be exposed in the browser.

```APIDOC
## Setup Auth Admin Client

### Description
Initialize a Supabase client with service_role key to access admin authentication methods.

### Important Security Notes
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should be called on a trusted server only
- Never expose your `service_role` key in the browser

### Setup Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### Create a bucket with Supabase Storage

Source: https://supabase.com/docs/guides/storage/quickstart

Create a new storage bucket using SQL, JavaScript, Dart, Swift, or Python client libraries. Buckets are distinct containers for organizing files and folders. This example creates a bucket named 'avatars' for storing profile pictures.

```sql
insert into storage.buckets
  (id, name)
values
  ('avatars', 'avatars');
```

```javascript
const { data, error } = await supabase.storage.createBucket('avatars')
```

```dart
void main() async {
  final supabase = SupabaseClient('supabaseUrl', 'supabaseKey');

  final storageResponse = await supabase
      .storage
      .createBucket('avatars');
}
```

```swift
try await supabase.storage.createBucket("avatars")
```

```python
response = supabase.storage.create_bucket('avatars')
```

--------------------------------

### Get OAuth Authorization Details in React

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Fetches authorization details from Supabase using an authorization_id parameter. This function retrieves information about the requesting OAuth client and handles loading/error states. It runs on component mount and when the authorization_id or navigate dependency changes.

```javascript
const { data, error } = await supabase.auth.oauth.getAuthorizationDetails(authorizationId)

if (error) {
  setError(error.message)
} else {
  setAuthDetails(data)
}

setLoading(false)
```

--------------------------------

### Using Explain

Source: https://supabase.com/docs/reference/dart/auth-resend

Generates the PostgreSQL execution plan for a query, useful for debugging slow queries and understanding query performance.

```APIDOC
## Using Explain

### Description
Generates the PostgreSQL execution plan for a query, useful for debugging slow queries and understanding query performance.

### Operation
`.explain()`

### Parameters
#### Method Parameters
- **analyze** (bool) - Optional - If `true`, the query will be executed and the actual run time will be returned.
- **verbose** (bool) - Optional - If `true`, the query identifier will be returned and `data` will include the output columns of the query.
- **settings** (bool) - Optional - If `true`, include information on configuration parameters that affect query planning.
- **buffers** (bool) - Optional - If `true`, include information on buffer usage.
- **wal** (bool) - Optional - If `true`, include information on WAL record generation.

### Client-Side Example
```
final data = await supabase
  .from('instruments')
  .select()
  .explain();
```

### Response
#### Success Response (200)
- **data** (object) - An object containing the PostgreSQL execution plan details.

#### Response Example
```
{
  "plan": [
    {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.00,
      "Total Cost": 1.00,
      "Plan Rows": 10,
      "Plan Width": 36
    }
  ]
}
```
```

--------------------------------

### Migrate Supabase Realtime Client from postgres_changes to Broadcast

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

This JavaScript example provides a clear guide for migrating client-side Realtime subscriptions from the deprecated `postgres_changes` event type to the recommended `broadcast` mechanism. It demonstrates how to remove the old `postgres_changes` listener and replace it with a new private broadcast channel listening for `INSERT`, `UPDATE`, and `DELETE` events.

```javascript
// ❌ Remove postgres_changes
const oldChannel = supabase.channel('changes').on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, callback)

// ✅ Replace with broadcast
const room_id = "room_id" // or any other identifier that you use in the trigger function
const newChannel = supabase.channel(`messages:${room_id}:changes`, {
  config: { private: true }
})
.on('broadcast', { event: 'INSERT' }, callback)
.on('broadcast', { event: 'DELETE' }, callback)
.on('broadcast', { event: 'UPDATE' }, callback)
```

--------------------------------

### Initiate Spotify OAuth Login (Dart)

Source: https://supabase.com/docs/guides/auth/social-login/auth-spotify

This Dart example shows how to start the Spotify OAuth process using Supabase. It includes optional parameters for `redirectTo` to handle deep linking on mobile and `authScreenLaunchMode` to control how the authentication screen is presented.

```dart
Future<void> signInWithSpotify() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.spotify,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```

--------------------------------

### Implement Basic 'Hello World' Routing in TypeScript

Source: https://supabase.com/docs/guides/functions/routing

This example demonstrates how to set up basic GET and POST routing for a 'hello world' endpoint within a Supabase Edge Function. It showcases implementations using raw Deno.serve, Express.js, Oak, and Hono frameworks, illustrating how to handle different HTTP methods and parse request bodies for dynamic responses.

```typescript
Deno.serve(async (req) => {
  if (req.method === 'GET') {
    return new Response('Hello World!')
  }
  const { name } = await req.json()
  if (name) {
    return new Response(`Hello ${name}!`)
  }
  return new Response('Hello World!')
})
```

```typescript
import express from 'npm:express@4.18.2'

const app = express()
app.use(express.json())
// If you want a payload larger than 100kb, then you can tweak it here:
// app.use( express.json({ limit : "300kb" }));

const port = 3000

app.get('/hello-world', (req, res) => {
  res.send('Hello World!')
})

app.post('/hello-world', (req, res) => {
  const { name } = req.body
  res.send(`Hello ${name}!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

```typescript
import { Application } from 'jsr:@oak/oak@15/application'
import { Router } from 'jsr:@oak/oak@15/router'

const router = new Router()

router.get('/hello-world', (ctx) => {
  ctx.response.body = 'Hello world!'
})

router.post('/hello-world', async (ctx) => {
  const { name } = await ctx.request.body.json()
  ctx.response.body = `Hello ${name}!`
})

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port: 3000 })
```

```typescript
import { Hono } from 'jsr:@hono/hono'

const app = new Hono()

app.post('/hello-world', async (c) => {
  const { name } = await c.req.json()
  return new Response(`Hello ${name}!`)
})

app.get('/hello-world', (c) => {
  return new Response('Hello World!')
})

Deno.serve(app.fetch)
```

--------------------------------

### GET /data - Range Rows

Source: https://supabase.com/docs/reference/csharp/auth-signup

Limits the result to rows within the specified inclusive range (start and end indices).

```APIDOC
## GET /data/{table_name}

### Description
Limits the result to rows within the specified range, inclusive.

### Method
GET

### Endpoint
`/data/{table_name}`

### Parameters
#### Query Parameters
- **range** (string) - Required - A string representing the inclusive range, e.g., `0-9`.

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

### Response
#### Success Response (200)
- **data** (array) - An array of objects representing the rows within the specified range.

#### Response Example
```json
[
  {
    "name": "City 0",
    "country_id": 10
  },
  {
    "name": "City 1",
    "country_id": 11
  }
]
```
```

--------------------------------

### POST /v1/projects/{ref}/read-replicas/setup

Source: https://supabase.com/docs/reference/api/v1-create-project-tpa-integration

Set up a read replica.

```APIDOC
## POST /v1/projects/{ref}/read-replicas/setup

### Description
Set up a read replica.

### Method
POST

### Endpoint
/v1/projects/{ref}/read-replicas/setup

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

#### Request Body
- **read_replica_region** (enum) - Required - Accepted values

### Request Example
```json
{
  "read_replica_region": "us-east-1"
}
```

### Response
#### Success Response (201)
- **Response Body** (object) - Empty object

#### Response Example
```json
{}
```
```

--------------------------------

### Install Supabase C# Client

Source: https://supabase.com/docs/reference/csharp/limit

Instructions for installing the Supabase C# client library via NuGet package manager.

```APIDOC
## Install Supabase C# Client

### Description
Install the Supabase C# client library into your project using the NuGet package manager.

### Method
Terminal Command

### Endpoint
N/A

### Parameters
N/A

### Request Example
```
dotnet add package supabase
```

### Response
#### Success Response (200)
No explicit API response; successful package installation.

#### Response Example
N/A
```

--------------------------------

### GET /auth/v1/admin/users

Source: https://supabase.com/docs/reference/swift/auth-signinwithidtoken

Lists all users in the system. Supports pagination and filtering (not explicitly shown in example). Requires a `service_role` key.

```APIDOC
## GET /auth/v1/admin/users

### Description
Lists all users in the system. Supports pagination and filtering (not explicitly shown in example). Requires a `service_role` key.

### Method
GET

### Endpoint
/auth/v1/admin/users

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- **page** (integer) - Optional - The page number for pagination.
- **perPage** (integer) - Optional - The number of users per page.

#### Request Body
- No request body.

### Request Example
No request body for this GET operation.

### Response
#### Success Response (200)
- **users** (array) - An array of user objects.
- **total** (integer) - The total number of users.

#### Response Example
{
  "users": [
    {
      "id": "715ed5db-f090-4b8c-a067-640ecee36aa0",
      "email": "user1@email.com",
      "created_at": "2023-01-01T12:00:00Z"
    },
    {
      "id": "another-user-uuid",
      "email": "user2@email.com",
      "created_at": "2023-01-02T13:00:00Z"
    }
  ],
  "total": 2
}
```

--------------------------------

### POST /auth/signup - Create a New User

Source: https://supabase.com/docs/reference/kotlin/textsearch

Creates a new user account with email or phone authentication. Supports email/password or phone/password signup with optional metadata and redirect URLs.

```APIDOC
## POST /auth/signup - Create a New User

### Description
Creates a new user account with email or phone authentication. The user may need to verify their email or phone depending on project settings.

### Method
POST

### Endpoint
supabase.auth.signUpWith()

### Parameters
#### Request Body
- **provider** (string) - Required - Authentication provider: "Email" or "Phone"
- **email** (string) - Required (for Email provider) - User's email address
- **password** (string) - Required - User's password
- **phone** (string) - Required (for Phone provider) - User's phone number
- **redirectUrl** (string) - Optional - URL to redirect after email/phone verification
- **metadata** (object) - Optional - Additional user metadata to store

### Request Example
```kotlin
val user = supabase.auth.signUpWith(Email) {
    email = "example@email.com"
    password = "example-password"
}
```

### Response
#### Success Response (200)
- **user** (object) - The created user object (if Confirm email is disabled)
- **session** (object) - Authentication session (if Confirm email is disabled)

#### Success Response (202)
- **user** (object) - Obfuscated user object (if Confirm email is enabled)
- **message** (string) - Confirmation email sent message

### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "created_at": "2024-01-01T00:00:00Z"
  },
  "session": null
}
```

### Error Responses
- **400** - User already registered (when Confirm email/phone disabled)
- **422** - Invalid email or password format

### Notes
- If Confirm email is enabled, user receives verification email and is not logged in automatically
- If Confirm email is disabled, user is logged in automatically
- User is redirected to SITE_URL after email confirmation by default
- Additional redirect URLs can be configured in project settings
- For existing confirmed users: returns obfuscated user if both confirmations enabled, or "User already registered" error if either is disabled
```

--------------------------------

### Auth: Sign Up New User

Source: https://supabase.com/docs/reference/csharp/storage-from-update

Registers a new user with an email and password. Email verification might be required based on project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. By default, email verification is required. If 'Confirm email' is disabled, a session is returned immediately. Otherwise, a user object is returned with a null session until email is confirmed.

### Method
POST

### Endpoint
`/auth/v1/signup` (via SDK: `supabase.Auth.SignUp()`)

### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.

### Request Example
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Response
#### Success Response (200)
- **user** (object) - The newly created user object.
- **session** (object | null) - The session object if 'Confirm email' is disabled, otherwise null.

#### Response Example (Email confirmation enabled)
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "confirmed_at": null,
    "role": "authenticated"
  },
  "session": null
}
```

#### Response Example (Email confirmation disabled)
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.example",
    "confirmed_at": "2023-10-27T10:00:00Z",
    "role": "authenticated"
  },
  "session": {
    "access_token": "jwt_token",
    "expires_in": 3600,
    "refresh_token": "refresh_token_string",
    "user": {
      "id": "uuid",
      "email": "user@example.com"
    }
  }
}
```

#### Error Response (400)
- **error** (string) - Description of the error (e.g., "User already registered", "Invalid email address").
```

--------------------------------

### Client Setup: Initialize Supabase Client

Source: https://supabase.com/docs/reference/csharp/auth-signout

Explains how to initialize a new Supabase client instance in your C# application. This involves providing your project's URL and public API key for authentication and connection.

```APIDOC
## Client Setup: Initialize Supabase Client

### Description
Initializes a new Supabase client instance, establishing the connection between your C# application and your Supabase project. You will need your project URL and public API key, typically sourced from environment variables.

### Client Method
`new Supabase.Client(url, key, options)` then `await supabase.InitializeAsync()`

### Parameters
#### Constructor
```

--------------------------------

### PostgREST Schema Cache Error Log Example

Source: https://supabase.com/docs/guides/troubleshooting/postgrest-not-recognizing-new-columns-or-functions-bd75f5

Example error message indicating a stale PostgREST schema cache caused by a Postgres notification queue issue. This error occurs when PostgREST fails to receive cache reload signals after schema changes.

```log
24/Dec/2025:18:16:33 -0500: Failed listening for database notifications on the "pgrst" channel. ERROR:  could not access status of transaction 12037872 DETAIL:  Could not open file "pg_xact/000B": No such file or directory.
```

--------------------------------

### POST /auth/v1/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/auth-signup

Registers a new user with an email and password. Email verification behavior is configurable in project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account with the provided email and password. The requirement for email verification depends on the project's 'Confirm email' setting.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.

### Request Example
```csharp
var session = await supabase.Auth.SignUp("user@example.com", "strong-password");
```

### Response
#### Success Response (200)
- **user** (object) - Details of the newly created user.
- **session** (object | null) - The user's session object, or null if email confirmation is enabled.

#### Response Example
```json
{
  "user": {
    "id": "uuid-string",
    "email": "user@example.com",
    "created_at": "2023-01-01T00:00:00Z"
  },
  "session": {
    "access_token": "jwt-token",
    "refresh_token": "refresh-token",
    "expires_in": 3600
  }
}
```
(Session will be null if email confirmation is required)

#### Error Response (400)
```json
{
  "error": "User already registered",
  "error_code": "422"
}
```
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/get-information-for-the-logged-in-user

Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token for the authenticated user.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

### Method
GET

### Endpoint
`/callback`

### Response
#### Redirect Response (302)
- Redirects to the application with authentication tokens

#### Response Codes
- **302** - Redirect to callback URL with tokens
```

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/swift/functions-invoke

Describes how to initialize the Supabase Auth Admin client. Admin methods require a `service_role` key and should only be called from a trusted server environment.

```APIDOC
## Auth Admin Client Setup

### Description
Describes how to initialize the Supabase Auth Admin client. Admin methods require a `service_role` key and should only be called from a trusted server environment. Never expose your `service_role` key in the browser.

### Method
N/A (Client Setup)

### Endpoint
N/A

### Parameters
- **supabaseURL** (string) - Required - The URL of your Supabase project.
- **supabaseKey** (string) - Required - Your Supabase `service_role` key.

### Request Example
```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: supabaseURL,
  supabaseKey: serviceRoleKey
)

let adminAuthClient = supabase.auth.admin
```

### Response
N/A (Returns an initialized client instance)
```

--------------------------------

### Sign Up User with Email and Password using Supabase Auth

Source: https://supabase.com/docs/guides/auth/passwords

This snippet demonstrates how to register a new user with an email address and password using the Supabase authentication client across various programming languages. It showcases calling the `signUp()` method, which can optionally include a `emailRedirectTo` or `redirectTo` parameter to specify a URL for the user to be redirected to after confirming their email. This redirect URL must be configured in the Supabase dashboard or project configuration.

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'valid.email@supabase.io',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome'
    }
  })
}
```

```dart
Future<void> signUpNewUser() async {
  final AuthResponse res = await supabase.auth.signUp(
    email: 'valid.email@supabase.io',
    password: 'example-password'
  );
}
```

```swift
let response = try await supabase.auth.signUp(
  email: "valid.email@supabase.io",
  password: "example-password",
  redirectTo: URL(string: "https://example.com/welcome")
)
```

```kotlin
suspend fun signUpNewUser() {
	supabase.auth.signUpWith(Email) {
		email = "valid.email@supabase.io"
		password = "example-password"
	}
}
```

```python
data = await supabase.auth.sign_up({
  'email': 'valid.email@supabase.io',
  'password': 'example-password',
  'options': {
    'email_redirect_to': 'https://example.com/welcome'
  }
})
```

--------------------------------

### GET /auth/v1/admin/users

Source: https://supabase.com/docs/reference/swift/insert

Lists all users in the system using the admin client. Supports pagination (not shown in example). Requires a `service_role` key.

```APIDOC
## GET /auth/v1/admin/users

### Description
Lists all users in the system using the admin client. This method supports pagination (though not explicitly shown in the example) and requires a `service_role` key.

### Method
GET

### Endpoint
/auth/v1/admin/users

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None - but typically supports `page`, `perPage`, `sortBy`, `sortOrder`)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **users** (array) - An array of user objects.

#### Response Example
[
  {
    "id": "715ed5db-f090-4b8c-a067-640ecee36aa0",
    "email": "user1@email.com",
    "created_at": "2023-01-01T12:00:00Z"
  },
  {
    "id": "another-user-id",
    "email": "user2@email.com",
    "created_at": "2023-01-02T12:00:00Z"
  }
]
```

--------------------------------

### Initialize local Postgres environment using Supabase CLI

Source: https://supabase.com/docs/guides/ai/vecs-python-client

Sets up a local development environment by initializing a Supabase project and starting a Docker-based Postgres instance. This requires the Supabase CLI to be installed and Docker to be running on the host machine.

```bash
# Initialize your project
supabase init

# Start Postgres
supabase start
```

--------------------------------

### supabase domains get

Source: https://supabase.com/docs/reference/cli/supabase-branches

Retrieves the custom hostname configuration for your project as stored in the Supabase platform. Returns the current domain setup and status information.

```APIDOC
## supabase domains get

### Description
Retrieve the custom hostname config for your project, as stored in the Supabase platform.

### Method
CLI Command

### Endpoint
`supabase domains get [flags]`

### Parameters
#### Optional Flags
- **--include-raw-output** (boolean) - Optional - Include raw output (useful for debugging)
- **--project-ref** (string) - Optional - Project ref of the Supabase project

### Response
#### Success Response
- **output** (object) - Custom hostname configuration details for the project
```

--------------------------------

### Start Supabase Self-Hosted Stack with Docker Compose (BigQuery Backend)

Source: https://supabase.com/docs/reference/self-hosting-analytics/list-teams

This `docker compose` command is used to start the self-hosted Supabase services defined in the `docker-compose.yml` file. It assumes the user has navigated to the `docker` directory within the Supabase repository and has configured BigQuery backend settings by modifying the `.env.example` and `docker-compose.yml` files as instructed.

```bash
cd docker
docker compose -f docker-compose.yml
```

--------------------------------

### Install Supabase C# Client Library

Source: https://supabase.com/docs/reference/csharp/storage-createbucket

Instructions on how to install the Supabase C# client library using the NuGet package manager.

```APIDOC
## INSTALL PACKAGE supabase

### Description
This section outlines the process for integrating the Supabase C# client library into your project via NuGet.

### Method
PACKAGE_INSTALL

### Endpoint
N/A

### Parameters
N/A

### Request Body
N/A

### Request Example
```bash
dotnet add package supabase
```

### Response
#### Success Response (200)
- **status** (string) - Indicates successful package installation.

#### Response Example
```text
Package 'supabase' successfully installed.
```
```

--------------------------------

### GET /v1/projects/{ref}/custom-hostname

Source: https://supabase.com/docs/reference/api/v1-create-project-tpa-integration

Retrieves the custom hostname configuration for a specified project. This provides details about the current custom domain setup.

```APIDOC
## GET /v1/projects/{ref}/custom-hostname

### Description
Gets project's custom hostname config.

### Method
GET

### Endpoint
/v1/projects/{ref}/custom-hostname

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

#### Query Parameters
N/A

#### Request Body
N/A

### Request Example
N/A

### Response
#### Success Response (200)
- **status** (string) - Current status of the custom hostname.
- **custom_hostname** (string) - The custom hostname.
- **data** (object) - Details of the custom hostname configuration.
  - **success** (boolean) - Indicates if the operation was successful.
  - **errors** (array) - List of errors, if any.
  - **messages** (array) - List of messages, if any.
  - **result** (object) - Detailed result of the custom hostname configuration.
    - **id** (string) - ID of the custom hostname.
    - **hostname** (string) - The hostname.
    - **ssl** (object) - SSL certificate details.
      - **status** (string) - SSL certificate status.
      - **validation_records** (array) - Records required for SSL validation.
        - **txt_name** (string) - TXT record name.
        - **txt_value** (string) - TXT record value.
      - **validation_errors** (array) - Errors during SSL validation.
        - **message** (string) - Error message.
    - **ownership_verification** (object) - Details for domain ownership verification.
      - **type** (string) - Type of verification.
      - **name** (string) - Verification record name.
      - **value** (string) - Verification record value.
    - **custom_origin_server** (string) - Custom origin server.
    - **verification_errors** (array) - List of verification errors.
    - **status** (string) - Overall status.

#### Response Example
{
  "status": "1_not_started",
  "custom_hostname": "lorem",
  "data": {
    "success": true,
    "errors": [
      null
    ],
    "messages": [
      null
    ],
    "result": {
      "id": "lorem",
      "hostname": "lorem",
      "ssl": {
        "status": "lorem",
        "validation_records": [
          {
            "txt_name": "lorem",
            "txt_value": "lorem"
          }
        ],
        "validation_errors": [
          {
            "message": "lorem"
          }
        ]
      },
      "ownership_verification": {
        "type": "lorem",
        "name": "lorem",
        "value": "lorem"
      },
      "custom_origin_server": "lorem",
      "verification_errors": [
        "lorem"
      ],
      "status": "lorem"
    }
  }
}
```

--------------------------------

### POST /v1/projects/{ref}/read-replicas/setup

Source: https://supabase.com/docs/reference/api/v1-exchange-oauth-token

Set up a read replica.

```APIDOC
## POST /v1/projects/{ref}/read-replicas/setup

### Description
Set up a read replica.

### Method
POST

### Endpoint
/v1/projects/{ref}/read-replicas/setup

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

#### Query Parameters
(None)

#### Request Body
- **read_replica_region** (enum) - Required - Accepted values

### Request Example
{
  "read_replica_region": "us-east-1"
}

### Response
#### Success Response (201)
(No explicit fields provided, returns an empty object)

#### Response Example
{}
```

--------------------------------

### Example auto-generated SQL from Supabase schema diff

Source: https://supabase.com/docs/guides/cli/managing-environments

Shows an example of a verbose SQL `CREATE TABLE` statement generated by the `supabase db diff` command, including default privileges and identity column details.

```sql
-- This script was generated by the Schema Diff utility in pgAdmin 4
-- For the circular dependencies, the order in which Schema Diff writes the objects is not very sophisticated
-- and may require manual changes to the script to ensure changes are applied in the correct order.
-- Please report an issue for any failure with the reproduction steps.

CREATE TABLE IF NOT EXISTS public.employees
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    CONSTRAINT employees_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.employees
    OWNER to postgres;

GRANT ALL ON TABLE public.employees TO anon;

GRANT ALL ON TABLE public.employees TO authenticated;

GRANT ALL ON TABLE public.employees TO postgres;

GRANT ALL ON TABLE public.employees TO service_role;
```

--------------------------------

### Start Database - Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Starts the local Supabase database. Supports restoring from a logical backup file using the --from-backup flag.

```bash
supabase db start [flags]
```

--------------------------------

### POST - Sign Up User

Source: https://supabase.com/docs/reference/csharp/insert

Creates a new user account with email and password credentials. Email verification may be required based on project settings. Returns user object and optional session depending on email confirmation settings.

```APIDOC
## POST - Sign Up User

### Description
Creates a new user account with email and password.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, etc.
- **session** (object, optional) - Session object (null if email confirmation required)
  - **access_token** (string) - JWT access token
  - **refresh_token** (string) - Refresh token

#### Response Example
```json
{
  "user": {
    "id": "12345",
    "email": "user@example.com",
    "email_confirmed_at": null
  },
  "session": null
}
```

### Notes
- Email verification required by default (can be disabled in project settings)
- If email confirmation enabled: user returned, session is null
- If email confirmation disabled: both user and session returned
- If user already registered: error or fake obfuscated user returned based on settings
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/sends-a-password-recovery-email-link-to-the-users-email

Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

### Method
GET

### Endpoint
/callback

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
{}

### Response
#### Success Response (302)
(Redirect)

#### Response Example
{}
```

--------------------------------

### Fetch Data in SvelteKit Server Load Function

Source: https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit

Implements a server-side load function to query the 'instruments' table. The TypeScript version includes explicit type definitions and error handling.

```javascript
import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("instruments").select();
  return {
    instruments: data ?? [],
  };
}
```

```typescript
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

type Instrument = {
  id: number;
  name: string;
};

export const load: PageServerLoad = async () => {
  const { data, error } = await supabase.from('instruments').select<'instruments', Instrument>();

  if (error) {
    console.error('Error loading instruments:', error.message);
    return { instruments: [] };
  }

  return {
    instruments: data ?? [],
  };
};
```

--------------------------------

### CLI Command: supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-projects-api-keys

Starts the local database.

```APIDOC
## supabase db start

### Description
Starts the local database.

### Command
supabase db start [flags]

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file.
```

--------------------------------

### GET /auth/v1/authorize (OAuth Sign-in)

Source: https://supabase.com/docs/reference/dart/insert

Starts the OAuth2 flow with a third-party provider. This method redirects the user to the provider's login page.

```APIDOC
## GET /auth/v1/authorize

### Description
Signs the user in using third-party OAuth providers. Supabase supports various providers like GitHub, Google, and Apple.

### Method
GET

### Endpoint
/auth/v1/authorize

### Parameters
#### Query Parameters
- **provider** (OAuthProvider) - Required - The OAuth provider to use for signing in.
- **redirectTo** (String) - Optional - The URL to redirect the user to after they sign in.
- **scopes** (String) - Optional - A list of scopes to request from the third-party provider.
- **authScreenLaunchMode** (LaunchMode) - Optional - The launch mode for the auth screen (mobile specific).
- **queryParams** (Map) - Optional - Additional query parameters for the OAuth flow.

### Request Example
GET /auth/v1/authorize?provider=github&redirectTo=my.scheme://my-host

### Response
#### Success Response (302)
- **Location** (header) - Redirects the user to the OAuth provider's authorization URL.
```

--------------------------------

### Initialize SupabaseClient - Auth Setup

Source: https://supabase.com/docs/reference/swift/using-modifiers

Create and initialize a Supabase client instance with authentication capabilities. Provides access to auth methods via the supabase.auth namespace.

```APIDOC
## Initialize SupabaseClient

### Description
Create a new Supabase client instance with authentication capabilities. Access auth methods via the supabase.auth namespace.

### Method
INITIALIZATION

### Endpoint
SupabaseClient(supabaseURL:supabaseKey:)

### Parameters
#### Constructor Parameters
- **supabaseURL** (URL) - Required - Your Supabase project URL (e.g., https://xyzcompany.supabase.co)
- **supabaseKey** (string) - Required - Your publishable or anonymous API key

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
```

### Response
#### Success Response
- **supabase** (SupabaseClient) - Initialized client instance
- **auth** (AuthClient) - Auth namespace for authentication methods

### Available Namespaces
- **supabase.auth** - Authentication methods (signUp, signIn, signOut, etc.)
- **supabase.from()** - Database queries
- **supabase.rpc()** - Remote procedure calls

### Notes
- Store credentials securely
- Use publishable key for client-side applications
- Use service role key only on secure backend servers
```

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/python/auth-admin-oauth-regenerateclientsecret

Provides an example of how to create a server-side Supabase authentication client using a `service_role` key. Admin methods should only be called on a trusted server and the `service_role` key must never be exposed in the browser.

```APIDOC
## Auth Admin Client Setup

### Description
Provides an example of how to create a server-side Supabase authentication client using a `service_role` key. Admin methods should only be called on a trusted server and the `service_role` key must never be exposed in the browser.

### Method
(N/A - Client Setup)

### Endpoint
(N/A - Client Setup)

### Parameters
(N/A - Client Setup)

### Request Example
```python
from supabase import create_client
from supabase.lib.client_options import ClientOptions

supabase = create_client(
    supabase_url,
    service_role_key,
    options=ClientOptions(
        auto_refresh_token=False,
        persist_session=False,
    )
)

# Access auth admin api
admin_auth_client = supabase.auth.admin
```

### Response
(N/A - Client Setup)
```

--------------------------------

### Auth Admin Setup

Source: https://supabase.com/docs/reference/kotlin/auth-onauthstatechange

Initialize the Supabase client with Auth plugin and service role key for admin authentication operations. This setup enables access to the admin auth API with elevated permissions.

```APIDOC
## Auth Admin Setup

### Description
Initialize a Supabase client with the Auth plugin configured for admin operations using a service_role key.

### Important Notes
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are admin methods and should only be called on trusted servers
- Never expose your `service_role` key in the browser

### Setup Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### Initialize Supabase Client Utility

Source: https://supabase.com/docs/guides/getting-started/quickstarts/tanstack

Creates a singleton Supabase client instance using Vite environment variables to interact with the database.

```typescript
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-completion-powershell

Starts the local Supabase database. Optionally restores from a logical backup file to initialize the database with existing data.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore from a logical backup file to initialize the database.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from
```

--------------------------------

### POST /auth/sign_up - Create a new user

Source: https://supabase.com/docs/reference/python/auth-refreshsession

Create a new user account with email and password credentials. By default, users must verify their email before logging in unless email confirmation is disabled in project settings.

```APIDOC
## POST /auth/sign_up

### Description
Create a new user account with email and password. Returns a user object and session if email confirmation is disabled, or just a user object if confirmation is required.

### Method
POST

### Endpoint
/auth/sign_up

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password
- **user_metadata** (object) - Optional - Additional user metadata
- **redirect_to** (string) - Optional - Redirect URL after email confirmation

### Request Example
{
  "email": "email@example.com",
  "password": "password"
}

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, and metadata
- **session** (object|null) - Session object if email confirmation disabled, null if confirmation required

### Notes
- If **Confirm email** is enabled, session is null
- If **Confirm email** is disabled, both user and session are returned
- Users are redirected to SITE_URL after email confirmation
- For existing confirmed users: returns obfuscated user if both Confirm email and Confirm phone are enabled, otherwise returns 'User already registered' error
```

--------------------------------

### Start Nginx with Certbot reverse proxy using Docker Compose overlay

Source: https://supabase.com/docs/guides/self-hosting/self-hosted-proxy-https

Start Nginx using the pre-configured `docker-compose.nginx.yml` overlay. This setup utilizes a third-party Nginx Docker image that includes Certbot for automatic Let's Encrypt certificate issuance and renewal, and handles HTTP-to-HTTPS redirects.

```sh
docker compose -f docker-compose.yml -f docker-compose.nginx.yml up -d
```

--------------------------------

### Query Pushdown Examples in PostgreSQL

Source: https://supabase.com/docs/guides/database/extensions/wrappers/iceberg

Demonstrates query pushdown behavior with WHERE clauses. The first example with AND operators can be pushed down to the Iceberg table for optimization, while the second example with OR operators cannot be pushed down and requires client-side filtering.

```sql
-- this can be pushed down
select * from table where x = a and y = b;

-- this cannot be pushed down
select * from table where x = a or y = b;
```

--------------------------------

### Set Up Ubuntu VM for Postgres Migration

Source: https://supabase.com/docs/guides/resources/migrating-to-supabase/postgres

Bash script to install Postgres client tools, dependencies, and tmux on an Ubuntu VM for database migration. This setup should be run on a cloud VM in the same region as your source or target database for optimal network performance.

```bash
# Install Postgres client and tools
sudo apt update
sudo apt install software-properties-common
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update
sudo apt install postgresql-client-17 tmux htop iotop moreutils

# Start or attach to tmux session
tmux a -t migration || tmux new -s migration
```

--------------------------------

### GET - Range Query

Source: https://supabase.com/docs/reference/csharp/or

Limits the result to rows within a specified range, inclusive on both ends. Useful for pagination by specifying start and end indices.

```APIDOC
## GET - Range Query

### Description
Returns rows within the specified index range (inclusive).

### Method
GET

### Endpoint
/from/{table}

### Parameters
#### Query Parameters
- **from** (integer) - Required - Start index (inclusive)
- **to** (integer) - Required - End index (inclusive)

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

### Response
#### Success Response (200)
- **rows** (array) - Array of city objects within the specified range

#### Response Example
```json
[
  {
    "name": "City 1",
    "country_id": 1
  },
  {
    "name": "City 2",
    "country_id": 2
  },
  {
    "name": "City 3",
    "country_id": 3
  },
  {
    "name": "City 4",
    "country_id": 4
  }
]
```
```

--------------------------------

### Local Supabase Service Endpoints and Keys

Source: https://supabase.com/docs/guides/graphql

Example of the configuration output provided by the Supabase CLI after a successful start. It includes the local GraphQL URL, Studio URL, and the anonymous API key required for local development.

```text
GraphQL URL: http://localhost:54321/graphql/v1
Studio URL: http://localhost:54323
anon key: eyJhbGciOiJIUzI1...
```

--------------------------------

### Get Connection Pooler Configuration Response

Source: https://supabase.com/docs/reference/api/v1-get-a-sso-provider

Example JSON response containing database connection pooling settings such as pool size, mode, and timeout configurations.

```json
{
  "default_pool_size": 42,
  "ignore_startup_parameters": "lorem",
  "max_client_conn": 42,
  "pool_mode": "transaction",
  "connection_string": "lorem",
  "server_idle_timeout": 42,
  "server_lifetime": 42,
  "query_wait_timeout": 42,
  "reserve_pool_size": 42
}
```

--------------------------------

### Configure Supabase Connection Strings in .env

Source: https://supabase.com/docs/guides/database/prisma

Environment variable configurations for connecting Prisma to Supabase via Supavisor, supporting both session and transaction modes.

```text
# Used for Prisma Migrations and within your application (Session Mode)
DATABASE_URL="postgres://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@[DB-REGION].pooler.supabase.com:5432/postgres"
```

```text
# Used in your application (Transaction Mode with PgBouncer support)
DATABASE_URL="postgres://[DB-USER].[PROJECT-REF]:[PRISMA-PASSWORD]@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
```

--------------------------------

### Setup Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/ilike

Initialize a Supabase client with Auth plugin and service_role key for admin operations. This setup enables access to the auth admin API for server-side authentication management.

```APIDOC
## Setup Auth Admin Client

### Description
Initialize a Supabase client with Auth plugin and service_role key for admin operations.

### Important Notes
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should be called on a trusted server
- Never expose your `service_role` key in the browser

### Code Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### Install Supabase Swift Package with Swift Package Manager

Source: https://supabase.com/docs/reference/swift/auth-mfa-api

Configure Package.swift to add the supabase-swift dependency from GitHub. Supports installing the full Supabase package or individual modules (Auth, Realtime, Postgrest, Functions, Storage). The example shows adding the complete Supabase library to a target.

```swift
let package = Package(
    ...
    dependencies: [
        ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        ),
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                ),
            ]
        )
    ]
)
```

--------------------------------

### Initialize Flutter app with supabase_quickstart

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-flutter

Creates a new Flutter application named supabase_quickstart using the flutter create command. This is the initial step to set up a new Flutter project that will integrate with Supabase backend services.

```bash
flutter create supabase_quickstart
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/returns-the-configuration-settings-for-the-gotrue-server

Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token for authenticated users.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Initiates token creation for OAuth flow completion.

### Method
GET

### Endpoint
/callback

### Response
#### Redirect Response (302)
- Redirects to the application with authentication tokens

### Response Codes
- **302** - Redirect to client application
```

--------------------------------

### Create a bucket

Source: https://supabase.com/docs/reference/csharp/getchannels

Creates a new Storage bucket.

```APIDOC
## POST /storage/v1/bucket

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/storage/v1/bucket

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **name** (string) - Required - The name of the new bucket.
- **public** (boolean) - Optional - Whether the bucket should be publicly accessible. Defaults to false.

### Request Example
```json
{
  "name": "new-bucket",
  "public": false
}
```

### Response
#### Success Response (201)
- **id** (string) - The unique identifier of the created bucket.
- **name** (string) - The name of the created bucket.

#### Response Example
```json
{
  "id": "new-bucket",
  "name": "new-bucket"
}
```
```

--------------------------------

### POST /auth/signup - Create a New User

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

Creates a new user account with email and password. By default, users must verify their email address before logging in unless email confirmation is disabled in project settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. Email confirmation behavior depends on project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters

#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Configuration Notes
- If **Confirm email** is enabled: `user` is returned but `session` is null
- If **Confirm email** is disabled: Both `user` and `session` are returned
- Users are redirected to `SITE_URL` upon email confirmation
- For existing confirmed users: returns obfuscated user object or "User already registered" error

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
- **user** (object) - User object (may be obfuscated pending email confirmation)
- **session** (object) - Session object (null if email confirmation is required)
```

--------------------------------

### GET - Range Query

Source: https://supabase.com/docs/reference/csharp/insert

Limits the query results to rows within a specified range, inclusive of both start and end indices. Useful for pagination and retrieving specific subsets of data.

```APIDOC
## GET - Range Query

### Description
Limits the result to rows within the specified range, inclusive.

### Method
GET

### Endpoint
/rest/v1/{table}

### Parameters
#### Query Parameters
- **offset** (integer) - Required - Starting row index
- **limit** (integer) - Required - Number of rows from start index

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

### Response
#### Success Response (200)
- **name** (string) - City name
- **country_id** (integer) - Associated country identifier
- Rows 0-3 inclusive returned

#### Response Example
```json
[
  {
    "name": "Paris",
    "country_id": 1
  },
  {
    "name": "Lyon",
    "country_id": 1
  },
  {
    "name": "Marseille",
    "country_id": 1
  },
  {
    "name": "Toulouse",
    "country_id": 1
  }
]
```
```

--------------------------------

### GET /v1/projects/{ref}/config/auth/sso/providers/{provider_id}

Source: https://supabase.com/docs/reference/api

Retrieves the details of a Single Sign-On (SSO) provider configuration by its unique identifier. This allows for inspecting the current SSO setup.

```APIDOC
## GET /v1/projects/{ref}/config/auth/sso/providers/{provider_id}

### Description
Gets a SSO provider by its UUID.

### Method
GET

### Endpoint
/v1/projects/{ref}/config/auth/sso/providers/{provider_id}

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref
- **provider_id** (string) - Required

### Response
#### Success Response (200)
- **id** (string) - The unique identifier of the SSO provider.
- **saml** (object) - SAML-specific configuration details.
- **domains** (array) - List of domains associated with the SSO provider.
- **created_at** (string) - Timestamp of when the provider was created.
- **updated_at** (string) - Timestamp of when the provider was last updated.

#### Response Example
```json
{
  "id": "lorem",
  "saml": {
    "id": "lorem",
    "entity_id": "lorem",
    "metadata_url": "lorem",
    "metadata_xml": "lorem",
    "attribute_mapping": {
      "keys": {
        "property1": {
          "name": "lorem",
          "names": [
            "lorem"
          ],
          "default": {},
          "array": true
        },
        "property2": {
          "name": "lorem",
          "names": [
            "lorem"
          ],
          "default": {},
          "array": true
        }
      }
    },
    "name_id_format": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
  },
  "domains": [
    {
      "id": "lorem",
      "domain": "lorem",
      "created_at": "lorem",
      "updated_at": "lorem"
    }
  ],
  "created_at": "lorem",
  "updated_at": "lorem"
}
```
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/initializing

Creates a new user account with email and password. By default, users must verify their email address before logging in unless email confirmation is disabled in project settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. Email verification may be required depending on project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with authentication details
- **session** (object) - Session object (null if email confirmation is enabled and pending)
- **user.id** (string) - Unique user identifier
- **user.email** (string) - User's email address

#### Response Example
```json
{
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com"
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "token_type": "bearer",
    "expires_in": 3600
  }
}
```

#### Notes
- If **Confirm email** is enabled, session is null until user verifies email
- If **Confirm email** is disabled, both user and session are returned
- For existing confirmed users, response depends on confirmation settings
```

--------------------------------

### Create Svelte Page Component with Data Display

Source: https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit

Replace the content of the +page.svelte file in src/routes directory with this Svelte component. The component uses reactive properties to access data passed from the server and iterates through an instruments array to display each instrument's name in a list. This requires data to be provided through Svelte's data loading mechanism.

```svelte
<script>
  let { data } = $props();
</script>

<ul>
  {#each data.instruments as instrument}
    <li>{instrument.name}</li>
  {/each}
</ul>
```

--------------------------------

### POST /functions/v1/hello-world

Source: https://supabase.com/docs/guides/functions/quickstart

Tests the locally running Supabase Edge Function named 'hello-world' by sending a JSON payload with a name and expecting a greeting message. This endpoint is for local testing purposes.

```APIDOC
## POST /functions/v1/hello-world

### Description
Tests the locally running Supabase Edge Function named 'hello-world' by sending a JSON payload with a name and expecting a greeting message. This endpoint is for local testing purposes.

### Method
POST

### Endpoint
/functions/v1/hello-world

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- **name** (string) - Required - The name to include in the greeting message.

### Request Example
```json
{
  "name": "Functions"
}
```

### Response
#### Success Response (200)
- **message** (string) - The greeting message, e.g., "Hello Functions!".

#### Response Example
```json
{
  "message": "Hello Functions!"
}
```
```

--------------------------------

### Initialize Supabase Client with Custom Vanity Subdomain in JavaScript

Source: https://supabase.com/docs/guides/platform/custom-domains

This JavaScript example demonstrates how to initialize the Supabase client library (`@supabase/supabase-js`) using your custom vanity subdomain as the Supabase URL. This is essential for client-side applications to connect to your project via the new subdomain.

```javascript
import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
const supabase = createClient('https://my-example-brand.supabase.co', 'publishable-or-anon-key')
```

--------------------------------

### GET /storage/v1/bucket

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Lists all storage buckets available in the project. Requires `select` permissions on the `buckets` table for RLS policies. Refer to the Storage guide for access control details.

```APIDOC
## GET /storage/v1/bucket

### Description
Retrieves a list of all storage buckets configured within the Supabase project. Access to this endpoint is subject to Row Level Security (RLS) policies on the `buckets` table.

### Method
GET

### Endpoint
/storage/v1/bucket

### Parameters
N/A

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **id** (string) - The unique identifier of the bucket.
- **name** (string) - The user-defined name of the bucket.
- **owner** (string) - The ID of the user who owns the bucket.
- **created_at** (string) - ISO 8601 timestamp of when the bucket was created.
- **updated_at** (string) - ISO 8601 timestamp of when the bucket was last updated.
- **public** (boolean) - Indicates if the bucket is publicly accessible.

#### Response Example
```json
[
  {
    "id": "my-private-bucket",
    "name": "my-private-bucket",
    "owner": "auth_user_uuid_1",
    "created_at": "2023-01-01T10:00:00Z",
    "updated_at": "2023-01-05T14:30:00Z",
    "public": false
  },
  {
    "id": "public-images",
    "name": "public-images",
    "owner": "auth_user_uuid_2",
    "created_at": "2023-02-10T08:00:00Z",
    "updated_at": "2023-02-10T08:00:00Z",
    "public": true
  }
]
```
```

--------------------------------

### Initialize Snaplet Seed Project

Source: https://supabase.com/docs/guides/local-development/seeding-your-database

This command sets up Snaplet for the first time in your project. It analyzes your database schema, generates a JavaScript client, and creates initial configuration files like `seed.config.ts` and `seed.ts` to define data generation rules. It requires Node.js and npm to be installed.

```bash
npx @snaplet/seed init
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/password-based-signup-with-either-email-or-phone

Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token for the authenticated user.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Initiates the creation of access and refresh tokens.

### Method
GET

### Endpoint
/callback

### Response
#### Redirect Response (302)
- Redirects to the application with authentication tokens

#### Response Codes
- **302** - Redirect to authenticated session
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/kotlin/auth-admin-deleteuser

Creates a new user account using email or phone providers. Handles redirection and email confirmation logic.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. Depending on project settings, the user may need to verify their email or phone before logging in.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **provider** (string) - Required - The auth provider: "Email" or "Phone".
- **email** (string) - Required (if Email) - User's email address.
- **password** (string) - Required - User's password.
- **phone** (string) - Required (if Phone) - User's phone number.
- **redirectUrl** (string) - Optional - URL to redirect to after confirmation.
- **data** (object) - Optional - Additional user metadata.

### Request Example
```kotlin
val user = supabase.auth.signUpWith(Email) {
    email = "example@email.com"
    password = "example-password"
}
```

### Response
#### Success Response (200)
- **user** (object) - The user object (if auto-login is enabled or confirmation is disabled).
- **session** (object) - The session object if the user is logged in immediately.
```

--------------------------------

### GET /range - Limit Query to Range

Source: https://supabase.com/docs/reference/dart/storage-from-getpublicurl

Limits the query result to rows within a specified range (inclusive). Useful for pagination by specifying start and end indices.

```APIDOC
## range(from, to, options)

### Description
Limits the result to rows within the specified range, inclusive of both start and end indices.

### Method
GET

### Parameters
#### Required Parameters
- **from** (int) - Required - The starting index from which to limit the result
- **to** (int) - Required - The last index to which to limit the result (inclusive)

#### Optional Parameters
- **referencedTable** (String) - Optional - Set this to limit rows of referenced tables instead of the parent table

### Request Example
```dart
final data = await supabase
  .from('instruments')
  .select('name')
  .range(0, 1);
```

### Response
#### Success Response (200)
- **rows** (Array) - Array containing rows within the specified range

### Notes
- Range is inclusive on both ends
- Useful for implementing pagination
- Works with select() queries
```

--------------------------------

### POST /v1/projects/{project_ref}/read-replicas/setup

Source: https://supabase.com/docs/guides/platform/read-replicas/getting-started

Creates a new Read Replica for your Supabase project in the specified region. This endpoint allows you to programmatically set up read-only database instances across multiple regions using the Management API.

```APIDOC
## POST /v1/projects/{project_ref}/read-replicas/setup

### Description
Creates a new Read Replica for your Supabase project in the specified region. Read Replicas are deployed using a physical backup as a starting point, combined with write ahead logging (WAL) file archives and direct replication from the Primary database.

### Method
POST

### Endpoint
https://api.supabase.com/v1/projects/{project_ref}/read-replicas/setup

### Parameters
#### Path Parameters
- **project_ref** (string) - Required - Your Supabase project reference identifier

#### Request Body
- **region** (string) - Required - AWS region where the Read Replica will be deployed (e.g., "us-east-1")

### Request Example
```bash
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

curl -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/read-replicas/setup" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "region": "us-east-1"
  }'
```

### Response
#### Success Response (200)
- **database_identifier** (string) - Unique identifier for the created Read Replica
- **region** (string) - AWS region where the replica was deployed
- **status** (string) - Current deployment status

### Authentication
- **Authorization** (Bearer token) - Required - Access token from https://supabase.com/dashboard/account/tokens

### Prerequisites
- Project must be on Pro, Team, or Enterprise plan
- Project must be running on AWS
- Project must have at least a Small compute add-on
- Project must be running Postgres 15 or later
- Project must not be using legacy logical backups
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/match

Creates a new user account with email and password. By default, users must verify their email address before logging in unless email confirmation is disabled in project settings. Returns a user object and optionally a session depending on email confirmation settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. Email verification may be required depending on project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, and metadata
- **session** (object) - Session object (null if email confirmation is enabled and not yet confirmed)
- **access_token** (string) - JWT access token (if session is not null)

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "email_confirmed_at": null
  },
  "session": null
}
```

### Notes
- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- User is redirected to SITE_URL after email confirmation
- For existing confirmed users: returns obfuscated user or "User already registered" error
```

--------------------------------

### GET range() - Limit Query to Row Range

Source: https://supabase.com/docs/reference/dart/file-buckets

Limits the result to rows within a specified range using inclusive start and end indices. Useful for pagination and subset retrieval.

```APIDOC
## range()

### Description
Limits the result to rows within the specified range, inclusive. Provides row-level pagination control.

### Method
GET / POST (applied to queries)

### Parameters
- **from** (int) - Required - The starting index from which to limit the result.
- **to** (int) - Required - The last index to which to limit the result (inclusive).
- **referencedTable** (String) - Optional - Set this to limit rows of referenced tables instead of the parent table.

### Request Example
```dart
final data = await supabase
  .from('instruments')
  .select('name')
  .range(0, 1)
```

### Usage Notes
- Both start and end indices are inclusive
- Works with select() queries
- Can limit rows of referenced tables
```

--------------------------------

### Initialize SolidJS App and Install Supabase Client

Source: https://supabase.com/docs/guides/getting-started/quickstarts/solidjs

Commands to scaffold a new SolidJS project using degit and install the @supabase/supabase-js library. This library is the primary interface for interacting with Supabase services.

```bash
npx degit solidjs/templates/js my-app
cd my-app && npm install @supabase/supabase-js
```

--------------------------------

### GET - Query range of rows

Source: https://supabase.com/docs/reference/csharp/rpc

Limits the query results to rows within a specified range (inclusive). Used for pagination by specifying start and end indices.

```APIDOC
## GET /Select with Range

### Description
Limits the result to rows within the specified range, inclusive.

### Method
GET

### Endpoint
From<T>().Select().Range().Get()

### Parameters
#### Query Modifiers
- **Range** (int from, int to) - Required - Start and end indices (inclusive)
- **Select** (string) - Optional - Comma-separated column names to return

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

### Response
#### Success Response (200)
- **result** (List<City>) - Array of City objects from index 0 to 3 (4 rows)
```

--------------------------------

### GET /buckets - List all buckets

Source: https://supabase.com/docs/reference/csharp/initializing

Retrieves the details of all Storage buckets within an existing product. Requires `buckets` select permissions.

```APIDOC
## GET /buckets

### Description
Retrieves the details of all Storage buckets within an existing product.

### Method
GET

### Endpoint
/buckets

### Policy Permissions Required
- **buckets** - select
- **objects** - none

### Response
#### Success Response (200)
- **buckets** (array) - Array of bucket objects containing bucket details

### Code Example
```csharp
var buckets = await supabase.Storage.ListBuckets();
```
```

--------------------------------

### Start Local Supabase Stack

Source: https://supabase.com/docs/guides/ai/examples/image-search-openai-clip

Launch the local Supabase development environment. This command starts all necessary services and outputs environment details including the database connection URL.

```shell
supabase start
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/auth-getsession

Creates a new user account with email and password. Email verification may be required depending on project settings. Returns user and session information based on confirmation settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with provided email and password credentials.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with authentication details
- **session** (object) - Session object (null if email confirmation is required)
- **email** (string) - User's email address

#### Response Behavior
- If "Confirm email" is enabled: returns user but session is null
- If "Confirm email" is disabled: returns both user and session
- For existing confirmed users: returns obfuscated user or "User already registered" error

#### Error Response (400)
- **message** (string) - "User already registered" if user exists and confirmation is disabled
```

--------------------------------

### GET - Query Range

Source: https://supabase.com/docs/reference/csharp/lt

Limits the query results to rows within a specified range (offset and limit). This modifier allows pagination by specifying start and end positions.

```APIDOC
## GET - Query Range

### Description
Limits the result to rows within the specified range, inclusive.

### Method
GET

### Endpoint
/rest/v1/{table}

### Parameters
#### Query Parameters
- **offset** (integer) - Optional - Starting index for range
- **limit** (integer) - Optional - Number of rows from offset

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

### Response
#### Success Response (200)
- **name** (string) - City name
- **country_id** (integer) - Associated country identifier
- **data** (array) - Array of rows within specified range

### Notes
Range(start, end) is inclusive on both ends. Use for pagination implementation.
```

--------------------------------

### Run Metabase Docker Container

Source: https://supabase.com/docs/guides/database/metabase

Starts a Metabase Docker container in detached mode, mapping port 3000 from the container to the host machine. The server becomes accessible at http://localhost:3000/setup for initial setup and configuration.

```shell
docker run -d -p 3000:3000 --name metabase metabase/metabase
```

--------------------------------

### Deploy Edge Functions using Supabase CLI

Source: https://supabase.com/docs/guides/functions/quickstart

Commands to deploy all functions or a specific function to the Supabase platform. Includes options for API-based deployment and skipping JWT verification for public webhooks.

```bash
supabase functions deploy

# Deploy a specific function using the API
supabase functions deploy hello-world --use-api

# Deploy a function without JWT verification
supabase functions deploy hello-world --no-verify-jwt
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

Starts the local Supabase database stack.

```APIDOC
## CLI Command supabase db start

### Description
Starts the local Supabase database stack.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Path Parameters
(None)

#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

#### Request Body
(None)

### Request Example
```
supabase db start
```

### Response
#### Success Response (CLI Output)
(None)

#### Response Example
(None)
```

--------------------------------

### Manage Supabase Edge Functions with CLI

Source: https://supabase.com/docs/guides/functions/quickstart-dashboard

Provides CLI commands for linking projects, listing functions, downloading function source code, running functions locally, and redeploying updated functions. Requires Supabase CLI installation and project authentication setup.

```bash
# Link your project to your local environment
supabase link --project-ref [project-ref]

# List all functions in the linked project
supabase functions list

# Download a function
supabase functions download hello-world

# Run a function locally
supabase functions serve hello-world

# Redeploy when you're ready with your changes
supabase functions deploy hello-world
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/auth

Receives the redirect from an external provider during the OAuth authentication process. This endpoint starts the process of creating an access and refresh token for the authenticated user.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

### Method
GET

### Endpoint
`/callback`

### Response
#### Redirect Response (302)
- Redirects to the application with authentication tokens

### Response Codes
- **302** - Redirect to authenticated session
```

--------------------------------

### Initialize User Profiles and Storage Schema in SQL

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-react

Creates a profiles table linked to Supabase Auth, enables Row Level Security (RLS), sets up an automated trigger for new users, and initializes storage buckets for avatars.

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);
-- Set up Row Level Security (RLS)
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check ((select auth.uid()) = id);

create policy "Users can update own profile." on profiles
  for update using ((select auth.uid()) = id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
create function public.handle_new_user()
returns trigger
set search_path = ''
as $
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');

create policy "Anyone can update their own avatar." on storage.objects
  for update using ((select auth.uid()) = owner) with check (bucket_id = 'avatars');
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/auth-getuser

Creates a new user account with email and password. Email verification may be required depending on project settings. Returns user object and session if confirmation is disabled.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with email and password.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with user details
- **session** (object) - Session object (null if email confirmation required)

### Notes
- By default, user needs to verify email before logging in
- If **Confirm email** is disabled, both user and session are returned
- If **Confirm email** is enabled, user is returned but session is null
- User is redirected to SITE_URL upon email confirmation
- For existing confirmed users: returns obfuscated user if both email and phone confirmation enabled; returns "User already registered" error otherwise
```

--------------------------------

### POST /rest/v1/rpc/broadcast

Source: https://supabase.com/docs/guides/realtime/getting_started

Send messages via HTTP/REST API using server-side authentication. Perfect for server-to-client messaging and applications that require HTTP-based communication instead of WebSocket connections.

```APIDOC
## POST /rest/v1/rpc/broadcast

### Description
Send broadcast messages via HTTP/REST API. This endpoint is ideal for server-side applications that need to send messages to connected clients without maintaining a persistent WebSocket connection.

### Method
POST

### Endpoint
https://<project>.supabase.co/rest/v1/rpc/broadcast

### Parameters
#### Headers
- **Content-Type** (string) - Required - Must be 'application/json'
- **Authorization** (string) - Required - Bearer token with service role key format: 'Bearer <your-service-role-key>'
- **apikey** (string) - Required - Your service role key

#### Request Body
- **topic** (string) - Required - Channel topic (e.g., 'room:lobby:messages')
- **event** (string) - Required - Event name for the broadcast
- **payload** (object) - Required - Message data containing text, user, and timestamp
- **private** (boolean) - Optional - Whether the message is private (default: false)

### Request Example
#### TypeScript
```typescript
const response = await fetch(`https://<project>.supabase.co/rest/v1/rpc/broadcast`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer <your-service-role-key>`,
    apikey: '<your-service-role-key>',
  },
  body: JSON.stringify({
    topic: 'room:lobby:messages',
    event: 'message_sent',
    payload: {
      text: 'Hello from server!',
      user: 'system',
      timestamp: new Date().toISOString(),
    },
    private: true,
  }),
})
```

#### Dart
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

final response = await http.post(
  Uri.parse('https://<project>.supabase.co/rest/v1/rpc/broadcast'),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your-service-role-key>',
    'apikey': '<your-service-role-key>',
  },
  body: jsonEncode({
    'topic': 'room:lobby:messages',
    'event': 'message_sent',
    'payload': {
      'text': 'Hello from server!',
      'user': 'system',
      'timestamp': DateTime.now().toIso8601String(),
    },
    'private': true,
  }),
);
```

#### Swift
```swift
import Foundation

let url = URL(string: "https://<project>.supabase.co/rest/v1/rpc/broadcast")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("application/json", forHTTPHeaderField: "Content-Type")
request.setValue("Bearer <your-service-role-key>", forHTTPHeaderField: "Authorization")
request.setValue("<your-service-role-key>", forHTTPHeaderField: "apikey")

let payload = [
  "topic": "room:lobby:messages",
  "event": "message_sent",
  "payload": [
    "text": "Hello from server!",
    "user": "system",
    "timestamp": ISO8601DateFormatter().string(from: Date())
  ],
  "private": true
] as [String: Any]

request.httpBody = try JSONSerialization.data(withJSONObject: payload)

let (data, response) = try await URLSession.shared.data(for: request)
```

#### Python
```python
import requests
from datetime import datetime

response = requests.post(
    'https://<project>.supabase.co/rest/v1/rpc/broadcast',
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <your-service-role-key>',
        'apikey': '<your-service-role-key>'
    },
    json={
        'topic': 'room:lobby:messages',
        'event': 'message_sent',
        'payload': {
            'text': 'Hello from server!',
            'user': 'system',
            'timestamp': datetime.now().isoformat()
        },
        'private': True
    }
)
```

### Response
#### Success Response (200)
- **status** (string) - Success status
- Message is broadcast to all subscribers on the specified topic

#### Error Response
- **401** - Unauthorized (invalid or missing authentication)
- **400** - Bad Request (invalid payload format)
- **500** - Server Error
```

--------------------------------

### Create a Realtime Channel

Source: https://supabase.com/docs/guides/realtime/getting_started

Define a communication channel with a specific topic name to organize real-time messages. Channels can be configured as public or private to control access and data flow.

```ts
// Create a channel with a descriptive topic name
const channel = supabase.channel('room:lobby:messages', {
  config: { private: true }, // Recommended for production
})
```

```dart
// Create a channel with a descriptive topic name
final channel = supabase.channel('room:lobby:messages');
```

```swift
// Create a channel with a descriptive topic name
let channel = supabase.channel("room:lobby:messages") {
  $0.isPrivate = true
}
```

```python
# Create a channel with a descriptive topic name
channel = supabase.channel('room:lobby:messages', params={'config': {'private': True }})
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-completion-zsh

Starts the local Supabase database. Optionally restores from a logical backup file if provided.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Basic Usage
```
supabase db start
```

#### Start from Backup
```
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### Client Library - Listen and Send Messages

Source: https://supabase.com/docs/guides/realtime/getting_started

Send and receive messages using Supabase client libraries across multiple programming languages. This approach is ideal for client-side applications that need real-time bidirectional communication.

```APIDOC
## Realtime Messaging - Client Libraries

### Description
Listen for incoming messages and send messages using Supabase client libraries. Supports TypeScript, Dart, Swift, and Python.

### Method
WebSocket (Real-time)

### Endpoint
Supabase Realtime Channel

### Parameters
#### Channel Configuration
- **event** (string) - Required - Event name for the broadcast (e.g., 'message_sent')
- **payload** (object) - Required - Message data to send

#### Payload Fields
- **text** (string) - Required - Message content
- **user** (string) - Required - User identifier
- **timestamp** (string) - Required - ISO 8601 formatted timestamp

### TypeScript Example
```typescript
// Listen for messages
channel
  .on('broadcast', { event: 'message_sent' }, (payload: { payload: any }) => {
    console.log('New message:', payload.payload)
  })
  .subscribe()

// Send a message
channel.send({
  type: 'broadcast',
  event: 'message_sent',
  payload: {
    text: 'Hello, world!',
    user: 'john_doe',
    timestamp: new Date().toISOString(),
  },
})
```

### Dart Example
```dart
// Listen for messages
channel.onBroadcast(
  event: 'message_sent',
  callback: (payload) {
    print('New message: ${payload["payload"]}');
  },
).subscribe();

// Send a message
channel.sendBroadcastMessage(
  event: 'message_sent',
  payload: {
    'text': 'Hello, world!',
    'user': 'john_doe',
    'timestamp': DateTime.now().toIso8601String(),
  },
);
```

### Swift Example
```swift
// Listen for messages
await channel.onBroadcast(event: "message_sent") { message in
  print("New message: \(message.payload)")
}

let status = await channel.subscribe()

// Send a message
await channel.sendBroadcastMessage(
  event: "message_sent",
  payload: [
    "text": "Hello, world!",
    "user": "john_doe",
    "timestamp": ISO8601DateFormatter().string(from: Date())
  ]
)
```

### Python Example
```python
# Listen for messages
def message_handler(payload):
    print(f"New message: {payload['payload']}")

channel.on_broadcast(event="message_sent", callback=message_handler).subscribe()

# Send a message
channel.send_broadcast_message(
    event="message_sent",
    payload={
        "text": "Hello, world!",
        "user": "john_doe",
        "timestamp": datetime.now().isoformat()
    }
)
```

### Response
#### Success
- Messages are received in real-time through the callback/listener
- Send operations complete asynchronously
```

--------------------------------

### POST /v1/projects/{project_ref}/read-replicas/remove

Source: https://supabase.com/docs/guides/platform/read-replicas/getting-started

Deletes an existing Read Replica from your Supabase project. This endpoint allows you to programmatically remove read-only database instances that are no longer needed.

```APIDOC
## POST /v1/projects/{project_ref}/read-replicas/remove

### Description
Deletes an existing Read Replica from your Supabase project. This endpoint removes the specified read-only database instance and stops replication to that replica.

### Method
POST

### Endpoint
https://api.supabase.com/v1/projects/{project_ref}/read-replicas/remove

### Parameters
#### Path Parameters
- **project_ref** (string) - Required - Your Supabase project reference identifier

#### Request Body
- **database_identifier** (string) - Required - Unique identifier of the Read Replica to be deleted

### Request Example
```bash
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

curl -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/read-replicas/remove" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "database_identifier": "abcdefghijklmnopqrst"
  }'
```

### Response
#### Success Response (200)
- **status** (string) - Confirmation that the Read Replica has been deleted
- **database_identifier** (string) - Identifier of the deleted replica

### Authentication
- **Authorization** (Bearer token) - Required - Access token from https://supabase.com/dashboard/account/tokens

### Limits
- Projects on XL compute add-on or larger can create up to five Read Replicas
- Projects on compute add-ons smaller than XL can create up to two Read Replicas
```

--------------------------------

### Create Postgres.js Database Connection

Source: https://supabase.com/docs/guides/database/postgres-js

Initialize a Postgres.js connection using the DATABASE_URL environment variable containing your connection string. This module exports the configured SQL client for use throughout your application. Supports both Transaction pooler for serverless environments and Session pooler for long-lived connections.

```typescript
// db.js
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql
```

--------------------------------

### Invoke Edge Functions in JavaScript

Source: https://supabase.com/docs/guides/functions/quickstart

Methods to call a deployed Edge Function from a JavaScript application. Demonstrates both the Supabase SDK 'invoke' helper and the standard Fetch API approach.

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://[YOUR_PROJECT_ID].supabase.co', 'YOUR_ANON_KEY')

const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'JavaScript' },
})

console.log(data)
```

```javascript
const response = await fetch('https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ANON_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Fetch' }),
})

const data = await response.json()
console.log(data)
```

--------------------------------

### POST /storage/buckets - Create a bucket

Source: https://supabase.com/docs/reference/csharp/storage-from-createsignedurl

Creates a new Storage bucket. Requires `buckets` insert permissions.

```APIDOC
## POST /storage/buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
`/storage/buckets`

### Request Body
- **name** (string) - Required - The name of the bucket to create

### Policy Permissions Required
- **buckets** permissions: `insert`
- **objects** permissions: none

### Response
#### Success Response (201)
- **bucket** (object) - The newly created bucket object

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
```
```

--------------------------------

### Client SDK Method: Query Explanation with `explain()`

Source: https://supabase.com/docs/reference/swift/or

The `explain()` method allows developers to retrieve the Postgres execution plan for any Supabase query, aiding in performance debugging. It is recommended for testing environments due to potential sensitive information exposure.

```APIDOC
## CLIENT SDK METHOD: Query Explanation with `explain()`

### Description
Use the `explain()` method on any Supabase query to get its Postgres execution plan. This is crucial for debugging slow queries and understanding database performance.

### Method
CLIENT SDK METHOD

### Endpoint
N/A (Client-side method that modifies a database query)

### Parameters
N/A (Method is chained to a query builder)

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

### Response
#### Success Response (200)
- **value** (JSON) - The Postgres EXPLAIN execution plan for the query.

#### Response Example
```json
{
  "plan": "..."
}
```
```

--------------------------------

### GET Fetch Data

Source: https://supabase.com/docs/reference/csharp/contains

Fetch data from a Supabase table using the C# client library. This example demonstrates how to define a model and retrieve all records from a specified table.

```APIDOC
## GET Fetch Data

### Description
Performs vertical filtering with SELECT to fetch data from a table.

### Method
GET (via client method)

### Endpoint
`supabase.From<T>().Get()`

### Parameters
N/A

### Request Example
```csharp
// Given the following Model (City.cs)
[Table("cities")]
class City : BaseModel
{
    [PrimaryKey("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("country_id")]
    public int CountryId { get; set; }

    //... etc.
}

// A result can be fetched like so.
var result = await supabase.From<City>().Get();
```

### Response
#### Success Response (200)
- **Models** (List<City>) - A list of `City` objects retrieved from the database.

#### Response Example
```csharp
var cities = result.Models;
// cities now contains a list of City objects.
```
```

--------------------------------

### POST - Auth: Sign Up

Source: https://supabase.com/docs/reference/csharp/or

Creates a new user account with email and password. Email verification may be required depending on project settings. Returns user and session information upon successful registration.

```APIDOC
## POST - Auth: Sign Up

### Description
Creates a new user account with email and password credentials.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with user ID and metadata
- **session** (object) - Session object with access token (may be null if email confirmation required)

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "email_confirmed_at": null
  },
  "session": null
}
```

#### Notes
- If email confirmation is enabled, session will be null and user must verify email
- If email confirmation is disabled, both user and session are returned
- Existing confirmed users will return obfuscated user object or "User already registered" error
```

--------------------------------

### Partial Search with Prefix Matching

Source: https://supabase.com/docs/guides/database/full-text-search

Search for records where text begins with a specific prefix using the `:*` syntax in `to_tsquery()`. This example finds books with titles starting with 'Lit'.

```sql
select title from books where to_tsvector(title) @@ to_tsquery('Lit:*');
```

--------------------------------

### Example response for `supabase db reset`

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-role-connections

This response illustrates the steps taken during a database reset, including initializing the schema, applying migrations, and seeding data. It confirms the successful completion of the reset operation.

```text
Resetting database...
Initializing schema...
Applying migration 20220810154537_create_employees_table.sql...
Seeding data supabase/seed.sql...
Finished supabase db reset on branch main.
```

--------------------------------

### Render PSQL Command Example

Source: https://supabase.com/docs/guides/platform/migrating-to-supabase/render

Example of a Render PSQL command retrieved from the Render dashboard containing connection credentials. This command format includes password, host, username, and database name needed to connect to a Render Postgres instance.

```bash
%env PSQL_COMMAND=PGPASSWORD=RgaMDfTS_password_FTPa7 psql -h dpg-a_server_in.oregon-postgres.render.com -U my_db_pxl0_user my_db_pxl0
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/swift/auth-signup

Instructions for installing the Supabase Swift client library using Swift Package Manager, allowing you to integrate Supabase functionalities into your iOS/macOS projects.

```APIDOC
## INSTALLATION

### Description
Install the Supabase Swift client library using Swift Package Manager. You can choose to add the full Supabase package or individual modules like Auth, Realtime, Postgrest, Functions, or Storage.

### Method
Swift Package Manager

### Endpoint
N/A (Client-side installation)

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

### Request Example
```swift
let package = Package(
    ...
    dependencies: [
        ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        )
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase", // Auth, Realtime, Postgrest, Functions, or Storage
                    package: "supabase-swift"
                )
            ]
        )
    ]
)
```

### Response
#### Success Response (N/A)
- **N/A** (Installation is a local setup step)

#### Response Example
N/A
```

--------------------------------

### Initialize Supabase Swift client with URL and API Key

Source: https://supabase.com/docs/reference/swift/auth-getclaims

This snippet shows how to create an instance of `SupabaseClient` by providing your project's URL and publishable/anon API key. This client acts as the entry point for all Supabase functionalities, enabling interaction with your backend services.

```Swift
import Supabase

let client = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
```

--------------------------------

### Supabase CLI: Example Output for Database Schema Diff

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

This example demonstrates the typical output when running the `supabase db diff` command. It shows the process of connecting, creating a shadow database, applying migrations, and finally reporting schema differences or their absence.

```text
Connecting to local database...
Creating shadow database...
Applying migration 20230425064254_remote_commit.sql...
Diffing schemas: auth,extensions,public,storage
Finished supabase db diff on branch main.

No schema changes found
```

--------------------------------

### GET /settings

Source: https://supabase.com/docs/reference/self-hosting-auth/generates-an-email-action-link

Returns the configuration settings for the gotrue server.

```APIDOC
## GET /settings

### Description
Returns the configuration settings for the gotrue server.

### Method
GET

### Endpoint
/settings

### Parameters
#### Path Parameters
No parameters

#### Query Parameters
No parameters

#### Request Body
No request body

### Request Example
No request example

### Response
#### Success Response (200)
- **disable_signup** (boolean) - Indicates if user signup is disabled.
- **external** (object) - Configuration for external providers.
  - **apple** (boolean) - Apple provider enabled.
  - **azure** (boolean) - Azure provider enabled.
  - **bitbucket** (boolean) - Bitbucket provider enabled.
  - **discord** (boolean) - Discord provider enabled.
  - **email** (boolean) - Email provider enabled.
  - **facebook** (boolean) - Facebook provider enabled.
  - **github** (boolean) - GitHub provider enabled.
  - **gitlab** (boolean) - GitLab provider enabled.
  - **google** (boolean) - Google provider enabled.
  - **keycloak** (boolean) - Keycloak provider enabled.
  - **linkedin** (boolean) - LinkedIn provider enabled.
  - **notion** (boolean) - Notion provider enabled.
  - **phone** (boolean) - Phone provider enabled.
  - **saml** (boolean) - SAML provider enabled.
  - **slack** (boolean) - Slack provider enabled.
  - **spotify** (boolean) - Spotify provider enabled.
  - **twitch** (boolean) - Twitch provider enabled.
  - **twitter** (boolean) - Twitter provider enabled.
  - **workos** (boolean) - WorkOS provider enabled.
  - **zoom** (boolean) - Zoom provider enabled.
- **mailer_autoconfirm** (boolean) - Indicates if email confirmation is automatic.
- **phone_autoconfirm** (boolean) - Indicates if phone confirmation is automatic.
- **sms_provider** (string) - The configured SMS provider.

#### Response Example
{
  "disable_signup": true,
  "external": {
    "apple": true,
    "azure": true,
    "bitbucket": true,
    "discord": true,
    "email": true,
    "facebook": true,
    "github": true,
    "gitlab": true,
    "google": true,
    "keycloak": true,
    "linkedin": true,
    "notion": true,
    "phone": true,
    "saml": true,
    "slack": true,
    "spotify": true,
    "twitch": true,
    "twitter": true,
    "workos": true,
    "zoom": true
  },
  "mailer_autoconfirm": true,
  "phone_autoconfirm": true,
  "sms_provider": "lorem"
}
```

--------------------------------

### Setup Database Schema for Realtime Authorization in SQL

Source: https://supabase.com/docs/guides/realtime/authorization

Defines the necessary table structure for managing rooms, user profiles, and room memberships. These tables serve as the foundation for implementing complex RLS policies to control access to Realtime features.

```sql
create table public.rooms (
    id bigint generated by default as identity primary key,
    topic text not null unique
);

alter table public.rooms enable row level security;

create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text NOT NULL,

  primary key (id)
);

alter table public.profiles enable row level security;

create table public.rooms_users (
  user_id uuid references auth.users (id),
  room_topic text references public.rooms (topic),
  created_at timestamptz default current_timestamp
);

alter table public.rooms_users enable row level security;
```

--------------------------------

### Supabase List All Users Response Schema Example (200 Response)

Source: https://supabase.com/docs/reference/self-hosting-auth/generates-an-email-action-link

This JSON schema provides an example of the response structure when listing all users from the Supabase API. It contains an "aud" property and a "users" array, where each element is a detailed user object, similar to the single user schema. This response is returned upon a successful GET /admin/users request.

```json
{
  "aud": "lorem",
  "users": [
    {
      "app_metadata": {
        "property1": null,
        "property2": null
      },
      "aud": "lorem",
      "banned_until": "2021-12-31T23:34:00Z",
      "confirmation_sent_at": "2021-12-31T23:34:00Z",
      "confirmed_at": "2021-12-31T23:34:00Z",
      "created_at": "2021-12-31T23:34:00Z",
      "email": "lorem",
      "email_change_sent_at": "2021-12-31T23:34:00Z",
      "email_confirmed_at": "2021-12-31T23:34:00Z",
      "id": "fbdf5a53-161e-4460-98ad-0e39408d8689",
      "identities": [
        {
          "created_at": "2021-12-31T23:34:00Z",
          "id": "lorem",
          "identity_data": {
            "property1": null,
            "property2": null
          },
          "last_sign_in_at": "2021-12-31T23:34:00Z",
          "provider": "lorem",
          "updated_at": "2021-12-31T23:34:00Z",
          "user_id": "fbdf5a53-161e-4460-98ad-0e39408d8689"
        }
      ],
      "invited_at": "2021-12-31T23:34:00Z",
      "last_sign_in_at": "2021-12-31T23:34:00Z",
      "new_email": "lorem",
      "new_phone": "lorem",
      "phone": "lorem",
      "phone_change_sent_at": "2021-12-31T23:34:00Z",
      "phone_confirmed_at": "2021-12-31T23:34:00Z",
      "reauthentication_sent_at": "2021-12-31T23:34:00Z",
      "recovery_sent_at": "2021-12-31T23:34:00Z",
      "role": "lorem",
      "updated_at": "2021-12-31T23:34:00Z",
      "user_metadata": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

--------------------------------

### Setup Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/insert

Initialize a Supabase client with Auth plugin and service_role key for admin operations. This setup enables access to the admin authentication API.

```APIDOC
## Auth Admin Setup

### Description
Initialize a Supabase client with the Auth plugin and service_role key to access admin authentication methods.

### Important Notes
- All methods under `supabase.auth.admin` namespace require a `service_role` key
- These are admin methods and should only be called on trusted servers
- Never expose your `service_role` key in the browser

### Setup Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### Initialize Supabase C# Client

Source: https://supabase.com/docs/reference/csharp/storage-createbucket

Guide to initializing the Supabase C# client with your project URL and API key, including optional configurations like AutoConnectRealtime, and demonstrating model-based interaction.

```APIDOC
## INITIALIZE CLIENT

### Description
Initializes a new Supabase client instance, connecting it to your Supabase project using the provided URL and API key. Supports custom options like automatic real-time connection.

### Method
CLIENT_INITIALIZATION

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **url** (string) - Required - Your Supabase project URL.
- **key** (string) - Required - Your Supabase public API key.
- **options** (SupabaseOptions) - Optional - Configuration options for the client (e.g., `AutoConnectRealtime`).

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Response
#### Success Response (200)
- **client_instance** (Supabase.Client) - A fully initialized Supabase client instance.

#### Response Example
```csharp
// A Supabase client instance ready for use.
Supabase.Client initializedClient = new Supabase.Client(url, key, options);
```
```

--------------------------------

### GET /database/selectAsFlow

Source: https://supabase.com/docs/reference/kotlin/db-modifiers-select

Returns real-time data from a table as a Flow, emitting initial data and listening for changes. Supports filtering and caching by primary key. Requires both Realtime and Postgrest plugins to be installed.

```APIDOC
## GET /database/selectAsFlow

### Description
Listens to database changes and returns real-time data from a table as a Flow.

### Method
GET

### Endpoint
/database/selectAsFlow

### Parameters
#### Required Parameters
- **primaryKey** (KProperty1<Data, Value> or PrimaryKey<Data>) - Required - The primary key to cache the data by. Can be a property reference or a custom primary key.

#### Optional Parameters
- **channelName** (String) - Optional - The name of the channel to use for realtime updates. If null, a channel name following the format "schema:table:id" will be used.
- **filter** (PostgrestFilterBuilder.() -> Unit or FilterOperation) - Optional - The filter to apply to the data.

### Notes
- Realtime is disabled by default for new tables. Enable it by managing replication.
- `selectAsFlow` emits the initial data and then listens for changes.
- The type parameter `T` must be a serializable class.
- Requires both Realtime and Postgrest plugins.

### Request Example
```kotlin
val flow: Flow<List<Country>> = supabase.from("countries").selectAsFlow(Country::id)
flow.collect {
    for (country in it) {
        println(country.name)
    }
}
```

### Response
#### Success Response (200)
- **data** (Flow<List<T>>) - A Flow emitting lists of data changes.

#### Response Example
```kotlin
val flow: Flow<List<Country>> = supabase.from("countries").selectAsFlow(Country::id)
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-postgres-config-delete

Starts the local Supabase database. Optionally restore from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database instance.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from
```

--------------------------------

### Example `system` message in JSON (Protocol v2.0.0)

Source: https://supabase.com/docs/guides/realtime/protocol

Provides an example of a `system` message using protocol version 2.0.0, indicating a successful subscription to PostgreSQL changes for a specific channel.

```json
[
  "13",
  null,
  "realtime:chat-room",
  "system",
  {
    "message": "Subscribed to PostgreSQL",
    "status": "ok",
    "extension": "postgres_changes",
    "channel": "main"
  }
]
```

--------------------------------

### RANGE - Get Row Range

Source: https://supabase.com/docs/reference/csharp/neq

Limits the query results to rows within a specified range (inclusive). This modifier allows pagination by specifying start and end row indices.

```APIDOC
## RANGE - Paginate Results

### Description
Limits the result to rows within the specified range, inclusive on both ends.

### Method
GET (Query Operation)

### Parameters
#### Query Modifiers
- **start** (integer) - Required - Starting row index (inclusive)
- **end** (integer) - Required - Ending row index (inclusive)

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

### Response
#### Success Response
- **rows** (array) - Array of City objects from index 0 to 3 (4 rows total)
```

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/kotlin/storage-listbuckets

Provides instructions on how to initialize the Supabase client with a `service_role` key for accessing admin authentication methods. These methods should only be called from a trusted server environment.

```APIDOC
## Client Setup

### Description
Initializes the Supabase client with a `service_role` key to enable access to admin authentication methods. This setup is crucial for server-side operations and should never expose the `service_role` key in client-side code.

### Method
N/A (Client Initialization)

### Endpoint
N/A

### Parameters
N/A

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```

### Response
#### Success Response (200)
- **adminAuthClient** (object) - An initialized Supabase Auth Admin client instance.

#### Response Example
```json
{
  "message": "Supabase Auth Admin client initialized successfully"
}
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-db-start

Starts the local Supabase database. Can optionally restore from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Optionally restores database state from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Start Database
```
supabase db start
```

#### Start Database from Backup
```
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-branches-update

Starts the local Supabase database. Can optionally restore from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore the database from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-stop

Starts the local Supabase database. Optionally restores from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore the database from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Basic Usage
```
supabase db start
```

#### Start from Backup
```
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-inspect-report

Starts the local Supabase database. Optionally restores from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file

### Usage Examples

#### Basic usage
```
supabase db start
```

#### Start with backup restoration
```
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-table-index-sizes

Starts the local Supabase database. Optionally restores from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore the database from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Basic usage
```
supabase db start
```

#### Start from backup
```
supabase db start --from-backup /path/to/backup.sql
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-long-running-queries

Starts the local Supabase database. Optionally restores from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database instance. Can optionally restore from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Basic Usage
```
supabase db start
```

#### Start from Backup
```
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### POST /storage/v1/bucket

Source: https://supabase.com/docs/reference/csharp/order

Creates a new Storage bucket.

```APIDOC
## POST /storage/v1/bucket

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/storage/v1/bucket

### Policy Permissions Required
- **buckets** (permissions) - `insert`
- **objects** (permissions) - `none`

### Parameters
#### Path Parameters
*(None)*

#### Query Parameters
*(None)*

#### Request Body
- **name** (string) - Required - The name of the new bucket.
- **public** (boolean) - Optional - Whether the bucket should be public. Defaults to `false`.

### Request Example
```json
{
  "name": "avatars",
  "public": false
}
```

### Response
#### Success Response (200)
- **id** (string) - The unique identifier of the newly created bucket.
- **name** (string) - The name of the newly created bucket.

#### Response Example
```json
{
  "id": "avatars",
  "name": "avatars"
}
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-completion-fish

Starts the local Supabase database. Optionally restores from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Basic Usage
```
supabase db start
```

#### Restore from Backup
```
supabase db start --from-backup /path/to/backup.sql
```
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/storage-from-move

Create a new user account with email or phone and password. Supports additional user metadata and custom redirect URLs. Email confirmation may be required depending on project settings.

```APIDOC
## POST /auth/signup - Create New User

### Description
Create a new user account with email or phone authentication. Returns user object and session based on confirmation settings. Supports custom metadata and redirect URLs.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone required.
- **phone** (string) - Optional - User phone number. One of email or phone required.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom metadata object for storing additional user information
- **redirectTo** (URL) - Optional - Redirect URL for email signup links. Must be configured in Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email/phone, and metadata
- **session** (object) - Session object (null if email confirmation is enabled and not yet verified)

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token",
    "expires_in": 3600
  }
}
```

### Important Notes
- **Confirm email** setting determines if session is returned immediately
- If enabled: user returned, session is null until email verified
- If disabled: both user and session returned immediately
- For existing confirmed users: returns obfuscated user or "User already registered" error
- User is redirected to SITE_URL after email confirmation
- To fetch current user, use getUser() method
```

--------------------------------

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/signs-in-a-user-with-a-password

Receives the redirect from an external provider during the OAuth authentication process. This endpoint starts the process of creating an access and refresh token after successful external provider authentication.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

### Method
GET

### Endpoint
/callback

### Response
#### Redirect Response (302)
- **Status** - 302 Found - Redirect to callback URL with authentication tokens

### Response Codes
- **302** - Redirect with authentication tokens
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Create a new user account with email or phone authentication. Returns user object and session based on email confirmation settings. Supports additional metadata and custom redirect URLs.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Email verification may be required based on project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom data object to store additional user metadata
- **redirectTo** (URL) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object (null if email confirmation is enabled and not yet verified)

#### Response Example
```json
{
  "user": {
    "id": "user-id",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Notes
- If Confirm email is enabled, user must verify email before session is created
- If Confirm email is disabled, both user and session are returned immediately
- Existing confirmed users will receive obfuscated response or error based on confirmation settings
- User is redirected to SITE_URL after email confirmation by default
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/installing

Create a new user account with email or phone and password. Supports optional user metadata and redirect URLs. Email confirmation may be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Returns user object and session based on email/phone confirmation settings. Supports custom metadata and redirect URLs for email signups.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom data object to store additional user metadata
- **redirectTo** (string) - Optional - Redirect URL for email signups. Must be a configured redirect URL for the Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object containing access token and refresh token (null if email confirmation is enabled)

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Notes
- By default, users must verify their email before logging in (configurable)
- If Confirm email is enabled: user is returned but session is null
- If Confirm email is disabled: both user and session are returned
- Users are redirected to SITE_URL upon email confirmation (configurable)
- For existing confirmed users: returns obfuscated user object or "User already registered" error
- Use getUser() to fetch the currently logged-in user
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/neq

Create a new user account with email or phone authentication. Supports optional metadata, custom redirect URLs, and CAPTCHA token validation. Email confirmation behavior depends on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Returns user object and session based on confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom metadata object for storing additional user information
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be configured in Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for validation

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Authentication session. Null if email confirmation is enabled and not yet verified.

### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Notes
- If Confirm email is enabled: user returned but session is null
- If Confirm email is disabled: both user and session are returned
- For existing confirmed users: returns obfuscated user or 'User already registered' error
- Email confirmation redirects to SITE_URL by default
- Use getUser() to fetch currently logged-in user
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/neq

Creates a new user account with email and password credentials. Email verification may be required depending on project settings. Returns user object and session (if email confirmation is disabled).

```APIDOC
## POST /auth/signup - Register New User

### Description
Creates a new user account. Email verification behavior depends on project configuration.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with user details
- **session** (object) - Session object (null if email confirmation enabled)

### Important Notes
- By default, users must verify email before logging in
- If Confirm email is disabled, both user and session are returned
- If Confirm email is enabled, session is null and user must confirm
- If SignUp is called for existing confirmed user with Confirm email/phone enabled, returns obfuscated user
- If SignUp is called for existing confirmed user with either setting disabled, returns "User already registered" error
```

--------------------------------

### Detailed EXPLAIN ANALYZE Output Example

Source: https://supabase.com/docs/guides/troubleshooting/understanding-postgresql-explain-output-Un9dqX

Example output from EXPLAIN ANALYZE showing actual execution metrics including timing, rows removed by filters, and planning time. Demonstrates how to interpret real execution data for query optimization.

```text
Seq Scan on users  (cost=0.00..19.00 rows=1 width=240) (actual time=0.026..0.026 rows=1 loops=1)
  Filter: (user_id = 1)
  Rows Removed by Filter: 999
Planning Time: 0.135 ms
```

--------------------------------

### GET /realtime/selectAsFlow

Source: https://supabase.com/docs/reference/kotlin

Returns real-time data from a table as a Flow, emitting initial data and listening for changes. Supports filtering and caching by primary key. Requires both Realtime and Postgrest plugins to be installed.

```APIDOC
## GET /realtime/selectAsFlow

### Description
Listens to database changes and returns real-time data from your table as a Flow. Emits the initial data and then listens for subsequent changes.

### Method
GET

### Endpoint
/realtime/selectAsFlow

### Parameters
#### Path Parameters
- **primaryKey** (KProperty1<Data, Value> or PrimaryKey<Data>) - Required - The primary key to cache the data by. Can be a property reference or a custom primary key.

#### Query Parameters
- **channelName** (String) - Optional - The name of the channel to use for realtime updates. If null, a channel name following the format "schema:table:id" will be used.
- **filter** (PostgrestFilterBuilder.() -> Unit or FilterOperation) - Optional - The filter to apply to the data.

### Request Example
```kotlin
val flow: Flow<List<Country>> = supabase.from("countries").selectAsFlow(Country::id)
flow.collect {
    for (country in it) {
        println(country.name)
    }
}
```

### Response
#### Success Response (200)
- **data** (Flow<List<T>>) - A Flow emitting lists of data items matching the query.

### Notes
- Realtime is disabled by default for new tables. Enable it by managing replication.
- The type parameter T must be a serializable class.
- For more control over realtime updates, use the Realtime plugin directly.
```

--------------------------------

### POST /buckets

Source: https://supabase.com/docs/reference/csharp/lt

Creates a new Storage bucket.

```APIDOC
## POST /buckets

### Description
Creates a new Storage bucket.

### Permissions
* `buckets` permissions: `insert`
* `objects` permissions: none

### Method
POST

### Endpoint
`/buckets`

### Parameters
#### Path Parameters
_None_

#### Query Parameters
_None_

#### Request Body
- **name** (string) - Required - The name for the new bucket.
- **public** (boolean) - Optional - Whether the bucket should be public. Defaults to `false` if not specified.

### Request Example
```json
{
  "name": "avatars",
  "public": true
}
```

### Response
#### Success Response (201)
- **message** (string) - A success message.

#### Response Example
```json
{
  "message": "Bucket created successfully"
}
```

### SDK Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
```
```

--------------------------------

### CLI Command: supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-postgres-config

Starts the local Supabase database instance. Optionally, it can restore the database from a specified logical backup file.

```APIDOC
## CLI Command: supabase db start

### Description
Starts the local Supabase database instance. Optionally, it can restore the database from a specified logical backup file.

### Command
supabase db start [flags]

### Parameters
#### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Example Usage
```
supabase db start
```
```

--------------------------------

### Test Live Edge Function with Curl

Source: https://supabase.com/docs/guides/functions/quickstart

Verify a deployed Edge Function by sending a POST request using curl. This requires the project's publishable (anon) key for authorization and a JSON payload.

```bash
curl --request POST 'https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_PUBLISHABLE_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Production"}'
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-verifyotp

Create a new user account with email or phone authentication. Supports optional metadata, custom redirect URLs, and CAPTCHA verification. Email confirmation can be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Returns user object and session based on confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom metadata object to store additional user information
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email/phone, and metadata
- **session** (object) - Session object (null if email confirmation is required)
- **user.id** (string) - Unique user identifier
- **user.email** (string) - User email address
- **user.user_metadata** (object) - Custom user metadata

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Notes
- If Confirm email is enabled, session is null until email verification
- If Confirm email is disabled, both user and session are returned
- Existing confirmed users return obfuscated user object or error based on confirmation settings
- User is redirected to SITE_URL after email confirmation by default
```

--------------------------------

### CLI Command supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-storage-cp

The `supabase db start` command initiates the local Supabase database stack. It can optionally restore the database from a specified logical backup file.

```APIDOC
## CLI Command supabase db start

### Description
Starts the local Supabase database stack. This command is essential for local development and can be used to initialize the database from a backup.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```bash
supabase db start
```

### Response
#### Success Response (200)
The command successfully starts the local database stack. Output typically includes messages about services starting.

#### Response Example
```
# Example output (not provided in source, inferring)
Starting supabase local development setup...
supabase local services started successfully.
```
```

--------------------------------

### Auth Admin Setup

Source: https://supabase.com/docs/reference/javascript/storage-from-tobase64

Initialize a server-side Supabase auth client with service_role key for accessing admin authentication methods. This setup is required before calling any admin auth operations.

```APIDOC
## Auth Admin Setup

### Description
Initialize a server-side Supabase client with service_role key to access admin authentication methods.

### Important Security Notes
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should only be called on a trusted server
- Never expose your `service_role` key in the browser

### Setup Example
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### GET /v1/projects/{ref}/custom-hostname

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Retrieves a project's custom hostname configuration. This beta endpoint returns the current custom hostname setup including SSL validation status and ownership verification details.

```APIDOC
## GET /v1/projects/{ref}/custom-hostname

### Description
Gets project's custom hostname configuration.

### Method
GET

### Endpoint
`/v1/projects/{ref}/custom-hostname`

### Authentication
- **OAuth scopes**: domains:read
- **Fine-grained token permissions**: custom_domain_read

### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **status** (string) - Current status of the custom hostname
- **custom_hostname** (string) - The custom hostname
- **data** (object) - Configuration data including SSL validation records and ownership verification

#### Response Example
```json
{
  "status": "1_not_started",
  "custom_hostname": "example.com",
  "data": {
    "success": true,
    "errors": [],
    "messages": [],
    "result": {
      "id": "hostname_id",
      "hostname": "example.com",
      "ssl": {
        "status": "pending",
        "validation_records": [
          {
            "txt_name": "_acme-challenge.example.com",
            "txt_value": "validation_token"
          }
        ],
        "validation_errors": []
      },
      "ownership_verification": {
        "type": "CNAME",
        "name": "example.com",
        "value": "verify.supabase.com"
      },
      "custom_origin_server": "origin.supabase.com",
      "verification_errors": [],
      "status": "active"
    }
  }
}
```

### Response Codes
- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too Many Requests
- **500** - Internal Server Error
```

--------------------------------

### Setup Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/auth-admin-inviteuserbyemail

Initialize a Supabase client with the Auth plugin and service_role key to access admin authentication methods. The service_role key should never be exposed in the browser.

```APIDOC
## Setup Auth Admin Client

### Description
Initialize a Supabase client with the Auth plugin configured for admin operations using the service_role key.

### Configuration
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
}
supabase.auth.importAuthToken("service_role")
val adminAuthClient = supabase.auth.admin
```

### Security Notes
- Service role key must only be used on trusted servers
- Never expose service_role key in browser or client applications
- All admin methods require the service_role key
```

--------------------------------

### Enable pg_cron Extension and Grant Permissions in SQL

Source: https://supabase.com/docs/guides/cron/install

Enables the pg_cron extension in the pg_catalog schema and sets up the required permissions for the postgres user. This setup is essential for scheduling background tasks.

```sql
create extension pg_cron with schema pg_catalog;

grant usage on schema cron to postgres;
grant all privileges on all tables in schema cron to postgres;
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-getsession

Create a new user account with email or phone authentication. Supports password-based signup with optional metadata and redirect URLs. Email confirmation may be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Returns user object and session based on confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom data object for storing additional user metadata
- **redirectTo** (URL) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object (null if email confirmation is enabled)

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Notes
- If Confirm email is enabled: user returned but session is null
- If Confirm email is disabled: both user and session are returned
- User redirected to SITE_URL after email confirmation
- For existing confirmed users: returns obfuscated user or "User already registered" error
- Use getUser() to fetch currently logged-in user
```

--------------------------------

### Sign Up New User with Email and Password

Source: https://supabase.com/docs/guides/auth/passwords

Multi-language implementation of user sign up functionality using Supabase authentication. Accepts email and password, with optional redirect URL configuration. Returns authentication data or error response.

```javascript
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'valid.email@supabase.io',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
}
```

```dart
Future<void> signUpNewUser() async {
  final AuthResponse res = await supabase.auth.signUp(
    email: 'valid.email@supabase.io',
    password: 'example-password'
  );
}
```

```swift
let response = try await supabase.auth.signUp(
  email: "valid.email@supabase.io",
  password: "example-password",
)
```

```kotlin
suspend fun signUpNewUser() {
	supabase.auth.signUpWith(Email) {
		email = "valid.email@supabase.io"
		password = "example-password"
	}
}
```

```python
data = supabase.auth.sign_up({
  'email': 'valid.email@supabase.io',
  'password': 'example-password',
})
```

--------------------------------

### Register OAuth Client using Supabase SDKs and REST API

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Demonstrates how to programmatically create a new OAuth client. This operation requires administrative privileges using the service_role key and allows configuration of redirect URIs, client types, and authentication methods.

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-service-role-key' // Use service_role key for admin operations
)

// Create an OAuth client
const { data, error } = await supabase.auth.admin.oauth.createClient({
  name: 'My Third-Party App',
  redirect_uris: ['https://my-app.com/auth/callback', 'https://my-app.com/auth/silent-callback'],
  client_type: 'confidential',
  // Optional: defaults to 'client_secret_basic' for confidential, 'none' for public
  token_endpoint_auth_method: 'client_secret_basic',
})

if (error) {
  console.error('Error creating client:', error)
} else {
  console.log('Client created:', data)
  console.log('Client ID:', data.client_id)
  console.log('Client Secret:', data.client_secret) // Store this securely!
}
```

```python
from supabase import create_client

supabase = create_client(
    'https://your-project.supabase.co',
    'your-service-role-key'  # Use service_role key for admin operations
)

# Create an OAuth client
response = supabase.auth.admin.oauth.create_client({
    'name': 'My Third-Party App',
    'redirect_uris': [
        'https://my-app.com/auth/callback',
        'https://my-app.com/auth/silent-callback'
    ],
    'client_type': 'confidential',
    # Optional: defaults to 'client_secret_basic' for confidential, 'none' for public
    'token_endpoint_auth_method': 'client_secret_basic'
})

print('Client created:', response)
print('Client ID:', response.client_id)
print('Client Secret:', response.client_secret)  # Store this securely!
```

```bash
curl -X POST 'https://<project-ref>.supabase.co/auth/v1/admin/oauth/clients' \
  -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Third-Party App",
    "redirect_uris": [
      "https://my-app.com/auth/callback",
      "https://my-app.com/auth/silent-callback"
    ],
    "client_type": "confidential",
    "token_endpoint_auth_method": "client_secret_basic"
  }'
```

```bash
curl -X POST 'http://localhost:54321/auth/v1/admin/oauth/clients' \
  -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Local Dev App",
    "redirect_uris": ["http://localhost:3000/auth/callback"],
    "client_type": "confidential",
    "token_endpoint_auth_method": "client_secret_post"
  }'
```

--------------------------------

### Setup Supabase Analytics with Postgres Backend via Docker Compose

Source: https://supabase.com/docs/reference/self-hosting-analytics/undefined

This code snippet demonstrates how to start the Supabase Analytics server using `docker compose` with a Postgres backend. It assumes the `supabase/supabase` repository has been cloned and requires navigating to the `docker` directory before execution.

```shell
cd docker
docker compose -f docker-compose.yml up
```

--------------------------------

### Configure RLS Policies for Realtime

Source: https://supabase.com/docs/guides/realtime/getting_started

Implement Row Level Security (RLS) policies to authorize users for sending and receiving messages. These SQL commands ensure that only authenticated users can interact with specific Realtime channels.

```sql
-- Allow authenticated users to receive broadcasts
CREATE POLICY "authenticated_users_can_receive" ON realtime.messages
  FOR SELECT TO authenticated USING (true);

-- Allow authenticated users to send broadcasts
CREATE POLICY "authenticated_users_can_send" ON realtime.messages
  FOR INSERT TO authenticated WITH CHECK (true);
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/kotlin/ilike

Creates a new user account. Email verification may be required based on project settings. The response varies depending on the 'Confirm email' setting.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. Email verification may be required based on project settings. The response varies depending on the 'Confirm email' setting.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- **email** (String) - Required - The user's email address.
- **password** (String) - Required - The user's password.
- **provider** (String) - Required - The authentication provider (e.g., `"email"`, `"phone"`).
- **redirectUrl** (String) - Optional - The URL to redirect to after signup.
- **data** (Object) - Optional - Additional user metadata to store.

### Request Example
{
  "email": "example@email.com",
  "password": "example-password",
  "provider": "email"
}

### Response
#### Success Response (200)
- **user** (Object) - The created user object. If email confirmation is enabled, `confirmed_at` will be `null`.
- **session** (Object) - The session object if email confirmation is disabled, otherwise `null`.

#### Response Example (Email confirmation enabled)
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "example@email.com",
    "confirmed_at": null,
    "created_at": "2023-10-27T10:00:00Z"
  },
  "session": null
}

#### Response Example (Email confirmation disabled)
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "example@email.com",
    "confirmed_at": "2023-10-27T10:00:00Z",
    "created_at": "2023-10-27T10:00:00Z"
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
    "expires_in": 3600,
    "token_type": "bearer"
  }
}

#### Error Response (400)
- **message** (String) - Error message, e.g., `"User already registered"`.

#### Error Example
{
  "message": "User already registered"
}
```

--------------------------------

### Start Supabase Docker Compose Stack with BigQuery Analytics

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-source

This command sequence navigates into the 'docker' directory of the Supabase repository and then initiates the self-hosting stack using `docker compose`. It assumes that the `docker-compose.yml` file has been configured to enable the BigQuery backend for analytics, following the setup instructions provided earlier in the document.

```bash
cd docker
docker compose -f docker-compose.yml
```

--------------------------------

### GET /from/{table}/selectAsFlow

Source: https://supabase.com/docs/reference/kotlin/auth-mfa-enroll

Returns real-time data from a table as a Flow, emitting initial data and listening for changes. Supports filtering and caching by primary key. Requires both Realtime and Postgrest plugins to be installed.

```APIDOC
## GET /from/{table}/selectAsFlow

### Description
Listens to database changes and returns real-time data from your table as a Flow. Emits the initial data and then listens for subsequent changes.

### Method
GET

### Endpoint
/from/{table}/selectAsFlow

### Parameters
#### Path Parameters
- **table** (String) - Required - The name of the table to listen to.

#### Query Parameters
- **primaryKey** (KProperty1<Data, Value> or PrimaryKey<Data>) - Required - The primary key to cache the data by. Can be a property reference or a custom primary key.
- **channelName** (String) - Optional - The name of the channel to use for realtime updates. If null, a channel name following the format "schema:table:id" will be used.
- **filter** (PostgrestFilterBuilder.() -> Unit or FilterOperation) - Optional - The filter to apply to the data.

### Request Example
```kotlin
val flow: Flow<List<Country>> = supabase.from("countries").selectAsFlow(Country::id)
flow.collect {
    for (country in it) {
        println(country.name)
    }
}
```

### Response
#### Success Response (200)
- **data** (Flow<List<T>>) - A Flow emitting lists of data that match the query, updated in real-time.

### Notes
- Realtime is disabled by default for new tables. Enable it by managing replication.
- The type parameter T must be a serializable class.
- For more control over realtime updates, use the Realtime plugin directly.
```

--------------------------------

### Create Postgres Publication for All Tables

Source: https://supabase.com/docs/guides/database/replication/replication-setup

Creates a publication that tracks changes for all tables in the entire database. This is the most comprehensive option for replication setup.

```sql
create publication pub_all_tables for all tables;
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/using-modifiers

Creates a new user account with email and password. Email verification may be required based on project settings. Returns user and session information, with session being null if email confirmation is enabled.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with email and password authentication.

### Method
POST

### Endpoint
/auth/signup

### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Code Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response (200 OK)
- **user** (object) - User object with authentication details
- **session** (object) - Session object (null if email confirmation is enabled)

### Important Notes
- If Confirm email is enabled: user is returned but session is null
- If Confirm email is disabled: both user and session are returned
- User is redirected to SITE_URL upon email confirmation
- Additional redirect URLs can be configured in project settings
- If SignUp is called for existing confirmed user with both confirmations enabled: obfuscated user object is returned
- If either confirmation is disabled: "User already registered" error is returned
```

--------------------------------

### GET /settings

Source: https://supabase.com/docs/reference/self-hosting-auth/passwordless-sign-in-method-for-email-or-phone

Returns the configuration settings for the GoTrue server, including signup settings, external provider availability, and email/phone confirmation settings.

```APIDOC
## GET /settings

### Description
Returns the configuration settings for the GoTrue server, including signup settings, external provider availability, and email/phone confirmation settings.

### Method
GET

### Endpoint
/settings

### Response
#### Success Response (200)
- **disable_signup** (boolean) - Whether user signup is disabled
- **external** (object) - External provider availability
  - **apple** (boolean) - Apple OAuth enabled
  - **azure** (boolean) - Azure OAuth enabled
  - **bitbucket** (boolean) - Bitbucket OAuth enabled
  - **discord** (boolean) - Discord OAuth enabled
  - **email** (boolean) - Email authentication enabled
  - **facebook** (boolean) - Facebook OAuth enabled
  - **github** (boolean) - GitHub OAuth enabled
  - **gitlab** (boolean) - GitLab OAuth enabled
  - **google** (boolean) - Google OAuth enabled
  - **keycloak** (boolean) - Keycloak OAuth enabled
  - **linkedin** (boolean) - LinkedIn OAuth enabled
  - **notion** (boolean) - Notion OAuth enabled
  - **phone** (boolean) - Phone authentication enabled
  - **saml** (boolean) - SAML authentication enabled
  - **slack** (boolean) - Slack OAuth enabled
  - **spotify** (boolean) - Spotify OAuth enabled
  - **twitch** (boolean) - Twitch OAuth enabled
  - **twitter** (boolean) - Twitter OAuth enabled
  - **workos** (boolean) - WorkOS OAuth enabled
  - **zoom** (boolean) - Zoom OAuth enabled
- **mailer_autoconfirm** (boolean) - Whether email is auto-confirmed
- **phone_autoconfirm** (boolean) - Whether phone is auto-confirmed
- **sms_provider** (string) - SMS provider name

#### Response Example
{
  "disable_signup": false,
  "external": {
    "apple": true,
    "google": true,
    "github": true,
    "email": true,
    "phone": true
  },
  "mailer_autoconfirm": false,
  "phone_autoconfirm": false,
  "sms_provider": "twilio"
}

### Response Codes
- **200** - Settings retrieved successfully
```

--------------------------------

### Initialize books table and sample data in SQL

Source: https://supabase.com/docs/guides/database/full-text-search

Creates a books table with columns for title, author, and description. It also populates the table with sample records to demonstrate full-text search capabilities.

```sql
create table books (
  id serial primary key,
  title text,
  author text,
  description text
);

insert into books
  (title, author, description)
values
  (
    'The Poky Little Puppy',
    'Janette Sebring Lowrey',
    'Puppy is slower than other, bigger animals.'
  ),
  ('The Tale of Peter Rabbit', 'Beatrix Potter', 'Rabbit eats some vegetables.'),
  ('Tootle', 'Gertrude Crampton', 'Little toy train has big dreams.'),
  (
    'Green Eggs and Ham',
    'Dr. Seuss',
    'Sam has changing food preferences and eats unusually colored food.'
  ),
  (
    'Harry Potter and the Goblet of Fire',
    'J.K. Rowling',
    'Fourth year of school starts, big drama ensues.'
  );
```

--------------------------------

### GraphQL Query: One-to-One Relationship (Employee to EmailAddress)

Source: https://supabase.com/docs/guides/graphql/api

This section explains how to query a one-to-one relationship, fetching an Employee and their unique EmailAddress. It includes the SQL setup, GraphQL type definition for Employee, and an example GraphQL query.

```APIDOC
## GraphQL Query: One-to-One Relationship (Employee to EmailAddress)

### Description
This query retrieves an Employee and their uniquely associated EmailAddress, demonstrating a one-to-one relationship.

### Type
Query

### Fields
- **employeeCollection** (EmployeeConnection) - The root field to query employees.
  - **edges** (EmployeeEdge) - Connection edges.
    - **node** (Employee) - The Employee entity.
      - **name** (String!) - The name of the employee.
      - **emailAddress** (EmailAddress) - The uniquely associated email address.
        - **address** (String!) - The email address.
        - **employee** (Employee) - The associated employee (for reverse lookup).
          - **name** (String!) - The name of the employee.

### Request Example
```graphql
{
  employeeCollection {
    edges {
      node {
        name
        emailAddress {
          address
          employee {
            name
          }
        }
      }
    }
  }
}
```

### Response
#### Success Response (200)
- **data** (Object) - The root data object.
  - **employeeCollection** (Object) - The collection of employees.
    - **edges** (Array) - An array of employee edges.
      - **node** (Object) - An employee node.
        - **name** (String) - The name of the employee.
        - **emailAddress** (Object) - The associated email address.
          - **address** (String) - The email address string.
          - **employee** (Object) - The employee associated with this email address.
            - **name** (String) - The name of the employee.

#### Response Example
```json
{
  "data": {
    "employeeCollection": {
      "edges": [
        {
          "node": {
            "name": "Foo Barington",
            "emailAddress": {
              "address": "foo@bar.com",
              "employee": {
                "name": "Foo Barington"
              }
            }
          }
        }
      ]
    }
  }
}
```
```

--------------------------------

### CLI supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-sso-update

Starts the Supabase local database. This command can optionally restore the database from a logical backup file.

```APIDOC
## CLI supabase db start

### Description
Starts the Supabase local database.

### Method
CLI

### Endpoint
supabase db start

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```
supabase db start
```

### Response
#### Success Response (200)
- No explicit fields.

#### Response Example
```
(No response example provided)
```
```

--------------------------------

### Installation - NuGet Package

Source: https://supabase.com/docs/reference/csharp/storage-from-createsignedurl

Install the Supabase C# client library from NuGet package manager. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Installation

### Description
Install the Supabase C# client library from NuGet package repository.

### Installation Command
```
dotnet add package supabase
```

### Package Source
- Source: nuget.org
- Package Name: supabase

### Notes
- The C# client library is community-maintained
- Official maintainer: Joseph Schultz
- Contributors: Will Iverson, Ben Randall, Rhuan Barros
```

--------------------------------

### GraphQL Query: Many-to-One Relationship (BlogPost to Blog)

Source: https://supabase.com/docs/guides/graphql/api

This section illustrates querying a many-to-one relationship, retrieving a BlogPost and its associated Blog. It covers the SQL setup, GraphQL type definition for BlogPost, and an example GraphQL query.

```APIDOC
## GraphQL Query: Many-to-One Relationship (BlogPost to Blog)

### Description
This query retrieves a collection of BlogPosts, and for each BlogPost, it fetches the details of its associated Blog, demonstrating a many-to-one relationship.

### Type
Query

### Fields
- **blogPostCollection** (BlogPostConnection) - The root field to query blog posts.
  - **edges** (BlogPostEdge) - Connection edges.
    - **node** (BlogPost) - The BlogPost entity.
      - **title** (String!) - The title of the blog post.
      - **blog** (Blog) - The associated Blog record.
        - **name** (String!) - The name of the blog.

### Request Example
```graphql
{
  blogPostCollection {
    edges {
      node {
        title
        blog {
          name
        }
      }
    }
  }
}
```

### Response
#### Success Response (200)
- **data** (Object) - The root data object.
  - **blogPostCollection** (Object) - The collection of blog posts.
    - **edges** (Array) - An array of blog post edges.
      - **node** (Object) - A blog post node.
        - **title** (String) - The title of the blog post.
        - **blog** (Object) - The associated blog.
          - **name** (String) - The name of the blog.

#### Response Example
```json
{
  "data": {
    "blogPostCollection": {
      "edges": [
        {
          "node": {
            "title": "First Post",
            "blog": {
              "name": "My Awesome Blog"
            }
          }
        },
        {
          "node": {
            "title": "Second Post",
            "blog": {
              "name": "My Awesome Blog"
            }
          }
        }
      ]
    }
  }
}
```
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/removechannel

Create a new user account with email or phone number and password. Email verification may be required depending on project settings. Returns user object and session token upon successful signup.

```APIDOC
## POST /auth/signup - Create New User

### Description
Register a new user with email or phone authentication. Email or phone verification may be required based on project configuration. Returns user object and optional session depending on confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom metadata object to store additional user information
- **redirectTo** (URL) - Optional - Redirect URL for email confirmation link. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - New user object with id, email/phone, and metadata
- **session** (object) - Authentication session (null if email confirmation required)
- **identities** (array) - User identity providers

### Important Notes
- By default, users must verify their email before logging in (configurable in project settings)
- If Confirm email is enabled: user is returned but session is null
- If Confirm email is disabled: both user and session are returned
- Users are redirected to SITE_URL after email confirmation (customizable)
- For existing confirmed users: returns obfuscated user object or "User already registered" error
- To fetch currently logged-in user, use getUser() method
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/csharp/containedby

Install the Supabase C# package from NuGet. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Installation

### Description
Install the Supabase C# client library from NuGet package manager.

### Package
supabase

### Installation Command
```
dotnet add package supabase
```

### Requirements
- .NET project with NuGet package manager
- Internet connection to access nuget.org

### Notes
- The C# client library is maintained by the Supabase community
- Official maintainer: Joseph Schultz
```

--------------------------------

### Manage Local Environment and Deploy to Supabase Cloud

Source: https://supabase.com/docs/guides/ai/examples/nextjs-vector-search

Commands to start the local Supabase stack and push local database migrations to a remote production project.

```bash
supabase start

supabase link --project-ref=your-project-ref

supabase db push
```

--------------------------------

### GraphQL Query: One-to-Many Relationship (Blog to BlogPosts)

Source: https://supabase.com/docs/guides/graphql/api

This section demonstrates how to query a one-to-many relationship, fetching a Blog and its associated BlogPosts. It includes the SQL setup, GraphQL type definition for Blog, and an example GraphQL query.

```APIDOC
## GraphQL Query: One-to-Many Relationship (Blog to BlogPosts)

### Description
This query retrieves a collection of Blogs, and for each Blog, it fetches its associated BlogPosts, demonstrating a one-to-many relationship.

### Type
Query

### Fields
- **blogCollection** (BlogConnection) - The root field to query blogs.
  - **edges** (BlogEdge) - Connection edges.
    - **node** (Blog) - The Blog entity.
      - **name** (String!) - The name of the blog.
      - **blogPostCollection** (BlogPostConnection!) - Collection of blog posts related to this blog.
        - **edges** (BlogPostEdge) - Connection edges.
          - **node** (BlogPost) - The BlogPost entity.
            - **id** (Int!) - The unique identifier of the blog post.
            - **title** (String!) - The title of the blog post.

### Parameters
#### Query Arguments for blogPostCollection
- **first** (Int) - Optional - Query the first `n` records.
- **last** (Int) - Optional - Query the last `n` records.
- **before** (Cursor) - Optional - Query values before the provided cursor.
- **after** (Cursor) - Optional - Query values after the provided cursor.
- **offset** (Int) - Optional - Skip `n` values from the after cursor.
- **filter** (BlogPostFilter) - Optional - Filters to apply to the results set.
- **orderBy** ([BlogPostOrderBy!]) - Optional - Sort order to apply to the collection.

### Request Example
```graphql
{
  blogCollection {
    edges {
      node {
        name
        blogPostCollection {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
}
```

### Response
#### Success Response (200)
- **data** (Object) - The root data object.
  - **blogCollection** (Object) - The collection of blogs.
    - **edges** (Array) - An array of blog edges.
      - **node** (Object) - A blog node.
        - **name** (String) - The name of the blog.
        - **blogPostCollection** (Object) - The collection of blog posts for this blog.
          - **edges** (Array) - An array of blog post edges.
            - **node** (Object) - A blog post node.
              - **id** (Int) - The ID of the blog post.
              - **title** (String) - The title of the blog post.

#### Response Example
```json
{
  "data": {
    "blogCollection": {
      "edges": [
        {
          "node": {
            "name": "My Awesome Blog",
            "blogPostCollection": {
              "edges": [
                {
                  "node": {
                    "id": 1,
                    "title": "First Post"
                  }
                },
                {
                  "node": {
                    "id": 2,
                    "title": "Second Post"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}
```
```

--------------------------------

### Get Supabase SSO Project Info with Project Ref (CLI)

Source: https://supabase.com/docs/reference/cli/supabase-branches

Example command to retrieve all important SSO information for a Supabase project, specifying the project reference. This output is crucial for configuring SAML 2.0 identity providers and understanding your project's SSO capabilities.

```bash
supabase sso info --project-ref abcdefghijklmnopqrst
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-secrets-set

Initializes and starts the local Supabase database development stack. Can optionally restore from a backup file.

```APIDOC
## CLI Command supabase db start

### Description
Initializes and starts the local Supabase database development stack.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from.

### Request Example
```
supabase db start
```

### Response
#### Success Response (200)
- **Output** (string) - Confirmation that the local database and associated services have started successfully.

#### Response Example
```
Local database started successfully.
```
```

--------------------------------

### Install Supabase SSR packages

Source: https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=proxy&framework=nextjs&queryGroups=framework&queryGroups=environment

Installs the core Supabase client and the SSR helper package required for cookie-based authentication in JavaScript/TypeScript applications.

```bash
npm install @supabase/supabase-js @supabase/ssr
```

--------------------------------

### Local Development Server Setup

Source: https://supabase.com/docs/guides/functions/examples/send-emails

Commands to start the Supabase local development environment and serve the Edge Function without JWT verification. Enables testing the email function locally before deployment.

```bash
supabase start
supabase functions serve --no-verify-jwt --env-file .env
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/storage-from-move

Registers a new user with an email and password. Email verification might be required depending on project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account with the provided email and password. The behavior regarding email confirmation and session creation depends on the project's 'Confirm email' setting.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.

### Request Example
```json
{
  "email": "user@example.com",
  "password": "strong-password-123"
}
```

### Response
#### Success Response (200)
- **user** (object) - The newly created user object.
- **session** (object | null) - The user's session object if email confirmation is disabled; otherwise, null.

#### Response Example
```json
{
  "user": {
    "id": "uuid-user-id",
    "email": "user@example.com",
    "confirmed_at": null
  },
  "session": null
}
```
```

--------------------------------

### CLI Command: supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-gen

Starts the local Supabase development database.

```APIDOC
## CLI Command: supabase db start

### Description
Starts the local Supabase development database.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```bash
supabase db start
```

### Response
#### Success Response (0)
- **Output** (string) - The standard output from the command, typically indicating the successful start of the database services.

#### Response Example
```
# Example output for a successful start (not provided in source, inferred)
Started Supabase local development setup.
```
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-signup

Create a new user account with email or phone authentication. Supports password-based signup with optional metadata and redirect URLs. Email confirmation may be required depending on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone number and password. Optionally include user metadata and configure email redirect behavior.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom data object to store additional user metadata
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Authentication session (null if email confirmation required)
- **user.id** (string) - Unique user identifier
- **user.email** (string) - User email address
- **user.user_metadata** (object) - Custom user metadata

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": null
}
```

### Notes
- If Confirm email is enabled, user is returned but session is null
- If Confirm email is disabled, both user and session are returned
- User is redirected to SITE_URL after email confirmation
- For existing confirmed users, returns obfuscated user object or error depending on confirmation settings
```

--------------------------------

### GET /from/{table}/selectAsFlow

Source: https://supabase.com/docs/reference/kotlin/removechannel

Listens to real-time database changes from a specific table and returns data as a Flow. Emits initial data and then listens for subsequent changes. Requires both Realtime and Postgrest plugins to be installed.

```APIDOC
## GET /from/{table}/selectAsFlow

### Description
Returns real-time data from your table as a Flow. Emits the initial data and then listens for changes.

### Method
GET

### Endpoint
/from/{table}/selectAsFlow

### Parameters
#### Path Parameters
- **table** (String) - Required - The name of the table to listen to.

#### Query Parameters
- **primaryKey** (KProperty1<Data, Value> or PrimaryKey<Data>) - Required - The primary key to cache the data by. Can be a property reference or a custom primary key.
- **channelName** (String) - Optional - The name of the channel to use for realtime updates. If null, a channel name following the format "schema:table:id" will be used.
- **filter** (PostgrestFilterBuilder.() -> Unit or FilterOperation) - Optional - The filter to apply to the data.

### Request Example
```kotlin
val flow: Flow<List<Country>> = supabase.from("countries").selectAsFlow(Country::id)
flow.collect {
    for (country in it) {
        println(country.name)
    }
}
```

### Response
#### Success Response (200)
- **data** (Flow<List<T>>) - A Flow emitting lists of data objects of type T.

### Notes
- Realtime is disabled by default for new tables. Enable it by managing replication.
- The type parameter T must be a serializable class.
- For more control over realtime updates, use the Realtime plugin directly.
```

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/swift/auth-refreshsession

Instructions for initializing the Supabase Auth Admin client, which requires a `service_role` key and should only be used on a trusted server.

```APIDOC
## Auth Admin Client Setup

### Description
Any method under the `supabase.auth.admin` namespace requires a `service_role` key. These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the browser.

### Method
N/A (Client Initialization)

### Endpoint
N/A

### Parameters
No Parameters

### Request Example
```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: supabaseURL,
  supabaseKey: serviceRoleKey
)

// Access auth admin api
let adminAuthClient = supabase.auth.admin
```

### Response
N/A
```

--------------------------------

### GET /range - Limit Query to Range

Source: https://supabase.com/docs/reference/dart/auth-getsession

Limit the result set to rows within a specified range using starting and ending indices (inclusive). Useful for pagination and retrieving specific subsets of data.

```APIDOC
## range()

### Description
Limits the result to rows within the specified range, inclusive. Commonly used for pagination.

### Method
GET (when used with select())

### Parameters
- **from** (int) - Required - The starting index from which to limit the result.
- **to** (int) - Required - The last index to which to limit the result.
- **referencedTable** (String) - Optional - Set this to limit rows of referenced tables instead of the parent table.

### Usage Example
```dart
final data = await supabase
  .from('instruments')
  .select('name')
  .range(0, 1)
```

### Compatible With
- select()
- Pagination scenarios
```

--------------------------------

### POST /v1/projects/{ref}/read-replicas/setup

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Sets up a new read replica for the project in a specified region. Requires specific infrastructure write permissions.

```APIDOC
## POST /v1/projects/{ref}/read-replicas/setup\n\n### Description\nSets up a new read replica for the project in a specified region. Requires specific infrastructure write permissions.\n\n### Method\nPOST\n\n### Endpoint\n/v1/projects/{ref}/read-replicas/setup\n\n### Parameters\n#### Path Parameters\n- **ref** (string) - Required - Project ref\n\n#### Request Body\n- **read_replica_region** (enum) - Required - Accepted values (e.g., "us-east-1", "eu-west-1")\n\n### Request Example\n{\n  "read_replica_region": "us-east-1"\n}\n\n### Response\n#### Success Response (201)\n- No explicit fields defined, returns an empty object.\n\n#### Response Example\n{}
```

--------------------------------

### Auth Client Setup

Source: https://supabase.com/docs/reference/kotlin/auth-resetpasswordforemail

Initializes the Supabase Auth client. This client is essential for performing all authentication-related operations, such as user signup, login, and session management.

```APIDOC
## Auth Client Setup

### Description
Initializes the Supabase Auth client. This client is essential for performing all authentication-related operations, such as user signup, login, and session management.

### Method
N/A

### Endpoint
N/A

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- No request body.

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- No direct API response, this is a client-side setup.

#### Response Example
```json
{}
```
```

--------------------------------

### Install dotenv package

Source: https://supabase.com/docs/guides/auth/server-side/creating-a-client

Install the dotenv package to load environment variables from .env files. Available for npm, yarn, and pnpm package managers.

```bash
npm install dotenv
```

```bash
yarn add dotenv
```

```bash
pnpm add dotenv
```

--------------------------------

### CLI supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-postgres-config-update

Starts the local database stack, with an optional flag to initialize from a logical backup file.

```APIDOC
## CLI supabase db start

### Description
Starts the local database development stack.

### Method
CLI

### Endpoint
supabase db start [flags]

### Parameters
#### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to initialize the database.

### Request Example
```bash
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/admin-api

Create a new user account with email or phone authentication. By default, users must verify their email address before logging in unless email confirmation is disabled. Returns user object and session based on confirmation settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Email verification may be required based on project settings.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom data object to store additional user metadata
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object containing access token and refresh token. Null if email confirmation is enabled.

### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Behavior Notes
- If **Confirm email** is enabled: user returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- For existing confirmed users with both confirmations enabled: obfuscated user object returned
- For existing confirmed users with either confirmation disabled: "User already registered" error returned
- Users are redirected to SITE_URL after email confirmation by default
```

--------------------------------

### Docker Compose Setup for Postgres Backend Analytics

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-source

Bash commands to clone the Supabase repository and start the Analytics server with Postgres backend using Docker Compose. This sets up both Logflare (HTTP Analytics server) and Vector (logging pipeline) services required for analytics in self-hosted Supabase.

```bash
# clone the supabase/supabase repo, and run the following
cd docker
docker compose -f docker-compose.yml up
```

--------------------------------

### OR Pattern Matching with Regular Expressions - BigQuery SQL

Source: https://supabase.com/docs/guides/platform/advanced-log-filtering

Uses the pipe (|) operator to match multiple alternative patterns. This example finds messages with 'started' followed by either 'host' or 'authenticated', useful for matching multiple variations.

```sql
-- find event_messages that have the word 'started' followed by either the word "host" or "authenticated"
regexp_contains(event_message, 'started host|authenticated')
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/csharp/upsert

Install the Supabase C# client library from NuGet package manager. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Installation

### Description
Install Supabase C# client library from NuGet package repository.

### Package Manager
NuGet

### Installation Command
```
dotnet add package supabase
```

### Details
- Package: supabase
- Source: nuget.org
- Community-maintained library
- Required for all Supabase C# integrations
```

--------------------------------

### PostgreSQL: Basic SELECT and UPDATE Statements

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql

This SQL example illustrates concise `SELECT` and `UPDATE` statements. The `SELECT` query retrieves all records from the `employees` table where the `end_date` is null, while the `UPDATE` statement modifies the `end_date` for a specific employee identified by `employee_id`.

```sql
select *
from employees
where end_date is null;

update employees
set end_date = '2023-12-31'
where employee_id = 1001;
```

--------------------------------

### CLI supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Starts the local Supabase database stack. Optionally restores from a backup file.

```APIDOC
## CLI supabase db start

### Description
Starts the local Supabase database stack.

### Method
CLI

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```
supabase db start
```

### Response
#### Success Response (200)
- **output** (string) - Confirmation that the database has started.

#### Response Example
```
# Example output for a successful start (not provided in source, inferred)
Started Supabase local development stack.
```
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/swift/delete

Create a new user account with email and password credentials. Email verification may be required depending on project settings. Returns user object and session if email confirmation is disabled.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email and password. User must verify email before logging in if email confirmation is enabled in project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom metadata object to store additional user information
- **redirectTo** (URL) - Optional - Redirect URL for email signup links. Must be configured in Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object (null if email confirmation is enabled)

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Notes
- If Confirm email is enabled, session is null and user must verify email
- If Confirm email is disabled, both user and session are returned
- User is redirected to SITE_URL after email confirmation
- For existing confirmed users, behavior depends on confirmation settings
- Use getUser() to fetch currently logged-in user
```

--------------------------------

### Generate Bash Shell Completion - Supabase CLI

Source: https://supabase.com/docs/reference/cli/global-flags

Create autocompletion script for bash shell to enable command suggestions. Requires bash-completion package. Provides installation instructions for current session and permanent setup on Linux and macOS systems.

```bash
source <(supabase completion bash)
```

```bash
supabase completion bash > /etc/bash_completion.d/supabase
```

```bash
supabase completion bash > $(brew --prefix)/etc/bash_completion.d/supabase
```

--------------------------------

### GET /select - Get Query Execution Plan with EXPLAIN

Source: https://supabase.com/docs/reference/kotlin/auth-exchangecodeforsession

Returns the Postgres EXPLAIN execution plan for debugging slow queries. This endpoint helps identify performance bottlenecks by showing how the database executes your query.

```APIDOC
## GET /select - Get Query Execution Plan with EXPLAIN

### Description
Returns the Postgres EXPLAIN execution plan for a query. Useful for debugging slow queries and understanding query performance. Must be enabled in project settings.

### Method
GET

### Endpoint
/from("{table}").select()

### Parameters
#### Path Parameters
- **table** (string) - Required - The name of the table to query

#### Query Parameters
- **explain** (boolean) - Optional - Set to true to return execution plan
- **analyze** (boolean) - Optional - If true, execute the query and return actual run time
- **verbose** (boolean) - Optional - If true, return query identifier and output columns
- **settings** (boolean) - Optional - If true, include configuration parameters affecting query planning
- **buffers** (boolean) - Optional - If true, include buffer usage information
- **wal** (boolean) - Optional - If true, include WAL record generation information
- **format** (string) - Optional - Output format: "text" (default) or "json"

### Request Example
```kotlin
val result = supabase.from("characters").select {
    explain()
}
```

### Response
#### Success Response (200)
- **data** (string or object) - The execution plan in specified format (text or JSON)
- **status** (integer) - HTTP status code

#### Response Example
```
Seq Scan on characters (cost=0.00..35.50 rows=1000 width=32)
```

### Notes
- EXPLAIN is not enabled by default as it can reveal sensitive database information
- Best practice: only enable for testing environments
- For production use, protect with pre-request functions
- Refer to Performance Debugging Guide for enabling functionality
```

--------------------------------

### Implement SvelteKit Server-side OAuth Callback (JavaScript)

Source: https://supabase.com/docs/guides/auth/social-login/auth-azure

This JavaScript snippet provides the starting structure for a SvelteKit server-side `GET` handler (`src/routes/auth/callback/+server.js`) for an OAuth callback. It demonstrates how to import the `redirect` utility from `@sveltejs/kit` and access the event object, which is essential for processing the authorization code.

```js
import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
	const {

```

--------------------------------

### CLI Command: supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-migration-up

Starts the local Supabase database stack. Optionally, it can restore the database from a specified backup file.

```APIDOC
## CLI Command: supabase db start

### Description
Starts the local Supabase database stack. Optionally, it can restore the database from a specified backup file.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```bash
supabase db start
```

### Response
#### Success Response (CLI Output)
- **Output** (string) - The CLI output indicating the successful start of the database.

#### Response Example
```
Local database started successfully.
```
```

--------------------------------

### Execute Postgres EXPLAIN query plan in Supabase

Source: https://supabase.com/docs/reference/swift/auth-admin-createuser

Get the execution plan of a Supabase query using the explain() method for performance debugging. This works on any query including rpc() calls and write operations. The EXPLAIN functionality must be enabled through the Performance Debugging Guide and should only be used in testing environments unless additional protection is provided.

```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

--------------------------------

### Sign up new user with email and password using Supabase Auth in Swift

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Provides an example of signing up a new user with an email and password using Supabase authentication in Swift. This method is part of the `supabase.auth` module and typically requires email verification unless disabled in the project settings.

```Swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

--------------------------------

### GET /realtime/acreate_client

Source: https://supabase.com/docs/reference/python/using-filters

Initializes a new Supabase client for Realtime functionality.

```APIDOC
## GET /realtime/acreate_client

### Description
Initializes a new Supabase client using the `acreate_client()` method for Realtime functionality.  This method is asynchronous and must be awaited.

### Method
GET

### Endpoint
/realtime/acreate_client

### Parameters
#### Query Parameters
- **url** (string) - Required - Supabase URL.
- **key** (string) - Required - Supabase Key.

### Request Example
```json
{
  "url": "your_supabase_url",
  "key": "your_supabase_key"
}
```

### Response
#### Success Response (200)
- **supabase** (AsyncClient) - The initialized Supabase client.

#### Response Example
```json
{
  "supabase": "AsyncClient object"
}
```
```

--------------------------------

### Listen and Send Messages with Supabase Client Libraries

Source: https://supabase.com/docs/guides/realtime/getting_started

Demonstrates how to subscribe to broadcast events and send messages using Supabase client libraries across multiple programming languages. The listener receives messages on a specific event channel, while the send method broadcasts messages to all subscribers. Requires an active Supabase channel connection.

```typescript
// Listen for messages
channel
  .on('broadcast', { event: 'message_sent' }, (payload: { payload: any }) => {
    console.log('New message:', payload.payload)
  })
  .subscribe()

// Send a message
channel.send({
  type: 'broadcast',
  event: 'message_sent',
  payload: {
    text: 'Hello, world!',
    user: 'john_doe',
    timestamp: new Date().toISOString(),
  },
})
```

```dart
// Listen for messages
channel.onBroadcast(
  event: 'message_sent',
  callback: (payload) {
    print('New message: ${payload[\'payload\']}');
  },
).subscribe();

// Send a message
channel.sendBroadcastMessage(
  event: 'message_sent',
  payload: {
    \'text\': \'Hello, world!\',
    \'user\': \'john_doe\',
    \'timestamp\': DateTime.now().toIso8601String(),
  },
);
```

```swift
// Listen for messages
await channel.onBroadcast(event: "message_sent") { message in
  print("New message: \(message.payload)")
}

let status = await channel.subscribe()

// Send a message
await channel.sendBroadcastMessage(
  event: "message_sent",
  payload: [
    "text": "Hello, world!",
    "user": "john_doe",
    "timestamp": ISO8601DateFormatter().string(from: Date())
  ]
)
```

```python
# Listen for messages
def message_handler(payload):
    print(f"New message: {payload[\'payload\']}")

channel.on_broadcast(event="message_sent", callback=message_handler).subscribe()

# Send a message
channel.send_broadcast_message(
    event="message_sent",
    payload={
        "text": "Hello, world!",
        "user": "john_doe",
        "timestamp": datetime.now().isoformat()
    }
)
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/kotlin/auth-onauthstatechange

Creates a new user account with an email and password. The behavior regarding email verification and automatic login depends on the project's 'Confirm email' setting.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in your project.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- **redirectUrl** (string) - Optional - The URL to redirect the user to after a successful signup or email confirmation. If not specified, the platform-specific default will be used.

#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.
- **provider** (string) - Required - The authentication provider to use for signup (e.g., "Email", "Phone").

### Request Example
```json
{
  "email": "example@email.com",
  "password": "example-password",
  "provider": "Email"
}
```

### Response
#### Success Response (200)
- **user** (object or null) - If 'Confirm email' is enabled, an obfuscated user object is returned, and the user is not logged in automatically. If 'Confirm email' is disabled, `null` is returned, and the user is logged in automatically.

#### Response Example
```json
{
  "user": {
    "id": "uuid-of-user",
    "email": "example@email.com",
    "created_at": "2023-01-01T12:00:00Z"
  }
}
```

#### Error Response (400, 409)
- **message** (string) - An error message, e.g., "User already registered" if the user exists and certain confirmation settings are disabled.

#### Error Example
```json
{
  "message": "User already registered"
}
```
```

--------------------------------

### Create a Bucket API Response Example

Source: https://supabase.com/docs/reference/self-hosting-storage/moves-an-object

Example JSON response for successfully creating a new storage bucket. The response confirms the bucket's name upon successful creation.

```json
{
  "name": "avatars"
}
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-signinwithidtoken

Create a new user account with email or phone authentication. Supports password-based signup with optional metadata and custom redirect URLs. Email confirmation may be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Returns user object and session based on confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password for authentication.
- **data** (object) - Optional - Custom data object to store additional user metadata.
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object (null if email confirmation is enabled)

### Important Notes
- **Confirm email** setting determines if users must verify email before login
  - If enabled: user returned but session is null
  - If disabled: both user and session are returned
- Users are redirected to SITE_URL after email confirmation
- For existing confirmed users: returns obfuscated user object or "User already registered" error
- To fetch currently logged-in user, use getUser()

### Error Handling
- **User already registered** - Returned when signup called for existing confirmed user (if confirmation disabled)
- Invalid email or phone format
- Password does not meet requirements
```

--------------------------------

### Setup Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/rpc

Initialize a Supabase client with service_role key for accessing admin authentication methods. This setup should only be performed on trusted servers and the service_role key must never be exposed in the browser.

```APIDOC
## Setup Auth Admin Client

### Description
Initialize a Supabase client with service_role key to access admin authentication methods.

### Configuration
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```

### Security Note
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should be called on a trusted server only
- Never expose your `service_role` key in the browser
```

--------------------------------

### Authentication: Sign In User with Email/Password (Supabase .NET)

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

This C# example demonstrates how to sign in an existing user using their email and password with Supabase Authentication. A successful sign-in returns a user session, enabling further authenticated operations.

```csharp
var session = await supabase.Auth.SignIn(email, password);
```

--------------------------------

### GET /characters - Limit Query Results by Range

Source: https://supabase.com/docs/reference/kotlin/auth-admin-generatelink

Limits the query results to a specific range of rows, inclusive of the start and end values. This is useful for pagination or fetching specific segments of data, and can also be applied to foreign tables.

```APIDOC
## GET /characters

### Description
Limits the query results to a specific range of rows, inclusive of the start and end values. This is useful for pagination or fetching specific segments of data, and can also be applied to foreign tables.

### Method
GET

### Endpoint
/characters

### Parameters
#### Request Body
- **from** (Long) - Required - The start of the range (inclusive).
- **to** (Long) - Required - The end of the range (inclusive).
- **referencedTable** (String) - Optional - The foreign table to limit by.

### Request Example
```kotlin
supabase.from("characters").select {
    range(1L..5L)
}
```

### Response
#### Success Response (200)
- **array_of_objects** (Array) - An array of objects within the specified range.

#### Response Example
```json
[
  {
    "id": 1,
    "name": "Han"
  },
  {
    "id": 2,
    "name": "Katniss"
  },
  {
    "id": 3,
    "name": "Frodo"
  },
  {
    "id": 4,
    "name": "Leia"
  },
  {
    "id": 5,
    "name": "Gimli"
  }
]
```
```

--------------------------------

### Setup Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/auth-admin-getuserbyid

Initialize a Supabase client with service_role key to access admin authentication methods. This setup should only be done on trusted servers and the service_role key must never be exposed in the browser.

```APIDOC
## Auth Admin Setup

### Description
Initialize a Supabase client with Auth plugin and service_role key to access admin authentication methods.

### Important Security Notes
- Any method under the `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should be called on a trusted server only
- Never expose your `service_role` key in the browser

### Code Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### Query Pushdown Optimization Examples

Source: https://supabase.com/docs/guides/database/extensions/wrappers/iceberg

Demonstrates how to use filters on standard and partition columns to ensure query logic is pushed down to the Iceberg layer, reducing data transfer and costs.

```sql
-- the filter 'id = 42' will be pushed down to Iceberg
select * from iceberg.guides where id = 42;

-- the pushdown filter can also be on the partition column 'created_at',
-- this can greatly reduce query cost
select * from iceberg.guides
where created_at >= timestamp '2025-05-16 12:34:56';

-- multiple filters must use logical 'AND'
select * from iceberg.guides where id > 42 and title like 'Supabase%';
```

--------------------------------

### Install Supabase Swift Library using Swift Package Manager

Source: https://supabase.com/docs/reference/swift/auth-updateuser

This code demonstrates how to add the Supabase Swift library to your project using Swift Package Manager. It shows how to include the main `supabase-swift` package or specific modules like `Auth`, `Realtime`, `Postgrest`, `Functions`, or `Storage` as product dependencies within your `Package.swift` file. This setup is crucial for integrating Supabase functionalities into your Swift application.

```Swift
let package = Package(
    ...
    dependencies: [
        ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        )
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase", // Auth, Realtime, Postgrest, Functions, or Storage
                    package: "supabase-swift"
                )
            ]
        )
    ]
)
```

--------------------------------

### Display MFA QR Code in Next.js

Source: https://supabase.com/docs/reference/javascript/auth-api

Example of rendering a TOTP enrollment QR code using the Next.js Image component. This uses the data returned from the enrollment step to provide the user with a scannable setup code.

```html
<Image src={data.totp.qr_code} alt={data.totp.uri} layout="fill"></Image>
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-branches-list

Starts the local Supabase database development stack. Optionally restores from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database development stack. Can optionally restore the database from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Start local database
```
supabase db start
```

#### Start with backup restoration
```
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### Get SSO Project Information - Supabase CLI

Source: https://supabase.com/docs/reference/cli/global-flags

Returns all necessary SSO configuration information for registering a project with a SAML 2.0 compatible identity provider. Outputs project-specific SAML 2.0 configuration details required for identity provider setup.

```bash
supabase sso info
```

```bash
supabase sso info --project-ref abcdefghijklmnopqrst
```

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/swift/insert

Provides instructions on how to initialize the Supabase Auth Admin client using a `service_role` key. This client should only be used on a trusted server.

```APIDOC
## Auth Admin Client Setup

### Description
Provides instructions on how to initialize the Supabase Auth Admin client using a `service_role` key. This client should only be used on a trusted server, and the `service_role` key must never be exposed in the browser.

### Method
(N/A - Client Setup)

### Endpoint
(N/A - Client Setup)

### Parameters
(None)

### Request Example
(None)

### Response
(None)

### Code Example (Swift)
```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: supabaseURL,
  supabaseKey: serviceRoleKey
)

// Access auth admin api
let adminAuthClient = supabase.auth.admin
```
```

--------------------------------

### Auth Client - Initialize and Setup

Source: https://supabase.com/docs/reference/swift/auth-api

Initialize the Supabase authentication client and handle deep links for iOS applications. Supports UIKit and SwiftUI app lifecycles.

```APIDOC
## Auth Client - Initialize

### Description
Create and configure the Supabase authentication client with custom storage options. Handle deep links for OAuth and email confirmation redirects.

### Method
INITIALIZATION

### Endpoint
supabase.auth

### Parameters
#### Initialization Parameters
- **supabaseURL** (URL) - Required - Your Supabase project URL
- **supabaseKey** (string) - Required - Your publishable or anonymous key

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
```

### Deep Link Handling - UIKit App Lifecycle
```swift
public func application(
  _ application: UIApplication,
  didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
) -> Bool {
  if let url = launchOptions?[.url] as? URL {
    supabase.auth.handle(url)
  }
  return true
}

func application(
  _ app: UIApplication,
  open url: URL,
  options: [UIApplication.OpenURLOptionsKey: Any]
) -> Bool {
  supabase.auth.handle(url)
  return true
}
```

### Deep Link Handling - SceneDelegate
```swift
func scene(
  _ scene: UIScene,
  openURLContexts URLContexts: Set<UIOpenURLContext>
) {
  guard let url = URLContexts.first?.url else { return }
  supabase.auth.handle(url)
}
```

### Deep Link Handling - SwiftUI
```swift
SomeView()
  .onOpenURL { url in
    supabase.auth.handle(url)
  }
```

### Response
#### Success Response
- **auth** (object) - Configured authentication client instance

### Notes
- Handle deep links in app lifecycle methods for OAuth redirects
- Support both UIKit and SwiftUI app lifecycle patterns
- Required for email confirmation and OAuth provider redirects
```

--------------------------------

### Initialize Database Table and RLS Policy

Source: https://supabase.com/docs/guides/getting-started/quickstarts/solidjs

SQL commands to create an 'instruments' table with sample data and enable Row Level Security. It includes a policy that allows anonymous users to read data from the table.

```sql
-- Create the table
create table instruments (
  id bigint primary key generated always as identity,
  name text not null
);
-- Insert some sample data into the table
insert into instruments (name)
values
  ('violin'),
  ('viola'),
  ('cello');

alter table instruments enable row level security;

create policy "public can read instruments"
on public.instruments
for select to anon
using (true);
```

--------------------------------

### GET /storage/v1/bucket/{bucketId}

Source: https://supabase.com/docs/reference/kotlin/insert

Retrieve a specific storage bucket by its ID. RLS policy permissions required: `buckets` table permissions: `select`, `objects` table permissions: none. Refer to the Storage guide on how access control works.

```APIDOC
## GET /storage/v1/bucket/{bucketId}

### Description
Retrieve a specific storage bucket by its ID.
RLS policy permissions required: `buckets` table permissions: `select`, `objects` table permissions: none. Refer to the Storage guide on how access control works.

### Method
GET

### Endpoint
/storage/v1/bucket/{bucketId}

### Parameters
#### Path Parameters
- **bucketId** (String) - Required - The ID of the bucket to retrieve.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **id** (String) - The ID of the bucket.
- **name** (String) - The name of the bucket.
- **owner** (String) - The owner of the bucket.
- **public** (Boolean) - Whether the bucket is public.
- **createdAt** (String) - The creation timestamp of the bucket.
- **updatedAt** (String) - The last update timestamp of the bucket.

#### Response Example
{
  "id": "avatars",
  "name": "avatars",
  "owner": "user_id_123",
  "public": false,
  "createdAt": "2023-01-01T12:00:00Z",
  "updatedAt": "2023-01-01T12:00:00Z"
}
```

--------------------------------

### Authorize Supabase Realtime Client for Private Channels

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

This JavaScript example illustrates how to initialize a Supabase Realtime client for a private channel, attach event listeners for broadcast messages, and ensure proper authorization. It's crucial to call `supabase.realtime.setAuth()` before `channel.subscribe()` to establish the user's identity for RLS enforcement.

```javascript
const channel = supabase.channel('room:123:messages', {
  config: { private: true }
})
  .on('broadcast', { event: 'message_created' }, handleMessage)
  .on('broadcast', { event: 'user_joined' }, handleUserJoined)

// Set auth before subscribing
await supabase.realtime.setAuth()

// Subscribe after auth is set
await channel.subscribe()
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/upsert

Create a new user account with email or phone authentication. Supports password-based signup with optional metadata and redirect URLs. Email or phone verification may be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Optionally include user metadata and configure email redirect behavior.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password for authentication.
- **data** (object) - Optional - Custom JSON object for storing additional user metadata.
- **redirectTo** (string) - Optional - Email signup only. Redirect URL embedded in email link. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with authentication details
- **session** (object) - Session object. Null if email confirmation is required.

### Important Notes
- By default, users must verify their email address before logging in. Disable **Confirm email** in project settings to allow immediate login.
- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- Users are redirected to SITE_URL upon email confirmation by default
- For existing confirmed users: returns obfuscated user object if both confirmations enabled, otherwise returns "User already registered" error
- Use `getUser()` to fetch the currently logged-in user
```

--------------------------------

### Supabase CLI: Example Output for Creating New Migration

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

This example illustrates the confirmation message received after successfully creating a new migration file using the `supabase migration new` command. It provides the full path to the newly generated migration file.

```text
Created new migration at supabase/migrations/20230306095710_schema_test.sql.
```

--------------------------------

### Client Installation

Source: https://supabase.com/docs/reference/csharp/auth-signup

Install the Supabase C# client library from NuGet package manager. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Install Supabase C# Client

### Description
Install the Supabase NuGet package to add the C# client library to your project.

### Package Manager
NuGet

### Installation Command
```
dotnet add package supabase
```

### Notes
- The C# client library is community-maintained by Joseph Schultz and contributors
- Requires .NET compatible environment
- Not an official Supabase library but actively maintained
```

--------------------------------

### Deny OAuth Authorization Request using Supabase JavaScript

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

If a user denies consent in the authorization UI, this method is invoked to reject the OAuth authorization request. It requires the `authorization_id` and informs Supabase Auth that the user has not granted the requested permissions.

```javascript
supabase.auth.oauth.denyAuthorization(authorization_id)
```

--------------------------------

### Supabase Migration List Command Output Example (CLI)

Source: https://supabase.com/docs/reference/cli/global-flags

An example of the tabular output from `supabase migration list`, showing the status of migrations across local and remote environments, including their timestamps. Empty cells indicate a migration is present in one location but not the other.

```text
LOCAL      │     REMOTE     │     TIME (UTC)
─────────────────┼────────────────┼──────────────────────
                 │ 20230103054303 │ 2023-01-03 05:43:03
                 │ 20230103093141 │ 2023-01-03 09:31:41
  20230222032233 │                │ 2023-02-22 03:22:33
```

--------------------------------

### Generate Zsh Shell Completion - Supabase CLI

Source: https://supabase.com/docs/reference/cli/global-flags

Create autocompletion script for zsh shell to enable command suggestions. Provides installation instructions for current session and permanent setup on Linux and macOS. Supports optional flag to disable completion descriptions.

```bash
echo "autoload -U compinit; compinit" >> ~/.zshrc
```

```bash
source <(supabase completion zsh)
```

```bash
supabase completion zsh > "${fpath[1]}/_supabase"
```

```bash
supabase completion zsh > $(brew --prefix)/share/zsh/site-functions/_supabase
```

--------------------------------

### Initialize React App with Vite (Bash)

Source: https://supabase.com/docs/guides/auth/quickstarts/react

This bash command creates a new React application named 'my-app' using Vite, a fast build tool. It sets up the basic project structure with a React template, providing a quick start for development.

```bash
npm create vite@latest my-app -- --template react
```

--------------------------------

### Configure Supabase Realtime Channel for Private Access in TypeScript

Source: https://supabase.com/docs/guides/realtime/getting_started

This TypeScript snippet demonstrates how to configure a Supabase Realtime channel as private. Setting `private: true` in the channel configuration ensures that only authorized users can subscribe, which is a crucial security practice for production applications.

```ts
const channel = supabase.channel('room:123:messages', {
  config: { private: true },
})
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-outliers

This command starts the Supabase local development database. It can optionally restore the database from a specified logical backup file.

```APIDOC
## CLI Command supabase db start

### Description
Starts the Supabase local development database.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- No request body.

#### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```bash
supabase db start
```

### Response
#### Success Response (200)
- No specific fields are returned, output is console text.

#### Response Example
```
# Example output for a successful start (exact output may vary)
Starting Supabase local development setup...
```
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/eq

Creates a new user account with the provided email and password. Email verification might be required based on project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user in the system. By default, email verification is required unless disabled in project settings.

- If `Confirm email` is enabled, a `user` object is returned, but `session` is null.
- If `Confirm email` is disabled, both a `user` and a `session` are returned.

### Method
POST

### Endpoint
/auth/v1/signup (handled by `supabase.Auth.SignUp` client method)

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **session** (object) - The authentication session object.
  - **user** (object) - The newly created user object.
  - **session** (object | null) - The session details, null if email confirmation is enabled.

#### Response Example (Confirm email disabled)
```json
{
  "access_token": "eyJ...",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "xyz...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "aud": "authenticated",
    "role": "authenticated"
  }
}
```

#### Response Example (Confirm email enabled)
```json
{
  "access_token": null,
  "token_type": null,
  "expires_in": null,
  "refresh_token": null,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "aud": "authenticated",
    "role": "authenticated"
  }
}
```

#### Error Response (400)
- If `SignUp()` is called for an existing confirmed user and confirmation settings allow, an obfuscated/fake user object is returned.
- If `SignUp()` is called for an existing confirmed user and confirmation settings require, an error message, `User already registered` is returned.
```json
{
  "error": "User already registered"
}
```
```

--------------------------------

### Approve OAuth Authorization Request using Supabase JavaScript

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

After a user grants consent in the authorization UI, this method is called to approve the OAuth authorization request. It takes the `authorization_id` as an argument, signaling to Supabase Auth that the user has agreed to the requested permissions.

```javascript
supabase.auth.oauth.approveAuthorization(authorization_id)
```

--------------------------------

### Install Supabase Swift Package

Source: https://supabase.com/docs/reference/swift/auth-signinwithidtoken

Install the Supabase Swift client library using Swift Package Manager. You can install the complete Supabase package or individual modules like Auth, Realtime, Postgrest, Functions, and Storage.

```APIDOC
## Installation via Swift Package Manager

### Description
Install Supabase Swift client library using Swift Package Manager with support for modular package selection.

### Available Packages
- **Supabase** - Complete Supabase environment
- **Auth** - Authentication module
- **Realtime** - Real-time database subscriptions
- **Postgrest** - PostgreSQL REST API client
- **Functions** - Deno Edge Functions
- **Storage** - File storage management

### Installation Steps
1. Use Xcode's dependency manager or edit Package.swift
2. Add repository URL: `https://github.com/supabase-community/supabase-swift.git`
3. Specify version from 2.0.0 or later

### Package.swift Configuration
```swift
let package = Package(
    dependencies: [
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        )
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                )
            ]
        )
    ]
)
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/usage

Starts the local Supabase database services. It can optionally restore from a logical backup file.

```APIDOC
## CLI Command supabase db start

### Description
Starts the local Supabase database services.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```
supabase db start
```

### Response
#### Success Response (CLI Output)
- **Output** (string) - Confirmation that the database services have started.

#### Response Example
```
[Output indicating successful start]
```
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/undefined

Creates a new user account with email and password credentials. Email verification may be required based on project settings. Returns user object and session (if email confirmation is disabled).

```APIDOC
## POST /auth/signup - Create New User

### Description
Creates a new user account. By default, the user needs to verify their email address before logging in.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with user details
- **session** (object or null) - Session object if email confirmation disabled, otherwise null

### Notes
- If **Confirm email** is enabled: user returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- User is redirected to SITE_URL upon email confirmation
- For existing confirmed users: returns obfuscated user object or "User already registered" error depending on settings
```

--------------------------------

### Start the Rails development server

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ruby-on-rails

Run the Rails development server to make your application accessible. Once started, you can view your application by navigating to http://127.0.0.1:3000 in your web browser.

```bash
bin/rails server
```

--------------------------------

### Generate Fish Shell Completion - Supabase CLI

Source: https://supabase.com/docs/reference/cli/global-flags

Create autocompletion script for fish shell to enable command suggestions. Provides installation instructions for current session and permanent setup in fish completions directory. Supports optional flag to disable completion descriptions.

```bash
supabase completion fish | source
```

```bash
supabase completion fish > ~/.config/fish/completions/supabase.fish
```

--------------------------------

### Authentication: Create a New User (Supabase .NET)

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

This C# example demonstrates how to create a new user in Supabase Authentication using an email and password. The outcome regarding session and email verification depends on project settings, specifically the 'Confirm email' option.

```csharp
var session = await supabase.Auth.SignUp(email, password);
```

--------------------------------

### GraphQL Custom Scalar: JSON Type

Source: https://supabase.com/docs/guides/graphql/api

This section details the handling of PostgreSQL `json` and `jsonb` data types as a custom `JSON` scalar in GraphQL. It provides SQL setup, the scalar definition, and an example query demonstrating how JSON data is serialized and retrieved.

```APIDOC
## GraphQL Custom Scalar: JSON Type

### Description
`pg_graphql` serializes PostgreSQL `json` and `jsonb` data types as a `String` under the custom scalar name `JSON`. This allows for querying and manipulating JSON data within GraphQL, noting that the data is returned as a serialized string.

### Type
Scalar

### Scalar Definition
```graphql
scalar JSON
```

### Fields
- **userCollection** (UserConnection) - The root field to query users.
  - **edges** (UserEdge) - Connection edges.
    - **node** (User) - The User entity.
      - **config** (JSON) - The user's configuration, serialized as a JSON string.

### Request Example
```graphql
{
  userCollection {
    edges {
      node {
        config
      }
    }
  }
}
```

### Response
#### Success Response (200)
- **data** (Object) - The root data object.
  - **userCollection** (Object) - The collection of users.
    - **edges** (Array) - An array of user edges.
      - **node** (Object) - A user node.
        - **config** (String) - The user's configuration, represented as a JSON string.

#### Response Example
```json
{
  "data": {
    "userCollection": {
      "edges": [
        {
          "node": {
            "config": "{\"palette\": \"dark-mode\"}"
          }
        }
      ]
    }
  }
}
```

### Notes
- Use serialized JSON strings when updating or inserting `JSON` fields via the GraphQL API.
- JSON does not currently support filtering.
```

--------------------------------

### GET /rest/v1/{table} (Explain)

Source: https://supabase.com/docs/reference/kotlin/select

Retrieve the Postgres EXPLAIN execution plan for a query to analyze performance.

```APIDOC
## GET /rest/v1/{table} (Explain)

### Description
Returns the execution plan of a query. Useful for debugging slow queries. Must be enabled in project settings.

### Method
GET

### Endpoint
/rest/v1/{table}

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - If true, the query is executed and actual run time is returned.
- **verbose** (boolean) - Optional - Includes output columns and query identifier.
- **settings** (boolean) - Optional - Includes configuration parameters affecting planning.
- **buffers** (boolean) - Optional - Includes information on buffer usage.
- **wal** (boolean) - Optional - Includes information on WAL record generation.
- **format** (string) - Optional - Output format: "text" (default) or "json".

### Request Example
```kotlin
val result = supabase.from("characters").select {
	explain(analyze = true, format = "json")
}
```

### Response
#### Success Response (200)
- **plan** (string/object) - The Postgres execution plan.
```

--------------------------------

### PostgreSQL Conditional Broadcast Trigger Pattern

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

Demonstrates conditional broadcasting that only triggers on significant changes. Uses SQL comparison logic to filter which updates generate broadcasts, reducing unnecessary notifications. Example shows broadcasting only when status field changes.

```sql
-- Only broadcast significant changes
IF TG_OP = 'UPDATE' AND OLD.status IS DISTINCT FROM NEW.status THEN
  PERFORM realtime.broadcast_changes(
    'room:' || NEW.room_id::text,
    TG_OP,
    TG_OP,
    TG_TABLE_NAME,
    TG_TABLE_SCHEMA,
    NEW,
    OLD
  );
END IF;
```

--------------------------------

### POST /auth/sign_up - Create a new user

Source: https://supabase.com/docs/reference/python/using-filters

Create a new user account with email and password credentials. By default, users must verify their email address before logging in unless email confirmation is disabled in project settings.

```APIDOC
## POST /auth/sign_up

### Description
Create a new user account with email and password. Returns a user object and session if email confirmation is disabled, or just a user object if confirmation is required.

### Method
POST

### Endpoint
/auth/sign_up

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password
- **user_metadata** (object) - Optional - Additional user metadata
- **redirect_to** (string) - Optional - URL to redirect to after email confirmation

### Request Example
```
response = supabase.auth.sign_up(
    {
        "email": "email@example.com",
        "password": "password"
    }
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, and metadata
- **session** (object|null) - Session object if email confirmation disabled, null if confirmation required

### Notes
- If **Confirm email** is enabled, user is returned but session is null
- If **Confirm email** is disabled, both user and session are returned
- Users are redirected to SITE_URL after email confirmation
- For existing confirmed users: returns obfuscated user object or 'User already registered' error depending on confirmation settings
```

--------------------------------

### Install Ionic CLI and Initialize React App

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react

Sets up a new Ionic React application using the Ionic CLI. Creates a blank project template and installs the Supabase JavaScript client library as the primary dependency for database and authentication operations.

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-react blank --type react
cd supabase-ionic-react
npm install @supabase/supabase-js
```

--------------------------------

### POST /storage/buckets - Create a bucket

Source: https://supabase.com/docs/reference/csharp/lte

Creates a new Storage bucket. Requires insert permissions on buckets.

```APIDOC
## POST /storage/buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/storage/buckets

### Request Body
- **name** (string) - Required - Name of the bucket to create
- **public** (boolean) - Optional - Whether the bucket should be public

### Policy Permissions Required
- **buckets** permissions: `insert`
- **objects** permissions: none

### Response
#### Success Response (200)
- **id** (string) - Bucket identifier
- **name** (string) - Bucket name
- **owner** (string) - Bucket owner

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
```
```

--------------------------------

### CLI Command: supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-login

Starts the local Supabase database services. Optionally, it can restore the database from a backup file.

```APIDOC
## CLI Command: supabase db start

### Description
Starts the local Supabase database services.

### Command
supabase db start [flags]

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Example Usage
```
supabase db start
```

### Response
#### Success Response
No specific fields, output is typically a confirmation of services starting.

#### Response Example
```
# Example output (inferred)
Starting supabase local development setup...
Local development setup is running.
```
```

--------------------------------

### GET /query/explain

Source: https://supabase.com/docs/reference/swift/auth-reauthentication

Retrieve the Postgres EXPLAIN execution plan for a query to debug performance issues.

```APIDOC
## GET /query/explain

### Description
For debugging slow queries, you can get the Postgres EXPLAIN execution plan of a query. This works on any query, even for rpc() or writes.

### Method
GET

### Endpoint
/query/explain

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - If true, the statement is actually executed and actual run times are displayed.
- **verbose** (boolean) - Optional - If true, additional information regarding the plan is displayed.

### Request Example
```javascript
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
```

### Response
#### Success Response (200)
- **plan** (string) - The textual representation of the Postgres execution plan.
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-completion-bash

Starts the local Supabase database development stack with optional restoration from a logical backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database development stack. Optionally restores the database from a logical backup file.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from

### Usage Examples

#### Basic Usage
```
supabase db start
```

#### Restore from Backup
```
supabase db start --from-backup ./backup.sql
```
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-getuseridentities

Create a new user account with email or phone and password. Supports additional user metadata and custom redirect URLs. Email confirmation may be required depending on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Returns user object and session based on confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom data object to store additional user metadata
- **redirectTo** (string) - Optional - Redirect URL for email signups. Must be a configured redirect URL for the Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object if email confirmation is disabled. Null if confirmation is required.

### Important Notes
- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- User is redirected to SITE_URL upon email confirmation
- For existing confirmed users: returns obfuscated user object or "User already registered" error depending on confirmation settings
- Use `getUser()` to fetch the currently logged-in user
```

--------------------------------

### Deny OAuth Authorization Request in React

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Handles user denial of an OAuth authorization request by calling the denyAuthorization method. Returns a redirect_to URL that sends the user back to the third-party application with an error response. Includes error handling and validation of authorization_id.

```javascript
async function handleDeny() {
  if (!authorizationId) return

  const { data, error } = await supabase.auth.oauth.denyAuthorization(authorizationId)

  if (error) {
    setError(error.message)
  } else {
    // Redirect to client app with error
    window.location.href = data.redirect_to
  }
}
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-branches-delete

Starts the local Supabase database services. Optionally, it can restore the database from a specified backup file.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Can optionally restore from a backup file.

### Usage
`supabase db start [flags]`

### Parameters
#### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file.
```

--------------------------------

### Approve OAuth Authorization Request in React

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Handles user approval of an OAuth authorization request by calling the approveAuthorization method. Returns a redirect_to URL that sends the user back to the third-party application with an authorization code. Includes error handling and validation of authorization_id.

```javascript
async function handleApprove() {
  if (!authorizationId) return

  const { data, error } = await supabase.auth.oauth.approveAuthorization(authorizationId)

  if (error) {
    setError(error.message)
  } else {
    // Redirect to client app
    window.location.href = data.redirect_to
  }
}
```

--------------------------------

### CLI Command: supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-migration-new

Starts the local Supabase development database. Optionally, it can restore the database from a logical backup file.

```APIDOC
## CLI Command: supabase db start

### Description
Starts the local Supabase development database.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```bash
supabase db start
```

### Response
#### Success Response (200)
- **Output** (string) - Confirmation of database start.

#### Response Example
```
Database started successfully.
```
```

--------------------------------

### Start RedwoodJS Development Server

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs

This command starts the RedwoodJS development server, which compiles the application and serves it locally. It enables developers to view and interact with their application in a browser during development. `rw` is an alias for `redwood`.

```bash
yarn rw dev
```

--------------------------------

### explain(options)

Source: https://supabase.com/docs/reference/javascript/auth-resend

Return `data` as the EXPLAIN plan for the query. The `db_plan_enabled` setting must be enabled to use this method.

```APIDOC
## explain(options)

### Description
Return `data` as the EXPLAIN plan for the query. The `db_plan_enabled` setting must be enabled to use this method.

### Method
Client Method

### Endpoint
`supabase.from('table').select().explain(options)`

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- **options** (object) - Optional. Configuration options for the EXPLAIN plan, e.g., `{ analyze: true, verbose: true }`.

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **data** (array) - An array containing the EXPLAIN plan for the query.
- **error** (object | null) - Error object if the request failed, otherwise null.

#### Response Example
```json
{
  "data": [
    {
      "Plan": {
        "Node Type": "Seq Scan",
        "Relation Name": "characters",
        "Alias": "characters"
      }
    }
  ],
  "error": null
}
```
```

--------------------------------

### GET /v1/projects/{ref}/custom-hostname

Source: https://supabase.com/docs/reference/api/v1-create-a-function

Retrieves a project's custom hostname configuration. This beta endpoint fetches the current custom hostname setup including SSL status, validation records, and ownership verification details. Requires domains:read OAuth scope.

```APIDOC
## GET /v1/projects/{ref}/custom-hostname

### Description
Retrieves the custom hostname configuration for a project.

### Method
GET

### Endpoint
/v1/projects/{ref}/custom-hostname

### Authentication
- OAuth scopes: domains:read
- Fine-grained token permissions: custom_domain_read

### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **status** (string) - Configuration status
- **custom_hostname** (string) - The custom hostname
- **data** (object) - Detailed configuration data
  - **success** (boolean) - Operation success status
  - **errors** (array) - List of errors if any
  - **messages** (array) - List of messages
  - **result** (object) - Result details
    - **id** (string) - Hostname ID
    - **hostname** (string) - Hostname value
    - **ssl** (object) - SSL configuration
      - **status** (string) - SSL status
      - **validation_records** (array) - DNS validation records
      - **validation_errors** (array) - Validation errors
    - **ownership_verification** (object) - Ownership verification details
    - **custom_origin_server** (string) - Origin server
    - **verification_errors** (array) - Verification errors
    - **status** (string) - Overall status

#### Response Example
{
  "status": "1_not_started",
  "custom_hostname": "api.example.com",
  "data": {
    "success": true,
    "errors": [],
    "messages": [],
    "result": {
      "id": "hostname_123",
      "hostname": "api.example.com",
      "ssl": {
        "status": "pending_validation",
        "validation_records": [
          {
            "txt_name": "_acme-challenge.api.example.com",
            "txt_value": "validation_token_here"
          }
        ],
        "validation_errors": []
      },
      "ownership_verification": {
        "type": "CNAME",
        "name": "api.example.com",
        "value": "verify.supabase.co"
      },
      "custom_origin_server": "origin.supabase.co",
      "verification_errors": [],
      "status": "active"
    }
  }
}

### Response Codes
- 200 - Success
- 401 - Unauthorized
- 403 - Forbidden
- 429 - Too Many Requests
- 500 - Internal Server Error
```

--------------------------------

### Bootstrap Supabase Project with Template

Source: https://supabase.com/docs/reference/cli/supabase-migration-up

Initializes a Supabase project using an optional template. Accepts a template name and database password as parameters for automated project setup.

```bash
supabase bootstrap [template] --password your_db_password
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/csharp/storage-from-move

Install the Supabase C# client library from NuGet package manager. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Installation

### Description
Install the Supabase C# package from NuGet to get started with the client library.

### Installation Command
```
dotnet add package supabase
```

### Prerequisites
- .NET framework or .NET Core installed
- NuGet package manager access

### Notes
- The C# client library is community-maintained
- Official maintainer: Joseph Schultz
- Maintained by contributors: Will Iverson, Ben Randall, and Rhuan Barros
```

--------------------------------

### GET /v1/projects/{ref}/custom-hostname

Source: https://supabase.com/docs/reference/api/v1-get-project-api-key

Retrieves a project's custom hostname configuration. This endpoint returns the current custom hostname setup including SSL status, verification records, and ownership verification details. Requires domains:read OAuth scope and custom_domain_read permission.

```APIDOC
## GET /v1/projects/{ref}/custom-hostname

### Description
Gets project's custom hostname config.

### Method
GET

### Endpoint
`/v1/projects/{ref}/custom-hostname`

### Path Parameters
- **ref** (string) - Required - Project ref

### OAuth Scopes
- domains:read

### Fine-grained Token Permissions
- custom_domain_read

### Response Codes
- 200 - Custom hostname configuration retrieved successfully
- 401 - Unauthorized
- 403 - Forbidden
- 429 - Too many requests
- 500 - Internal server error

### Response (200)
```json
{
  "status": "1_not_started",
  "custom_hostname": "example.com",
  "data": {
    "success": true,
    "errors": [],
    "messages": [],
    "result": {
      "id": "hostname_id",
      "hostname": "example.com",
      "ssl": {
        "status": "pending",
        "validation_records": [
          {
            "txt_name": "_acme-challenge.example.com",
            "txt_value": "validation_value"
          }
        ],
        "validation_errors": []
      },
      "ownership_verification": {
        "type": "cname",
        "name": "example.com",
        "value": "verify.supabase.com"
      },
      "custom_origin_server": "origin.supabase.com",
      "verification_errors": [],
      "status": "active"
    }
  }
}
```
```

--------------------------------

### Link local project to remote Supabase project

Source: https://supabase.com/docs/guides/functions/quickstart

Connects your local Supabase project to a specific remote Supabase project using its project ID. This step is essential before deploying functions to the global edge network, ensuring your local changes are pushed to the correct remote environment.

```bash
supabase link --project-ref [YOUR_PROJECT_ID]
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-network-restrictions-update

Starts the local Supabase database development stack. Optionally, it can restore the database from a logical backup file.

```APIDOC
## CLI Command supabase db start

### Description
Starts the local Supabase database development stack.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```
supabase db start
```

### Response
#### Success Response (200)
(No explicit response example provided, typically indicates successful startup)

#### Response Example
(None)
```

--------------------------------

### Deno Edge Function Test Setup with Supabase Client

Source: https://supabase.com/docs/guides/functions/unit-test

Complete test file demonstrating how to set up and run tests for Supabase Edge Functions using Deno. Includes Supabase client initialization with environment variables, testing client creation with database queries, and testing Edge Function invocation with parameter passing and response validation.

```typescript
// Import required libraries and modules
import { assert, assertEquals } from 'jsr:@std/assert@1'
import { createClient, SupabaseClient } from 'npm:@supabase/supabase-js@2'

// Will load the .env file to Deno.env
import 'jsr:@std/dotenv/load'

// Set up the configuration for the Supabase client
const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
const supabaseKey = Deno.env.get('SUPABASE_PUBLISHABLE_KEY') ?? ''
const options = {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
}

// Test the creation and functionality of the Supabase client
const testClientCreation = async () => {
  var client: SupabaseClient = createClient(supabaseUrl, supabaseKey, options)

  // Verify if the Supabase URL and key are provided
  if (!supabaseUrl) throw new Error('supabaseUrl is required.')
  if (!supabaseKey) throw new Error('supabaseKey is required.')

  // Test a simple query to the database
  const { data: table_data, error: table_error } = await client
    .from('my_table')
    .select('*')
    .limit(1)
  if (table_error) {
    throw new Error('Invalid Supabase client: ' + table_error.message)
  }
  assert(table_data, 'Data should be returned from the query.')
}

// Test the 'hello-world' function
const testHelloWorld = async () => {
  var client: SupabaseClient = createClient(supabaseUrl, supabaseKey, options)

  // Invoke the 'hello-world' function with a parameter
  const { data: func_data, error: func_error } = await client.functions.invoke('hello-world', {
    body: { name: 'bar' },
  })

  // Check for errors from the function invocation
  if (func_error) {
    throw new Error('Invalid response: ' + func_error.message)
  }

  // Log the response from the function
  console.log(JSON.stringify(func_data, null, 2))

  // Assert that the function returned the expected result
  assertEquals(func_data.message, 'Hello bar!')
}

// Register and run the tests
Deno.test('Client Creation Test', testClientCreation)
Deno.test('Hello-world Function Test', testHelloWorld)
```

--------------------------------

### Test local Supabase Edge Function with curl

Source: https://supabase.com/docs/guides/functions/quickstart

Sends a POST request to the locally running 'hello-world' Edge Function using curl. It includes an Authorization header with a placeholder key and a JSON payload containing a 'name' field, demonstrating how to interact with the function and verify its output.

```bash
curl -i --location --request POST 'http://localhost:54321/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_PUBLISHABLE_KEY' \
  --header 'Content-Type': 'application/json' \
  --data '{"name":"Functions"}'
```

--------------------------------

### Installation via Swift Package Manager

Source: https://supabase.com/docs/reference/swift/auth-onauthstatechange

Install the Supabase Swift package using Swift Package Manager. You can install the complete Supabase library or individual packages like Auth, Realtime, Postgrest, Functions, and Storage.

```APIDOC
## Swift Package Manager Installation

### Description
Install Supabase Swift client library using Swift Package Manager with support for modular package selection.

### Installation Steps
1. In Xcode, go to File → Add Packages
2. Enter the repository URL: `https://github.com/supabase-community/supabase-swift.git`
3. Select version 2.0.0 or later
4. Choose your target and add the package

### Available Packages
- **Supabase** - Complete Supabase environment
- **Auth** - Authentication and user management
- **Realtime** - Real-time database subscriptions
- **Postgrest** - PostgreSQL REST API client
- **Functions** - Deno Edge Functions invocation
- **Storage** - File storage management

### Package.swift Configuration
```swift
let package = Package(
    name: "YourProject",
    dependencies: [
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        )
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                )
            ]
        )
    ]
)
```
```

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-db-dump

Starts the local Supabase database development stack with optional backup restoration capability.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database development stack.

### Command
```
supabase db start [flags]
```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from
```

--------------------------------

### Enable and Disable Postgres Extensions in Supabase

Source: https://supabase.com/docs/guides/database/extensions

SQL commands to enable and disable Postgres extensions in Supabase. The CREATE EXTENSION command enables an extension and installs it under the 'extensions' schema by default. The DROP EXTENSION command disables an extension. This example demonstrates enabling the 'pgtap' extension and then disabling it.

```sql
-- Example: enable the "pgtap" extension and ensure it is installed
create extension pgtap
with
  schema extensions;

-- Example: disable the "pgtap" extension
drop
  extension pgtap;
```

--------------------------------

### POST /auth/signup - Create a New User

Source: https://supabase.com/docs/reference/kotlin/auth-signinwithoauth

Creates a new user account with email or phone authentication. Supports optional email verification, phone verification, user metadata, and custom redirect URLs for post-signup flows.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account using email or phone as the authentication provider. Behavior depends on email/phone confirmation settings in your project.

### Method
POST

### Endpoint
`supabase.auth.signUpWith(provider)`

### Parameters
#### Request Body
- **provider** (Email or Phone) - Required - Authentication provider type
- **email** (String) - Required (for Email provider) - User's email address
- **password** (String) - Required (for Email provider) - User's password
- **phone** (String) - Required (for Phone provider) - User's phone number
- **redirectUrl** (String) - Optional - Custom redirect URL after signup (defaults to platform-specific URL)
- **userMetadata** (Object) - Optional - Additional user metadata to store

### Request Example
```kotlin
val user = supabase.auth.signUpWith(Email) {
    email = "example@email.com"
    password = "example-password"
}
```

### Response
#### Success Response (200)
- **user** (User Object) - User object if email confirmation is disabled
- **null** - If email confirmation is enabled, returns null and user is logged in automatically

#### Response Fields
- **id** (String) - Unique user identifier
- **email** (String) - User's email address
- **phone** (String) - User's phone number (if applicable)
- **userMetadata** (Object) - Custom user metadata
- **createdAt** (Timestamp) - Account creation timestamp

### Notes
- If **Confirm email** is enabled: User must verify email before login; returns user object
- If **Confirm email** is disabled: User is automatically logged in; returns null
- For existing confirmed users: Returns obfuscated user object or "User already registered" error depending on confirmation settings
- Redirect URL defaults to `SITE_URL` and can be customized in project settings
- Supports OTP links and OAuth flows (see initialization guide)
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/swift/rpc

Creates a new user account. Supports email or phone registration with optional metadata and redirect configurations.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. By default, the user needs to verify their email address before logging in. If 'Confirm email' is disabled, a session is returned immediately.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - The user's email address. Required if phone is not provided.
- **phone** (string) - Optional - The user's phone number. Required if email is not provided.
- **password** (string) - Required - The user's password.
- **data** (object) - Optional - A custom data object to store additional user metadata.
- **redirectTo** (string) - Optional - The URL to redirect the user to after they confirm their email.
- **captchaToken** (string) - Optional - Verification token for captcha protection.

### Request Example
{
  "email": "example@email.com",
  "password": "example-password",
  "data": {
    "first_name": "John"
  }
}

### Response
#### Success Response (200)
- **user** (object) - The user object containing ID, email, and metadata.
- **session** (object) - The session object (null if email confirmation is required).

#### Response Example
{
  "user": {
    "id": "uuid",
    "email": "example@email.com"
  },
  "session": null
}
```

--------------------------------

### Swift Package Manager Installation

Source: https://supabase.com/docs/reference/swift/storage-from-getpublicurl

Install the Supabase Swift client library using Swift Package Manager. You can install the complete Supabase package or individual libraries such as Auth, Realtime, Postgrest, Functions, and Storage.

```APIDOC
## Package Installation

### Description
Install Supabase Swift client library using Swift Package Manager with support for modular library selection.

### Installation Method
Swift Package Manager

### Package URL
https://github.com/supabase-community/supabase-swift.git

### Available Libraries
- **Auth** - Authentication and user management
- **Realtime** - Real-time database subscriptions
- **Postgrest** - PostgreSQL REST API client
- **Functions** - Deno Edge Functions invocation
- **Storage** - File storage management

### Package Configuration Example
```swift
let package = Package(
    dependencies: [
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        )
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                )
            ]
        )
    ]
)
```

### Minimum Version
2.0.0 or higher
```

--------------------------------

### POST /bucket/

Source: https://supabase.com/docs/reference/self-hosting-storage/get-object

Creates a new storage bucket.

```APIDOC
## POST /bucket/

### Description
Creates a new storage bucket.

### Method
POST

### Endpoint
/bucket/

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **name** (string) - Required - The name of the bucket.
- **id** (string) - Optional - The unique identifier for the bucket.
- **public** (boolean) - Optional - Indicates if the bucket is publicly accessible.
- **type** (enum) - Optional - The type of bucket. (Accepted values not specified).
- **file_size
```

--------------------------------

### Configure Multiplatform Ktor Client Engines in Kotlin

Source: https://supabase.com/docs/reference/kotlin/admin-api

This example demonstrates how to configure different Ktor client engines for various Kotlin Multiplatform targets (JVM, Android, JS, iOS). It ensures that the appropriate network client is used for each specific platform within a shared module setup.

```kotlin
commonMain {
    dependencies {
        //Supabase modules
    }
}
jvmMain {
    dependencies {
        implementation("io.ktor:ktor-client-cio:KTOR_VERSION")
    }
}
androidMain {
    dependsOn(jvmMain.get())
}
jsMain {
    dependencies {
        implementation("io.ktor:ktor-client-js:KTOR_VERSION")
    }
}
iosMain {
    dependencies {
        implementation("io.ktor:ktor-client-darwin:KTOR_VERSION")
    }
}
```

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/storage-getbucket

Creates a new user account with email and password. User may need to verify their email address before logging in, depending on project configuration.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. By default, the user needs to verify their email address before logging in. If email confirmation is disabled, both user and session are returned immediately.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (object) - User object with ID and email
- **session** (object or null) - Session object if email confirmation disabled, null if enabled

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "user@example.com"
  },
  "session": null
}
```

#### Error Response (400)
- **error** (string) - Error message (e.g., "User already registered")
```

--------------------------------

### Supabase Edge Function starter code (TypeScript/Deno)

Source: https://supabase.com/docs/guides/functions/quickstart

Provides the basic TypeScript code for a Supabase Edge Function, using Deno.serve. This function accepts a JSON payload with a `name` field and returns a JSON response with a greeting message, demonstrating a simple API endpoint for handling requests.

```tsx
Deno.serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }

  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
})
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/csharp/storage-deletebucket

Install the Supabase C# package from NuGet package manager. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Installation

### Description
Install the Supabase C# client library from NuGet package manager to enable database operations and real-time functionality.

### Installation Command
```bash
dotnet add package supabase
```

### Requirements
- .NET project with NuGet package manager
- Supabase project URL and public key
- Environment with internet access to download package

### Package Details
- **Package Name**: supabase
- **Source**: nuget.org
- **Maintainer**: Supabase Community (Joseph Schultz, primary maintainer)
- **Contributors**: Will Iverson, Ben Randall, Rhuan Barros
```

--------------------------------

### Auth Admin Setup

Source: https://supabase.com/docs/reference/javascript/auth-signinwithotp

Initialize the Supabase client with service_role key to access admin authentication methods. This setup is required for all admin auth operations and should only be used on trusted servers.

```APIDOC
## Auth Admin Setup

### Description
Initialize a server-side Supabase client with service_role credentials to access admin authentication methods.

### Security Requirements
- Service role key must never be exposed in the browser
- All admin methods should only be called on trusted servers
- Use autoRefreshToken: false and persistSession: false for server-side clients

### Setup Example
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin
```

### Access Pattern
All admin methods are accessed through the `supabase.auth.admin` namespace.
```

--------------------------------

### List OAuth clients using Supabase SDKs and REST API

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Retrieve a list of all registered OAuth clients for your project. This administrative action requires a service role key for authentication and can be performed via the Supabase client libraries or direct HTTP requests to the Auth server.

```typescript
const { data, error } = await supabase.auth.admin.oauth.listClients()

if (error) {
  console.error('Error listing clients:', error)
} else {
  console.log('OAuth clients:', data)
}
```

```python
clients = supabase.auth.admin.oauth.list_clients()

print('OAuth clients:', clients)
```

```bash
curl 'https://<project-ref>.supabase.co/auth/v1/admin/oauth/clients' \
  -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}"
```

```bash
curl 'http://localhost:54321/auth/v1/admin/oauth/clients' \
  -H "Authorization: Bearer ${SUPABASE_SECRET_KEY}"
```

--------------------------------

### POST /auth - Initialize Auth Client

Source: https://supabase.com/docs/reference/swift/storage-from-move

Create and initialize a Supabase authentication client with your project credentials. This client provides access to all authentication methods via the supabase.auth namespace.

```APIDOC
## POST /auth - Initialize Auth Client

### Description
Initialize the Supabase authentication client with your project URL and API key. This provides access to all auth methods through the supabase.auth namespace.

### Method
POST

### Endpoint
/auth

### Parameters
#### Request Body
- **supabaseURL** (URL) - Required - Your Supabase project URL (format: https://xyzcompany.supabase.co)
- **supabaseKey** (string) - Required - Your publishable or anonymous API key

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
```

### Response
#### Success Response (200)
- **auth** (object) - Authenticated client instance with access to auth methods

#### Response Example
```json
{
  "auth": {
    "namespace": "supabase.auth",
    "methods": ["signUp", "signIn", "signOut", "getUser"]
  }
}
```
```

--------------------------------

### Install Supabase Swift Package

Source: https://supabase.com/docs/reference/swift/auth-mfa-unenroll

Install the Supabase Swift client library using Swift Package Manager. You can install the complete Supabase package or individual modules including Auth, Realtime, Postgrest, Functions, and Storage.

```APIDOC
## Swift Package Manager Installation

### Description
Install Supabase Swift client library using Swift Package Manager with support for modular package selection.

### Installation Method
Swift Package Manager

### Package URL
https://github.com/supabase-community/supabase-swift.git

### Available Modules
- **Supabase** - Complete Supabase environment
- **Auth** - Authentication and user management
- **Realtime** - Real-time database subscriptions
- **Postgrest** - PostgreSQL REST API client
- **Functions** - Deno Edge Functions invocation
- **Storage** - File storage management

### Configuration Example
```swift
let package = Package(
    dependencies: [
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        ),
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                ),
            ]
        )
    ]
)
```

### Minimum Version
2.0.0
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/python/not

Instructions on how to install the supabase-py library using pip for Python versions 3.8 and above.

```APIDOC
## Installing

### Install with PyPi

You can install supabase-py via the terminal. (for Python > 3.8)

```python
pip install supabase
```
```

--------------------------------

### Retrieve OAuth Authorization Details using Supabase JavaScript

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

This method is used in the authorization UI to fetch details about an OAuth authorization request. It requires an `authorization_id` obtained from the URL query parameters and returns client information, including requested scopes, which should be displayed to the user for consent.

```javascript
supabase.auth.oauth.getAuthorizationDetails(authorization_id)
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/swift/match

Creates a new user account. Supports email and phone registration with optional metadata and redirect configurations.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. By default, the user needs to verify their email address before logging in unless 'Confirm email' is disabled in the project settings.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - The user's email address. One of email or phone must be provided.
- **phone** (string) - Optional - The user's phone number. One of email or phone must be provided.
- **password** (string) - Required - The user's password.
- **data** (object) - Optional - A custom data object to store additional user metadata.
- **redirectTo** (string) - Optional - The URL to redirect the user to after they click the confirmation link in their email.
- **captchaToken** (string) - Optional - Verification token for captcha protection.

### Request Example
{
  "email": "example@email.com",
  "password": "example-password",
  "data": {
    "first_name": "John"
  }
}

### Response
#### Success Response (200)
- **user** (object) - The created user object.
- **session** (object) - The session object. Will be null if email confirmation is required.

#### Response Example
{
  "user": {
    "id": "uuid",
    "email": "example@email.com",
    "user_metadata": {
      "first_name": "John"
    }
  },
  "session": null
}
```

--------------------------------

### Retrieve Supabase Data as CSV (Dart)

Source: https://supabase.com/docs/reference/dart/auth-getsession

This example demonstrates how to fetch data from a Supabase table in CSV format. It selects all columns from the 'instruments' table and applies the `csv()` modifier to get the response as a CSV string. Requires the Supabase client library and Dart.

```Dart
final data = await supabase
  .from('instruments')
  .select()
  .csv();
```

--------------------------------

### Sign Up New User with Email and Password using Supabase Auth

Source: https://supabase.com/docs/reference/javascript/auth-api

Illustrates how to register a new user with an email and password using the `supabase.auth.signUp()` method. This method handles user creation and can be configured for email verification and session management based on project settings.

```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password'
})
```

--------------------------------

### Limit Data: Retrieve Rows within a Range (Supabase .NET)

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

This C# example shows how to retrieve a specific range of rows from a Supabase table. The `Range` method is used to fetch rows from an inclusive start index to an exclusive end index, providing a paginated result.

```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

--------------------------------

### Initialize Supabase Auth Client

Source: https://supabase.com/docs/reference/swift/auth-exchangecodeforsession

Demonstrates how to create and configure an instance of the Supabase authentication client, including options for custom storage.

```APIDOC
## Initialize Supabase Auth Client

### Description
This section provides examples for initializing the Supabase authentication client. This client is essential for interacting with Supabase's authentication services, including user signup, login, and session management.

### Method
N/A (Client-side initialization)

### Endpoint
N/A

### Parameters
N/A

### Request Example
```swift
let supabase = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
let auth = supabase.auth
```

### Response
N/A
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-mfa-unenroll

Create a new user account with email or phone authentication. Supports optional user metadata and custom redirect URLs. Email confirmation may be required depending on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Optionally include user metadata and configure email redirect behavior.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password for authentication.
- **data** (object) - Optional - Custom JSON object for storing additional user metadata.
- **redirectTo** (string) - Optional - Email signup only. Redirect URL embedded in email link. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Configuration Notes
- **Confirm email** setting determines if email verification is required
  - If enabled: user returned but session is null until email confirmed
  - If disabled: both user and session returned immediately
- **Confirm phone** setting applies to phone-based signups
- Default redirect after email confirmation: SITE_URL (configurable in project settings)
- For existing confirmed users: returns obfuscated user object or "User already registered" error depending on confirmation settings

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email/phone, and metadata
- **session** (object) - Session object (null if email confirmation required)
  - **access_token** (string) - JWT access token
  - **refresh_token** (string) - Refresh token for session renewal
  - **expires_in** (number) - Token expiration time in seconds

#### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "eyJhbGc...",
    "refresh_token": "refresh-token-value",
    "expires_in": 3600
  }
}
```

#### Error Response (400)
- **message** (string) - "User already registered" or validation error

#### Error Response (422)
- **message** (string) - Invalid email, phone, or password format
```

--------------------------------

### Enroll a TOTP or Phone Factor (Supabase MFA)

Source: https://supabase.com/docs/reference/dart/auth-getsession

Enrolls a Multi-Factor Authentication (MFA) factor for a user, such as a Time-Based One-Time Password (TOTP) or a phone factor. This example demonstrates enrolling a TOTP factor, which returns a QR code URL for user setup.

```Dart
final res = await supabase.auth.mfa.enroll(factorType: FactorType.totp);

final qrCodeUrl = res.totp.qrCode;
```

--------------------------------

### Install Supabase CLI with Yarn

Source: https://supabase.com/docs/guides/local-development

Install the Supabase CLI using Yarn package manager with NODE_OPTIONS flag to handle experimental fetch functionality. Use this method if you prefer Yarn over npm.

```shell
NODE_OPTIONS=--no-experimental-fetch yarn add supabase --dev
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/using-filters

Create a new user account with email or phone authentication. Returns user object and session based on email/phone confirmation settings. Supports additional user metadata and custom redirect URLs.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Email verification may be required based on project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom data object to store additional user metadata
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object (null if email confirmation is required)

### Notes
- Email confirmation may be required based on project settings
- If Confirm email is enabled, session is null until email is verified
- If Confirm email is disabled, both user and session are returned immediately
- For existing confirmed users, returns obfuscated user object or "User already registered" error
- Users are redirected to SITE_URL after email confirmation by default
```

--------------------------------

### Monitor Active pg_cron Job Queries - PostgreSQL

Source: https://supabase.com/docs/guides/troubleshooting/pgcron-debugging-guide-n1KTaz

Identifies currently executing pg_cron jobs by querying pg_stat_activity. Displays process details including PID, user, backend start time, and active query. Helps detect concurrent job execution and potential connection overload situations.

```sql
SELECT
  pid as process_id,
  usename as database_user,
  application_name,
  backend_start as when_process_began,
  wait_event_type,
  state,
  query,
  backend_type
FROM pg_stat_activity where application_name ilike 'pg_cron';
```

--------------------------------

### Install CAPTCHA React Dependencies

Source: https://supabase.com/docs/guides/auth/auth-captcha

Install the necessary React wrapper libraries for either hCaptcha or Cloudflare Turnstile using npm.

```bash
npm install @hcaptcha/react-hcaptcha
npm install @marsidev/react-turnstile
```

--------------------------------

### Configure Remote-Specific Database Seed Script in TOML

Source: https://supabase.com/docs/guides/deployment/branching/configuration

Define remote-specific configuration for a staging environment with a custom seed script. The remotes block allows you to specify different settings for persistent branches by referencing their project ID. This example shows how to enable database seeding with a staging-specific SQL file.

```toml
[remotes.staging]
project_id = "your-project-ref"

[remotes.staging.db.seed]
enabled = true
sql_paths = ["./seeds/staging.sql"]
```

--------------------------------

### Start Supabase Local Development Stack - CLI Command

Source: https://supabase.com/docs/reference/cli/supabase-network-bans-get

Starts all Supabase service containers for local development. Requires supabase/config.toml created via 'supabase init'. Supports excluding specific containers and health check verification. Recommends at least 7GB RAM for all services.

```bash
supabase start [flags]

# Flags:
# -x, --exclude <strings>     Names of containers to not start
# --ignore-health-check       Ignore unhealthy services and exit 0
```

```bash
supabase start
```

--------------------------------

### Render OAuth Consent Screen in React

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

Displays the OAuth authorization consent UI showing client details, requested permissions, and approve/deny buttons. Handles loading, error, and missing authorization states. Renders client name, redirect URI, and scope permissions as a formatted list.

```javascript
if (loading) return Loading...
if (error) return Error: {error}
if (!authDetails) return No authorization request found

return (
  <>
    <h1>Authorize {authDetails.client.name}</h1>
    <p>This application wants to access your account.</p>
    <div>
      <p>
        <strong>Client:</strong> {authDetails.client.name}
      </p>
      <p>
        <strong>Redirect URI:</strong> {authDetails.redirect_uri}
      </p>
      {authDetails.scope && authDetails.scope.trim() && (
        <div>
          <strong>Requested permissions:</strong>
          <ul>
            {authDetails.scope.split(' ').map((scopeItem) => (
              <li key={scopeItem}>{scopeItem}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleApprove}>Approve</button>
      <button onClick={handleDeny}>Deny</button>
    </div>
  </>
)
```

--------------------------------

### Install Supabase Client Library

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs

Adds the @supabase/supabase-js dependency to the project, which is required to interact with Supabase services like Auth and Database.

```bash
npm install @supabase/supabase-js
```

--------------------------------

### CLI Command supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-snippets

Starts the local Supabase database development stack. Optionally, it can restore from a logical backup file.

```APIDOC
## CLI Command supabase db start

### Description
Starts the local Supabase database development stack.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```
supabase db start
```

### Response
#### Success Response (200)
- **Output** (string) - The console output indicating the successful start of the database.

#### Response Example
```
# (Output will vary based on local setup and startup process)
```
```

--------------------------------

### List Teams API Response JSON

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-endpoint

Example response schema for the GET /api/teams endpoint returning an array of team objects. Each team includes name, team_users array with email and name, token, and a nested user object containing API credentials and BigQuery configuration details.

```json
[
  {
    "name": "lorem",
    "team_users": [
      {
        "email": "lorem",
        "name": "lorem"
      }
    ],
    "token": "lorem",
    "user": {
      "api_key": "lorem",
      "api_quota": 42,
      "bigquery_dataset_id": "lorem",
      "bigquery_dataset_location": "lorem",
      "bigquery_project_id": "lorem",
      "company": "lorem",
      "email": "lorem",
      "email_me_product": true,
      "email_preferred": "lorem",
      "image": "lorem",
      "name": "lorem",
      "phone": "lorem",
      "provider": "lorem",
      "token": "lorem"
    }
  }
]
```

--------------------------------

### Start SolidJS Development Server

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs

Runs the application in development mode, making it accessible via the browser at localhost:3000.

```bash
npm start
```

--------------------------------

### Handle REST API Routing in Edge Functions with TypeScript

Source: https://supabase.com/docs/guides/functions/http-methods

This example demonstrates how to use the Deno.serve handler to route incoming requests based on their HTTP method and URL pathname. It allows developers to consolidate multiple API endpoints into a single function to reduce cold starts and simplify management.

```typescript
Deno.serve(async (req) => {
  const { method, url } = req
  const { pathname } = new URL(url)

  // Route based on method and path
  if (method === 'GET' && pathname === '/users') {
    return getAllUsers()
  } else if (method === 'POST' && pathname === '/users') {
    return createUser(req)
  }

  return new Response('Not found', { status: 404 })
})
```

--------------------------------

### List all buckets

Source: https://supabase.com/docs/reference/csharp/storage-createbucket

Retrieves the details of all Storage buckets within an existing product. Requires 'select' permission on buckets.

```APIDOC
## GET /storage/buckets

### Description
Retrieves the details of all Storage buckets within an existing product.

### Method
GET

### Endpoint
/storage/buckets

### Policy Permissions Required
- **buckets** - `select`
- **objects** - none

### Response
#### Success Response (200)
- **buckets** (array) - Array of bucket objects containing bucket details

### Code Example
```csharp
var buckets = await supabase.Storage.ListBuckets();
```
```

--------------------------------

### CLI Command supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-unused-indexes

Starts the local database development stack. This command can optionally restore from a backup file.

```APIDOC
## CLI Command supabase db start

### Description
Starts the local database development stack. This command can optionally restore from a backup file.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```
supabase db start
```

### Response
#### Success Response (200)
- **output** (string) - Indicates successful start of the local database.

#### Response Example
```
Local database started successfully.
```
```

--------------------------------

### Create Token Exchange Endpoint - Next.js

Source: https://supabase.com/docs/guides/auth/passwords

Implements a GET endpoint at `app/auth/confirm/route.ts` that verifies OTP tokens using Supabase auth. Extracts token_hash and type from URL search parameters, verifies the OTP, and redirects to the next URL or error page. Requires a server-side Supabase client created via the Server-Side Auth guide.

```typescript
import { type EmailOtpType } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'
  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next

  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      return NextResponse.redirect(redirectTo)
    }
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = '/auth/auth-code-error'
  return NextResponse.redirect(redirectTo)
}
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-onauthstatechange

Create a new user account with email or phone authentication. Supports additional user metadata and custom redirect URLs. Email confirmation may be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Optionally include custom metadata and configure email redirect behavior.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom JSON object for storing additional user metadata
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL for your Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Authentication session (null if email confirmation is required)

#### Response Notes
- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- For existing confirmed users with both confirmations enabled: obfuscated user object is returned
- For existing confirmed users with either confirmation disabled: "User already registered" error is returned

### Additional Information
- User must verify email address before logging in if **Confirm email** is enabled
- Upon email confirmation, user is redirected to SITE_URL by default
- Custom redirect URLs can be configured in project settings
- Use getUser() method to fetch currently logged-in user
```

--------------------------------

### Enable Supabase OAuth 2.1 Server Configuration (TOML)

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

This TOML configuration snippet enables the OAuth 2.1 server capabilities within a Supabase project. It sets the authorization URL path and optionally allows dynamic client registration. This configuration is essential for transforming your Supabase instance into an identity provider.

```toml
[auth.oauth_server]
enabled = true
authorization_url_path = "/oauth/consent"
allow_dynamic_registration = false
```

--------------------------------

### POST /bucket - Create a bucket

Source: https://supabase.com/docs/reference/csharp/release-notes

Creates a new Storage bucket. Requires `buckets` insert permissions. The bucket name must be unique within the project.

```APIDOC
## POST /bucket

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
`/bucket`

### Request Body
- **name** (string) - Required - The name of the new bucket

### Policy Permissions Required
- **buckets** permissions: `insert`
- **objects** permissions: none

### Response
#### Success Response (201)
- **bucket** (object) - The newly created bucket object

### Request Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
```

### Notes
- Bucket names must be unique
- Bucket names should follow naming conventions
```

--------------------------------

### GET /supabase/explain

Source: https://supabase.com/docs/reference/swift/auth-mfa-getauthenticatorassurancelevel

Get the Postgres `EXPLAIN` execution plan of a query for debugging slow queries. This feature is not enabled by default as it can reveal sensitive information about your database.

```APIDOC
## GET /supabase/explain

### Description
Get the Postgres `EXPLAIN` execution plan of a query for debugging slow queries. This feature is not enabled by default as it can reveal sensitive information about your database. It's best to only enable this for testing environments.

### Method
GET

### Endpoint
/supabase/explain

### Parameters
(Applies to any Supabase query, no direct HTTP parameters for `explain()` itself)

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

### Response
#### Success Response (200)
- **plan** (object) - The Postgres execution plan details.

#### Response Example
```json
{
  "plan": {
    "Node Type": "Seq Scan",
    "Relation Name": "instruments",
    "Alias": "instruments",
    "Startup Cost": 0.00,
    "Total Cost": 10.00,
    "Plan Rows": 100,
    "Plan Width": 32
  }
}
```
```

--------------------------------

### Query Explanation (explain())

Source: https://supabase.com/docs/reference/swift/range

Get the Postgres `EXPLAIN` execution plan for a query to debug performance issues. This feature is typically disabled by default for security reasons and should be used cautiously.

```APIDOC
## GET /explain

### Description
Get the Postgres `EXPLAIN` execution plan for a query to debug performance issues. This works on any query, even for `rpc()` or writes. Explain is not enabled by default as it can reveal sensitive information about your database. It's best to only enable this for testing environments.

### Method
GET (as part of a select query)

### Endpoint
`/from("table").select().explain()` (conceptual, as it's an SDK method call)

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

### Request Example
Not applicable, as it's a method modifier on a query.

### Response
#### Success Response (200)
- **execution_plan** (Array of Objects) - The detailed Postgres execution plan.

#### Response Example
```json
[
  {
    "Plan": {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.00,
      "Total Cost": 1.00,
      "Plan Rows": 1,
      "Plan Width": 36
    }
  }
]
```

### Code Example (Swift)
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```
```

--------------------------------

### Start Deno Server with Hono Application

Source: https://supabase.com/docs/guides/functions/routing

Initializes and starts a Deno HTTP server using the Hono application instance. This line serves the Hono app on the default Deno port, making all defined routes accessible.

```javascript
Deno.serve(app.fetch)
```

--------------------------------

### PostgreSQL: Performing JOIN Operations with Full Table Names

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql

This SQL example illustrates how to perform an `INNER JOIN` between the `employees` and `departments` tables. It selects the `employee_name` and `department_name`, joining on `department_id`, and filters the results based on the `start_date` of employees. The use of full table names (`employees.employee_name`) enhances clarity.

```sql
select
  employees.employee_name,
  departments.department_name
from
  employees
join
  departments on employees.department_id = departments.department_id
where
  employees.start_date > '2022-01-01';
```

--------------------------------

### Create a new user with email and password using Supabase Auth

Source: https://supabase.com/docs/reference/python/removechannel

This code demonstrates how to sign up a new user with an email and password using `supabase.auth.sign_up()`. Depending on project settings for 'Confirm email', a session might be null until the user verifies their email address.

```python
response = supabase.auth.sign_up(
    {
        "email": "email@example.com",
        "password": "password"
    }
)
```

--------------------------------

### Installation via NuGet

Source: https://supabase.com/docs/reference/csharp/removechannel

Install the Supabase C# package from NuGet package manager. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Installation

### Description
Install the Supabase C# client library from the NuGet package repository.

### Method
Package Manager Command

### Installation Command
```bash
dotnet add package supabase
```

### Requirements
- .NET project with package manager support
- Internet connection for package download

### Notes
- The C# client library is maintained by the Supabase community
- Official maintainer: Joseph Schultz
- Contributors: Will Iverson, Ben Randall, Rhuan Barros
```

--------------------------------

### Package Installation

Source: https://supabase.com/docs/reference/dart/storage-updatebucket

Install the Supabase Flutter package from pub.dev using the Flutter CLI. This sets up the necessary dependencies for your Flutter project to use Supabase services.

```APIDOC
## Installation Setup

### Description
Install the supabase_flutter package from pub.dev to enable Supabase functionality in your Flutter application.

### Installation Command
```bash
flutter pub add supabase_flutter
```

### pubspec.yaml Configuration
Add or verify the following dependency in your pubspec.yaml file:
```yaml
dependencies:
  supabase_flutter: ^2.0.0
```

### Supported Platforms
- Flutter projects
- Non-Flutter Dart projects (use the supabase package instead)

### Requirements
- Flutter SDK with Dart support
- pub.dev access for package installation
```

--------------------------------

### POST /auth/initialize - Create Auth Client

Source: https://supabase.com/docs/reference/swift/neq

Initialize the Supabase authentication client with project credentials. Provides access to all auth methods via the supabase.auth namespace.

```APIDOC
## POST /auth/initialize

### Description
Initialize the Supabase authentication client with your project URL and API key. This creates the auth namespace for accessing authentication methods.

### Method
POST

### Endpoint
/auth/initialize

### Parameters
#### Request Body
- **supabaseURL** (string) - Required - Your Supabase project URL (e.g., https://xyzcompany.supabase.co)
- **supabaseKey** (string) - Required - Your publishable or anonymous API key

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
```

### Response
#### Success Response (200)
- **auth** (object) - Auth client instance with methods for user management and authentication

### Notes
- Use publishable key for client-side applications
- Access all auth methods via supabase.auth namespace
- Store credentials securely in your application
```

--------------------------------

### Create PostgreSQL Trigger for Broadcasting Database Changes with `realtime.broadcast_changes`

Source: https://supabase.com/docs/guides/realtime/getting_started

This SQL snippet demonstrates how to create a PostgreSQL trigger function and apply it to a table (e.g., 'messages') to automatically broadcast database changes (INSERT, UPDATE, DELETE) using Supabase `realtime.broadcast_changes`. It's ideal for mirroring full database changes to a room-specific channel.

```sql
-- Create a trigger function for broadcasting database changes
CREATE OR REPLACE FUNCTION broadcast_message_changes()
RETURNS TRIGGER AS $$
BEGIN
  -- Broadcast to room-specific channel
  PERFORM realtime.broadcast_changes(
    'room:' || NEW.room_id::text || ':messages',
    TG_OP,
    TG_OP,
    TG_TABLE_NAME,
    TG_TABLE_SCHEMA,
    NEW,
    OLD
  );
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply trigger to your messages table
CREATE TRIGGER messages_broadcast_trigger
  AFTER INSERT OR UPDATE OR DELETE ON messages
  FOR EACH ROW EXECUTE FUNCTION broadcast_message_changes();
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/kotlin/initializing

Creates a new user account. Depending on project settings, the user may need to verify their email address before logging in.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account with the provided credentials. The behavior regarding immediate login or email verification depends on the project's 'Confirm email' setting.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.
- **redirect_to** (string) - Optional - The URL to redirect the user to after a successful signup and email confirmation.
- **data** (object) - Optional - Additional metadata for the user.

### Request Example
{
  "email": "example@email.com",
  "password": "example-password",
  "redirect_to": "https://your-app.com/welcome"
}

### Response
#### Success Response (200)
- **user** (object) - The newly created user object if 'Confirm email' is enabled, or `null` if disabled and the user is logged in automatically.
- **session** (object) - The user's session object if 'Confirm email' is disabled and the user is logged in automatically.

#### Response Example
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "example@email.com",
    "created_at": "2023-01-01T12:00:00Z",
    "confirmed_at": null
  },
  "session": null
}
```

--------------------------------

### GET /buckets

Source: https://supabase.com/docs/reference/csharp/lt

Retrieves the details of all Storage buckets within an existing product.

```APIDOC
## GET /buckets

### Description
Retrieves the details of all Storage buckets within an existing product.

### Permissions
* `buckets` permissions: `select`
* `objects` permissions: none

### Method
GET

### Endpoint
`/buckets`

### Parameters
#### Path Parameters
_None_

#### Query Parameters
_None_

#### Request Body
_None_

### Request Example
```json
{}
```

### Response
#### Success Response (200)
- **id** (string) - Unique identifier of the bucket.
- **name** (string) - Name of the bucket.
- **public** (boolean) - Whether the bucket is public or private.
- **created_at** (string) - Timestamp when the bucket was created.
- **updated_at** (string) - Timestamp when the bucket was last updated.

#### Response Example
```json
[
  {
    "id": "avatars",
    "name": "avatars",
    "public": true,
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-01T12:00:00Z"
  },
  {
    "id": "documents",
    "name": "documents",
    "public": false,
    "created_at": "2023-01-02T10:30:00Z",
    "updated_at": "2023-01-02T10:30:00Z"
  }
]
```

### SDK Example
```csharp
var buckets = await supabase.Storage.ListBuckets();
```
```

--------------------------------

### Test Supabase Metrics API with cURL

Source: https://supabase.com/docs/guides/telemetry/metrics/vendor-agnostic

This `curl` command demonstrates how to test the Supabase Metrics API locally. It sends a GET request to the metrics endpoint, authenticating with HTTP Basic Auth using `service_role` as the username and a Secret API key as the password. This allows for quick verification of API access and metric retrieval.

```bash
curl <project-url>/customer/v1/privileged/metrics \
--user 'service_role:sb_secret_...'
```

--------------------------------

### Start Supabase Local Development Stack - CLI Command

Source: https://supabase.com/docs/reference/cli/global-flags

Starts all Supabase local development service containers. Requires supabase/config.toml created by running 'supabase init'. Supports excluding specific containers and health check validation. Recommends at least 7GB RAM.

```bash
supabase start [flags]
```

```bash
supabase start
```

```bash
Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.
```

--------------------------------

### Install and Initialize Supabase CLI

Source: https://supabase.com/docs/guides/api/rest/generating-python-types

Commands to install the Supabase CLI as a development dependency, authenticate with a personal access token, and initialize a local project configuration.

```bash
npm i supabase --save-dev

# Login with your Personal Access Token
npx supabase login

# Initialize your Supabase project
npx supabase init
```

--------------------------------

### GET explain() - Get Query Execution Plan

Source: https://supabase.com/docs/reference/javascript/auth-signinwithotp

Returns the EXPLAIN plan for the query, providing insight into how the database executes the query. Requires db_plan_enabled setting to be enabled before use.

```APIDOC
## GET explain()

### Description
Return data as the EXPLAIN plan for the query. Provides query execution analysis.

### Method
GET

### Endpoint
.explain(options)

### Parameters
#### Options Object
- **options** (object) - Optional - Named parameters for explain configuration
  - **analyze** (boolean) - Optional - Execute the query and include actual runtime statistics
  - **verbose** (boolean) - Optional - Include additional output details

### Prerequisites
- db_plan_enabled setting must be enabled in the database

### Request Example
```javascript
const { data, error } = await supabase
  .from('characters')
  .select()
  .explain()
```

### Response
#### Success Response (200)
- **data** (object) - The EXPLAIN plan for the query
- **error** (object) - Error object if the request fails

### Return Type
- PostgrestBuilder - Query builder with explain plan

### Notes
- Requires db_plan_enabled setting to be configured
- Useful for query optimization and performance analysis
- Can include analyze and verbose options for detailed output
```

--------------------------------

### Create Custom Logs in PostgreSQL pg_cron Functions (PL/pgSQL)

Source: https://supabase.com/docs/guides/troubleshooting/pgcron-debugging-guide-n1KTaz

This PL/pgSQL function demonstrates how to embed custom logging within a PostgreSQL function intended for use with pg_cron. It records the start and end times of the function's execution and includes exception handling to catch and log errors, providing more granular insight into cron job operations.

```sql
create or replace function log_example()
returns void
language plpgsql
as $$
begin

     -- Logging start of function
     raise log 'logging start of cron function call: (%)', (select now());

    -- INSERT LOGIC HERE

     -- Logging end of function
     raise log 'logging end of cron function call: (%)', (select now());

    exception
     -- Handle exceptions here if needed
     when others then
         raise exception 'An error occurred in cron function <insert name here>. ERROR MESSAGE: %', sqlerrm;

end;
$$;
```

--------------------------------

### POST /storage/buckets

Source: https://supabase.com/docs/reference/csharp/select

Creates a new Storage bucket with the specified name and configuration. Requires `buckets` insert permissions.

```APIDOC
## POST /storage/buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
`/storage/buckets`

### Request Body
- **name** (string) - Required - Name of the bucket to create
- **public** (boolean) - Optional - Whether bucket is public (default: false)

### Policy Permissions Required
- **buckets** - `insert`
- **objects** - none

### Response
#### Success Response (201)
- **id** (string) - Bucket identifier
- **name** (string) - Bucket name
- **public** (boolean) - Whether bucket is public

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
```
```

--------------------------------

### Send Messages via Supabase HTTP/REST API

Source: https://supabase.com/docs/guides/realtime/getting_started

Demonstrates how to send broadcast messages to Supabase using HTTP POST requests with proper authentication headers and payload structure. This approach is ideal for server-side applications that need to broadcast messages without maintaining a persistent client connection. Requires a valid service role key for authentication.

```typescript
// Send message via REST API
const response = await fetch(`https://<project>.supabase.co/rest/v1/rpc/broadcast`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer <your-service-role-key>`,
    apikey: '<your-service-role-key>',
  },
  body: JSON.stringify({
    topic: 'room:lobby:messages',
    event: 'message_sent',
    payload: {
      text: 'Hello from server!',
      user: 'system',
      timestamp: new Date().toISOString(),
    },
    private: true,
  }),
})
```

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

// Send message via REST API
final response = await http.post(
  Uri.parse('https://<project>.supabase.co/rest/v1/rpc/broadcast'),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your-service-role-key>',
    'apikey': '<your-service-role-key>',
  },
  body: jsonEncode({
    'topic': 'room:lobby:messages',
    'event': 'message_sent',
    'payload': {
      'text': 'Hello from server!',
      'user': 'system',
      'timestamp': DateTime.now().toIso8601String(),
    },
    'private': true,
  }),
);
```

```swift
import Foundation

// Send message via REST API
let url = URL(string: "https://<project>.supabase.co/rest/v1/rpc/broadcast")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("application/json", forHTTPHeaderField: "Content-Type")
request.setValue("Bearer <your-service-role-key>", forHTTPHeaderField: "Authorization")
request.setValue("<your-service-role-key>", forHTTPHeaderField: "apikey")

let payload = [
  "topic": "room:lobby:messages",
  "event": "message_sent",
  "payload": [
    "text": "Hello from server!",
    "user": "system",
    "timestamp": ISO8601DateFormatter().string(from: Date())
  ],
  "private": true
] as [String: Any]

request.httpBody = try JSONSerialization.data(withJSONObject: payload)

let (data, response) = try await URLSession.shared.data(for: request)
```

```python
import requests
from datetime import datetime

# Send message via REST API
response = requests.post(
    'https://<project>.supabase.co/rest/v1/rpc/broadcast',
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <your-service-role-key>',
        'apikey': '<your-service-role-key>'
    },
    json={
        'topic': 'room:lobby:messages',
        'event': 'message_sent',
        'payload': {
            'text': 'Hello from server!',
            'user': 'system',
            'timestamp': datetime.now().isoformat()
        },
        'private': True
    }
)
```

--------------------------------

### GitHub Actions CI/CD Workflow for Supabase Database Testing

Source: https://supabase.com/docs/guides/local-development/testing/overview

GitHub Actions workflow configuration that automates database testing in a CI pipeline. Triggers on push to main branch and pull requests, sets up Supabase CLI, starts a local Supabase instance, and runs database tests. Requires Supabase CLI to be installed and configured in the repository.

```yaml
name: Database Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Supabase CLI
        uses: supabase/setup-cli@v1

      - name: Start Supabase
        run: supabase start

      - name: Run Tests
        run: supabase test db
```

--------------------------------

### Install Supabase packages with npm, yarn, or pnpm

Source: https://supabase.com/docs/guides/auth/server-side/creating-a-client

Install the @supabase/supabase-js and @supabase/ssr helper packages required for SSR support. Choose your preferred package manager: npm, yarn, or pnpm.

```bash
npm install @supabase/supabase-js @supabase/ssr
```

```bash
yarn add @supabase/supabase-js @supabase/ssr
```

```bash
pnpm add @supabase/supabase-js @supabase/ssr
```

--------------------------------

### Start Supabase Excluding Services or Ignoring Health Checks

Source: https://supabase.com/docs/reference/cli/supabase-functions

Demonstrates how to customize the `supabase start` command. Use the `-x` flag to exclude specific service containers, such as `studio` and `imgproxy`, from starting. The `--ignore-health-check` flag allows the command to proceed even if some services report unhealthiness, bypassing automatic health verification.

```bash
supabase start -x studio,imgproxy
```

```bash
supabase start --ignore-health-check
```

--------------------------------

### Example JSON Response for Listing All Project API Keys

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

This JSON array provides an example successful response (HTTP 200 OK) when retrieving all API keys for a project. Each object in the array represents a single API key with its complete set of properties.

```json
[
  {
    "api_key": "lorem",
    "id": "lorem",
    "type": "legacy",
    "prefix": "lorem",
    "name": "lorem",
    "description": "lorem",
    "hash": "lorem",
    "secret_jwt_template": {
      "property1": null,
      "property2": null
    },
    "inserted_at": "2021-12-31T23:34:00Z",
    "updated_at": "2021-12-31T23:34:00Z"
  }
]
```

--------------------------------

### Install DuckDB and Iceberg Extension (Bash)

Source: https://supabase.com/docs/guides/storage/analytics/examples/duckdb

This command installs the necessary Python packages for DuckDB and its Iceberg extension, enabling interaction with Iceberg tables. It uses `pip`, the Python package installer, to fetch and install the required libraries.

```bash
pip install duckdb duckdb-iceberg
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/kotlin/auth-mfa-challengeandverify

Creates a new user account with email or phone authentication. This endpoint handles user registration with optional email/phone verification and supports additional user metadata during signup.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with email or phone provider authentication.

### Method
POST

### Endpoint
auth.signUpWith()

### Parameters
#### Request Body
- **provider** (string) - Required - Authentication provider: "Email" or "Phone"
- **email** (string) - Required (for Email provider) - User's email address
- **password** (string) - Required (for Email provider) - User's password
- **phone** (string) - Required (for Phone provider) - User's phone number
- **redirectUrl** (string) - Optional - URL to redirect after email confirmation
- **metadata** (object) - Optional - Additional user metadata to store

### Request Example
```kotlin
val user = supabase.auth.signUpWith(Email) {
    email = "example@email.com"
    password = "example-password"
}
```

### Response
#### Success Response (200)
- **user** (object) - The created user object with id, email, and metadata
- **session** (object) - Authentication session (if email confirmation disabled)
- **status** (integer) - HTTP status code

### Notes
- Email confirmation is enabled by default; disable in project settings if not required
- If email confirmation enabled: returns user object, user not logged in automatically
- If email confirmation disabled: returns null, user logged in automatically
- Users redirected to SITE_URL after email confirmation
- Can add custom redirect URLs in project settings
- For existing confirmed users: returns obfuscated user or "User already registered" error depending on confirmation settings
```

--------------------------------

### Get execution plan (explain)

Source: https://supabase.com/docs/reference/swift/auth-unlinkidentity

Get the Postgres `EXPLAIN` execution plan of a query using the `explain()` method for debugging slow queries. This method is client-side and operates on any query.

```APIDOC
## CLIENT METHOD explain()

### Description
Get the Postgres `EXPLAIN` execution plan of a query using the `explain()` method for debugging slow queries. This method is client-side and operates on any query (e.g., from, rpc, writes). Explain is not enabled by default and should be used cautiously as it can reveal sensitive database information.

### Method
N/A (Client-side method)

### Endpoint
N/A

### Parameters
N/A

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

### Response
#### Success Response (200)
- **plan** (Object) - The Postgres EXPLAIN execution plan.

#### Response Example
```json
{
  "plan": {
    "Node Type": "Seq Scan",
    "Relation Name": "instruments",
    "Alias": "instruments",
    "Startup Cost": 0.00,
    "Total Cost": 1.00,
    "Plan Rows": 1,
    "Plan Width": 80
  }
}
```
```

--------------------------------

### Start Local Supabase Stack

Source: https://supabase.com/docs/guides/resources/supabase-cli

Start the Supabase stack locally on your machine. This command launches all necessary services including Postgres database, Auth, Storage, and other Supabase features.

```bash
npx supabase start
```

--------------------------------

### Retrieve User Details by ID with Supabase Auth Admin API

Source: https://supabase.com/docs/reference/self-hosting-auth/returns-the-created-user

This snippet illustrates the `GET /admin/user/{user_id}` endpoint, used to retrieve detailed information about a specific user. The `user_id` is a required path parameter. The provided code is an example of a successful JSON response (HTTP 200) containing comprehensive user data, including metadata and identity details.

```json
{
  "app_metadata": {
    "property1": null,
    "property2": null
  },
  "aud": "lorem",
  "banned_until": "2021-12-31T23:34:00Z",
  "confirmation_sent_at": "2021-12-31T23:34:00Z",
  "confirmed_at": "2021-12-31T23:34:00Z",
  "created_at": "2021-12-31T23:34:00Z",
  "email": "lorem",
  "email_change_sent_at": "2021-12-31T23:34:00Z",
  "email_confirmed_at": "2021-12-31T23:34:00Z",
  "id": "fbdf5a53-161e-4460-98ad-0e39408d8689",
  "identities": [
    {
      "created_at": "2021-12-31T23:34:00Z",
      "id": "lorem",
      "identity_data": {
        "property1": null,
        "property2": null
      },
      "last_sign_in_at": "2021-12-31T23:34:00Z",
      "provider": "lorem",
      "updated_at": "2021-12-31T23:34:00Z",
      "user_id": "fbdf5a53-161e-4460-98ad-0e39408d8689"
    }
  ],
  "invited_at": "2021-12-31T23:34:00Z",
  "last_sign_in_at": "2021-12-31T23:34:00Z",
  "new_email": "lorem",
  "new_phone": "lorem",
  "phone": "lorem",
  "phone_change_sent_at": "2021-12-31T23:34:00Z",
  "phone_confirmed_at": "2021-12-31T23:34:00Z",
  "reauthentication_sent_at": "2021-12-31T23:34:00Z",
  "recovery_sent_at": "2021-12-31T23:34:00Z",
  "role": "lorem",
  "updated_at": "2021-12-31T23:34:00Z",
  "user_metadata": {
    "property1": null,
    "property2": null
  }
}
```

--------------------------------

### Create a bucket

Source: https://supabase.com/docs/reference/csharp/storage-createbucket

Creates a new Storage bucket. Requires 'insert' permission on buckets. The bucket name must be unique within the product.

```APIDOC
## POST /storage/buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/storage/buckets

### Request Body
- **name** (string) - Required - Name of the bucket to create

### Policy Permissions Required
- **buckets** - `insert`
- **objects** - none

### Response
#### Success Response (201)
- **bucket** (object) - Created bucket object with bucket details

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
```
```

--------------------------------

### Filter data by matching at least one condition with Supabase C#

Source: https://supabase.com/docs/reference/csharp/auth-getuser

This example shows how to query data from the 'Country' table where a row satisfies at least one of the specified conditions. It uses the 'Where' clause with the logical OR operator ('||') to find rows where 'Id' is either 20 or 30. The 'Get' method executes the query and retrieves the results.

```C#
var result = await supabase.From<Country>()
  .Where(x => x.Id == 20 || x.Id == 30)
  .Get();
```

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-signinanonymously

Create a new user account with email or phone authentication. Supports password-based signup with optional metadata and redirect URLs. Email or phone verification may be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Optionally include custom metadata and configure email redirect behavior.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password for authentication.
- **data** (object) - Optional - Custom JSON object to store additional user metadata.
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL for the Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
```

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Authentication session (null if email confirmation is required)
- **user.id** (string) - Unique user identifier
- **user.email** (string) - User email address
- **user.user_metadata** (object) - Custom metadata provided during signup

### Response Example
```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token"
  }
}
```

### Notes
- By default, users must verify their email before logging in (configurable)
- If Confirm email is enabled, session is null until email verification
- If Confirm email is disabled, both user and session are returned immediately
- For existing confirmed users, behavior depends on Confirm email and Confirm phone settings
- Users are redirected to SITE_URL after email confirmation by default
```

--------------------------------

### Install Supabase CLI with Homebrew

Source: https://supabase.com/docs/guides/local-development

Install the Supabase CLI using Homebrew package manager on macOS. This provides a system-wide installation of the CLI tool.

```shell
brew install supabase/tap/supabase
```

--------------------------------

### Auth Admin Setup

Source: https://supabase.com/docs/reference/kotlin/auth-getsession

Demonstrates how to create a server-side Supabase client with the Auth plugin and access the auth admin API using a service role key.

```APIDOC
## Auth Admin Setup

### Description
Any method under the `supabase.auth.admin` namespace requires a `service_role` key. These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the browser.

### Method
N/A (Client Setup)

### Endpoint
N/A (Client Setup)

### Parameters
None

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```

### Response
N/A (Client Setup)
```

--------------------------------

### GET /explain - Query Execution Plan

Source: https://supabase.com/docs/reference/swift/auth-getuseridentities

Get the Postgres EXPLAIN execution plan of a query for debugging slow queries. Works on any query including rpc() and write operations. Requires explicit enablement as it can reveal sensitive database information.

```APIDOC
## GET /explain

### Description
Retrieve the Postgres EXPLAIN execution plan for a query to debug performance issues. This method can be chained on any query operation.

### Method
GET

### Endpoint
/explain

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - Include actual execution statistics
- **verbose** (boolean) - Optional - Include additional output details

### Usage
Chain `.explain()` on any query before `.execute()`

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

### Response
#### Success Response (200)
- **plan** (object) - Postgres EXPLAIN execution plan details
- **planning_time** (number) - Time spent planning the query
- **execution_time** (number) - Time spent executing the query

### Notes
- EXPLAIN is not enabled by default as it can reveal sensitive database information
- Best practice: only enable for testing environments
- For production use, enable with additional protection using pre-request functions
- Refer to Performance Debugging Guide for enablement instructions
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/swift/auth-mfa-getauthenticatorassurancelevel

Registers a new user with an email/phone and password. Email verification can be configured to be required or optional. Additional user metadata and redirect URLs can be provided.

```APIDOC
## POST /auth/v1/signup

### Description
Registers a new user with an email/phone and password. Email verification can be configured to be required or optional. If email confirmation is enabled, a user object is returned but the session is null until verification. Additional user metadata and redirect URLs can be provided.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (String) - Optional - One of `email` or `phone` must be provided.
- **phone** (String) - Optional - One of `email` or `phone` must be provided.
- **password** (String) - Required - The user's password.
- **data** (JSONObject) - Optional - A custom data object to store additional user metadata.
- **redirectTo** (URL) - Optional - Only for email signups. The redirect URL embedded in the email link. Must be a configured redirect URL for your Supabase instance.
- **captchaToken** (String) - Optional - CAPTCHA token for bot protection.

### Request Example
```json
{
  "email": "example@email.com",
  "password": "example-password"
}
```

### Response
#### Success Response (200)
- **user** (object) - The newly created user object.
- **session** (object/null) - The user's session if email confirmation is disabled, otherwise null until confirmed.

#### Response Example
```json
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "example@email.com",
    "phone": null,
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-01T12:00:00Z",
    "email_confirmed_at": null,
    "phone_confirmed_at": null,
    "app_metadata": {},
    "user_metadata": {},
    "role": "authenticated"
  },
  "session": null
}
```

#### Error Response (400)
- **message** (string) - Error description, e.g., "User already registered".

#### Error Response Example
```json
{
  "code": 400,
  "message": "User already registered"
}
```
```

--------------------------------

### GET /v1/organizations/{slug}

Source: https://supabase.com/docs/reference/api/v1-get-project-api-key

Gets information about the organization.

```APIDOC
## GET /v1/organizations/{slug}

### Description
Gets information about the organization.

### Method
GET

### Endpoint
/v1/organizations/{slug}

### Parameters
#### Path Parameters
- **slug** (string) - Required - Organization slug

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
{}

### Response
#### Success Response (200)
- **id** (string) - 
- **name** (string) - 
- **plan** (string) - 
- **opt_in_tags** (array) - 
- **allowed_release_channels** (array) - 

#### Response Example
{
  "id": "lorem",
  "name": "lorem",
  "plan": "free",
  "opt_in_tags": [
    "AI_SQL_GENERATOR_OPT_IN"
  ],
  "allowed_release_channels": [
    "internal"
  ]
}
```

--------------------------------

### Create PostgreSQL Trigger for Custom Notifications with `realtime.send`

Source: https://supabase.com/docs/guides/realtime/getting_started

This SQL snippet illustrates how to create a PostgreSQL trigger function and apply it to a table (e.g., 'messages') to send custom notifications using Supabase `realtime.send`. It allows sending specific data payloads for events like new message creation to a private, room-specific channel, offering fine-grained control over broadcasted data.

```sql
-- Create a trigger function for custom notifications
CREATE OR REPLACE FUNCTION notify_message_activity()
RETURNS TRIGGER AS $$
BEGIN
  -- Send custom notification when new message is created
  IF TG_OP = 'INSERT' THEN
    PERFORM realtime.send(
      jsonb_build_object(
        'message_id', NEW.id,
        'user_id', NEW.user_id,
        'room_id', NEW.room_id,
        'created_at', NEW.created_at
      ),
      'message_created',
      'room:' || NEW.room_id::text || ':notifications',
      true  -- private channel
    );
  END IF;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply trigger to your messages table
CREATE TRIGGER messages_notification_trigger
  AFTER INSERT ON messages
  FOR EACH ROW EXECUTE FUNCTION notify_message_activity();
```

--------------------------------

### supabase.auth.sign_up()

Source: https://supabase.com/docs/reference/python/removeallchannels

Registers a new user with an email and password. The behavior regarding email confirmation and session return depends on project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Registers a new user with an email and password. By default, email verification is required, in which case a user object is returned but the session is null. If email confirmation is disabled, both a user and session are returned.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.
- **options** (object) - Optional - Additional options for sign-up.
  - **data** (object) - Optional - Custom user metadata.

### Request Example
```json
{
  "email": "email@example.com",
  "password": "password"
}
```

### Response
#### Success Response (200/201)
- **user** (object) - The newly created user object.
- **session** (object | null) - The user's session object, or null if email confirmation is enabled.

#### Response Example
```json
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "email@example.com",
    "confirmed_at": null,
    "created_at": "2023-01-01T12:00:00Z"
  },
  "session": null
}
```
(If email confirmation is disabled):
```json
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "email@example.com",
    "confirmed_at": "2023-01-01T12:00:00Z",
    "created_at": "2023-01-01T12:00:00Z"
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "refresh_token": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    "expires_in": 3600,
    "token_type": "bearer"
  }
}
```
```

--------------------------------

### PostgreSQL: Structuring Complex Queries with Common Table Expressions (CTEs)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql

This SQL example showcases how to break down a complex query into more manageable and readable parts using Common Table Expressions (CTEs). It defines `department_employees` to join employee and department data, then `employee_counts` to aggregate employee numbers per department, finally selecting and ordering the results from the CTEs.

```sql
with department_employees as (
  -- Get all employees and their departments
  select
    employees.department_id,
    employees.first_name,
    employees.last_name,
    departments.department_name
  from
    employees
  join
    departments on employees.department_id = departments.department_id
),
employee_counts as (
  -- Count how many employees in each department
  select
    department_name,
    count(*) as num_employees
  from
    department_employees
  group by
    department_name
)
select
  department_name,
  num_employees
from
  employee_counts
order by
  department_name;
```

--------------------------------

### GET /explain - Query Execution Plan

Source: https://supabase.com/docs/reference/swift/auth-onauthstatechange

Get the Postgres EXPLAIN execution plan of a query for debugging slow queries. This method works on any query including rpc() and write operations. Requires explicit enablement for security reasons.

```APIDOC
## GET /explain

### Description
Retrieve the Postgres EXPLAIN execution plan for a query to debug performance issues. This method can be applied to any query type including remote procedure calls and write operations.

### Method
GET

### Endpoint
.explain()

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - Include actual execution statistics
- **verbose** (boolean) - Optional - Include additional output details

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

### Response
#### Success Response (200)
- **plan** (object) - Postgres execution plan details
- **planning_time** (number) - Time spent planning the query
- **execution_time** (number) - Time spent executing the query

### Notes
- Explain is not enabled by default as it can reveal sensitive database information
- Best practice: only enable for testing environments
- For production use, implement additional protection with pre-request functions
- Refer to Performance Debugging Guide for enablement instructions
```

--------------------------------

### Configure JWT Issuer for Tunneled Local Supabase (TOML)

Source: https://supabase.com/docs/guides/auth/oauth-server/getting-started

This TOML configuration sets the `jwt_issuer` field, which is critical when exposing a local Supabase instance via a tunnel. It ensures that JWTs issued by the local instance have the correct issuer claim, matching the tunnel URL. This is vital for proper token validation by external OAuth clients and accurate discovery endpoint information.

```toml
[auth]
jwt_issuer = "https://my-tunnel.url/auth/v1"
```

--------------------------------

### POST /createSupabaseClient - Initialize Supabase Client

Source: https://supabase.com/docs/reference/kotlin/auth-api

Create and initialize a Supabase client with configuration for URL, API key, and optional plugins. This is the entry point for all Supabase operations including Auth, Postgrest, Storage, Realtime, Functions, and GraphQL.

```APIDOC
## createSupabaseClient - Initialize Supabase Client

### Description
Initialize a Supabase client with required credentials and optional plugin configuration.

### Method
Factory Function

### Parameters

#### Required Parameters
- **supabaseUrl** (String) - Required - The unique Supabase URL supplied when creating a new project in the project dashboard
- **supabaseKey** (String) - Required - The unique Supabase Key supplied when creating a new project in the project dashboard

#### Optional Parameters
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - Apply additional configuration and install plugins

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
    // install other modules
}
```

### Available Plugins
- Auth - Authentication module
- Postgrest - PostgreSQL REST API
- Storage - File storage
- Realtime - Real-time subscriptions
- Functions - Serverless functions
- GraphQL - GraphQL API

### Response
Returns initialized SupabaseClient instance ready for use.
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/javascript/storage-emptybucket

Creates a new user account with the provided credentials. Behavior regarding session and email confirmation depends on project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. Be aware that if a user account exists, an obfuscated error or user object may be returned to prevent enumeration attacks. This method supports PKCE via email signups.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
(None directly in URL)

### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.
- **phone** (string) - Optional - The user's phone number (for SMS/WhatsApp signup).
- **options** (object) - Optional - Additional options like `data` for user metadata or `redirectTo` for email confirmation redirects.

### Request Example
```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
```

### Response
#### Success Response (200)
- **data** (object) - Contains `user` and `session` objects.
  - **user** (object | null) - The newly created user object if successful, or null if email confirmation is pending.
  - **session** (object | null) - The user's session object if email confirmation is disabled, otherwise null.
- **error** (object | null) - An error object if the signup failed.

#### Response Example
```json
{
  "data": {
    "user": {
      "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "aud": "authenticated",
      "role": "authenticated",
      "email": "example@email.com",
      "email_confirmed_at": "2023-01-01T12:00:00Z",
      "phone": "",
      "confirmation_sent_at": "2023-01-01T11:59:00Z",
      "last_sign_in_at": "2023-01-01T12:00:00Z",
      "app_metadata": {
        "provider": "email"
      },
      "user_metadata": {},
      "created_at": "2023-01-01T11:58:00Z",
      "updated_at": "2023-01-01T12:00:00Z"
    },
    "session": {
      "access_token": "eyJhbGciOiJIUzI1NiIs...",
      "token_type": "bearer",
      "expires_in": 3600,
      "expires_at": 1672588800,
      "refresh_token": "a1b2c3d4-e5f6-7890-1234-567890abcdef"
    }
  },
  "error": null
}
```
```

--------------------------------

### GET /supabase branches get

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-index-stats

Retrieve details of the specified preview branch.

```APIDOC
## GET /supabase branches get

### Description
Retrieve details of the specified preview branch.

### Method
GET

### Endpoint
/supabase branches get [name]

### Parameters
#### Path Parameters
- **name** (string) - Required - The name of the branch.

#### Flags
- **--project-ref** (string) - Optional - Project ref of the Supabase project.

### Request Example
N/A

### Response
#### Success Response (200)
- **branch** (object) - Branch details.

#### Response Example
{
  "name": "my-branch",
  "id": "branch_xxxxxxxxxxxx",
  "status": "active"
}

```

--------------------------------

### Auth: Create a New User (SignUp)

Source: https://supabase.com/docs/reference/csharp/gt

Creates a new user with the provided email and password. Email verification behavior depends on project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. The user may need to verify their email depending on the project's 'Confirm email' setting. If 'Confirm email' is enabled, the session will be null upon immediate sign up.

### Method
POST

### Endpoint
supabase.Auth.SignUp(email, password)

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No direct query parameters for this method.

#### Request Body
- **email** (string) - Required - The email address for the new user.
- **password** (string) - Required - The password for the new user.

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
```

### Response
#### Success Response (200)
- **user** (User) - The newly created user object.
- **session** (Session) - The user's session, if email confirmation is disabled. Otherwise, null.

#### Response Example
```json
{
  "user": {
    "id": "some-uuid",
    "email": "user@example.com",
    "created_at": "2023-01-01T12:00:00Z"
  },
  "session": {
    "access_token": "jwt-token",
    "refresh_token": "refresh-token",
    "expires_in": 3600
  }
}
```
(Session might be null if email confirmation is enabled)

#### Error Response (400)
- If `SignUp()` is called for an existing confirmed user: 'User already registered' error is returned if email/phone confirmation is disabled. An obfuscated user object is returned if both are enabled.
```

--------------------------------

### Install Laravel Breeze Authentication

Source: https://supabase.com/docs/guides/getting-started/quickstarts/laravel

Install and configure Laravel Breeze, a simple authentication starter kit that implements all of Laravel's built-in authentication features including login, registration, and password reset.

```bash
composer require laravel/breeze --dev
php artisan breeze:install
```

--------------------------------

### GET /query - EXPLAIN Execution Plan

Source: https://supabase.com/docs/reference/swift/update

Get the Postgres EXPLAIN execution plan of a query for debugging slow queries. This method works on any query including rpc() and write operations. EXPLAIN is disabled by default for security reasons and should only be enabled in testing environments or with additional protection in production.

```APIDOC
## GET /query - EXPLAIN

### Description
Retrieve the Postgres EXPLAIN execution plan for a query to debug performance issues.

### Method
GET

### Endpoint
/query/explain

### Parameters
#### Query Parameters
- **table** (string) - Required - The table name to query
- **select** (string) - Optional - Columns to select
- **analyze** (boolean) - Optional - Include ANALYZE in the execution plan
- **verbose** (boolean) - Optional - Include verbose output in the execution plan

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

### Response
#### Success Response (200)
- **plan** (array) - The EXPLAIN execution plan details
- **planning_time** (number) - Time spent planning the query
- **execution_time** (number) - Time spent executing the query

### Notes
- EXPLAIN is not enabled by default as it can reveal sensitive database information
- Enable only in testing environments or with pre-request function protection in production
- Refer to Performance Debugging Guide for enabling on your project
```

--------------------------------

### Configuration: functions.<function_name>.entrypoint

Source: https://supabase.com/docs/guides/cli/config

Documentation for the `functions.<function_name>.entrypoint` configuration parameter, which specifies a custom entrypoint path for a function.

```APIDOC
## Configuration Parameter: functions.<function_name>.entrypoint

### Description
Specify a custom entrypoint path for the function relative to the project root. When not specified, defaults to `supabase/functions/<function_name>/index.ts`.

### Method
Configuration Setting

### Endpoint
Configuration File

### Parameters
#### Request Body
- **functions.<function_name>.entrypoint** (string) - Optional - Custom entrypoint path for the function. Defaults to `supabase/functions/<function_name>/index.ts`.

### Request Example
```toml
[functions.my_function]
entrypoint = "path/to/custom/function.ts"
```

### Response
Implicit success on valid configuration.
```

--------------------------------

### GET /v1/projects/{ref}/postgrest

Source: https://supabase.com/docs/reference/api/v1-exchange-oauth-token

Gets project's postgrest config.

```APIDOC
## GET /v1/projects/{ref}/postgrest

### Description
Gets project's postgrest config.

### Method
GET

### Endpoint
/v1/projects/{ref}/postgrest

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **db_schema** (string) - Database schema used by PostgREST
- **max_rows** (integer) - Maximum number of rows returned by PostgREST
- **db_extra_search_path** (string) - Extra search path for the database
- **db_pool** (integer) - Database connection pool size
- **jwt_secret** (string) - JWT secret for PostgREST

#### Response Example
```json
{
  "db_schema": "lorem",
  "max_rows": 42,
  "db_extra_search_path": "lorem",
  "db_pool": 42,
  "jwt_secret": "lorem"
}
```
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/swift/storage-getbucket

Registers a new user with an email and password or phone number and password. Email verification might be required based on project settings. Returns user and session information upon successful registration.

```APIDOC
## POST /auth/v1/signup

### Description
Registers a new user with an email and password or phone number and password. Email verification might be required based on project settings. If email confirmation is enabled, a `user` object is returned but `session` is null until the email is confirmed. If disabled, both `user` and `session` are returned immediately.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **email** (String) - Optional - The user's email address. One of `email` or `phone` must be provided.
- **phone** (String) - Optional - The user's phone number. One of `email` or `phone` must be provided.
- **password** (String) - Required - The user's password.
- **data** (JSONObject) - Optional - A custom data object to store additional user metadata.
- **redirectTo** (URL) - Optional - Only for email signups. The redirect URL embedded in the email link. Must be a configured redirect URL for your Supabase instance.
- **captchaToken** (String) - Optional - CAPTCHA token for bot protection.

### Request Example
```json
{
  "email": "example@email.com",
  "password": "example-password",
  "data": {
    "full_name": "John Doe"
  }
}
```

### Response
#### Success Response (200)
- **user** (Object) - The newly created user object. Contains user details like `id`, `email`, `created_at`, `email_confirmed_at`, etc.
- **session** (Object | null) - The user's session object, including `access_token`, `refresh_token`, `expires_in`, if email confirmation is disabled. Null if email confirmation is enabled and not yet completed.

#### Response Example
```json
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "example@email.com",
    "aud": "authenticated",
    "role": "authenticated",
    "created_at": "2023-10-27T10:00:00Z",
    "updated_at": "2023-10-27T10:00:00Z",
    "email_confirmed_at": null,
    "phone_confirmed_at": null,
    "last_sign_in_at": null,
    "app_metadata": {
      "provider": "email"
    },
    "user_metadata": {
      "full_name": "John Doe"
    }
  },
  "session": null
}
```
```json
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "example@email.com",
    "aud": "authenticated",
    "role": "authenticated",
    "created_at": "2023-10-27T10:00:00Z",
    "updated_at": "2023-10-27T10:00:00Z",
    "email_confirmed_at": "2023-10-27T10:05:00Z",
    "phone_confirmed_at": null,
    "last_sign_in_at": "2023-10-27T10:05:00Z",
    "app_metadata": {
      "provider": "email"
    },
    "user_metadata": {
      "full_name": "John Doe"
    }
  },
  "session": {
    "access_token": "eyJhbGciOiJIUzI1NiIs...",
    "token_type": "Bearer",
    "expires_in": 3600,
    "expires_at": 1678886400,
    "refresh_token": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "user": {
      "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "email": "example@email.com",
      "aud": "authenticated",
      "role": "authenticated",
      "created_at": "2023-10-27T10:00:00Z",
      "updated_at": "2023-10-27T10:00:00Z",
      "email_confirmed_at": "2023-10-27T10:05:00Z",
      "phone_confirmed_at": null,
      "last_sign_in_at": "2023-10-27T10:05:00Z",
      "app_metadata": {
        "provider": "email"
      },
      "user_metadata": {
        "full_name": "John Doe"
      }
    }
  }
}
```
```

--------------------------------

### GET /v1/projects/{ref}/config/database/pgbouncer

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Get project's pgbouncer config.

```APIDOC
## GET /v1/projects/{ref}/config/database/pgbouncer

### Description
Get project's pgbouncer config.

### Method
GET

### Endpoint
/v1/projects/{ref}/config/database/pgbouncer

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
Successful response.
```

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/kotlin/auth-mfa-getauthenticatorassurancelevel

Initializes the Supabase client with the `service_role` key, enabling access to admin authentication methods. This setup disables session saving and auto-refreshing for server-side use.

```APIDOC
## Auth Admin Client Setup

### Description
Initializes the Supabase client with the `service_role` key, enabling access to admin authentication methods. This setup disables session saving and auto-refreshing for server-side use.

### Method
N/A (Client Setup)

### Endpoint
N/A

### Parameters
#### Path Parameters
- No Path Parameters

#### Query Parameters
- No Query Parameters

#### Request Body
- No Request Body

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
```

### Response
#### Success Response (200)
- No direct HTTP response, client is initialized.

#### Response Example
```json
{}
```
```

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/csharp/neq

Install the Supabase C# package from NuGet package manager. The library is community-maintained and provides full access to Supabase backend services.

```APIDOC
## Installation

### Description
Install Supabase C# client library from NuGet package repository.

### Package Manager
NuGet

### Installation Command
```bash
dotnet add package supabase
```

### Requirements
- .NET framework compatible environment
- Internet connection for NuGet package download

### Notes
- Package is community-maintained by Joseph Schultz (official maintainer)
- Contributors: Will Iverson, Ben Randall, Rhuan Barros
- Please report issues and contribute improvements on GitHub
```

--------------------------------

### GET /v1/projects/{ref}/config/database/postgres

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Gets project's Postgres config.

```APIDOC
## GET /v1/projects/{ref}/config/database/postgres

### Description
Gets project's Postgres config.

### Method
GET

### Endpoint
/v1/projects/{ref}/config/database/postgres

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **effective_cache_size** (string) - Effective cache size.
- **logical_decoding_work_mem** (string) - Logical decoding work memory.
- **maintenance_work_mem** (string) - Maintenance work memory.
- **track_activity_query_size** (string) - Track activity query size.
- **max_connections** (integer) - Maximum connections.
- **max_locks_per_transaction** (integer) - Maximum locks per transaction.
- **max_parallel_maintenance_workers** (integer) - Maximum parallel maintenance workers.
- **max_parallel_workers** (integer) - Maximum parallel workers.
- **max_parallel_workers_per_gather** (integer) - Maximum parallel workers per gather.
- **max_replication_slots** (integer) - Maximum replication slots.
- **max_slot_wal_keep_size** (string) - Maximum slot WAL keep size.
- **max_standby_archive_delay** (string) - Maximum standby archive delay.
- **max_standby_streaming_delay** (string) - Maximum standby streaming delay.
- **max_wal_size** (string) - Maximum WAL size.
- **max_wal_senders** (integer) - Maximum WAL senders.
- **max_worker_processes** (integer) - Maximum worker processes.
- **session_replication_role** (string) - Session replication role.
- **shared_buffers** (string) - Shared buffers.
- **statement_timeout** (string) - Statement timeout.
- **track_commit_timestamp** (boolean) - Track commit timestamp.
- **wal_keep_size** (string) - WAL keep size.
- **wal_sender_timeout** (string) - WAL sender timeout.
- **work_mem** (string) - Work memory.
- **checkpoint_timeout** (string) - Checkpoint timeout.
- **hot_standby_feedback** (boolean) - Hot standby feedback.

#### Response Example
```json
{
  "effective_cache_size": "lorem",
  "logical_decoding_work_mem": "lorem",
  "maintenance_work_mem": "lorem",
  "track_activity_query_size": "lorem",
  "max_connections": 1,
  "max_locks_per_transaction": 10,
  "max_parallel_maintenance_workers": 0,
  "max_parallel_workers": 0,
  "max_parallel_workers_per_gather": 0,
  "max_replication_slots": 42,
  "max_slot_wal_keep_size": "lorem",
  "max_standby_archive_delay": "lorem",
  "max_standby_streaming_delay": "lorem",
  "max_wal_size": "lorem",
  "max_wal_senders": 42,
  "max_worker_processes": 0,
  "session_replication_role": "origin",
  "shared_buffers": "lorem",
  "statement_timeout": "444444444444444444444444444444444444444444444444444",
  "track_commit_timestamp": true,
  "wal_keep_size": "lorem",
  "wal_sender_timeout": "444444444444444444444444444444444444444444444444444",
  "work_mem": "lorem",
  "checkpoint_timeout": "444444444444444444444444444444444444444444444444444",
  "hot_standby_feedback": true
}
```
```

--------------------------------

### Fetch and Display Data in TanStack Start Route

Source: https://supabase.com/docs/guides/getting-started/quickstarts/tanstack

Implements a route loader to fetch data from the 'instruments' table and a React component to render the list.

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { supabase } from '../utils/supabase'

export const Route = createFileRoute('/')({
  loader: async () => {
    const { data: instruments } = await supabase.from('instruments').select()
    return { instruments }
  },
  component: Home,
})

function Home() {
  const { instruments } = Route.useLoaderData()

  return (
    <ul>
      {instruments?.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  )
}
```

--------------------------------

### GET /v1/projects/{ref}/config/database/pooler

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Gets project's supavisor config.

```APIDOC
## GET /v1/projects/{ref}/config/database/pooler

### Description
Gets project's supavisor config.

### Method
GET

### Endpoint
/v1/projects/{ref}/config/database/pooler

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- (array of objects)
  - **identifier** (string) - Pooler identifier.
  - **database_type** (string) - Type of database (e.g., PRIMARY).
  - **is_using_scram_auth** (boolean) - Indicates if SCRAM authentication is used.
  - **db_user** (string) - Database user.
  - **db_host** (string) - Database host.
  - **db_port** (integer) - Database port.
  - **db_name** (string) - Database name.
  - **connection_string** (string) - Connection string.
  - **connectionString** (string) - Connection string (camelCase).
  - **default_pool_size** (integer) - Default pool size.
  - **max_client_conn** (integer) - Maximum client connections.
  - **pool_mode** (string) - Pool mode (e.g., transaction).

#### Response Example
```json
[
  {
    "identifier": "lorem",
    "database_type": "PRIMARY",
    "is_using_scram_auth": true,
    "db_user": "lorem",
    "db_host": "lorem",
    "db_port": 42,
    "db_name": "lorem",
    "connection_string": "lorem",
    "connectionString": "lorem",
    "default_pool_size": 42,
    "max_client_conn": 42,
    "pool_mode": "transaction"
  }
]
```
```

--------------------------------

### SQL for User Profile Management with Security Definer Trigger

Source: https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A

This comprehensive SQL example demonstrates a common Supabase pattern for user profile management. It defines a `profiles` table, a `handle_new_user` function with `SECURITY DEFINER` (to allow the function to operate with the privileges of its creator, typically `postgres`, enabling interaction with tables outside the `auth` schema), and an `on_auth_user_created` trigger on `auth.users`. This setup ensures that a profile record is automatically created in `public.profiles` whenever a new user registers.

```SQL
create table profiles (\n  id uuid references auth.users on delete cascade not null primary key,\n  updated_at timestamp with time zone,\n  username text unique,\n  full_name text,\n  avatar_url text,\n  website text,\n\n  constraint username_length check (char_length(username) >= 3)\n);\n\ncreate function public.handle_new_user()\nreturns trigger\nset search_path = ''\nas $$\nbegin\n  insert into public.profiles (id, full_name, avatar_url)\n  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');\n  return new;\nend;\n$$ language plpgsql security definer;\n\ncreate trigger on_auth_user_created\n  after insert on auth.users\n  for each row execute procedure public.handle_new_user();
```

--------------------------------

### Create WebSocket Server using Deno and Node.js APIs

Source: https://supabase.com/docs/guides/functions/websockets

These examples demonstrate how to host a WebSocket server within an Edge Function. The Deno example uses the native upgradeWebSocket API, while the Node.js example utilizes the 'ws' library to handle manual HTTP upgrades.

```typescript
Deno.serve((req) => {
  const upgrade = req.headers.get('upgrade') || ''

  if (upgrade.toLowerCase() != 'websocket') {
    return new Response("request isn't trying to upgrade to WebSocket.", { status: 400 })
  }

  const { socket, response } = Deno.upgradeWebSocket(req)

  socket.onopen = () => console.log('socket opened')
  socket.onmessage = (e) => {
    console.log('socket message:', e.data)
    socket.send(new Date().toString())
  }

  socket.onerror = (e) => console.log('socket errored:', e.message)
  socket.onclose = () => console.log('socket closed')

  return response
})
```

```typescript
import { createServer } from 'node:http'
import { WebSocketServer } from 'npm:ws'

const server = createServer()
// Since we manually created the HTTP server,
// turn on the noServer mode.
const wss = new WebSocketServer({ noServer: true })

wss.on('connection', (ws) => {
  console.log('socket opened')
  ws.on('message', (data /** Buffer \*/, isBinary /** bool \*/) => {
    if (isBinary) {
      console.log('socket message:', data)
    } else {
      console.log('socket message:', data.toString())
    }

    ws.send(new Date().toString())
  })

  ws.on('error', (err) => {
    console.log('socket errored:', err.message)
  })

  ws.on('close', () => console.log('socket closed'))
})

server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req)
  })
})

server.listen(8080)
```

--------------------------------

### List all buckets

Source: https://supabase.com/docs/reference/csharp/getchannels

Retrieves the details of all Storage buckets within an existing product.

```APIDOC
## GET /storage/v1/bucket

### Description
Retrieves the details of all Storage buckets within an existing product.

### Method
GET

### Endpoint
/storage/v1/bucket

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
{}

### Response
#### Success Response (200)
- **id** (string) - The unique identifier of the bucket.
- **name** (string) - The name of the bucket.
- **owner** (string) - The owner of the bucket.
- **public** (boolean) - Whether the bucket is publicly accessible.
- **created_at** (string) - Timestamp of when the bucket was created.
- **updated_at** (string) - Timestamp of when the bucket was last updated.

#### Response Example
```json
[
  {
    "id": "avatars",
    "name": "avatars",
    "owner": "some-user-id",
    "public": false,
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-01T12:00:00Z"
  }
]
```
```

--------------------------------

### Initialize Expo Project and Install Core Dependencies

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native

Commands to bootstrap a new React Native application using the Expo TypeScript template and install the base Supabase and SQLite libraries.

```bash
npx create-expo-app -t expo-template-blank-typescript expo-user-management

cd expo-user-management

npx expo install @supabase/supabase-js @rneui/themed expo-sqlite
```

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/javascript/storage-updatebucket

Creates a new user with the provided credentials (email/password or phone/password). This method supports PKCE via email signups and handles email confirmation flows. Behavior varies based on project settings like 'Confirm email'.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. Be aware that if a user account exists in the system you may get back an error message that attempts to hide this information from the user. This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- **credentials** (SignUpWithPasswordCredentials) - Required - An object containing user signup details.
  - **email** (string) - Required - The user's email address.
  - **password** (string) - Required - The user's password.
  - **phone** (string) - Optional - The user's phone number (for SMS/WhatsApp signup).
  - **options.data** (object) - Optional - Additional user metadata.
  - **options.redirectTo** (string) - Optional - A URL to redirect the user to after email confirmation.

### Request Example
```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
```

### Response
#### Success Response (200/201)
- **data** (object) - Contains the user object and session (if email confirmation is disabled).
  - **user** (object) - The newly created user object.
  - **session** (object | null) - The user's session object, or null if email confirmation is required.
- **error** (object | null) - Error object if the signup failed.

#### Response Example
```json
{
  "data": {
    "user": {
      "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "email": "example@email.com",
      "confirmed_at": "2023-10-27T10:00:00Z",
      "last_sign_in_at": "2023-10-27T10:00:00Z",
      "created_at": "2023-10-27T10:00:00Z",
      "updated_at": "2023-10-27T10:00:00Z",
      "aud": "authenticated",
      "role": "authenticated",
      "email_confirmed_at": null,
      "phone_confirmed_at": null,
      "app_metadata": {
        "provider": "email"
      },
      "user_metadata": {}
    },
    "session": null
  },
  "error": null
}
```
```

--------------------------------

### GET /v1/projects/{ref}/config/database/pgbouncer

Source: https://supabase.com/docs/reference/api/v1-update-pgsodium-config

Get project's pgbouncer configuration.

```APIDOC
## GET /v1/projects/{ref}/config/database/pgbouncer

### Description
Retrieve the PgBouncer configuration for the specified project.

### Method
GET

### Endpoint
/v1/projects/{ref}/config/database/pgbouncer

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **description** (string) - Configuration details for PgBouncer.
```

--------------------------------

### Initialize Supabase Client

Source: https://supabase.com/docs/reference/kotlin/auth-admin-inviteuserbyemail

Initializes the Supabase client with the provided URL and key, and allows for additional configuration and plugin installation.

```APIDOC
## CLIENT INITIALIZATION

### Description
Initializes the Supabase client with the provided URL and key, and allows for additional configuration and plugin installation.

### Method
N/A (Client-side function)

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **supabaseUrl** (String) - Required - The unique Supabase URL from your project dashboard.
- **supabaseKey** (String) - Required - The unique Supabase Key (publishable or anon) from your project dashboard.
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - A lambda to apply additional configuration and install plugins.

### Request Example
```
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
    //install other modules
}
```

### Response
N/A (Returns a SupabaseClient instance)
```

--------------------------------

### Query Utility: Explain Execution Plan

Source: https://supabase.com/docs/reference/swift/introduction

Obtain the PostgreSQL `EXPLAIN` execution plan for any Supabase query. This feature is crucial for identifying and optimizing slow database queries, and requires explicit enablement for security reasons.

```APIDOC
## Query Utility: Explain Execution Plan

### Description
Obtain the PostgreSQL `EXPLAIN` execution plan for any Supabase query. This feature is crucial for identifying and optimizing slow database queries, and requires explicit enablement for security reasons.

### Method
N/A (Client-side utility, interacts with database)

### Endpoint
N/A (Client-side utility)

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None - `explain()` is a method call on a query builder)

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

### Response
#### Success Response (200)
- **plan** (Array of Objects) - The PostgreSQL execution plan details.

#### Response Example
```json
[
  {
    "Plan": {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.00,
      "Total Cost": 10.50,
      "Plan Rows": 500,
      "Plan Width": 100
    }
  }
]
```
```

--------------------------------

### GET supabase branches get

Source: https://supabase.com/docs/reference/cli/supabase-completion-bash

Retrieves detailed information for a specified preview branch.

```APIDOC
## GET supabase branches get

### Description
Retrieves detailed information for a specified preview branch.

### Method
GET

### Endpoint
supabase branches get [name]

### Parameters
#### Path Parameters
- **name** (string) - Required - Name of the preview branch to retrieve.

#### Query Parameters
- **--project-ref** (string) - Optional - Project ref of the Supabase project.

#### Request Body

### Request Example
{}

### Response
#### Success Response (200)

#### Response Example
{}
```