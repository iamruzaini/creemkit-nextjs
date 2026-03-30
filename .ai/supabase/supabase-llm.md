### Refine Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Guides you on integrating Supabase with Refine applications for data management and querying. Familiarity with Refine is beneficial.

```javascript
import { SupabaseRestDataProvider } from '@refinedev/supabase';

const dataProvider = SupabaseRestDataProvider({
  instanceUrl: 'YOUR_SUPABASE_URL',
  apiKey: 'YOUR_SUPABASE_KEY',
});

// Example usage in Refine App:
// <Refine dataProvider={dataProvider} >
//   {/* ... your resources ... */}
// </Refine>
```

--------------------------------

### Flutter Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Guide to setting up a Supabase project, adding sample data, and querying from a Flutter application. Requires Dart and Flutter knowledge.

```dart
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> fetchTodos() async {
  final supabase = Supabase.instance.client;

  final response = await supabase.from('todos').select('*').execute();

  if (response.error != null) {
    print('Error fetching todos: ${response.error!.message}');
    return;
  }

  print('Todos: ${response.data}');
}

void main() async {
  await Supabase.initialize(url: 'YOUR_SUPABASE_URL', anonKey: 'YOUR_SUPABASE_KEY');
  await fetchTodos();
}
```

--------------------------------

### React Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Learn to build a Supabase project, populate it with sample data, and query from a React application. This guide assumes basic knowledge of React.

```javascript
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

async function getTodos() {
  const { data, error } = await supabase
    .from('todos')
    .select('*');
  if (error) {
    console.error('Error fetching todos:', error);
    return;
  }
  console.log('Todos:', data);
}

getTodos();
```

--------------------------------

### Hono Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Learn to set up a Supabase project, add data, secure it with authentication, and query from a Hono application. This guide is for Hono users.

```javascript
import { Hono } from 'hono';
import { createClient } from '@supabase/supabase-js';

const app = new Hono();

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/todos', async (c) => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) {
    return c.json({ error: error.message }, 500);
  }
  return c.json(data);
});

export default app;
```

--------------------------------

### Project Start Command

Source: https://supabase.com/llms/guides.txt

This bash command initiates the development server for the project, typically serving the application on localhost:3000. Ensure Node.js and npm are installed.

```bash
npm start

```

--------------------------------

### Nuxt Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Guides you through creating a Supabase project, adding sample data, and querying it from a Nuxt application. Requires basic understanding of Nuxt.

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NUXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  async asyncData({ $supabase }) {
    const { data, error } = await $supabase.from('todos').select('*');
    if (error) console.error(error);
    return { todos: data };
  },
  // ... other Nuxt component options
}
```

--------------------------------

### SolidJS Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

A guide to integrating Supabase with SolidJS applications, covering project creation, data seeding, and querying. Requires SolidJS knowledge.

```javascript
import { createSignal, onMount } from 'solid-js';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [todos, setTodos] = createSignal([]);

  onMount(async () => {
    const { data, error } = await supabase.from('todos').select('*');
    if (error) {
      console.error('Error fetching todos:', error);
      return;
    }
    setTodos(data);
  });

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        <For each={todos()}>{(todo) => <li>{todo.title}</li>}</For>
      </ul>
    </div>
  );
}

export default App;
```

--------------------------------

### SvelteKit Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Learn how to integrate Supabase into a SvelteKit application, including database setup and data querying. Assumes familiarity with SvelteKit.

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function load() {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) {
    console.error('Error fetching todos:', error);
    return {
      todos: [],
    };
  }
  return {
    todos: data,
  };
}

// In your +page.svelte:
// <script>
//   export let data;
//   const { todos } = data;
// </script>
// 
// <ul>
//   {#each todos as todo}
//     <li>{todo.title}</li>
//   {/each}
// </ul>
```

--------------------------------

### Hello World Routing in Deno

Source: https://supabase.com/llms/guides.txt

A basic Deno server example demonstrating GET and POST request handling. It responds with 'Hello World!' for GET requests and a personalized greeting based on JSON input for POST requests. This code runs directly within Deno without external dependencies.

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

--------------------------------

### Create and Insert Data for Full Text Search Example

Source: https://supabase.com/llms/guides.txt

Provides the SQL statements to create a 'books' table and populate it with example data for demonstrating Full Text Search functionality. This setup is essential for the subsequent usage examples.

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

### Install and Start Roboflow Inference Server

Source: https://supabase.com/llms/guides.txt

Installs the necessary Roboflow Inference packages and starts the local inference server. This server provides an API endpoint for running computer vision models locally. Ensure Docker is installed before running this command.

```bash
pip install inference inference-cli inference-sdk && inference server start
```

--------------------------------

### Install Postgres and Verify psql (Windows)

Source: https://supabase.com/llms/guides.txt

This snippet covers downloading and installing PostgreSQL on Windows, adding its binary directory to the system PATH, and verifying the psql command-line tool installation.

```shell
C:\Program Files\PostgreSQL\17\bin
```

```shell
psql --version
```

--------------------------------

### supabase start

Source: https://supabase.com/llms/cli.txt

Start containers for Supabase local development.

```APIDOC
## POST /llmstxt/supabase_llms_txt/start

### Description
Starts the Supabase local development stack. Requires `supabase/config.toml` to be initialized first.

### Method
POST

### Endpoint
/llmstxt/supabase_llms_txt/start

### Parameters
#### Path Parameters
None

#### Query Parameters
- **exclude** (string) - Optional - Comma-separated list of services to exclude (e.g., `gotrue,imgproxy`). Can be specified multiple times.
- **ignore-health-check** (boolean) - Optional - Ignore health check errors for started containers.

#### Request Body
None

### Request Example
```bash
supabase start
supabase start -x gotrue,imgproxy
supabase start --ignore-health-check
```

### Response
#### Success Response (200)
- **message** (string) - Indicates that the Supabase local development stack has started.

#### Response Example
```json
{
  "message": "Supabase local development stack started successfully."
}
```
```

--------------------------------

### Hello World Routing in Express.js

Source: https://supabase.com/llms/guides.txt

An Express.js example for setting up GET and POST routes. It requires the 'express' npm package and uses 'express.json()' middleware to parse JSON request bodies. The server listens on port 3000.

```javascript
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

--------------------------------

### Initialize SvelteKit App and Install Supabase Client

Source: https://supabase.com/llms/guides.txt

This snippet demonstrates the commands to create a new SvelteKit project, install dependencies, and add the Supabase JavaScript client library. It assumes you have Node.js and npm installed.

```bash
npx sv create supabase-sveltekit
cd supabase-sveltekit
npm install
npm install @supabase/supabase-js
```

--------------------------------

### Start RedwoodJS Development Server

Source: https://supabase.com/llms/guides.txt

Starts the RedwoodJS development server. This command is essential for viewing project changes live during development. Ensure you have the RedwoodJS CLI installed.

```bash
yarn rw dev

```

--------------------------------

### Hello World Routing in Hono

Source: https://supabase.com/llms/guides.txt

A Hono example demonstrating GET and POST routes. It uses 'jsr:@hono/hono' and integrates with Deno.serve for handling requests. This snippet efficiently manages JSON parsing and response generation.

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

### Postgres HTTP GET Request Usage Example

Source: https://supabase.com/llms/guides.txt

Demonstrates how to use the net.http_get function to make a GET request to a specified URL and retrieve the request ID.

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

### Install Ionic CLI and Start New Angular App

Source: https://supabase.com/llms/guides.txt

Installs the Ionic CLI globally and then creates a new blank Ionic Angular project named 'supabase-ionic-angular'. It also navigates into the newly created project directory.

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-angular blank --type angular
cd supabase-ionic-angular
```

--------------------------------

### Using Index Advisor for Query Optimization

Source: https://supabase.com/llms/guides.txt

This SQL example demonstrates how to use the 'index_advisor' extension to get recommendations for indexes that can improve the performance of a given SQL query. It takes a query string as input and returns potential index statements, along with cost savings and errors. This is useful for automated performance tuning.

```sql
select
    *
from
  index_advisor('select book.id from book where title = $1');

```

--------------------------------

### Setup Test Environment - SQL

Source: https://supabase.com/llms/guides.txt

This SQL code sets up the test environment by creating test users, profiles, and organizations. It also inserts sample data, including posts, to test different access levels and RLS policies. The setup includes authenticating as the service role to bypass RLS for initial setup.

```sql
-- Assuming we already have: 000-setup-tests-hooks.sql file we can use tests helpers
begin;
-- Declare total number of tests
select plan(10);

-- Create test users
select tests.create_supabase_user('org_owner', 'owner@test.com');
select tests.create_supabase_user('org_admin', 'admin@test.com');
select tests.create_supabase_user('org_editor', 'editor@test.com');
select tests.create_supabase_user('premium_user', 'premium@test.com');
select tests.create_supabase_user('free_user', 'free@test.com');
select tests.create_supabase_user('scheduler', 'scheduler@test.com');
select tests.create_supabase_user('free_author', 'free_author@test.com');

-- Create profiles for test users
insert into profiles (id, username, full_name)
values
  (tests.get_supabase_uid('org_owner'), 'org_owner', 'Organization Owner'),
  (tests.get_supabase_uid('org_admin'), 'org_admin', 'Organization Admin'),
  (tests.get_supabase_uid('org_editor'), 'org_editor', 'Organization Editor'),
  (tests.get_supabase_uid('premium_user'), 'premium_user', 'Premium User'),
  (tests.get_supabase_uid('free_user'), 'free_user', 'Free User'),
  (tests.get_supabase_uid('scheduler'), 'scheduler', 'Scheduler User'),
  (tests.get_supabase_uid('free_author'), 'free_author', 'Free Author');

-- First authenticate as service role to bypass RLS for initial setup
select tests.authenticate_as_service_role();

-- Create test organizations and setup data
with new_org as (
  insert into organizations (name, slug, plan_type, max_posts)
  values
    ('Test Org', 'test-org', 'pro', 100),
    ('Premium Org', 'premium-org', 'enterprise', 1000),
    ('Schedule Org', 'schedule-org', 'pro', 100),
    ('Free Org', 'free-org', 'free', 2)
  returning id, slug
),
-- Setup members and posts
member_setup as (
  insert into org_members (org_id, user_id, role)
  select
    org.id,
    user_id,
    role
  from new_org org cross join (
    values
      (tests.get_supabase_uid('org_owner'), 'owner'),
      (tests.get_supabase_uid('org_admin'), 'admin'),
      (tests.get_supabase_uid('org_editor'), 'editor'),
      (tests.get_supabase_uid('premium_user'), 'viewer'),
      (tests.get_supabase_uid('scheduler'), 'editor'),
      (tests.get_supabase_uid('free_author'), 'editor')
  ) as members(user_id, role)
  where org.slug = 'test-org'
     or (org.slug = 'premium-org' and role = 'viewer')
     or (org.slug = 'schedule-org' and role = 'editor')
     or (org.slug = 'free-org' and role = 'editor')
)
-- Setup initial posts
insert into posts (title, content, org_id, author_id, status, is_premium, scheduled_for)
select
  title,
  content,
  org.id,
  author_id,
  status,
  is_premium,
  scheduled_for
from new_org org cross join (
  values
    ('Premium Post', 'Premium content', tests.get_supabase_uid('premium_user'), 'published', true, null),
    ('Free Post', 'Free content', tests.get_supabase_uid('premium_user'), 'published', false, null),
    ('Future Post', 'Future content', tests.get_supabase_uid('scheduler'), 'published', false, '2024-01-02 12:00:00+00'::timestamptz)
) as posts(title, content, author_id, status, is_premium, scheduled_for)
where org.slug in ('premium-org', 'schedule-org');
```

--------------------------------

### Supabase multi-environment configuration example

Source: https://supabase.com/llms/guides.txt

This TOML file defines a multi-environment setup for a Supabase project, including default API and DB settings, and specific configurations for 'staging' and 'production' remotes. It demonstrates overrides for API limits and database pool sizes.

```toml
# Default configuration for all branches
[api]
enabled = true
port = 54321
schemas = ["public", "storage", "graphql_public"]

[db]
port = 54322
pool_size = 10

# Staging-specific configuration
[remotes.staging]
project_id = "staging-project-ref"

[remotes.staging.api]
max_rows = 1000

[remotes.staging.db.seed]
sql_paths = ["./seeds/staging.sql"]

# Production-specific configuration
[remotes.production]
project_id = "prod-project-ref"

[remotes.production.api]
max_rows = 500

[remotes.production.db]
pool_size = 25
```

--------------------------------

### Install Postgres.js with npm

Source: https://supabase.com/llms/guides.txt

Installs the Postgres.js library and its necessary dependencies using npm. This is the first step to set up your database connection in a Node.js environment.

```shell
npm i postgres
```

--------------------------------

### Install Postgres and Verify psql (macOS)

Source: https://supabase.com/llms/guides.txt

This snippet explains how to install PostgreSQL on macOS using Homebrew, and how to verify the psql installation, including steps to add it to the PATH if necessary.

```shell
brew install postgresql@17
```

```shell
psql --version
```

```shell
brew info postgresql@17
```

```shell
echo 'export PATH="/opt/homebrew/opt/postgresql@17/bin:$PATH"' >> ~/.zshrc
```

--------------------------------

### Android Kotlin Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Integrate Supabase into an Android Kotlin application, covering project setup, database population, and data retrieval. Requires Kotlin and Android development knowledge.

```kotlin
import io.github.jan.supabase.createSupabaseClient
import io.github.jan.supabase.gotrue.Auth
import io.github.jan.supabase.postgrest.Postgrest

object SupabaseManager {
    val client = createSupabaseClient(
        "YOUR_SUPABASE_URL",
        "YOUR_SUPABASE_KEY"
    ) {
        install(Auth)
        install(Postgrest)
    }
}

// Example usage in an Activity or Fragment:
// CoroutineScope(Dispatchers.IO).launch {
//     val todos: List<Todo> = SupabaseManager.client.from("todos").select('*').decodeAs<List<Todo>>() ?: emptyList()
//     withContext(Dispatchers.Main) {
//         // Update UI with todos
//     }
// }

// data class Todo(val id: Int, val title: String)
```

--------------------------------

### Next.js Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Discover how to set up a Supabase project, add sample data, and perform queries within a Next.js application. Familiarity with Next.js is recommended.

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getStaticProps() {
  const { data, error } = await supabase
    .from('todos')
    .select('*');

  if (error) {
    throw new Error('Failed to fetch todos');
  }

  return {
    props: {
      todos: data,
    },
  };
}

function TodosPage({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

--------------------------------

### Route Parameters - Oak Example

Source: https://supabase.com/llms/guides.txt

This Oak (Deno) example illustrates the use of route parameters for managing tasks. It defines a router that handles GET, POST, and PATCH requests for '/tasks' and '/tasks/:id', allowing for retrieval, creation, and modification of tasks based on their IDs extracted from the URL.

```typescript
    import { Application } from 'jsr:@oak/oak/application'
    import { Router } from 'jsr:@oak/oak/router'

    const router = new Router()

    let tasks: { [id: string]: any } = {}

    router
      .get('/tasks', (ctx) => {
        ctx.response.body = Object.values(tasks)
      })
      .post('/tasks', async (ctx) => {
        const body = ctx.request.body()
        const { name } = await body.value
        const id = Math.random().toString(36).substring(7)
        tasks[id] = { id, name }
        ctx.response.body = tasks[id]
      })
      .get('/tasks/:id', (ctx) => {
        const id = ctx.params.id
        const task = tasks[id]
        if (task) {
          ctx.response.body = task
        } else {
          ctx.response.status = 404
          ctx.response.body = 'Task not found'
        }
      })
      .patch('/tasks/:id', async (ctx) => {
        const id = ctx.params.id
        const body = ctx.request.body()
        const updates = await body.value
        const task = tasks[id]
        if (task) {
          tasks[id] = { ...task, ...updates }
          ctx.response.body = tasks[id]
        } else {
          ctx.response.status = 404
          ctx.response.body = 'Task not found'
        }
      })
```

--------------------------------

### Initialize Test Environment and Utilities with SQL

Source: https://supabase.com/llms/guides.txt

This SQL script installs necessary extensions like pgtap, http, and pg_tle. It also includes logic to install the 'supabase-dbdev' package from a remote API and the 'basejump-supabase_test_helpers' extension. Finally, it runs a simple 'always green' test to confirm the setup.

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

### Route Parameters - Express.js Example

Source: https://supabase.com/llms/guides.txt

This Express.js example demonstrates handling route parameters for task-related operations. It sets up routes for getting all tasks, creating a task, getting a specific task by ID, updating a task, and deleting a task using route parameters like ':id'.

```typescript
    import express from 'npm:express@4.18.2'

    const app = express()
    app.use(express.json())

    app.get('/tasks', async (req, res) => {
      // return all tasks
    })

    app.post('/tasks', async (req, res) => {
      // create a task
    })

    app.get('/tasks/:id', async (req, res) => {
      const id = req.params.id
      const task = {} // get task

      res.json(task)
    })

    app.patch('/tasks/:id', async (req, res) => {
      const id = req.params.id
      // modify task
    })

    app.delete('/tasks/:id', async (req, res) => {
      const id = req.params.id
      // delete task
    })
```

--------------------------------

### Install Dependencies for SecureStore Integration

Source: https://supabase.com/llms/guides.txt

Installs additional dependencies required for encrypting session information using Expo SecureStore, AES-256 encryption, and random value generation. This setup enhances the security of stored user session data.

```bash
npm install @supabase/supabase-js
npm install @rneui/themed @react-native-async-storage/async-storage
npm install aes-js react-native-get-random-values
npm install --save-dev @types/aes-js
npx expo install expo-secure-store
```

--------------------------------

### Initialize and Start Supabase Local Project

Source: https://supabase.com/llms/guides.txt

Commands to initialize a new local Supabase project and start the Supabase services. These are fundamental steps for local development.

```bash
supabase init
supabase start
```

--------------------------------

### Bash: Initialize and Start Supabase Project

Source: https://supabase.com/llms/guides.txt

Provides the bash commands to initialize a new Supabase project and start a local PostgreSQL instance using the Supabase CLI. This is a prerequisite for running local development with Supabase.

```bash
# Initialize your project
supabase init

# Start Postgres
supabase start
```

--------------------------------

### Discord Authentication Setup

Source: https://supabase.com/llms/guides.txt

Guides users through setting up Discord as an OAuth provider for their Supabase project.

```APIDOC
## Discord Authentication Setup

### Description
This section details the steps required to enable Discord login for your application using Supabase. It involves configuring a Discord Application and integrating its credentials into your Supabase project.

### Overview
1.  **Discord Application Setup**: Create and configure an application in the [Discord Developer Portal](https://discord.com/developers).
2.  **Supabase Configuration**: Add your Discord OAuth Client ID and Client Secret to your Supabase Project settings.
3.  **Client-Side Integration**: Implement the login flow in your Supabase JS Client application.

### Steps
1.  **Access Discord Developer Portal**: Log in to [discord.com](https://discord.com/) and navigate to the [Discord Developer Portal](https://discord.com/developers).
2.  **Create Discord Application**: Click 'New Application', provide a name, and create it.
3.  **Configure OAuth2**: In the application settings, go to 'OAuth2' > 'General'. Add your Supabase project's callback URL (e.g., `https://<project-ref>.supabase.co/auth/v1/callback`) to the 'Redirects' list and save changes.
4.  **Obtain Credentials**: Copy the 'Client ID' and 'Client Secret' from the 'Client Information' section.
5.  **Configure Supabase**: 
    *   Go to your Supabase Project Dashboard.
    *   Navigate to 'Authentication' > 'Providers'.
    *   Expand the 'Discord' section.
    *   Enable Discord and paste your 'Client ID' and 'Client Secret' into the respective fields.
    *   Click 'Save'.

### Note
For local development testing with OAuth, refer to the [Supabase CLI local development docs](/docs/guides/cli/local-development#use-auth-locally).
```

--------------------------------

### Initialize Ionic React App and Install Supabase JS

Source: https://supabase.com/llms/guides.txt

Installs the Ionic CLI, creates a new Ionic React app, navigates into the project directory, and installs the Supabase JavaScript client library.

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-react blank --type react
cd supabase-ionic-react
npm install @supabase/supabase-js
```

--------------------------------

### Install Supabase Test Helpers Package

Source: https://supabase.com/llms/guides.txt

This SQL command installs the 'basejump-supabase_test_helpers' package using the database.dev tool. This package provides utilities that simplify testing Supabase-specific features, such as user management and RLS policy testing, reducing the need for manual setup and boilerplate code.

```sql
select dbdev.install('basejump-supabase_test_helpers');
create extension if not exists "basejump-supabase_test_helpers" version '0.0.6';
```

--------------------------------

### ETL Pipeline Example for Iceberg Tables

Source: https://supabase.com/llms/guides.txt

Presents a complete example of an ETL pipeline using PyIceberg, PyArrow, and Pandas. It covers connecting to the catalog, creating a namespace and table, loading data from a CSV file, writing it to the Iceberg table, and verifying the results. This demonstrates a practical end-to-end data workflow.

```python
from pyiceberg.catalog import load_catalog
import pyarrow as pa
import pandas as pd

# Setup (replace placeholders with actual values)
# S3_ACCESS_KEY = "your-access-key"
# S3_SECRET_KEY = "your-secret-key"
# S3_REGION = "us-east-1"
# PROJECT_REF = "your-project-ref"
# WAREHOUSE = "your-warehouse"
# SERVICE_KEY = "your-service-key"

# catalog = load_catalog(
#     "supabase-analytics",
#     type="rest",
#     warehouse=WAREHOUSE,
#     uri=f"https://{PROJECT_REF}.supabase.co/storage/v1/iceberg",
#     token=SERVICE_KEY,
#     **{
#         "py-io-impl": "pyiceberg.io.pyarrow.PyArrowFileIO",
#         "s3.endpoint": f"https://{PROJECT_REF}.supabase.co/storage/v1/s3",
#         "s3.access-key-id": S3_ACCESS_KEY,
#         "s3.secret-access-key": S3_SECRET_KEY,
#         "s3.region": S3_REGION,
#         "s3.force-virtual-addressing": False,
#     },
# )

# Placeholder for catalog connection for the example
catalog = "catalog_placeholder" # Replace with actual catalog object

# Step 1: Create warehouse namespace
catalog.create_namespace_if_not_exists("warehouse")

# Step 2: Define table schema
schema = pa.schema([
    pa.field("id", pa.int64()),
    pa.field("name", pa.string()),
    pa.field("created_at", pa.timestamp("ms")),
])

# Step 3: Create table
table = catalog.create_table_if_not_exists(
    ("warehouse", "products"),
    schema=schema
)

# Step 4: Load data from CSV or database
# Ensure 'products.csv' exists in the same directory or provide the correct path
# df = pd.read_csv("products.csv") 
# For demonstration, creating a dummy DataFrame
df = pd.DataFrame({
    "id": [1, 2, 3],
    "name": ["Laptop", "Mouse", "Keyboard"],
    "created_at": ["2023-01-01", "2023-01-02", "2023-01-03"]
})
df['created_at'] = pd.to_datetime(df['created_at'])

data = pa.Table.from_pandas(df)

# Step 5: Write to warehouse bucket
table.append(data)
print(f"✓ Loaded {len(data)} products to warehouse.products")

# Step 6: Verify
result = table.scan().to_pandas()
print("\n--- Table Contents ---")
print(result)
print("\n--- Description ---")
print(result.describe())

```

--------------------------------

### Install Laravel Breeze for Authentication

Source: https://supabase.com/llms/guides.txt

Install Laravel Breeze, a starter kit that provides a simple implementation of all of Laravel's authentication features. This requires running two composer commands and an artisan command.

```bash
composer require laravel/breeze --dev
php artisan breeze:install
```

--------------------------------

### RedwoodJS Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Integrate Supabase into a RedwoodJS app, including database setup with Prisma migrations and seeds, and data querying. Assumes familiarity with RedwoodJS and Prisma.

```javascript
import { db } from 'src/lib/db';

export const posts = () => {
  return db.post.findMany();
};

// Example usage in a service or page:
// import { posts } from 'src/services/posts/posts';
// const postsData = posts();
```

--------------------------------

### GET /llmstxt/supabase_llms_txt/http_get

Source: https://supabase.com/llms/guides.txt

Creates an HTTP GET request, returning the request's ID. HTTP requests are not started until the transaction is committed.

```APIDOC
## GET /llmstxt/supabase_llms_txt/http_get

### Description
Creates an HTTP GET request, returning the request's ID. HTTP requests are not started until the transaction is committed.

### Method
GET

### Endpoint
/llmstxt/supabase_llms_txt/http_get

### Parameters
#### Path Parameters
None

#### Query Parameters
- **url** (text) - Required - The URL for the request.
- **params** (jsonb) - Optional - Key/value pairs to be URL encoded and appended to the `url`. Defaults to `{}`.
- **headers** (jsonb) - Optional - Key/values to be included in request headers. Defaults to `{}`.
- **timeout_milliseconds** (int) - Optional - The maximum number of milliseconds the request may take before being canceled. Defaults to 2000.

### Request Example
```sql
SELECT net.http_get('https://news.ycombinator.com') AS request_id;
```

### Response
#### Success Response (200)
- **request_id** (bigint) - The reference ID for the request.

#### Response Example
```json
{
  "request_id": 1
}
```
```

--------------------------------

### Set up Ubuntu VM for Migration

Source: https://supabase.com/llms/guides.txt

Installs PostgreSQL client and tools on an Ubuntu VM, preparing it for database migration tasks. It also sets up a tmux session for managing the migration process.

```bash
# Install Postgres client and tools
sudo apt update
sudo apt install software-properties-common
sudo sh -c 'echo "deb http://apt.Postgres.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.Postgres.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update
sudo apt install Postgres-client-17 tmux htop iotop moreutils

# Start or attach to tmux session
tmux a -t migration || tmux new -s migration
```

--------------------------------

### Initialize Next.js App and Install Supabase Client

Source: https://supabase.com/llms/guides.txt

Initializes a new Next.js application using `create-next-app` with TypeScript and npm, then installs the Supabase JavaScript client library. This sets up the basic project structure and adds the necessary Supabase SDK.

```bash
npx create-next-app@latest --ts --use-npm supabase-nextjs
cd supabase-nextjs
npm install @supabase/supabase-js
```

--------------------------------

### Install and Setup supabase-dbdev Extension

Source: https://supabase.com/llms/guides.txt

This SQL script installs the 'supabase-dbdev' extension, a package manager for Postgres, which is a prerequisite for using database development tools and community packages. It ensures necessary extensions like 'http' and 'pg_tle' are present, then fetches and installs the latest version of 'supabase-dbdev'.

```sql
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

-- Drop and recreate the extension to ensure a clean installation
drop extension if exists "supabase-dbdev";
create extension "supabase-dbdev";
```

--------------------------------

### Route Parameters - Deno Example

Source: https://supabase.com/llms/guides.txt

This Deno example shows how to handle route parameters for CRUD operations on tasks. It defines functions for getting, creating, updating, and deleting tasks, and uses the URL pathname to extract task IDs for specific operations. It assumes task IDs are the last part of the URL.

```typescript
    interface Task {
      id: string
      name: string
    }

    let tasks: Task[] = []

    const router = new Map<string, (req: Request) => Promise<Response>>()

    async function getAllTasks(): Promise<Response> {
      return new Response(JSON.stringify(tasks))
    }

    async function getTask(id: string): Promise<Response> {
      const task = tasks.find((t) => t.id === id)
      if (task) {
        return new Response(JSON.stringify(task))
      } else {
        return new Response('Task not found', { status: 404 })
      }
    }

    async function createTask(req: Request): Promise<Response> {
      const id = Math.random().toString(36).substring(7)
      const task = { id, name: '' }
      tasks.push(task)
      return new Response(JSON.stringify(task), { status: 201 })
    }

    async function updateTask(id: string, req: Request): Promise<Response> {
      const index = tasks.findIndex((t) => t.id === id)
      if (index !== -1) {
        tasks[index] = { ...tasks[index] }
        return new Response(JSON.stringify(tasks[index]))
      } else {
        return new Response('Task not found', { status: 404 })
      }
    }

    async function deleteTask(id: string): Promise<Response> {
      const index = tasks.findIndex((t) => t.id === id)
      if (index !== -1) {
        tasks.splice(index, 1)
        return new Response('Task deleted successfully')
      } else {
        return new Response('Task not found', { status: 404 })
      }
    }

    Deno.serve(async (req) => {
      const url = new URL(req.url)
      const method = req.method
      // Extract the last part of the path as the command
      const command = url.pathname.split('/').pop()
      // Assuming the last part of the path is the task ID
      const id = command
      try {
        switch (method) {
          case 'GET':
            if (id) {
              return getTask(id)
            } else {
              return getAllTasks()
            }
          case 'POST':
            return createTask(req)
          case 'PUT':
            if (id) {
              return updateTask(id, req)
            } else {
              return new Response('Bad Request', { status: 400 })
            }
          case 'DELETE':
            if (id) {
              return deleteTask(id)
            } else {
              return new Response('Bad Request', { status: 400 })
            }
          default:
            return new Response('Method Not Allowed', { status: 405 })
        }
      } catch (error) {
        return new Response(`Internal Server Error: ${error}`, { status: 500 })
      }
    })
```

--------------------------------

### Create SvelteKit App (Terminal)

Source: https://supabase.com/llms/guides.txt

This command initializes a new SvelteKit project named 'my-app' using the 'npm create' command. It serves as the starting point for building a SvelteKit application.

```bash
npx sv create my-app
```

--------------------------------

### Bootstrap Hono App with Supabase CLI

Source: https://supabase.com/llms/guides.txt

This command bootstraps a new Hono example application integrated with Supabase using the Supabase CLI. Ensure you have the Supabase CLI installed globally. This sets up the basic project structure and necessary configurations for a Hono project intended for Supabase usage.

```bash
npx supabase@latest bootstrap hono
```

--------------------------------

### iOS SwiftUI Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Learn how to connect Supabase to an iOS app using SwiftUI, including database setup and data querying. Requires Swift and SwiftUI knowledge.

```swift
import SwiftUI
import Supabase

struct ContentView: View {
    @State private var todos: [Todo] = []
    private let supabaseClient = SupabaseClient(
        url: "YOUR_SUPABASE_URL",
        anonKey: "YOUR_SUPABASE_KEY"
    )

    var body: some View {
        List(todos) {
            Text($0.title)
        }
        .onAppear {
            fetchTodos()
        }
    }

    func fetchTodos() {
        Task {
            do {
                let fetchedTodos: [Todo] = try await supabaseClient.from("todos").select().execute().value
                self.todos = fetchedTodos
            } catch {
                print("Error fetching todos: \(error.localizedDescription)")
            }
        }
    }
}

struct Todo: Identifiable, Decodable {
    let id: Int
    let title: String
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

--------------------------------

### Example: Online VACUUM FULL with pg_repack

Source: https://supabase.com/llms/guides.txt

An example of how to perform an online VACUUM FULL operation on specific tables ('public.foo' and 'public.bar') in a Supabase database. It includes connection details and the necessary '-k' flag for non-superuser execution.

```sh
pg_repack -k -h db.<PROJECT_REF>.supabase.co -p 5432 -U postgres -d postgres --no-order --table public.foo --table public.bar
```

--------------------------------

### Retrieve Supabase Auth Rate Limits

Source: https://supabase.com/llms/guides.txt

Fetches the current rate limits configured for Supabase Auth endpoints. Rate limits are in place to protect services from abuse and can be customized in the Supabase dashboard or managed via the Management API. This example uses `curl` to make a GET request to the Supabase API and `jq` to parse the JSON response, filtering for keys starting with 'rate_limit_'.

```bash
# Get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

# Get current rate limits
curl -X GET "https://api.supabase.com/v1/projects/$PROJECT_REF/config/auth" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  | jq 'to_entries | map(select(.key | startswith("rate_limit_"))) | from_entries'
```

--------------------------------

### Handle Supabase Auth Callback in Express

Source: https://supabase.com/llms/guides.txt

This snippet provides an example of handling the Supabase authentication callback within an Express.js application. It sets up a GET route to process the authorization code, exchange it for a session using '@supabase/ssr', and manage cookies. It relies on environment variables for Supabase credentials and assumes a basic Express app setup. Note: The provided Express snippet is incomplete.

```javascript
... 
app.get("/auth/callback", async function (req, res) {
  const code = req.query.code
  const next = req.query.next ?? "/"

  if (code) {
    const supabase = createServerClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_PUBLISHABLE_KEY,
      {
    cookies: {
      getAll() {
        return parseCookieHeader(context.req.headers.cookie ?? '')
      },

```

--------------------------------

### Initialize Snaplet Seed Generation

Source: https://supabase.com/llms/guides.txt

Initializes Snaplet for database seeding. This command analyzes the database structure and generates configuration files and example scripts for data generation. Ensure Node.js and npm are installed.

```bash
npx @snaplet/seed init
```

--------------------------------

### PostgreSQL EXPLAIN execution plan example

Source: https://supabase.com/llms/guides.txt

Illustrates the typical output format of a PostgreSQL `EXPLAIN` query plan when executed via the Supabase client. This text-based representation details the query execution steps, costs, and estimated row counts, helping developers understand query optimization.

```text
Aggregate  (cost=33.34..33.36 rows=1 width=112)
  ->  Limit  (cost=0.00..18.33 rows=1000 width=40)
        ->  Seq Scan on instruments  (cost=0.00..22.00 rows=1200 width=40)
```

--------------------------------

### Add User Metadata on Sign Up (Kotlin)

Source: https://supabase.com/llms/guides.txt

Provides a Kotlin example for signing up a user via Supabase, where custom metadata like 'first_name' and 'age' are included in a JSON object passed to the 'data' parameter. Requires Supabase client setup.

```kotlin
val data = supabase.auth.signUpWith(Email) {
    email = "valid.email@supabase.io"
    password = "example-password"
    data = buildJsonObject {
        put("first_name", "John")
        put("age", 27)
    }
}
```

--------------------------------

### Vue Quickstart: Integrate Supabase

Source: https://supabase.com/llms/guides.txt

Learn to integrate Supabase into your Vue.js applications, including setting up the project, adding data, and querying. Assumes Vue.js familiarity.

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  data() {
    return {
      todos: [],
    };
  },
  async mounted() {
    const { data, error } = await supabase.from('todos').select('*');
    if (error) {
      console.error('Error fetching todos:', error);
      return;
    }
    this.todos = data;
  },
};

// In your template:
// <ul>
//   <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
// </ul>
```

--------------------------------

### Hello World Routing in Oak

Source: https://supabase.com/llms/guides.txt

An Oak framework example for creating GET and POST routes. It utilizes 'jsr:@oak/oak' for application and router functionalities. The server listens on port 3000 and handles JSON request bodies.

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

--------------------------------

### Basic Supabase Auth UI Component Setup

Source: https://supabase.com/llms/guides.txt

Demonstrates the basic setup for integrating the Supabase Auth component into a React application. It requires initializing the Supabase client and passing it as a prop to the Auth component.

```javascript
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

const supabase = createClient('<INSERT PROJECT URL>', '<INSERT PROJECT ANON API KEY>')

const App = () => <Auth supabaseClient={supabase} />
```

--------------------------------

### Supabase Client Setup for 0.7.0 (SvelteKit)

Source: https://supabase.com/llms/guides.txt

Initializes the Supabase client using `createClient` from `@supabase/supabase-js` and `setupSupabaseHelpers` from `@supabase/auth-helpers-sveltekit` for version 0.7.0. It uses `PUBLIC_` prefixed environment variables and configures session persistence.

```typescript
import { createClient } from '@supabase/supabase-js'
import { setupSupabaseHelpers } from '@supabase/auth-helpers-sveltekit'
import { dev } from '$app/environment'
import { env } from '$env/dynamic/public'
// or use the static env

// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

export const supabaseClient = createClient(
  env.PUBLIC_SUPABASE_URL,
  env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  {
    persistSession: false,
    autoRefreshToken: false,
  }
)

setupSupabaseHelpers({
  supabaseClient,
  cookieOptions: {
    secure: !dev,
  },
})
```

--------------------------------

### SQL - Example Usage of index_advisor for a single table

Source: https://supabase.com/llms/guides.txt

Demonstrates a minimal example of using the index_advisor function with a simple query on a single table with a filter on an unindexed column. It includes creating the extension, defining a table, and executing the index_advisor query.

```sql
create extension if not exists index_advisor cascade;

create table book(
  id int primary key,
  title text not null
);

select
  *
from
  index_advisor('select book.id from book where title = $1');

-- Expected output structure:
--  startup_cost_before | startup_cost_after | total_cost_before | total_cost_after |                  index_statements                   | errors
-- ---------------------+--------------------+-------------------+------------------+-----------------------------------------------------+--------
--  0.00                | 1.17               | 25.88             | 6.40             | {"CREATE INDEX ON public.book USING btree (title)"}| {}
-- (1 row)
```

--------------------------------

### Upstash Redis Counter with Supabase Edge Functions (Bash)

Source: https://supabase.com/llms/guides.txt

This example provides instructions for setting up an Upstash Redis database to be used with Supabase Edge Functions. It explains how to create a Redis database, select a global type for low latency, and retrieve necessary connection details (URL and token). The snippet shows the command to copy an example .env file, which is crucial for configuring the connection.

```bash
cp supabase/functions/upstash-redis-counter/.env.example supabase/functions/upstash-redis-counter/.env

```

--------------------------------

### supabase init

Source: https://supabase.com/llms/cli.txt

Initialize configurations for Supabase local development.

```APIDOC
## POST /llmstxt/supabase_llms_txt/init

### Description
Initialize configurations for Supabase local development. A `supabase/config.toml` file is created in your current working directory.

### Method
POST

### Endpoint
/llmstxt/supabase_llms_txt/init

### Parameters
#### Path Parameters
None

#### Query Parameters
- **workdir** (string) - Optional - Override the directory path for configuration files.

#### Request Body
None

### Request Example
```bash
supabase init --workdir /path/to/your/project
```

### Response
#### Success Response (200)
- **message** (string) - Indicates successful initialization and creation of `supabase/config.toml`.

#### Response Example
```json
{
  "message": "Supabase local development initialized. supabase/config.toml created."
}
```
```

--------------------------------

### Sign in with Solana using Wallet Adapter

Source: https://supabase.com/llms/guides.txt

Enables Solana authentication via the Solana Wallet Adapter, which standardizes wallet interactions. This example uses a React component with the `useWallet()` hook to obtain the connected wallet and initiate the sign-in process. It requires the setup of `ConnectionProvider`, `WalletProvider`, and `WalletModalProvider`.

```tsx
function SignInButton() {
  const wallet = useWallet()

  return (
    <>
      {wallet.connected ? (
        <button
          onClick={() => {
            supabase.auth.signInWithWeb3({
              chain: 'solana',
              statement: 'I accept the Terms of Service at https://example.com/tos',
              wallet,
            })
          }}
        >
          Sign in with Solana
        </button>
      ) : (
        <WalletMultiButton />
      )}
    </>
  )
}

function App() {
  const endpoint = clusterApiUrl('devnet')
  const wallets = useMemo(() => [], [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}> 
        <WalletModalProvider>
          <SignInButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
```

--------------------------------

### Express Auth Callback Route Example

Source: https://supabase.com/llms/guides.txt

A basic Express.js route setup for handling Supabase authentication callbacks. This snippet shows the beginning of a route handler where it would typically extract the code and session information.

```javascript
... 
      app.get("/auth/callback", async function (req, res) {

```

--------------------------------

### Install PostgreSQL via Homebrew (macOS)

Source: https://supabase.com/llms/guides.txt

This command installs PostgreSQL version 17 using the Homebrew package manager on macOS. Homebrew simplifies the installation process for various software packages on macOS systems. Ensure Homebrew is installed before running this command.

```shell
brew install postgresql@17
```

--------------------------------

### Client Initialization

Source: https://supabase.com/llms/js.txt

Examples of how to create a Supabase client instance with different configurations, including custom domains, additional parameters, custom schemas, custom fetch implementations, and React Native specific options.

```APIDOC
## Client Initialization Examples

### Basic Initialization

**Description**: Creates a single Supabase client for interacting with your database.

**Method**: N/A (Client Initialization)

**Endpoint**: N/A

### Request Example
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xyzcompany.supabase.co', 'publishable-or-anon-key')
```

### With a Custom Domain

**Description**: Uses a custom domain as the Supabase URL for client initialization.

**Method**: N/A (Client Initialization)

**Endpoint**: N/A

### Request Example
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://my-custom-domain.com', 'publishable-or-anon-key')
```

### With Additional Parameters

**Description**: Initializes the client with additional options for database schema, authentication, and global headers.

**Method**: N/A (Client Initialization)

**Endpoint**: N/A

### Request Example
```javascript
import { createClient } from '@supabase/supabase-js'

const options = {
  db: {
    schema: 'public',
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
}
const supabase = createClient("https://xyzcompany.supabase.co", "publishable-or-anon-key", options)
```

### With Custom Schemas

**Description**: Initializes the client with a custom database schema.

**Method**: N/A (Client Initialization)

**Endpoint**: N/A

### Request Example
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xyzcompany.supabase.co', 'publishable-or-anon-key', {
  db: { schema: 'other_schema' }
})
```

### Custom Fetch Implementation

**Description**: Initializes the client with a custom fetch implementation.

**Method**: N/A (Client Initialization)

**Endpoint**: N/A

### Request Example
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xyzcompany.supabase.co', 'publishable-or-anon-key', {
  global: { fetch: fetch.bind(globalThis) }
})
```

### React Native Options with AsyncStorage

**Description**: Initializes the client for React Native using AsyncStorage for session persistence.

**Method**: N/A (Client Initialization)

**Endpoint**: N/A

### Request Example
```javascript
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabase = createClient("https://xyzcompany.supabase.co", "publishable-or-anon-key", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```

### React Native Options with Expo SecureStore

**Description**: Initializes the client for React Native using Expo SecureStore for encrypted session persistence.

**Method**: N/A (Client Initialization)

**Endpoint**: N/A

### Request Example
```javascript
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import * as aesjs from 'aes-js';
import 'react-native-get-random-values';

// As Expo's SecureStore does not support values larger than 2048
// bytes, an AES-256 key is generated and stored in SecureStore, while
// it is used to encrypt/decrypt values stored in AsyncStorage.
class LargeSecureStore {
  private async _encrypt(key: string, value: string) {
    const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));

    const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
    const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

    await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));

    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }

  private async _decrypt(key: string, value: string) {
    const encryptionKeyHex = await SecureStore.getItemAsync(key);
    if (!encryptionKeyHex) {
      return encryptionKeyHex;
    }

    const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
    const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));

    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }

  async getItem(key: string) {
    const encrypted = await AsyncStorage.getItem(key);
    if (!encrypted) { return encrypted; }

    return await this._decrypt(key, encrypted);
  }

  async removeItem(key: string) {
    await AsyncStorage.removeItem(key);
    await SecureStore.deleteItemAsync(key);
  }

  async setItem(key: string, value: string) {
    const encrypted = await this._encrypt(key, value);

    await AsyncStorage.setItem(key, encrypted);
  }
}

const supabase = createClient("https://xyzcompany.supabase.co", "publishable-or-anon-key", {
  auth: {
    storage: new LargeSecureStore(),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```
```

--------------------------------

### Create Pre-test Hook for Global Test Setup with Bash

Source: https://supabase.com/llms/guides.txt

This bash command creates a new pgTAP test file named '000-setup-tests-hooks.sql'. This naming convention ensures it runs first alphabetically, serving as a pre-test hook for global test environment setup, including shared extensions and utilities.

```bash
supabase test new 000-setup-tests-hooks
```

--------------------------------

### Install Prisma Client and Generate Models (Shell)

Source: https://supabase.com/llms/guides.txt

Installs the Prisma client package and generates the Prisma client based on your schema. This command is available for npm, pnpm, yarn, and bun package managers. Ensure your Prisma schema is correctly configured.

```sh
npm install @prisma/client
          npx prisma generate
      
```

```sh
pnpm install @prisma/client
          pnpx prisma generate
      
```

```sh
yarn add @prisma/client
          npx prisma generate
      
```

```sh
bun install @prisma/client
          bunx prisma generate
      
```

--------------------------------

### Querying with pg_graphql

Source: https://supabase.com/llms/guides.txt

Demonstrates how to query your PostgreSQL tables using GraphQL after enabling the pg_graphql extension. This example shows how to create a 'Blog' table, insert data, and then query it using the `graphql.resolve` function.

```sql
create table "Blog"(
  id serial primary key,
  name text not null,
  description text
);

insert into "Blog"(name)
values ('My Blog');
```

```sql
select
  graphql.resolve($$
    {
      blogCollection(first: 1) {
        edges {
          node {
            id,
            name
          }
        }
      }
    }
  $$);
```

--------------------------------

### Implement Partial Search with Supabase SQL

Source: https://supabase.com/llms/guides.txt

Enables finding records that match a substring at the beginning of a text field. This example searches for book titles starting with 'Lit' using the ':*' syntax with to_tsquery.

```sql
select title from books where to_tsvector(title) @@ to_tsquery('Lit:*');
```

--------------------------------

### Install and Run Ollama for Local LLM Inference

Source: https://supabase.com/llms/guides.txt

This section details the steps to install Ollama, pull the Mistral model, run the Ollama server, and configure Supabase Functions to use it as an AI inference host. It includes setting the AI_INFERENCE_API_HOST environment variable and creating a new Supabase function to interact with the Ollama API.

```bash
ollama pull mistral

```

```bash
ollama serve

```

```bash
echo "AI_INFERENCE_API_HOST=http://host.docker.internal:11434" >> supabase/functions/.env

```

```bash
supabase functions new ollama-test

```

```bash
supabase functions serve --env-file supabase/functions/.env

```

```bash
curl --get "http://localhost:54321/functions/v1/ollama-test" \
--data-urlencode "prompt=write a short rap song about Supabase, the Postgres Developer platform, as sung by Nicki Minaj" \
-H "Authorization: $ANON_KEY"

```

--------------------------------

### Initialize Nuxt 3 App and Install Supabase Dependency

Source: https://supabase.com/llms/guides.txt

Initializes a new Nuxt 3 project using `nuxi init` and installs the Supabase module as a development dependency. Ensure you have Node.js and npm installed. This sets up the basic project structure for Supabase integration.

```bash
npx nuxi init nuxt-user-management

cd nuxt-user-management
npm install @nuxtjs/supabase --save-dev
```

--------------------------------

### supabase bootstrap

Source: https://supabase.com/llms/cli.txt

Bootstrap a Supabase project from a starter template.

```APIDOC
## POST /llmstxt/supabase_llms_txt/bootstrap

### Description
Bootstrap a Supabase project from a starter template.

### Method
POST

### Endpoint
/llmstxt/supabase_llms_txt/bootstrap

### Parameters
#### Path Parameters
- **template** (string) - Required - The starter template to use for bootstrapping.

#### Query Parameters
None

#### Request Body
None

### Request Example
```bash
supabase bootstrap <template>
```

### Response
#### Success Response (200)
- **message** (string) - Indicates successful bootstrapping.

#### Response Example
```json
{
  "message": "Project bootstrapped successfully."
}
```
```

--------------------------------

### SQL: Analyze query execution plan

Source: https://supabase.com/llms/guides.txt

Provides an example of using the EXPLAIN command to analyze the execution plan of a SQL query. This is crucial for identifying performance bottlenecks, such as sequential scans, and for verifying the impact of newly created indexes.

```sql
explain select * from customers where sign_up_date > 25;
```

--------------------------------

### PGAudit Log Entry Example (SQL)

Source: https://supabase.com/llms/guides.txt

This example demonstrates how a SQL CREATE TABLE statement is represented in a PGAudit log entry. It shows the structured format including AUDIT_TYPE, STATEMENT_ID, CLASS, COMMAND, OBJECT_TYPE, OBJECT_NAME, and STATEMENT.

```sql
create table account (
  id int primary key,
  name text,
  description text
);
```

```plaintext
 AUDIT: SESSION,1,1,DDL,CREATE TABLE,TABLE,public.account,create table account(
  id int,
  name text,
  description text
); <not logged>
```

--------------------------------

### SolidJS - Install Supabase Client

Source: https://supabase.com/llms/guides.txt

Command to install the Supabase JavaScript client library into a SolidJS project.

```APIDOC
## Bash

### Description
Installs the `@supabase/supabase-js` package into your SolidJS application.

### Commands
```bash
cd my-app && npm install @supabase/supabase-js
```
```

--------------------------------

### Run Refine Development Server

Source: https://supabase.com/llms/guides.txt

Navigates to the application directory and starts the development server for the Refine app. This allows you to view the running application in your browser.

```bash
cd app-name
npm run dev

```

--------------------------------

### Bash: Serve Supabase Edge Functions Locally

Source: https://supabase.com/llms/guides.txt

This command starts a local server dedicated to serving your Supabase Edge Functions. This allows for real-time testing and debugging of your serverless functions within your development environment. It requires the Supabase CLI to be installed.

```bash
supabase functions serve
```

--------------------------------

### SQL to JavaScript API Conversion Examples

Source: https://supabase.com/llms/guides.txt

Examples demonstrating how to convert common SQL queries into their equivalent JavaScript API calls using the Supabase SDK.

```APIDOC
## JavaScript API: Select statement with basic clauses

### Description
Selects a set of columns from a single table with where, order by, and limit clauses.

### Method
GET (via Supabase SDK)

### Endpoint
`/rest/v1/{table_name}`

### Parameters
#### Query Parameters
- **select** (string) - Comma-separated list of columns to select.
- **age** (number) - Filter for age range.
- **team_id** (string) - Filter for team ID (not equal).
- **order** (string) - Column to order by.
- **limit** (number) - Maximum number of rows to return.

### Request Example
```javascript
const { data, error } = await supabase
  .from('players')
  .select('first_name,last_name,team_id,age')
  .gte('age', 20)
  .lte('age', 24)
  .not('team_id', 'eq', 'STL')
  .order('last_name', { ascending: true })
  .order('first_name', { ascending: false })
  .limit(20)
```

### Response
#### Success Response (200)
- **data** (array) - Array of player objects matching the query.

#### Response Example
```json
{
  "data": [
    {
      "first_name": "John",
      "last_name": "Doe",
      "team_id": "NYY",
      "age": 22
    }
  ],
  "error": null
}
```
```

```APIDOC
## JavaScript API: Select statement with complex Boolean logic (OR AND OR)

### Description
Selects all columns from a single table with a complex WHERE clause involving OR and AND operators.

### Method
GET (via Supabase SDK)

### Endpoint
`/rest/v1/{table_name}`

### Parameters
#### Query Parameters
- **select** (string) - `*` or comma-separated list of columns.
- **or** (string) - Complex filter conditions using `or` operator.

### Request Example
```javascript
const { data, error } = await supabase
  .from('players')
  .select()
  .or('team_id.eq.CHN,team_id.is.null')
  .or('age.gt.35,age.is.null')
```

### Response
#### Success Response (200)
- **data** (array) - Array of player objects matching the query.

#### Response Example
```json
{
  "data": [
    {
      "team_id": "CHN",
      "age": 36,
      "other_column": "value"
    }
  ],
  "error": null
}
```
```

```APIDOC
## JavaScript API: Select statement with complex Boolean logic (AND OR AND)

### Description
Selects all columns from a single table with a complex WHERE clause involving AND, OR, and NOT operators.

### Method
GET (via Supabase SDK)

### Endpoint
`/rest/v1/{table_name}`

### Parameters
#### Query Parameters
- **select** (string) - `*` or comma-separated list of columns.
- **or** (string) - Complex filter conditions using nested `and` and `or` operators.

### Request Example
```javascript
const { data, error } = await supabase
  .from('players')
  .select()
  .or('and(team_id.eq.CHN,age.gt.35),and(team_id.neq.CHN,.not.age.is.null)')
```

### Response
#### Success Response (200)
- **data** (array) - Array of player objects matching the query.

#### Response Example
```json
{
  "data": [
    {
      "team_id": "CHN",
      "age": 40,
      "other_column": "value"
    },
    {
      "team_id": "NYY",
      "age": 25,
      "other_column": "another_value"
    }
  ],
  "error": null
}
```
```

--------------------------------

### Initialize Prisma Project with bun

Source: https://supabase.com/llms/guides.txt

Initializes a new Prisma project using bun. It installs Prisma, TypeScript, ts-node, and their types as development dependencies, configures TypeScript, and then initializes the Prisma project structure.

```bash
      bun init -y
      bun install prisma typescript ts-node @types/node --save-dev

      bunx tsc --init

      bunx prisma init

```

--------------------------------

### Initialize Supabase Client with Firebase Auth (Kotlin Multiplatform)

Source: https://supabase.com/llms/guides.txt

Configures the Supabase client for Kotlin Multiplatform projects. This example uses a community Firebase SDK to obtain the user's ID token. Proper setup of the Firebase SDK is required.

```kotlin
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.auth.auth

val supabase = createSupabaseClient(
    "https://<supabase-project>.supabase.co",
    "SUPABASE_PUBLISHABLE_KEY"
) {
    accessToken = {
        Firebase.auth.currentUser?.getIdToken(false)
    }
}
```

--------------------------------

### Sign up with Phone Number and Password using Supabase

Source: https://supabase.com/llms/guides.txt

This snippet demonstrates how to sign up a new user by providing their phone number and a password. It requires the Supabase client initialized with your project URL and anon key. The function returns user data or an error upon completion.

```JavaScript
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'sb_publishable_... or anon key')

// ---cut---
const { data, error } = await supabase.auth.signUp({
  phone: '+13334445555',
  password: 'some-password',
})
```

```Swift
try await supabase.auth.signUp(
  phone: "+13334445555",
  password: "some-password"
)
```

```Kotlin
supabase.auth.signUpWith(Phone) {
  phone = "+13334445555"
  password = "some-password"
}
```

```Python
supabase.auth.sign_up({
  'phone': "+13334445555",
  'password': "some-password"
})
```

```Dart
final AuthResponse res = await supabase.auth.signUp(
  phone: '+13334445555',
  password: 'some-password',
);
```

```HTTP
curl -X POST 'https://cvwawazfelidkloqmbma.supabase.co/auth/v1/signup' \
-H "apikey: SUPABASE_KEY" \
-H "Content-Type: application/json" \
-d '{
  "phone": "+13334445555",
  "password": "some-password"
}'
```

--------------------------------

### Get Current pg_net Configuration Settings

Source: https://supabase.com/llms/guides.txt

This SQL query retrieves the current configuration settings for the `pg_net` extension by querying the `pg_settings` catalog. It filters settings where the name starts with 'pg_net%'.

```sql
select
  "name",
  "setting"
from pg_settings
where "name" like 'pg_net%';

```

--------------------------------

### Execute Deployed Supabase Function

Source: https://supabase.com/llms/guides.txt

Example using curl to execute a deployed Supabase function. This shows how to send a GET request to the production function endpoint with a prompt and authorization header.

```bash
curl --get "https://project-ref.supabase.co/functions/v1/ollama-test" \
--data-urlencode "prompt=write a short rap song about Supabase, the Postgres Developer platform, as sung by Nicki Minaj" \
-H "Authorization: $ANON_KEY"
```

--------------------------------

### Setup Supabase Authentication

Source: https://supabase.com/llms/guides.txt

Installs the supabase-js package and configures Supabase authentication within the RedwoodJS application. It prompts to overwrite existing auth files and requires Supabase credentials to be added to the .env file.

```bash
yarn redwood setup auth supabase
```

--------------------------------

### Install Supabase client library (Bash)

Source: https://supabase.com/llms/guides.txt

This command navigates into the 'my-app' directory and installs the '@supabase/supabase-js' package using npm. This library is essential for interacting with Supabase services from the Nuxt application.

```bash
cd my-app && npm install @supabase/supabase-js
```

--------------------------------

### Display AI Examples using React

Source: https://supabase.com/llms/guides.txt

Renders a grid of AI example cards using React and Supabase's Link and GlassPanel components. Each card displays the example's name and description, linking to its respective documentation page.

```javascript
import Link from 'next/link';
import GlassPanel from './GlassPanel'; // Assuming GlassPanel is in the same directory

// ... inside a React component

export const examples = [
  {
    name: 'Headless Vector Search',
    description: 'A toolkit to perform vector similarity search on your knowledge base embeddings.',
    href: '/guides/ai/examples/headless-vector-search',
  },
  {
    name: 'Image Search with OpenAI CLIP',
    description: 'Implement image search with the OpenAI CLIP Model and Supabase Vector.',
    href: '/guides/ai/examples/image-search-openai-clip',
  },
  {
    name: 'Hugging Face inference',
    description: 'Generate image captions using Hugging Face.',
    href: '/guides/ai/examples/huggingface-image-captioning',
  },
  {
    name: 'OpenAI completions',
    description: 'Generate GPT text completions using OpenAI in Edge Functions.',
    href: '/guides/ai/examples/openai',
  },
  {
    name: 'Building ChatGPT Plugins',
    description: 'Use Supabase as a Retrieval Store for your ChatGPT plugin.',
    href: '/guides/ai/examples/building-chatgpt-plugins',
  },
  {
    name: 'Vector search with Next.js and OpenAI',
    description:
      'Learn how to build a ChatGPT-style doc search powered by Next.js, OpenAI, and Supabase.',
    href: '/guides/ai/examples/nextjs-vector-search',
  },
]

// In your JSX:
<div className="grid md:grid-cols-12 gap-4 not-prose">
  {examples.map((x) => (
        <div className="col-span-4" key={x.href}>
          <Link href={x.href} passHref>
            <GlassPanel icon={'/docs/img/icons/github-icon'} hasLightIcon={true} title={x.name}>
              {x.description}
            </GlassPanel>
          </Link>
        </div>
      ))}
</div>
```

--------------------------------

### Initialize Vue 3 App with Vite

Source: https://supabase.com/llms/guides.txt

This snippet demonstrates how to scaffold a new Vue 3 project using Vite and install the Supabase JavaScript client. It requires Node.js and npm. The process involves creating the project, navigating into the directory, and installing the necessary package.

```bash
# npm 6.x
npm create vite@latest supabase-vue-3 --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest supabase-vue-3 -- --template vue

cd supabase-vue-3
npm install @supabase/supabase-js
```

--------------------------------

### Initialize Prisma Project with npm

Source: https://supabase.com/llms/guides.txt

Initializes a new Prisma project using npm. It installs Prisma, TypeScript, ts-node, and their types as development dependencies, configures TypeScript, and then initializes the Prisma project structure.

```bash
      mkdir hello-prisma
      cd hello-prisma

      npm init -y
      npm install prisma typescript ts-node @types/node --save-dev

      npx tsc --init

      npx prisma init

```

--------------------------------

### Initialize Nuxt app (Bash)

Source: https://supabase.com/llms/guides.txt

This command initializes a new Nuxt.js application named 'my-app' using the latest version of Nuxt. It requires Node.js and npm (or yarn/pnpm) to be installed.

```bash
npx nuxi@latest init my-app
```

--------------------------------

### Start Supabase Local Database and Apply Migrations (Bash)

Source: https://supabase.com/llms/guides.txt

Commands to start the local Supabase development environment and apply any pending database migrations. This ensures that schema changes are reflected in the local database.

```bash
supabase start
supabase migration up
```

--------------------------------

### Initialize Flutter App

Source: https://supabase.com/llms/guides.txt

Initializes a new Flutter project named 'supabase_quickstart' using the Flutter CLI. This command creates the basic structure for a new Flutter application.

```bash
flutter create supabase_quickstart
```

--------------------------------

### Initialize Supabase Client in Kotlin

Source: https://supabase.com/llms/kotlin.txt

Demonstrates how to create a Supabase client instance in Kotlin. This involves calling `createSupabaseClient` with the Supabase URL and key, and optionally installing modules like GoTrue and Postgrest.

```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(GoTrue)
    install(Postgrest)
    //install other modules
}
```

--------------------------------

### Python: Upsert Data using Vecs Client

Source: https://supabase.com/llms/guides.txt

Demonstrates using the Python 'vecs' client to interact with a Supabase vector store. It shows how to get or create a collection and then upsert vectors with associated metadata. This example assumes an unstructured metadata approach.

```python
#!/usr/bin/env python3
import vecs

# In practice, do not hard-code your password. Use environment variables.
DB_CONNECTION = "postgresql://<user>:<password>@<host>:<port>/<db_name>"

# create vector store client
vx = vecs.create_client(DB_CONNECTION)

docs = vx.get_or_create_collection(name="docs", dimension=1536)

docs.upsert(vectors=[
  ('79409372-7556-4ccc-ab8f-5786a6cfa4f7', [100, 200, 300], { url: '/hello-world' })
])
```

--------------------------------

### Start Supabase Local Stack

Source: https://supabase.com/llms/guides.txt

Starts the local Supabase development stack, making Supabase services available on your machine. The command varies based on the package manager.

```sh
npx supabase start
```

```sh
yarn supabase start
```

```sh
pnpx supabase start
```

```sh
supabase start
```

--------------------------------

### Vue 3 User Management App Setup with Supabase

Source: https://supabase.com/llms/guides.txt

Overview of setting up a Vue 3 application for user management using Supabase services like Database, Auth, and Storage. The guide emphasizes database schema creation and project initialization.

```bash
# Instructions for setting up Supabase project and database schema would go here if present in text.
# Example: 
# 1. Create a new project in the Supabase Dashboard.
# 2. Enter project details.
# 3. Wait for the database to launch.
```

--------------------------------

### Define Supabase Storage Example Data

Source: https://supabase.com/llms/guides.txt

This JavaScript code defines an array named `examples`. Each object in the array represents a storage example, containing its `name`, a brief `description`, and a `href` pointing to its location, likely a GitHub repository.

```javascript
export const examples = [
  {
    name: 'Resumable Uploads with Uppy',
    description:
      'Use Uppy to upload files to Supabase Storage using the TUS protocol (resumable uploads).',
    href: 'https://github.com/supabase/supabase/tree/master/examples/storage/resumable-upload-uppy',
  },
]
```

--------------------------------

### Display Supabase Storage Examples with React

Source: https://supabase.com/llms/guides.txt

This React code snippet maps over an array of example objects to display them as clickable links with descriptions. It uses a custom `GlassPanel` component and Supabase's `Link` component for navigation, assuming the `examples` array is defined elsewhere.

```jsx
<div className="grid md:grid-cols-12 gap-4 not-prose">
  {examples.map((x) => (
        <div className="col-span-12" key={x.href}>
          <Link href={x.href} passHref>
            <GlassPanel icon={'/docs/img/icons/github-icon'} hasLightIcon={true} title={x.name}>
              {x.description}
            </GlassPanel>
          </Link>
        </div>
      ))}
</div>
```

--------------------------------

### Verify psql Installation (Windows)

Source: https://supabase.com/llms/guides.txt

This command verifies if the PostgreSQL command-line client, `psql`, is installed and accessible in the system's PATH. If the command fails, it indicates that the PostgreSQL binary directory has not been correctly added to the PATH or the terminal needs to be restarted.

```shell
psql --version
```

--------------------------------

### Install PyIceberg and PyArrow

Source: https://supabase.com/llms/guides.txt

Installs the PyIceberg library and PyArrow, which is a dependency for efficient data handling with PyIceberg. These packages are required for programmatic interaction with Iceberg tables.

```bash
pip install pyiceberg pyarrow
```

--------------------------------

### Set Up Supabase Client: 0.7.x vs 0.8.0 (JavaScript)

Source: https://supabase.com/llms/guides.txt

Compares the setup of the Supabase client in JavaScript for versions 0.7.x and 0.8.0. The 0.8.0 version simplifies client initialization by integrating helper functions directly. Both versions utilize environment variables for Supabase URL and key.

```javascript
    // src/lib/db.ts (0.7.x)
        import { createClient } from '@supabase/supabase-js'
        import { setupSupabaseHelpers } from '@supabase/auth-helpers-sveltekit'
        import { dev } from '$app/environment'
        import { env } from '$env/dynamic/public'
        // or use the static env

        // import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

        export const supabaseClient = createClient(
          env.PUBLIC_SUPABASE_URL,
          env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
          {
            persistSession: false,
            autoRefreshToken: false,
          }
        )

        setupSupabaseHelpers({
          supabaseClient,
          cookieOptions: {
            secure: !dev,
          },
        })
```

```javascript
    // src/lib/db.ts (0.8.0)
        import { createClient } from '@supabase/auth-helpers-sveltekit'
        import { env } from '$env/dynamic/public'
        // or use the static env

        // import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

        export const supabaseClient = createClient(
          env.PUBLIC_SUPABASE_URL,
          env.PUBLIC_SUPABASE_PUBLISHABLE_KEY
        )
```

--------------------------------

### Install Supabase CLI on Linux using Package Manager

Source: https://supabase.com/llms/guides.txt

Instructions to install the Supabase CLI on Linux by downloading and installing package files (.apk, .deb, .rpm). This method is suitable for systems without Homebrew.

```bash
# For Alpine Linux
sudo apk add --allow-untrusted <...>.apk

# For Debian/Ubuntu based Linux
sudo dpkg -i <...>.deb

# For Red Hat/Fedora based Linux
sudo rpm -i <...>.rpm
```

--------------------------------

### Start Rails Development Server

Source: https://supabase.com/llms/guides.txt

Starts the Rails development server, making your application accessible at http://127.0.0.1:3000. This command is used to run your application locally for testing and development.

```bash
bin/rails server
```

--------------------------------

### Install Supabase CLI on Windows using Scoop

Source: https://supabase.com/llms/guides.txt

Instructions to install the Supabase CLI on Windows using the Scoop package manager. This involves adding the Supabase scoop bucket first.

```powershell
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

--------------------------------

### Token Validation Examples

Source: https://supabase.com/llms/guides.txt

Examples demonstrating how to validate access tokens using JWT libraries in various programming languages. These examples connect to the JWKS endpoint to fetch public keys for verification.

```APIDOC
## Validating tokens

Use a JWT library to verify tokens:

### Node.js

```javascript
    import { createRemoteJWKSet, jwtVerify } from 'jose'

    const JWKS = createRemoteJWKSet(
      new URL('https://<project-ref>.supabase.co/auth/v1/.well-known/jwks.json')
    )

    async function verifyAccessToken(token) {
      try {
        const { payload } = await jwtVerify(token, JWKS, {
          issuer: 'https://<project-ref>.supabase.co/auth/v1',
          audience: 'authenticated',
        })
        return payload
      } catch (error) {
        console.error('Token verification failed:', error)
        return null
      }
    }
```

### Python

```python
    from jose import jwt
    from jose.backends import RSAKey
    import requests

    # Fetch JWKS
    jwks = requests.get('https://<project-ref>.supabase.co/auth/v1/.well-known/jwks.json').json()

    def verify_access_token(token):
        try {
            payload = jwt.decode(
                token,
                jwks,
                algorithms=['RS256'],
                issuer='https://<project-ref>.supabase.co/auth/v1',
                audience='authenticated'
            )
            return payload
        except jwt.JWTError as e:
            print(f'Token verification failed: {e}')
            return None
```

### Go

```go
    package main

    import (
        "context"
        "github.com/coreos/go-oidc/v3/oidc"
    )

    func verifyAccessToken(ctx context.Context, token string) (*oidc.IDToken, error) {
        provider, err := oidc.NewProvider(
            ctx,
            "https://<project-ref>.supabase.co/auth/v1",
        )
        if err != nil {
            return nil, err
        }

        verifier := provider.Verifier(&oidc.Config{
            ClientID: "authenticated",
        })

        return verifier.Verify(ctx, token)
    }
```

### What to validate

Always verify:

1.  **Signature** - Token is signed by Supabase Auth
2.  **Issuer** (`iss`) - Matches your project URL
3.  **Audience** (`aud`) - Is `authenticated`
4.  **Expiration** (`exp`) - Token is not expired
5.  **Client ID** (`client_id`) - Matches your client (if applicable)
```

--------------------------------

### Create Hash Partitioned Table (SQL)

Source: https://supabase.com/llms/guides.txt

Provides an example of creating a parent table and defining partitions using a hash function on the 'id' column to distribute data evenly. The partitioning column must be part of unique constraints.

```sql
create table products (
    id bigint generated by default as identity,
    name text,
    category text,
    price bigint
)
partition by hash (id);

create table products_one
	partition of products
  for values with (modulus 2, remainder 1);

create table products_two
	partition of products
  for values with (modulus 2, remainder 0);
```

--------------------------------

### Create Logging Example Function in SQL

Source: https://supabase.com/llms/guides.txt

Creates a PL/pgSQL function demonstrating logging at different severity levels (`log`, `warning`, `exception`) using the `raise` keyword. Useful for debugging complex functions.

```sql
create function logging_example(
  log_message text,
  warning_message text,
  error_message text
)
returns void
language plpgsql
as $$
begin
  raise log 'logging message: %', log_message;
  raise warning 'logging warning: %', warning_message;

  -- immediately ends function and reverts transaction
  raise exception 'logging error: %', error_message;
end;
$$;

select logging_example('LOGGED MESSAGE', 'WARNING MESSAGE', 'ERROR MESSAGE');
```

--------------------------------

### Setup Supabase Client with Auth0 Token (Kotlin)

Source: https://supabase.com/llms/guides.txt

Demonstrates the initialization of a Supabase client in Kotlin, using Auth0 for authentication token retrieval. The `accessToken` lambda needs to be implemented to fetch credentials from Auth0. Requires Supabase and Auth0 integration.

```kotlin
import com.auth0.android.result.Credentials

val supabase = createSupabaseClient(
    "https://<supabase-project>.supabase.co",
    "SUPABASE_PUBLISHABLE_KEY"
) {
    accessToken = { 
        val credentials: Credentials = ...; // Get credentials from Auth0
        credentials.accessToken
    }
}
```

--------------------------------

### Get User Information with Supabase Auth

Source: https://supabase.com/llms/js.txt

Provides examples for fetching user data using Supabase Auth. It covers retrieving the currently logged-in user with an existing session and fetching user details using a custom JWT access token.

```javascript
const { data: { user } } = await supabase.auth.getUser()

```

```javascript
const { data: { user } } = await supabase.auth.getUser(jwt)

```

--------------------------------

### Start Supabase Local Development Stack

Source: https://supabase.com/llms/guides.txt

Starts the Supabase local development environment using Docker containers. The first run may take longer as Docker images need to be downloaded. This includes the Supabase toolset and utility images.

```bash
supabase start
```

--------------------------------

### Create a New Supabase Edge Function

Source: https://supabase.com/llms/guides.txt

This command generates a new boilerplate Edge Function locally within your Supabase project directory. The function is named `image-blur` in this example. This command requires the Supabase CLI to be installed and configured.

```bash
supabase functions new image-blur
```

--------------------------------

### Initialize Svelte App and Install Supabase

Source: https://supabase.com/llms/guides.txt

Initializes a new Svelte application using the Vite Svelte TypeScript template, installs necessary dependencies including supabase-js, and sets up environment variables for Supabase API credentials.

```bash
npm create vite@latest supabase-svelte -- --template svelte-ts
cd supabase-svelte
npm install
npm install @supabase/supabase-js
```

--------------------------------

### Sign Up New User with Supabase

Source: https://supabase.com/llms/guides.txt

Demonstrates how to sign up a new user using email and password with Supabase. Requires the Supabase client library. It takes email, password, and optional email redirect options as input and returns authentication data or an error.

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

### React MFA Enrollment Component

Source: https://supabase.com/llms/guides.txt

Illustrates the MFA enrollment flow in React. It calls the `supabase.auth.mfa.enroll()` API to start the process, displays a QR code for authenticator app setup, and uses `supabase.auth.mfa.challenge()` and `supabase.auth.mfa.verify()` to complete the enrollment. It includes callbacks for success (`onEnrolled`) and cancellation (`onCancelled`).

```tsx
/**
 * EnrollMFA shows a simple enrollment dialog. When shown on screen it calls
 * the `enroll` API. Each time a user clicks the Enable button it calls the
 * `challenge` and `verify` APIs to check if the code provided by the user is
 * valid.
 * When enrollment is successful, it calls `onEnrolled`. When the user clicks
 * Cancel the `onCancelled` callback is called.
 */
export function EnrollMFA({
  onEnrolled,
  onCancelled,
}: {
  onEnrolled: () => void
  onCancelled: () => void
}) {
  const [factorId, setFactorId] = useState('')
  const [qr, setQR] = useState('') // holds the QR code image SVG
  const [verifyCode, setVerifyCode] = useState('') // contains the code entered by the user
  const [error, setError] = useState('') // holds an error message

  const onEnableClicked = () => {
    setError('')
    ;(async () => {
      const challenge = await supabase.auth.mfa.challenge({ factorId })
      if (challenge.error) {
        setError(challenge.error.message)
        throw challenge.error
      }

      const challengeId = challenge.data.id

      const verify = await supabase.auth.mfa.verify({
        factorId,
        challengeId,
        code: verifyCode,
      })
      if (verify.error) {
        setError(verify.error.message)
        throw verify.error
      }

      onEnrolled()
    })()
  }

  useEffect(() => {
    ;(async () => {
      const { data, error } = await supabase.auth.mfa.enroll({
        factorType: 'totp',
      })
      if (error) {
        throw error
      }

      setFactorId(data.id)

      // Supabase Auth returns an SVG QR code which you can convert into a data
      // URL that you can place in an <img> tag.
      setQR(data.totp.qr_code)
    })()
  }, [])

  return (
    <>
      {error && <div className="error">{error}</div>}
      <img src={qr} />
      <input
        type="text"
        value={verifyCode}
        onChange={(e) => setVerifyCode(e.target.value.trim())}
      />
      <input type="button" value="Enable" onClick={onEnableClicked} />
      <input type="button" value="Cancel" onClick={onCancelled} />
    </>
  )
}

```

--------------------------------

### Initialize Supabase Client in C#

Source: https://supabase.com/llms/csharp.txt

Demonstrates how to initialize the Supabase client in C# by providing the project URL and public key. It also shows how to configure client options like enabling auto-connection for real-time features.

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

--------------------------------

### Supabase Client Setup for 0.6.11 and Below (SvelteKit)

Source: https://supabase.com/llms/guides.txt

Sets up the Supabase client using `createSupabaseClient` from `@supabase/auth-helpers-sveltekit` for older versions. It utilizes `VITE_` prefixed environment variables for URL and key.

```typescript
import { createSupabaseClient } from '@supabase/auth-helpers-sveltekit';

const { supabaseClient } = createSupabaseClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string
);

export { supabaseClient };
```

--------------------------------

### Sign in with Figma OAuth

Source: https://supabase.com/llms/guides.txt

Initiates the OAuth sign-in flow with Figma. Ensure you are using the correct Supabase client. For server-side rendering, refer to the Supabase Auth guide for client setup. This function takes no arguments and returns data or an error object.

```javascript
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('<your-project-url>', '<sb_publishable_... or anon key>')

// ---cut---
async function signInWithFigma() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'figma',
  })
}
```

```dart
Future<void> signInWithFigma() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.figma,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```

```kotlin
suspend fun signInWithFigma() {
	supabase.auth.signInWith(Figma)
}
```

--------------------------------

### Basic Telegram Bot with GrammY Framework (TypeScript)

Source: https://supabase.com/llms/guides.txt

This example demonstrates how to set up a basic Telegram Bot using the GrammY framework within Supabase Edge Functions. It outlines the integration process for handling incoming messages and responding to users. The code structure is intended to be a starting point for more complex bot functionalities.

```typescript
// Placeholder for Telegram Bot code using GrammY framework
// Actual implementation would involve setting up the bot token, 
// defining message handlers, and using Deno.serve to listen for webhooks.
console.log('Telegram Bot function initialized.');

Deno.serve(async (request) => {
  // Logic to handle incoming Telegram webhook requests
  return new Response('Telegram Bot is running', { status: 200 });
});

```

--------------------------------

### TypeScript Example for Supabase OAuth Integration

Source: https://supabase.com/llms/guides.txt

An example implementation in TypeScript demonstrating how to integrate with Supabase using OAuth2, specifically for connecting a Supabase application. This example is suitable for Supabase Edge Functions.

```typescript
// Example implementation in TypeScript using Supabase Edge Functions
// (Actual code would be in the linked GitHub repository)
console.log("Supabase OAuth integration example.");
```

--------------------------------

### Install Supabase CLI on macOS using Homebrew

Source: https://supabase.com/llms/guides.txt

Instructions to install the Supabase CLI on macOS using the Homebrew package manager. Ensure Homebrew is installed before running this command.

```bash
brew install supabase/tap/supabase
```

--------------------------------

### System Message Example (JSON)

Source: https://supabase.com/llms/guides.txt

An example of a 'system' message for protocol version 2.0.0, indicating a successful subscription to PostgreSQL changes.

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

### Retrieve Supabase Project API Keys using cURL

Source: https://supabase.com/llms/guides.txt

This code example shows how to retrieve API keys for a Supabase project using cURL. It makes a GET request to the relevant endpoint and requires an authorization token. The `reveal=true` query parameter is used to see the actual keys.

```shell
curl 'https://api.supabase.com/v1/projects/{ref}/api-keys?reveal=true' \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN'
```

--------------------------------

### Sign up with email and password using Supabase Python

Source: https://supabase.com/llms/python.txt

Demonstrates how to sign up a new user with an email address and password. This is a fundamental authentication method. Requires a Supabase client instance.

```python
response = supabase.auth.sign_up(
    {
        "email": "email@example.com",
        "password": "password",
    }
)
```

--------------------------------

### Initialize Supabase Project

Source: https://supabase.com/llms/guides.txt

Initializes a new Supabase project in your repository using the installed Supabase CLI. This command is executed differently depending on the package manager used for installation.

```sh
npx supabase init
```

```sh
yarn supabase init
```

```sh
pnpx supabase init
```

```sh
supabase init
```

--------------------------------

### Expo React Native Social Authentication Tutorial with Supabase

Source: https://supabase.com/llms/guides.txt

Implement social authentication within an application using Expo React Native and Supabase Database and Auth services. This guide requires a working Expo React Native project and Supabase setup.

```javascript
{
          title: 'Expo React Native Social Auth',
          href: '/guides/getting-started/tutorials/with-expo-react-native-social-auth',
          description:
            'Learn how to implement social authentication in an app with Expo React Native and Supabase Database and Auth functionality.',
          icon: '/docs/img/icons/expo-icon',
          hasLightIcon: true
        }
```

--------------------------------

### Initialize React Native App with Expo

Source: https://supabase.com/llms/guides.txt

This command initializes a new React Native application using Expo with the standard template. It requires Node.js and npm/npx to be installed. The command creates a new directory for the app and installs necessary initial dependencies.

```bash
npx create-expo-app@latest

cd expo-social-auth
```

--------------------------------

### Create PostgreSQL Publication for Replication

Source: https://supabase.com/llms/guides.txt

Define a PostgreSQL publication to capture changes from specific tables that will be replicated to an analytics bucket. This SQL statement specifies which tables' INSERT, UPDATE, and DELETE operations should be tracked. For advanced options, consult the Replication Setup Guide.

```sql
-- Create publication for tables you want to replicate
CREATE PUBLICATION pub_warehouse
  FOR TABLE users, orders, products;
```

--------------------------------

### Sign Up New User in C#

Source: https://supabase.com/llms/csharp.txt

Creates a new user account with the provided email and password. This is the standard method for user registration.

```csharp
var session = await supabase.Auth.SignUp(email, password);
```

--------------------------------

### Install Poetry for Python Dependency Management

Source: https://supabase.com/llms/guides.txt

Installs the Poetry packaging and dependency management tool for Python using pip.

```shell
pip install poetry
```

--------------------------------

### Install Supabase Auth Helpers for SvelteKit

Source: https://supabase.com/llms/guides.txt

Installs the SvelteKit Auth helpers library and the Supabase JS client. Ensure you are using Node.js version 16.15.0 or higher.

```sh
npm install @supabase/auth-helpers-sveltekit @supabase/supabase-js
```

--------------------------------

### Define Supabase Models and Perform CRUD in C#

Source: https://supabase.com/llms/csharp.txt

Shows how to define C# models that map to Supabase tables using attributes like `[Table]`, `[PrimaryKey]`, and `[Column]`. It also provides examples of performing basic CRUD operations (Get, Insert, Update, Delete) on these models using the Supabase client.

```csharp
// Given the following Model representing the Supabase Database (Message.cs)
[Table("messages")]
public class Message : BaseModel
{
    [PrimaryKey("id")]
    public int Id { get; set; }

    [Column("username")]
    public string UserName { get; set; }

    [Column("channel_id")]
    public int ChannelId { get; set; }

    public override bool Equals(object obj)
    {
        return obj is Message message &&
                Id == message.Id;
    }

    public override int GetHashCode()
    {
        return HashCode.Combine(Id);
    }
}

void Initialize()
{
    // Get All Messages
    var response = await client.Table<Message>().Get();
    List<Message> models = response.Models;

    // Insert
    var newMessage = new Message { UserName = "acupofjose", ChannelId = 1 };
    await client.Table<Message>().Insert();

    // Update
    var model = response.Models.First();
    model.UserName = "elrhomariyounes";
    await model.Update();

    // Delete
    await response.Models.Last().Delete();

    // etc.
}
```

--------------------------------

### Start React Native Application

Source: https://supabase.com/llms/guides.txt

This command initiates the development server for a React Native application. It is used after the application code, including Supabase integration, has been set up. The user is prompted to select an environment to test the app.

```bash
npm start
```

--------------------------------

### SvelteKit Authorization Guard

Source: https://supabase.com/llms/guides.txt

This JavaScript function acts as a SvelteKit hook to protect routes based on authentication status and HTTP methods. It checks for active sessions before allowing access to routes starting with '/protected-routes' (GET) or '/protected-posts' (POST). If no session is found, it redirects or throws an error.

```javascript
async function authorization({ event, resolve }) {
  // protect requests to all routes that start with /protected-routes
  if (event.url.pathname.startsWith('/protected-routes') && event.request.method === 'GET') {
    const { session } = await event.locals.safeGetSession()
    if (!session) {
      // the user is not signed in
      redirect(303, '/')
    }
  }

  // protect POST requests to all routes that start with /protected-posts
  if (event.url.pathname.startsWith('/protected-posts') && event.request.method === 'POST') {
    const { session } = await event.locals.safeGetSession()
    if (!session) {
      // the user is not signed in
      throw error(303, '/')
    }
  }

  return resolve(event)
}

export const handle: Handle = sequence(supabase, authorization)
```

--------------------------------

### Install Drizzle ORM and Dependencies (Shell)

Source: https://supabase.com/llms/guides.txt

This command installs the necessary Drizzle ORM packages and `postgres` driver for Node.js applications. It uses npm to download and install `drizzle-orm` and `postgres` for runtime use, and `drizzle-kit` as a development dependency for tasks like schema generation and migrations.

```shell
npm i drizzle-orm postgres
npm i -D drizzle-kit
```

--------------------------------

### Start Auto Refresh Session

Source: https://supabase.com/llms/js.txt

Starts the automatic session refresh mechanism.

```APIDOC
## Start Auto Refresh Session

### Description
Initiates the process for automatically refreshing the user's session in the background. This helps maintain an active session without requiring manual intervention.

### Method
`POST` (Implicit via `startAutoRefresh`)

### Endpoint
`/auth/v1/user/refresh/auto` (Conceptual - handled by Supabase client)

### Request Example
```javascript
supabase.auth.startAutoRefresh()
```

### Response
#### Success Response (200)
- **data** (object) - Typically confirmation or status related to the auto-refresh setup.
- **error** (object) - Contains error details if the operation failed.

#### Response Example
```json
{
  "data": {
    "message": "Auto refresh started successfully."
  },
  "error": null
}
```
```

--------------------------------

### Create Initial Migration Directory (npm)

Source: https://supabase.com/llms/guides.txt

Creates a directory for an initial migration named '0_init_supabase' within the prisma/migrations folder. This is a prerequisite for manually creating migration files.

```bash
mkdir -p prisma/migrations/0_init_supabase
```

--------------------------------

### Initialize Ionic Vue App

Source: https://supabase.com/llms/guides.txt

Installs the Ionic CLI and initializes a new Vue project named 'supabase-ionic-vue'. It then navigates into the project directory.

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-vue blank --type vue
cd supabase-ionic-vue
```

--------------------------------

### phx_reply Example (JSON)

Source: https://supabase.com/llms/guides.txt

An example of a 'phx_reply' message for protocol version 2.0.0, demonstrating an 'ok' status with 'postgres_changes' data.

```json
[
  "1",
  "1",
  "realtime:chat-room",
  "phx_reply",
  {
    "status": "ok",
    "response": {
      "postgres_changes": [
        {
          "id": 106243155,
          "event": "*",
          "schema": "public",
          "table": "test"
        }
      ]
    }
  }
]
```

--------------------------------

### Install @react-oauth/google for Web

Source: https://supabase.com/llms/guides.txt

Installs the necessary library for handling Google OAuth on web platforms within an Expo project. This is a client-side library for managing Google Sign-In flow.

```bash
npx expo install @react-oauth/google
```

--------------------------------

### Create Example Table in PostgreSQL

Source: https://supabase.com/llms/guides.txt

This SQL statement defines the schema for a 'persons' table, including columns for ID, age, height, weight, name, and deceased status. The 'id' column is set up as an auto-incrementing primary key. This table serves as an example for demonstrating index creation and query optimization techniques.

```sql
create table persons (
  id bigint generated by default as identity primary key,
  age int,
  height int,
  weight int,
  name text,
  deceased boolean
);
```

--------------------------------

### Install Supabase JavaScript client using npm

Source: https://supabase.com/llms/guides.txt

This command installs the Supabase JavaScript client library, which is necessary for interacting with Supabase services from a JavaScript application. It is typically run in the project's root directory.

```bash
npm install @supabase/supabase-js
```

--------------------------------

### Schedule Endpoint Calls Every Minute with pg_cron

Source: https://supabase.com/llms/guides.txt

This example utilizes the `pg_cron` extension to schedule a recurring POST request to a Supabase Edge Function every minute. The `cron.schedule` function is used, with the SQL query for the HTTP POST request defined within the cron job's command string. Ensure `pg_net` is installed and configured.

```sql
select cron.schedule(
	'cron-job-name',
	'* * * * *', -- Executes every minute (cron syntax)
	$$
	    -- SQL query
	    select "net"."http_post"(
            -- URL of Edge function
            url:='https://project-ref.supabase.co/functions/v1/function-name',
            headers:='{"Authorization": "Bearer <YOUR_ANON_KEY>"}'::jsonb,
            body:='{"name": "pg_net"}'::jsonb
	    ) as "request_id";
	$$
);
```

--------------------------------

### Implementing Middleware Authentication with Supabase

Source: https://supabase.com/llms/guides.txt

This example shows how to replace the deprecated `withMiddlewareAuth` with the new `createMiddlewareClient`. It demonstrates how to protect routes based on user email domains and handles redirection for unauthorized access. This is crucial for fine-grained access control in Next.js applications.

```tsx
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next()
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res })
  // Check if we have a session
  const { 
    data: { user }, 
  } = await supabase.auth.getUser()

  // Check auth condition
  if (user?.email?.endsWith('@gmail.com')) {
    // Authentication successful, forward request to protected route.
    return res
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/'
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: '/middleware-protected',
}
```

--------------------------------

### Install Supabase Client Library (TypeScript, Flutter, Swift, Python)

Source: https://supabase.com/llms/guides.txt

Provides commands and package manager configurations for installing the Supabase client libraries across multiple programming languages. This is the first step in integrating Supabase Realtime into your application.

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

### Initialize Python Project with Poetry

Source: https://supabase.com/llms/guides.txt

Initializes a new Python project using Poetry for dependency management. Poetry simplifies package installation and project structure. Ensure Poetry is installed via pip before running these commands.

```shell
pip install poetry
poetry new video-search
```

--------------------------------

### Install Supabase CLI

Source: https://supabase.com/llms/guides.txt

Installs the Supabase CLI tool as a development dependency. Requires npm and a minimum version of 1.8.1.

```bash
npm i supabase@">=1.8.1" --save-dev
```

--------------------------------

### Realtime WebSocket Connection Setup

Source: https://supabase.com/llms/guides.txt

Details on how to establish a WebSocket connection to the Supabase Realtime service, including URL formats and available parameters.

```APIDOC
## Realtime Protocol - WebSocket Connection Setup

### Description
This section details how to set up a WebSocket connection to the Supabase Realtime service. It includes the WebSocket URL formats for both Supabase and self-hosted projects, as well as optional URL parameters for connection configuration.

### WebSocket URL Formats
- **Supabase Projects**: `wss://<PROJECT_REF>.supabase.co/realtime/v1/websocket?apikey=<API_KEY>`
- **Self-hosted Projects**: `wss://<HOST>:<PORT>/socket/websocket?apikey=<API_KEY>`

### Example using `websocat`
```bash
# With Supabase
websocat "wss://<PROJECT_REF>.supabase.co/realtime/v1/websocket?apikey=<API_KEY>"

# With self-hosted
websocat "wss://<HOST>:<PORT>/socket/websocket?apikey=<API_KEY>"
```

### Optional URL Parameters
- **`vsn`**: Sets the protocol version. Possible values are `1.0.0` and `2.0.0`. Defaults to `1.0.0`.
- **`log_level`**: Sets the log level for server-side logs to aid in debugging. This only affects server-side logs.

### Post-Connection Step
After establishing the WebSocket connection, a `phx_join` event must be sent to the server to join a channel. The subsequent sections of the documentation outline the supported message types and events.
```

--------------------------------

### Start or Resume Resumable Upload

Source: https://supabase.com/llms/kotlin.txt

Starts a new resumable upload or resumes a previously paused one. This function should be called after creating the upload object using `createOrContinueUpload`.

```kotlin
upload.startOrResumeUploading()
```

--------------------------------

### Install Supabase Auth Helpers for Remix

Source: https://supabase.com/llms/guides.txt

Installs the necessary packages for integrating Supabase authentication with a Remix application. Requires Remix version 1.7.2 or higher.

```sh
npm install @supabase/auth-helpers-remix @supabase/supabase-js
```

--------------------------------

### SolidJS - Query Supabase Data

Source: https://supabase.com/llms/guides.txt

Example of initializing the Supabase client and fetching data from the 'instruments' table within a SolidJS component.

```APIDOC
## JSX

### Description
Initializes the Supabase client and defines a function to fetch data from the 'instruments' table. This data can then be used within the SolidJS component.

### File: `src/App.jsx`
```jsx
import { createClient } from "@supabase/supabase-js";
import { createResource, For } from "solid-js";

const supabase = createClient('https://<project>.supabase.co', '<sb_publishable_... or anon key>');

async function getInstruments() {
  const { data } = await supabase.from("instruments").select();
  return data;
}

function App() {
  // ... component logic using getInstruments ...
}
```
```

--------------------------------

### Database Schema Setup (SQL)

Source: https://supabase.com/llms/guides.txt

This SQL script defines the database schema for the product management application. It creates a 'products' table with columns for id, name, price, and image, and configures Supabase Storage buckets and access policies.

```sql
-- Create a table for public profiles

    create table
      public.products (
        id uuid not null default gen_random_uuid (),
        name text not null,
        price real not null,
        image text null,
        constraint products_pkey primary key (id)
      ) tablespace pg_default;

    -- Set up Storage!
    insert into storage.buckets (id, name)
      values ('Product Image', 'Product Image');

    -- Set up access controls for storage.
    -- See https://supabase.com/docs/guides/storage/security/access-control#policy-examples for more details.
    CREATE POLICY "Enable read access for all users" ON "storage"."objects"
    AS PERMISSIVE FOR SELECT
    TO public
    USING (true)

    CREATE POLICY "Enable insert for all users" ON "storage"."objects"
    AS PERMISSIVE FOR INSERT
    TO authenticated, anon
    WITH CHECK (true)

    CREATE POLICY "Enable update for all users" ON "storage"."objects"
    AS PERMISSIVE FOR UPDATE
    TO public
    USING (true)
    WITH CHECK (true)

```

--------------------------------

### Supabase Client Initialization

Source: https://supabase.com/llms/swift.txt

Demonstrates how to create a Supabase client instance, with and without custom local storage for authentication.

```APIDOC
## Supabase Client Initialization

### Description
Initializes the Supabase client for authentication.

### Method
`SupabaseClient(...)`

### Endpoint
N/A

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
None

### Request Example
```swift
// Basic initialization
let supabase = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
let auth = supabase.auth

// With custom storage
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key",
  options: .init(
    auth: .init(
      MyCustomLocalStorage()
    )
  )
)
let auth = supabase.auth
```

### Response
#### Success Response (200)
N/A (Initialization)

#### Response Example
N/A
```

--------------------------------

### Install Supabase SSR Packages

Source: https://supabase.com/llms/guides.txt

Installs the necessary Supabase client and SSR helper packages for JavaScript/TypeScript applications. This is a prerequisite for using Supabase with Server-Side Rendering.

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

### Create Range Partitioned Table (SQL)

Source: https://supabase.com/llms/guides.txt

Demonstrates how to create a parent table and define monthly partitions based on an 'order_date' column using range partitioning. The partitioning column must be part of unique constraints.

```sql
create table sales (
    id bigint generated by default as identity,
    order_date date not null,
    customer_id bigint,
    amount bigint,

    -- We need to include all the
    -- partitioning columns in constraints:
    primary key (order_date, id)
)
partition by range (order_date);

create table sales_2000_01
	partition of sales
  for values from ('2000-01-01') to ('2000-02-01');

create table sales_2000_02
	partition of sales
	for values from ('2000-02-01') to ('2000-03-01');
```

--------------------------------

### Initialize React App with Vite

Source: https://supabase.com/llms/guides.txt

Initializes a new React application using Vite and installs the Supabase JavaScript client library. This sets up the basic project structure and necessary dependencies for Supabase integration.

```bash
npm create vite@latest supabase-react -- --template react
cd supabase-react
npm install @supabase/supabase-js
```

--------------------------------

### Install Supabase Auth Helpers for Next.js

Source: https://supabase.com/llms/guides.txt

Installs the necessary Supabase authentication helper libraries for Next.js applications using the pages directory. Requires Node.js version 10.13.0 or higher and Next.js version 10 or higher. Also installs React Auth Helpers for component and hook usage.

```sh
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js
npm install @supabase/auth-helpers-react
```

--------------------------------

### Install Invertase React Native Apple Authentication (Bash)

Source: https://supabase.com/llms/guides.txt

This command installs the necessary Invertase library for React Native Apple authentication using Expo's package manager.

```bash
    npx expo install @invertase/react-native-apple-authentication
```

--------------------------------

### React: MFA Challenge and Verification Logic

Source: https://supabase.com/llms/guides.txt

This component handles the MFA challenge and verification process in a React application using Supabase. It includes functions to start the MFA challenge, retrieve available factors (specifically a phone factor), and verify the code entered by the user. `supabase.auth.mfa.listFactors()` is used to get MFA factors, `supabase.auth.mfa.challenge()` initiates the challenge, and `supabase.auth.mfa.verify()` checks the provided code. Error handling is included for each step.

```tsx
function AuthMFA() {
  const [verifyCode, setVerifyCode] = useState('')
  const [error, setError] = useState('')
  const [factorId, setFactorId] = useState('')
  const [challengeId, setChallengeId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const startChallenge = async () => {
    setError('')
    try {
      const factors = await supabase.auth.mfa.listFactors()
      if (factors.error) {
        throw factors.error
      }

      const phoneFactor = factors.data.phone[0]

      if (!phoneFactor) {
        throw new Error('No phone factors found!')
      }

      const factorId = phoneFactor.id
      setFactorId(factorId)
      setPhoneNumber(phoneFactor.phone)

      const challenge = await supabase.auth.mfa.challenge({ factorId })
      if (challenge.error) {
        setError(challenge.error.message)
        throw challenge.error
      }

      setChallengeId(challenge.data.id)
    } catch (error) {
      setError(error.message)
    }
  }

  const verifyCode = async () => {
    setError('')
    try {
      const verify = await supabase.auth.mfa.verify({
        factorId,
        challengeId,
        code: verifyCode,
      })
      if (verify.error) {
        setError(verify.error.message)
        throw verify.error
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div>Please enter the code sent to your phone.</div>
      {phoneNumber && <div>Phone number: {phoneNumber}</div>}
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        value={verifyCode}
        onChange={(e) => setVerifyCode(e.target.value.trim())}
      />
      {!challengeId ? (
        <input type="button" value="Start Challenge" onClick={startChallenge} />
      ) : (
        <input type="button" value="Verify Code" onClick={verifyCode} />
      )}
    </>
  )
}
```

--------------------------------

### Create Database Test Files with Supabase CLI

Source: https://supabase.com/llms/guides.txt

These commands demonstrate how to create the necessary directory structure and an empty test file for database testing using the Supabase CLI. This setup is essential for organizing and writing your SQL tests.

```bash
mkdir -p ./supabase/tests/database
```

```bash
touch ./supabase/tests/database/hello_world.test.sql
```

--------------------------------

### View OrioleDB Query Plans (EXPLAIN)

Source: https://supabase.com/llms/guides.txt

Demonstrates how to use the standard SQL `EXPLAIN` statement to view query execution plans in OrioleDB. This helps in understanding and optimizing query performance. Examples include a basic `EXPLAIN` for a sorted select, an `EXPLAIN` for a primary key lookup, and an `EXPLAIN (ANALYZE, BUFFERS)` for detailed execution statistics.

```sql
EXPLAIN SELECT * FROM blog_post ORDER BY published_at DESC LIMIT 10;
-- Example output:
--                                                  QUERY PLAN
-- ────────────────────────────────────────────────────────────────────────────────────────────────────────────
--  Limit  (cost=0.15..1.67 rows=10 width=120)
--    ->  Index Scan Backward using blog_post_published_at on blog_post  (cost=0.15..48.95 rows=320 width=120)

EXPLAIN SELECT * FROM blog_post WHERE id = 1;
-- Example output:
--                                     QUERY PLAN
-- ──────────────────────────────────────────────────────────────────────────────────
--  Index Scan using blog_post_pkey on blog_post  (cost=0.15..8.17 rows=1 width=120)
--    Index Cond: (id = 1)

EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM blog_post ORDER BY published_at DESC LIMIT 10;
-- Example output:
--                                                                      QUERY PLAN
-- ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
--  Limit  (cost=0.15..1.67 rows=10 width=120) (actual time=0.052..0.054 rows=1 loops=1)
--    ->  Index Scan Backward using blog_post_published_at on blog_post  (cost=0.15..48.95 rows=320 width=120) (actual time=0.050..0.052 rows=1 loops=1)
--  Planning Time: 0.186 ms
--  Execution Time: 0.088 ms
```

--------------------------------

### Install PySpark for Python Workflows

Source: https://supabase.com/llms/guides.txt

Installs the PySpark library, which is necessary for Python-based Apache Spark workflows. This is a prerequisite for using Spark with Supabase analytics.

```bash
pip install pyspark
```

--------------------------------

### select() with explain()

Source: https://supabase.com/llms/swift.txt

Retrieves the PostgreSQL EXPLAIN execution plan for a query, useful for debugging performance.

```APIDOC
## POST /rest/v1/instruments

### Description
Executes a SELECT query on the 'instruments' table and returns the EXPLAIN execution plan for the query.

### Method
POST

### Endpoint
/rest/v1/instruments

### Parameters
#### Query Parameters
- **select** (string) - Optional - Columns to retrieve. If not specified, all columns are returned.
- **explain** (boolean) - Required - If true, returns the EXPLAIN plan. Example: true

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
- Returns the EXPLAIN execution plan of the query as a string.

#### Response Example
```json
"Seq Scan on instruments  (cost=0.00..25.50 rows=1050 width=36)"
```
```

```APIDOC
## POST /rest/v1/instruments

### Description
Executes a SELECT query on the 'instruments' table and returns the EXPLAIN execution plan, including ANALYZE and VERBOSE options for more detailed performance information.

### Method
POST

### Endpoint
/rest/v1/instruments

### Parameters
#### Query Parameters
- **select** (string) - Optional - Columns to retrieve. If not specified, all columns are returned.
- **explain** (object) - Required - Options for the EXPLAIN command. Example: { analyze: true, verbose: true }

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain(
    analyze: true,
    verbose: true
  )
  .execute()
  .value
```

### Response
#### Success Response (200)
- Returns a detailed EXPLAIN execution plan of the query as a string.

#### Response Example
```json
"Seq Scan on instruments  (cost=0.00..25.50 rows=1050 width=36) (actual time=0.010..0.050 rows=1050 loops=1)"
```
```

--------------------------------

### Install DuckDB and Iceberg Extension

Source: https://supabase.com/llms/guides.txt

Installs the necessary Python packages for DuckDB and its Iceberg extension. This is the first step to enabling DuckDB to query Iceberg tables.

```bash
pip install duckdb duckdb-iceberg
```

--------------------------------

### Install Project Dependencies

Source: https://supabase.com/llms/guides.txt

Installs the required Python dependencies for the project: the Supabase Python client and the Mixpeek Python SDK. These libraries are essential for interacting with Supabase and generating embeddings.

```shell
poetry add supabase mixpeek
```

--------------------------------

### Login with Google using Supabase in Kotlin

Source: https://supabase.com/llms/kotlin.txt

Shows a basic example of initiating a Google OAuth login using the Supabase client in Kotlin after configuring deeplinks.

```kotlin
supabase.gotrue.loginWith(Google)
```

--------------------------------

### Initialize Supabase Client and Fetch Instruments (JavaScript)

Source: https://supabase.com/llms/guides.txt

This snippet demonstrates how to initialize the Supabase client using environment variables and fetch data from the 'instruments' table. It then displays the fetched instrument names in a list. Dependencies include '@supabase/supabase-js' and 'react' (for useState and useEffect).

```javascript
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;
```

--------------------------------

### Using Filters

Source: https://supabase.com/llms/kotlin.txt

Illustrates how to apply filters to queries for selecting, updating, and deleting data, including examples with various filter types and conditions.

```APIDOC
## Filtering Data

### Description
Filters allow you to specify conditions to retrieve, modify, or delete specific rows from your database tables. Filters can be applied to `select()`, `update()`, and `delete()` queries, as well as `rpc()` calls.

### Method
GET, POST, PUT, DELETE (depending on the operation)

### Endpoint
/rest/v1/{tableName} or /rest/v1/rpc/{functionName}

### Parameters
#### Query Parameters / Filter Conditions
Filters are applied within a lambda block or directly using filter functions like `eq()`, `neq()`, `gt()`, etc.

- **Filter Syntax**: You can use either a string-based column name (e.g., `eq("name", "The Shire")`) or a property reference (e.g., `City::name eq "The Shire"`). The latter automatically converts camelCase to snake_case by default.

#### Examples

##### Applying a filter block to `select()`
```kotlin
supabase.postgrest["cities"].select(columns = Columns.list("name", "country_id")) {
    City::name eq "The Shire"
    //or
    eq("name", "The Shire")
}
```

##### Multiple filters on one column using `and` and `or`
```kotlin
supabase.postgrest["characters"].select(columns = Columns.list("name, book_id")) {
    and { //when both are true
       Character::age gt 10
       Character::age lt 150
    }
    or { //when either one of the filters are true
       Character::name eq "Harry"
       Character::name eq "Dumbledore"
    }
}
```

##### Filter by values within a JSON column
```kotlin
supabase.postgrest["users"].select {
   eq("address->postcode", 90210)
}
```

##### Filter Foreign Tables using `inner` join
```kotlin
supabase.postgrest["orchestral_sections"].select(
      columns = Columns.raw("""
                            name,
                            instruments!inner ( 
                              name
                            )
                            """
)
) {
    eq("instruments.name", "flute")
}
```

### Response
#### Success Response (200)
- **(Varies)** - Returns data based on the query and filters applied. For `select`, it's a list of objects. For `update` and `delete`, it may return the affected rows.

#### Response Example (for select)
```json
[
  {
    "name": "The Shire",
    "country_id": 1
  }
]
```
```

--------------------------------

### Initialize a New Supabase Project

Source: https://supabase.com/llms/guides.txt

Initializes a new Supabase project in the current directory. This command creates a 'supabase' folder containing project configuration files. This folder is safe to commit to version control.

```bash
supabase init
```

--------------------------------

### Edge Function Gzip Example

Source: https://supabase.com/llms/guides.txt

Example of an edge function designed to decompress and process gzipped JSON payloads.

```APIDOC
## Edge Function for Gzipped Logs

### Description
This edge function demonstrates how to handle incoming requests with `content-encoding: gzip`, decompress the payload, and process the JSON data.

### Method
POST

### Endpoint
(Assumed to be configured in Log Drains to send gzipped data)

### Parameters
#### Headers
- **content-encoding** (string) - Required - Must be `gzip` for this function to process.

#### Request Body
- **(Compressed JSON Payload)**

### Request Example (Inside Edge Function)
```typescript
import { gunzipSync } from 'node:zlib'

Deno.serve(async (req) => {
  try {
    // Check if the request body is gzip compressed
    const contentEncoding = req.headers.get('content-encoding')
    if (contentEncoding !== 'gzip') {
      return new Response('Request body is not gzip compressed', {
        status: 400,
      })
    }

    // Read the compressed body
    const compressedBody = await req.arrayBuffer()

    // Decompress the body
    const decompressedBody = gunzipSync(new Uint8Array(compressedBody))

    // Convert the decompressed body to a string
    const decompressedString = new TextDecoder().decode(decompressedBody)
    const data = JSON.parse(decompressedString)
    // Process the decompressed body as needed
    console.log(`Received: ${data.length} logs.`)

    return new Response('ok', {
      headers: { 'Content-Type': 'text/plain' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response('Error processing request', { status: 500 })
  }
})
```

### Response
#### Success Response (200)
- **(Plain Text)** - Confirmation message, e.g., 'ok'.

#### Error Response (400)
- **(Plain Text)** - Error message if `content-encoding` is not `gzip`.

#### Error Response (500)
- **(Plain Text)** - Error message if processing fails.
```

--------------------------------

### Basic Supabase Session Setup in Next.js (JavaScript)

Source: https://supabase.com/llms/guides.txt

Wraps the main Next.js application component (`pages/_app.js`) with `SessionContextProvider` to enable Supabase authentication state management. Creates a Supabase browser client and provides the session to the application.

```jsx
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
```

--------------------------------

### IdP-Initiated SAML Flow and PKCE Alternative

Source: https://supabase.com/llms/guides.txt

IdP-initiated SAML flows are incompatible with PKCE due to the absence of `code_challenge` and `code_verifier` generated by the application. The recommended alternative is a "bookmark app" approach, where an endpoint initiates the SAML flow via `signInWithSSO`, and a bookmark in the IdP directs users to this endpoint, enabling a secure SP-initiated flow.

```APIDOC
## IdP-Initiated SAML Flow and PKCE Alternative

### Description
Traditional IdP-initiated SAML flows do not work with Proof Key for Code Exchange (PKCE). This is because PKCE requires a `code_challenge` and `code_verifier` generated during the application's initiation of the authentication process. In IdP-initiated flows, Supabase receives an unsolicited response lacking this crucial information, leading to failures during the code exchange step.

To achieve a similar user experience while maintaining the security benefits of PKCE, a "bookmark app" strategy is recommended. This involves creating a dedicated endpoint within your application (e.g., `https://your-app.com/auth/saml-init`). This endpoint initiates the SAML flow using `signInWithSSO`. Subsequently, a bookmark or linked application is configured within the user's IdP, pointing to this application endpoint. When a user accesses this bookmark, it securely triggers a Service Provider (SP)-initiated flow.

This approach ensures compatibility with PKCE, supports custom SAML assertions, and allows for the SAML initiation link to be embedded seamlessly within your application's interface.

### Recommended Alternative: "Bookmark App" Approach

1.  **Create an Initiation Endpoint:** Develop an endpoint in your application (e.g., `/auth/saml-init`) that programmatically calls `supabase.auth.signInWithSSO()`.
2.  **Configure IdP Bookmark:** In your Identity Provider (IdP), create a bookmark or a linked application that directs users to the endpoint created in step 1.
3.  **User Access:** When a user clicks on the bookmark in their IdP, it triggers the SP-initiated SAML flow via your application's endpoint.

### Benefits
-   Maintains PKCE security.
-   Supports custom SAML assertions.
-   Allows embedding the initiation link within your application.
```

--------------------------------

### Invoke Supabase Function with GET Method (JavaScript)

Source: https://supabase.com/llms/js.txt

Invoke a Supabase function using the HTTP GET method. This is typically used for retrieving data. The method is explicitly set to 'GET' in the invocation options.

```javascript
const { data, error } = await supabase.functions.invoke('hello', {
  headers: {
    "my-custom-header": 'my-custom-header-value'
  },
  method: 'GET'
})
```

--------------------------------

### Install Supabase CLI

Source: https://supabase.com/llms/guides.txt

Installs the Supabase CLI as a development dependency using different package managers. Note the pnpm specific flag for versions 10 and higher.

```sh
npm install supabase --save-dev
```

```sh
NODE_OPTIONS=--no-experimental-fetch yarn add supabase --dev
```

```sh
pnpm add supabase --save-dev --allow-build=supabase
```

```sh
brew install supabase/tap/supabase
```

--------------------------------

### Clone and Initialize Supabase Docker Project

Source: https://supabase.com/llms/guides.txt

Clones the Supabase repository, sets up a project directory, copies Docker configuration files, and pulls the necessary Docker images. This is the general method for setting up.

```sh
git clone --depth 1 https://github.com/supabase/supabase

# Make your new supabase project directory
mkdir supabase-project

# Tree should look like this
# .
# 