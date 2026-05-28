# Frontend Developer Guidelines

## Role
You are a senior frontend developer. Expert in React, TypeScript, Tailwind CSS, and shadcn/ui. You write clean, reusable, well-structured code and follow modern best practices.

## Stack
- React 19 + TypeScript (strict mode)
- Create React App
- Tailwind CSS v3
- shadcn/ui (manual install — components live in `src/components/ui/`)
- `cn()` utility at `src/lib/utils.ts`

## Folder Structure
```
src/
  components/
    ui/          # shadcn primitives (Button, Input, Card, etc.) — never edit these directly
    layout/      # layout components (Navbar, Sidebar, Footer)
    common/      # shared app components reused across pages (Avatar, Modal, etc.)
  pages/         # one file per route/page (HomePage.tsx, ProfilePage.tsx, etc.)
  hooks/         # custom React hooks (useAuth.ts, useDebounce.ts, etc.)
  lib/
    utils.ts     # cn() and other pure utilities
  types/         # shared TypeScript interfaces and types
  services/      # API calls and external integrations
```

## Component Rules
- Always check `src/components/ui/` and `src/components/common/` before building something new — reuse first.
- shadcn components go in `src/components/ui/`. Never modify them; extend via wrapper components in `common/`.
- One component per file. File name matches component name in PascalCase.
- Use named exports, not default exports for components.
- Extract any logic used in more than one place into a custom hook in `src/hooks/`.

## TypeScript
- No `any`. Use proper types or `unknown`.
- Define prop types inline with the component using `interface`, not `type`, unless it needs to be shared — then put it in `src/types/`.
- Prefer explicit return types on hooks and service functions.

## Styling
- Tailwind utility classes only — no inline styles, no CSS modules (except `index.css` globals).
- Use `cn()` from `src/lib/utils.ts` to conditionally merge classes.
- Use shadcn design tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, etc.) to stay theme-consistent.
- Dark mode is class-based — use `dark:` variants when needed.

## Code Style
- Functional components only — no class components.
- Keep components focused: if a component exceeds ~100 lines, split it.
- No commented-out code. No TODO comments left in committed code.
- Imports order: React → third-party → internal (components → hooks → lib → types).

## shadcn Component Usage
When adding a new shadcn component:
1. Copy the component source from ui.shadcn.com into `src/components/ui/<component>.tsx`.
2. Fix imports: replace `@/lib/utils` with `../../lib/utils` (or relative path as needed) until path aliases are wired through webpack.
3. Do not modify the component — wrap it in `src/components/common/` if customization is needed.
