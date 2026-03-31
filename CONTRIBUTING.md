# Contributing to CreemKit

Thanks for your interest in contributing! Here's how to get started.

## Quick Setup

```bash
git clone <repo-url>
cd creemkit
bun install
bun dev    # Demo mode: no real accounts needed to run
```

## Development

```bash
bun dev           # Start dev server (demo mode if no .env.local)
bun test              # Run unit tests (81+)
bun run test:watch    # Watch mode
bun run e2e           # Playwright E2E tests
bun run check         # Full check (lint + typecheck + tests)
```

## Code Style

- **TypeScript strict** — no `any` types (except demo mock)
- **Biome** for formatting and linting — run `bun run format` before committing
- **Vitest** for unit tests — pure functions extracted from route handlers for testability
- **Playwright** for E2E tests

## Pull Requests

1. Fork the repo and create a branch from `main`
2. Write tests for new features (TDD preferred)
3. Run `bun run check` before submitting
4. Keep PRs focused — one feature per PR

## Architecture

- **API routes are thin** — validate auth, call Creem SDK, write to Supabase, return JSON
- **Business logic in pure functions** — `handlers.ts`, `validators.ts`, `helpers.ts` for testability
- **Demo mode** — all features work with in-memory store when Supabase credentials are missing

## Test Cards

For Creem test mode: `4242 4242 4242 4242` (any future expiry, any CVC).


## Adding a New Feature

1. Create validators/helpers in a `helpers.ts` or `validators.ts` file
2. Write tests first (RED phase)
3. Implement the route handler
4. Add demo mode support in the route (check `isDemoMode()` at top)
5. Add UI component if needed
6. Update README

