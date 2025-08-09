# Node TS (TypeScript + ESLint + Prettier + Webpack + Husky Hooks)

## Overview

Node TS provides a quick and efficient way to generate a fully configured Node.js backend application.  
It includes **TypeScript**, **ESLint**, **Prettier**, **Webpack**, and **Husky** (pre-commit hook) out of the box, enabling developers to start with a clean, structured, and production-ready setup.  
This eliminates the need for repetitive setup tasks and ensures consistent code quality across teams.

---

## Features

- **Predefined folder structure** following best practices from experienced Node.js developers.
- **TypeScript** with built-in path alias support for cleaner imports.
- **ESLint** configured to enforce high-quality coding standards and prevent unwanted code patterns.
- **Prettier** for consistent code formatting.
- **Webpack** for optimized builds (introduced in v1.2.0).
- **Husky** pre-commit hook preconfigured to run lint checks before committing code.
- **Hot reloading** via Nodemon for faster development feedback loops.
- **Dockerfile** included for containerization support.
- Fully **customizable** configuration.

---

## What's New in v1.2.5 [2025-08-09]

- Enhanced ESLint and Prettier configurations for improved code quality and consistency.
- Added `.vscode/launch.json` and enabled source maps for a smoother debugging experience.
- Upgraded all dependencies to the latest stable versions.
- Updated `README.md` for improved clarity and accuracy.

---

## Installation

### Create a Project (via NPM)

To create a project,
```sh
npx @mohaimin95/node-ts-generator init <app-name>
```

### Install Dependencies
```sh
cd <app-name> && npm install
```

Once done, you have a Node.js backend project with TypeScript, ESLint, Prettier, Webpack, and Husky preconfigured.

---

## Next Steps

1. Install dependencies:
   ```sh
   cd <app-name> && npm install
   ```
2. Start the application in development mode:
   ```sh
   npm run dev
   ```

---

## Additional Commands

**Clean Install Dependencies**
```sh
npm run install:clean
```

**Fix Husky Permission Issues**
```sh
chmod 777 .husky/*
```

**Start in Development Mode**
```sh
npm run dev
```

**Build the Application**
```sh
npm run build
```

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
