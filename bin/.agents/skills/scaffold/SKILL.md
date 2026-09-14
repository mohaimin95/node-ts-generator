---
name: scaffold
description: Scaffold a typed application artifact such as a controller, route, service, model, helper, or middleware in the project's existing structure and update its barrel exports.
---

# Scaffold

Use this skill when the user asks to scaffold, generate, or add a new application artifact.

## Interaction

- Identify the artifact type and its name from the request.
- If the name is missing, ask the user for it before changing files.
- If the artifact type is ambiguous, ask the user to choose one of the supported types.
- Accept common singular/plural forms and minor spelling variations, but do not guess a materially different type.

## AI rules and workflow

1. Inspect the repository before writing anything. Find the source root, the target directory, its barrel file (usually `index.ts`), path aliases, and at least one nearby example. Follow the project's existing TypeScript, naming, export, import, and formatting conventions.
2. Normalize the requested name for the repository's convention. Keep the file name in the project's usual casing (for example, `userProfile.service.ts`) and use the corresponding identifier casing (for example, `UserProfileService`). Do not silently change a name that would collide with an existing file or symbol.
3. Create the smallest useful implementation consistent with nearby files. Preserve the project's framework and dependency choices; do not introduce a new library or redesign the architecture.
4. Update the target directory's barrel file with the new export. Preserve existing exports and ordering/style. Add an export only once, and create the barrel only if that directory's convention requires one.
5. For routes, inspect the parent route barrel and neighboring routers. Export the new router from the route directory and register it in the parent router only when the request clearly means an active application route; otherwise ask whether registration is wanted.
6. Run the narrowest relevant formatter, typecheck, or lint check available. Report any check that could not be run.

## Default artifact shapes

Use these only when the repository has no clearer local example. Adapt names, imports, and return types to the project.

- **controller**: a default-exported class named `<PascalName>Controller`; request-handler methods use the project's HTTP framework types.
- **route**: a default-exported router named `<camelName>Router`; use the project's router factory and handler conventions.
- **service**: a default-exported class named `<PascalName>Service`.
- **model**: follow the project's persistence or domain-model convention. Do not invent a schema library when none is present.
- **helper**: export a focused function or value using the surrounding module's export convention.
- **middleware**: follow the framework's middleware signature and the project's existing middleware layout.

## Safety and completion

- Do not overwrite existing files, replace barrel contents, or modify unrelated files.
- If the requested directory does not exist, confirm the project's source layout first, then create the directory and its barrel when that is consistent with the project.
- If the project has no established shape for the requested artifact, ask for the intended API or create only a minimal placeholder and state that choice.
- Finish by naming the files created or updated and any validation performed.
