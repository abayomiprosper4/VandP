---
mode: agent
description: "Use when: creating a frontend app, backend API, or choosing between a web app and an API stack for a fresh project setup."
argument-hint: "Is this a frontend app, backend API, or full-stack project?"
---

# App Stack Setup

Use this prompt for a specialized project scaffold when the user wants a narrower setup than the general project setup flow.

Choose one path before creating files:

1. Frontend-only setup
   - Prefer Vite or Next.js depending on routing and SSR needs.
   - Create a UI-first structure with app/, components/, lib/, assets/, and styles/.
   - Install UI, routing, and frontend dependencies only.
   - Keep config minimal and web-focused.

2. Backend API setup
   - Prefer Express, NestJS, or a Node TypeScript API skeleton.
   - Create routes/, controllers/, services/, lib/, config/, and env/ directories as needed.
   - Install runtime, validation, and API tooling only.
   - Add environment variable templates and server entry files.

3. Full-stack setup
   - Keep separate frontend and backend directories if needed.
   - Add shared config and environment conventions.
   - Install only the dependencies needed for both sides.

Ask for clarification if the user does not specify frontend versus backend.

After scaffolding, provide:

- the chosen stack and why
- the created folder structure
- dependencies installed
- config files added
- validation result
- next recommended steps
