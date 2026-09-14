# Node TypeScript Generator

Generate a structured Express backend with TypeScript, ESLint, Prettier, Webpack, path aliases, centralized error handling, and an AI scaffold skill.

## Features

- Express 5 application written in strict TypeScript
- Fast development mode with `tsx` file watching
- ESLint and Prettier configuration
- Webpack production bundle
- Path aliases for controllers, middleware, routes, and services
- Health-check endpoint and centralized JSON error handling
- Support for both npm and pnpm
- Dockerfile and VS Code launch configuration
- AI scaffold skill for adding project artifacts consistently

## What's New in This Version

- Added npm and pnpm support throughout project setup and scripts.
- Added a generated `.gitignore` with Node.js, build, environment, and Husky exclusions.
- Replaced the Hello World example with a health-check controller, route, and service.
- Added reusable Express error middleware and the `@middlewares` path alias.
- Moved the generated application entry point to `src/index.ts`.
- Added an AI scaffold skill for controllers, routes, services, models, helpers, and middleware.
- Added a reader-friendly README to every generated project.
- Updated dependencies, project structure, linting, scripts, and documentation.

## Create a Project

With npm:

```sh
npx @mohaimin95/node-ts-generator init <app-name>
cd <app-name>
npm install
npm run dev
```

With pnpm:

```sh
pnpm dlx @mohaimin95/node-ts-generator init <app-name>
cd <app-name>
pnpm install
pnpm run dev
```

Copy `.env.example` to `.env` if needed, then open the default health-check endpoint:

```text
http://localhost:3000/healthCheck
```

Expected response:

```json
{
  "status": "OK"
}
```

## Generated Project

```text
<app-name>/
├── .agents/skills/scaffold/   # AI scaffold skill and rules
├── pre-start/                 # Startup and environment configuration
├── src/
│   ├── controllers/           # HTTP request handlers
│   ├── middlewares/           # Express middleware
│   ├── routes/                # Route definitions
│   ├── services/              # Application logic
│   ├── app.ts                 # Express application setup
│   └── index.ts               # Application entry point
├── README.md                  # Generated-project setup guide
├── eslint.config.ts
├── tsconfig.json
└── webpack.config.js
```

The generated README contains environment setup, available commands, production build instructions, project structure, error-handling guidance, and AI scaffold examples.

## Common Commands

Run scripts with `npm run <script>` or `pnpm run <script>`.

| Script | Description |
| --- | --- |
| `dev` | Start development mode with file watching. |
| `dev:inspect` | Start development mode with the Node.js inspector. |
| `typecheck` | Validate TypeScript without emitting files. |
| `lint` | Check source files with ESLint. |
| `lint:fix` | Fix automatically repairable lint issues. |
| `format` | Format project files with Prettier. |
| `format:check` | Check formatting without changing files. |
| `build` | Validate and create the production bundle. |
| `start` | Run `dist/index.js`. |

## AI Scaffold Skill

Every generated project includes:

```text
.agents/skills/scaffold/SKILL.md
```

Compatible AI coding agents can use the skill to create controllers, routes, services, models, helpers, and middleware while following the generated project's conventions. The skill contains the complete AI rules for naming, exports, route registration, file safety, and validation.

Example requests:

```text
Scaffold a User service.
Add authentication middleware.
Create and register a users route.
Generate a User controller and export it from the controllers barrel.
```

Include the artifact type and name in the request. If the agent does not discover the skill automatically, direct it to `.agents/skills/scaffold/SKILL.md`.

## Work on the Generator Locally

```sh
git clone https://github.com/mohaimin95/node-ts-generator.git
cd node-ts-generator
npm install
node index.js init test-app
```

The generated template lives in `bin`, and the CLI scaffold logic lives in `src/services/scaffold-app.service.js`.

## Contributing

Contributions are welcome. Fork the repository, make your changes, and open a pull request on [GitHub](https://github.com/mohaimin95/node-ts-generator).

## Author

Created by **Abdul Mohaimin**. Visit the [portfolio](https://mohaimin95.github.io).
