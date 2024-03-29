# Node TS (Typescript + ESLint + Prettier + Husky precommit hooks)

## Whats new in 1.1.1 [2023-11-23] ✨
- Updated packages to latest.
- Updated README.md.

## Update 1.1.0 [2022-12-06]
- Added tsc-alias [Now supports path aliases 😍].
- Added Dockerfile and .dockerignore file.
- Updated dependencies and devDependencies to the latest versions.
- Changed command `npm run start:dev` to `npm run dev`.

## Generate node js project with ease ✨

This library generates a node JS backend application with Typescript, ESLint, Prettier, Husky precommit hooks preconfigured. It enables you/team to write a good looking code with good quality.

## Contribution

Anyone can contribute this project (https://github.com/mohaimin95/node-ts-generator)

## Features

- Predefined folder structure inspired from the Node JS experts.
- Typescript preconfigured.
- ESLint configured which enhances code quality and prevents unwanted codes.
- Prettier configured which ensures the better formatted code.
- Husky precommit hooks preconfigured which check for lint errors before committing the code.
- Easily configurable.

## Installation

Install the package using the command below.

```sh
npm i -g @mohaimin95/node-ts-generator
```

Create a project folder and generate the application using the command below

```sh
node-ts-generator init <project-name>
```

🔥 Congratulations, you have created a node backend project with Typescript, ESLint, Prettier and husky precommit hooks preconfigured.

## What's next?

1. Install all dependencies using `cd <appname> && git init && npm i`.
2. Start your application in development mode using `npm run dev`.

## Husky is not executable?

- Run `chmod 777 .husky/*`.

## Building the application

```
npm run build
```

## Starting application in production mode

```
npm run build && npm start
```

### Happy coding 🔥