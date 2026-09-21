---
mode: agent
description: "Use when: scaffolding a new app or API, creating a folder structure, choosing a tech stack, installing dependencies, or starting a project from scratch."
argument-hint: "What stack or project type should I scaffold?"
---

# Project Setup

Use the project-setup skill to scaffold a new project from scratch.

Follow this workflow:

1. Confirm the project goal and target stack.
2. Choose the best framework or runtime for the request.
3. Decide on the package manager and base app structure.
4. Create the required folders and config files.
5. Install the needed dependencies.
6. Validate with a build or startup check.
7. Summarize the created structure and the next steps.

Keep the setup simple, consistent, and runnable.

If the user has not specified a stack, propose a sensible default such as Next.js for web apps, Vite for lightweight frontend apps, or Express/Nest for APIs.

If the request is ambiguous, ask one clarifying question before scaffolding.

After setup, report:

- the created folder structure
- the installed packages
- any configuration files added
- validation results
- suggested next actions
