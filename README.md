# Node TS (Typescript + ESLint + Prettier + Webpack + Husky precommit hooks)

## Whats new in v1.2.0 [2024-05-04] ✨
- Added webpack for optimized build.
- Changed npm to yarn in Dockerfile for faster docker builds.
- Added rimraf package for universal delete command compatability.
- Added /health-check endpoint.
- Updated packages to latest.
- Updated README file.

## Generate node js project with ease ✨

This library generates a node JS backend application with Typescript, ESLint, Prettier, Webpack, Husky precommit hooks preconfigured. It enables you/team to write a good looking code with good quality.

## Contribution

Feel free to contribute (https://github.com/mohaimin95/node-ts-generator)

## Features

- Predefined folder structure inspired from the Node JS experts.
- Typescript preconfigured.
- ESLint configured which enhances code quality and prevents unwanted codes.
- Prettier configured which ensures the better formatted code.
- Added webpack for the optimized build (Available from v1.2.0).
- Husky precommit hooks preconfigured which check for lint errors before committing the code.
- Easily configurable.

## Installation
### Method-1 via NPX [Recommended]:
To create a project without installing it, execute the following command.

#### Creating project
```sh
npx @mohaimin95/node-ts-generator init appnamehere
```

#### Installing dependencies

```sh
cd appnamehere && git init && npm i
```

### Method-2 via NPM:
Install the package using the command below.

```sh
npm i -g @mohaimin95/node-ts-generator
```

Create a project folder and generate the application using the command below

```sh
node-ts-generator init appnamehere
```

🔥 Congratulations, you have created a node backend project with Typescript, ESLint, Prettier, Webpack and husky precommit hooks preconfigured.

## What's next?

1. Install all dependencies using `cd appnamehere && git init && npm i`.
2. Start your application in development mode using `npm run dev`.

## For the cleaner dependencies install

- Run `npm run install:clean`.

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