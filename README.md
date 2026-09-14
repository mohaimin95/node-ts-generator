# Node TS (TypeScript + ESLint + Prettier + Webpack)

## Overview

Node TS provides a quick and efficient way to generate a fully configured Node.js backend application.  
It includes **TypeScript**, **ESLint**, **Prettier**, and **Webpack** out of the box, enabling developers to start with a clean, structured, and production-ready setup.
This eliminates the need for repetitive setup tasks and ensures consistent code quality across teams.

---

## Features

- **Predefined folder structure** following best practices from experienced Node.js developers.
- **TypeScript** with built-in path alias support for cleaner imports.
- **ESLint** configured to enforce high-quality coding standards and prevent unwanted code patterns.
- **Prettier** for consistent code formatting.
- **Webpack** for optimized builds (introduced in v1.2.0).
- **Hot reloading** via Nodemon for faster development feedback loops.
- **Dockerfile** included for containerization support.
- **AI scaffold skill** for agent-assisted creation of controllers, routes, services, models, helpers, and middleware.
- Fully **customizable** configuration.

---

## What's New in This Version

- Added support for creating and running projects with both **npm** and **pnpm**.
- Added reusable Express error middleware and an `@middlewares` path alias.
- Added an AI-ready scaffold skill for generating controllers, routes, services, models, helpers, and middleware.
- Updated the project structure, scripts, linting configuration, and documentation.
- Upgraded all dependencies to the latest stable versions.

---

## Installation

### Create a Project

To create a project,
```sh
npx @mohaimin95/node-ts-generator init <app-name>
```

Or with pnpm:

```sh
pnpm dlx @mohaimin95/node-ts-generator init <app-name>
```

### Install Dependencies

Using npm:

```sh
cd <app-name> && npm install
```

Using pnpm:

```sh
cd <app-name> && pnpm install
```

Once done, you have a Node.js backend project with TypeScript, ESLint, Prettier, Webpack, and Husky preconfigured.

---

## Next Steps

1. Install dependencies:
   ```sh
   cd <app-name> && npm install
   ```
   Or:
   ```sh
   cd <app-name> && pnpm install
   ```
2. Start the application in development mode:
   ```sh
   npm run dev
   ```
   Or:
   ```sh
   pnpm dev
   ```

---

## Additional Commands

**Start in Development Mode**
```sh
npm run dev
```

Or:

```sh
pnpm dev
```

**Build the Application**
```sh
npm run build
```

Or:

```sh
pnpm build
```

---

## AI Scaffold Skill

Every generated project includes an agent skill at:

```text
.agents/skills/scaffold/SKILL.md
```

The skill guides compatible AI coding agents to create application artifacts that match the generated project's existing structure and conventions. It can scaffold:

- Controllers
- Routes
- Services
- Models
- Helpers
- Middleware

It also updates the relevant barrel exports, registers active routes when appropriate, preserves existing files, and runs the narrowest available validation command.

Example requests:

```text
Scaffold a User service.
Add authentication middleware.
Create and register a users route.
Generate a User controller and export it from the controllers barrel.
```

Include both the artifact type and name in the request. If either is unclear, the skill asks for the missing information before changing files.

---

## Contribution

Contributions are welcome.  
Fork the repository, make your changes, and submit a pull request via:  
[GitHub – mohaimin95/node-ts-generator](https://github.com/mohaimin95/node-ts-generator)

---

## Connect

**Abdul Mohaimin**  
[Portfolio](https://mohaimin95.github.io)

---
