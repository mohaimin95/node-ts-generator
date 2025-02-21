# Node TS (Typescript + ESLint + Prettier + Webpack + Husky precommit hooks) 🚀

## Generate node js project with ease ✨

With this library, you can effortlessly generate a sleek Node.js backend application complete with TypeScript, ESLint, Prettier, Webpack, and Husky pre-commit hooks all set up and ready to go. Say goodbye to messy code and hello to a more polished and high-quality development experience for you and your team.

## Features

- Predefined folder structure inspired from the Node JS experts.
- Typescript preconfigured.
- ESLint configured which enhances code quality and prevents unwanted codes.
- Prettier configured which ensures the better formatted code.
- Added webpack for the optimized build (Available from v1.2.0).
- Husky precommit hooks preconfigured which check for lint errors before committing the code.
- Easily configurable.
- Hot reloading via nodemon.

## Whats new in v1.2.3 [2025-02-21] ✨
- Updated packages to latest.
- Updated README file.

## Whats new in v1.2.0 [2024-05-04]
- Added webpack for optimized build.
- Changed npm to yarn in Dockerfile for faster docker builds.
- Added rimraf package for universal delete command compatability.
- Added /health-check endpoint.
- Updated packages to latest.
- Updated README file.

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

#### Installation
```sh
npm i -g @mohaimin95/node-ts-generator
```
#### Creating the project
Create a project folder and generate the application using the command below

```sh
node-ts-generator init appnamehere
```

#### Installing dependencies

```sh
cd appnamehere && git init && npm i
```
🔥 Congratulations, you have created a node backend project with Typescript, ESLint, Prettier, Webpack and husky precommit hooks preconfigured.

## What's next?

1. Install all dependencies using `cd appnamehere && git init && npm i`.
2. Start your application in development mode using `npm run dev`.

## For the cleaner dependencies install

- Run `npm run install:clean`.

## Husky is not executable?

- Run `chmod 777 .husky/*`.

## Starting application in development mode

```
npm run dev
```

## Building the application

```
npm run build
```
## Starting application in production mode

```
npm run build && npm start
```
## Contribution

Feel free to contribute 🤝 (https://github.com/mohaimin95/node-ts-generator).

### Happy coding 🔥