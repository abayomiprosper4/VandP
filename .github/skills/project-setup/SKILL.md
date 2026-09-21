---
name: project-setup
description: "Use when: scaffolding a new app or API, creating a folder structure, choosing a tech stack, installing dependencies, setting up config files, or starting a project from scratch."
---

# Project Setup Skill

## Purpose

Create a clean project structure for a requested stack and install the required dependencies with the minimum necessary configuration to get a project running.

## Inputs to Gather

Before making changes, confirm these items:

- Project goal: web app, API, CLI, monorepo, or full-stack app
- Target stack: Next.js, React, Vite, Node, Express, Nest, Python, etc.
- Package manager: npm, pnpm, yarn, or bun
- App name and root folder
- Whether the project should be single-app or monorepo
- Required dependencies and environment variables
- Whether to include testing, linting, TypeScript, Docker, or CI

## Decision Flow

### 1. Choose the project type

- Frontend app: prefer Vite or Next.js depending on SSR, routing, and deployment needs.
- API/backend: prefer Express, NestJS, FastAPI, or Node runtime with TypeScript.
- Monorepo: create apps/ and packages/ directories and shared config.
- Simple prototype: keep a minimal folder structure and avoid over-engineering.

### 2. Select a package manager

- Use npm by default if the user has no preference.
- Prefer pnpm or bun for faster installs in larger projects.
- Keep the choice consistent across all install and script commands.

### 3. Build the directory structure

Create only the folders required for the stack and the likely workflow:

- src/, app/, pages/, components/, lib/, utils/
- public/, assets/, styles/
- api/, server/, routes/, controllers/
- config/, env/, scripts/
- tests/, **tests**/
- .github/, docs/

### 4. Install dependencies

- Start with the framework and core runtime dependencies.
- Add developer tooling next: TypeScript, ESLint, Prettier, testing libraries.
- Only install packages required for the user’s stated goal.
- Keep versions consistent with the framework documentation.

### 5. Add basic configuration

Create the minimal required configuration files:

- package.json
- tsconfig.json or jsconfig.json
- vite.config._, next.config._, or framework config
- .gitignore
- .env.example
- eslint config, prettier config, or editor config

### 6. Validate and report

After setup:

- Run the install command and confirm it succeeds.
- Run a basic build or start command if appropriate.
- Check that the entry file loads or the app boots.
- Note any missing env vars or next steps.

## Workflow Checklist

1. Confirm scope, stack, and folder naming.
2. Create the root project folder and required directories.
3. Initialize the project with the chosen package manager.
4. Install framework and tooling dependencies.
5. Add config files and environment variables.
6. Create a minimal app entry and basic structure.
7. Run validation commands.
8. Share the created structure and the next steps.

## Quality Bar

The setup is complete only when all of the following are true:

- The requested stack is installed and configured.
- The folder structure matches the project type.
- The package manifest includes all required scripts.
- The project can be built or started without fatal errors.
- The user has a clear next step for development.

## Example Prompts

- Create a Next.js app with TypeScript, Tailwind, and a dashboard folder structure.
- Set up a Node.js Express API with TypeScript and environment config.
- Build a Vite React project with components, hooks, and a basic folder layout.
- Scaffold a monorepo with apps/web and packages/shared using pnpm.
- Initialize a full-stack project and install the required dependencies.

## Best Practices

- Prefer the simplest valid structure over a very abstract architecture.
- Add only the tooling that supports the user’s actual workflow.
- Keep generated files understandable and maintainable.
- Preserve naming consistency across folders, imports, and package scripts.
- Document any required environment setup before handing the project off.

## Output Expectations

When this skill is used, it should produce:

- A runnable project scaffold
- A clear folder hierarchy
- Installed dependencies
- Basic configuration files
- Verifiable build/start output
- A brief summary of what was created and how to continue
