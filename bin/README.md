# Node TypeScript API Starter

A ready-to-use Express API starter with TypeScript, Oxlint, Prettier, Webpack, environment configuration, path aliases, centralized error handling, and an AI scaffold skill.

## Requirements

- A current Node.js LTS release
- npm or pnpm

## Quick Start

1. Create your local environment file:

   ```sh
   cp .env.example .env
   ```

2. Install dependencies with your preferred package manager:

   ```sh
   npm install
   ```

   Or:

   ```sh
   pnpm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

   Or:

   ```sh
   pnpm dev
   ```

The application uses the `PORT` value from `.env`. The default example uses port `3000`.

## Verify the Application

With the development server running, open:

```text
http://localhost:3000/healthCheck
```

Expected response:

```json
{
  "status": "OK"
}
```

## Available Scripts

Run each script with `npm run <script>` or `pnpm run <script>`.

| Script | Description |
| --- | --- |
| `dev` | Start the development server with file watching. |
| `dev:inspect` | Start development mode with the Node.js inspector enabled. |
| `checkts` | Check TypeScript types without producing output. |
| `typecheck` | Check TypeScript types without producing output. |
| `lint` | Check the source code with Oxlint. |
| `lint:fix` | Fix automatically repairable lint issues. |
| `format` | Format supported project files with Prettier. |
| `format:check` | Check formatting without changing files. |
| `build` | Lint, typecheck, and create a production bundle in `dist`. |
| `build:dev` | Compile TypeScript for development into `dist`. |
| `start` | Run the production bundle from `dist/index.js`. |
| `clean` | Remove the `dist` directory. |

## Production Build

Build and run the application with npm:

```sh
npm run build
npm start
```

Or with pnpm:

```sh
pnpm build
pnpm start
```

## Project Structure

```text
.
├── .agents/skills/scaffold/   # AI scaffold skill and rules
├── pre-start/                 # Startup configuration, including environment loading
├── src/
│   ├── controllers/           # HTTP request handlers
│   ├── middlewares/           # Express middleware and centralized error handling
│   ├── routes/                # Express route definitions
│   ├── services/              # Application and business logic
│   ├── app.ts                 # Express application setup
│   └── index.ts               # Application entry point
├── tsconfig.json              # TypeScript configuration and path aliases
└── webpack.config.js          # Production bundling configuration
```

Each application layer uses an `index.ts` barrel file where appropriate. Existing path aliases include `@controllers`, `@middlewares`, `@routes`, and `@services`.

## AI Scaffold Skill

The project includes an AI skill at:

```text
.agents/skills/scaffold/SKILL.md
```

Compatible AI coding agents can use it to generate:

- Controllers
- Routes
- Services
- Models
- Helpers
- Middleware

The skill instructs the AI to follow the existing project structure, update barrel exports, register active routes when appropriate, avoid unrelated changes, and validate its work. The complete AI rules live in the skill file.

Example requests:

```text
Scaffold a User service.
Add authentication middleware.
Create and register a users route.
Generate a User controller and export it from the controllers barrel.
```

Include both the artifact type and name in your request. If your AI agent does not discover the skill automatically, direct it to `.agents/skills/scaffold/SKILL.md`.

## Error Handling

The centralized error middleware is registered after the application routes. Pass errors to Express with `next(error)`, or throw them from supported asynchronous Express handlers, so the middleware can return a consistent JSON response:

```json
{
  "success": false,
  "message": "Error message"
}
```

## Environment Variables

Environment variables are loaded from `.env` during startup.

| Variable | Description | Example |
| --- | --- | --- |
| `PORT` | Port used by the HTTP server. | `3000` |

Add new variables to both `.env` and `.env.example`, but keep secrets out of `.env.example` and version control.
