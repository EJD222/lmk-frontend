<div align="center">

# lmk

### from *let me know,* to *let's go.*

**lmk** turns the group chat that's been "seen" for two hours into an actual plan.
Start a session, drop the link to your people, everyone votes — and you walk away
with a decision you're all hyped about. No more circling for 45 minutes.

<sub>Built with React 19 · TypeScript · Vite · Tailwind CSS · shadcn/ui</sub>

</div>

---

## Overview

lmk (short for *LetMeKnow*) is a real-time group decision-making app. One person
hosts a session around a topic — *where to eat, what to watch, where to go* — and
shares a join link. Everyone answers a few quick, low-friction questions, and an
AI distills the group's input into a clear outcome: a top pick, where you agree,
where you split, and a recommendation you can act on.

This repository is the **frontend** (single-page React app). It talks to a separate
backend API over REST + Server-Sent Events for live session state.

## How it works

```
  Host                         Participants                  Everyone
  ────                         ────────────                  ────────
  1. Start a session           3. Open the join link         5. Watch results
     on a topic                4. Answer a handful of           generate live
  2. Share the join               questions (multi-select,    6. See the top pick,
     link / code                  slider, swipe, text…)          consensus & splits
```

1. **Create** — the host names a topic and gets a shareable join link + code.
2. **Join** — participants open the link, set a display name, and hop in.
3. **Answer** — everyone responds to question types like multi-select, slider,
   swipe, free text, and number.
4. **Generate** — once the host advances the session, the backend crunches the
   answers and streams a `state_change` event when results are ready.
5. **Results** — the group sees a top pick, an agreement/split read of the room,
   an AI recommendation, and other on-the-table options — all shareable, and
   exportable as an image.

## Tech stack

| Area            | Choice                                                        |
| --------------- | ------------------------------------------------------------- |
| Framework       | [React 19](https://react.dev/)                                |
| Language        | [TypeScript](https://www.typescriptlang.org/) (strict)        |
| Build tool      | [Vite 5](https://vitejs.dev/)                                 |
| Styling         | [Tailwind CSS v3](https://tailwindcss.com/) + design tokens   |
| UI primitives   | [shadcn/ui](https://ui.shadcn.com/) (manual) + [Radix UI](https://www.radix-ui.com/) |
| Routing         | [React Router v7](https://reactrouter.com/)                   |
| Icons           | [lucide-react](https://lucide.dev/)                           |
| Toasts          | [sonner](https://sonner.emilkowal.ski/)                       |
| Image export    | [html2canvas](https://html2canvas.hertzen.com/)               |
| Realtime        | Server-Sent Events (`EventSource`)                            |
| Analytics       | [Pendo](https://www.pendo.io/)                                |

## Project structure

```
src/
├─ components/
│  ├─ ui/          # shadcn primitives (Button, Card, Progress) — don't edit directly
│  ├─ common/      # shared app components (PrimaryButton, ShareLinkButton, …)
│  └─ layout/      # AppLayout and page chrome
├─ pages/          # one folder/file per route (CreateSession, JoinSession, Session, Results, …)
├─ hooks/          # custom hooks (useShareJoinLink, …)
├─ services/       # API client + per-domain services (session, participant, answer)
├─ types/          # shared TypeScript interfaces (session, question, result, participant)
├─ common/         # cross-cutting constants (route paths)
├─ lib/            # utils (cn(), notify helpers)
└─ styles/         # global CSS
```

## Getting started

### Prerequisites

- **Node.js 18+** and npm
- A running instance of the lmk **backend API** (see [Backend](#backend))

### Install & run

```bash
git clone https://github.com/EJD222/lmk-frontend.git
cd lmk-frontend
npm install

cp .env.example .env   # then point VITE_API_URL at your backend
npm run dev            # http://localhost:5173
```

### Environment

Configuration lives in `.env` (see `.env.example`):

| Variable       | Description                          | Example                 |
| -------------- | ------------------------------------ | ----------------------- |
| `VITE_API_URL` | Base URL of the lmk backend API      | `http://localhost:8080` |

## Available scripts

| Script                 | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite dev server (HMR) on `:5173`   |
| `npm run build`        | Type-check (`tsc`) and build for production  |
| `npm run preview`      | Preview the production build locally         |
| `npm run format`       | Format `src/` with Prettier                  |
| `npm run format:check` | Check formatting without writing changes     |

## Backend

The frontend is API-driven and expects the lmk backend running at `VITE_API_URL`.

> **Repo:** [Kent-Danielle/lmk-backend](https://github.com/Kent-Danielle/lmk-backend)

## Contributors

| | Contributor | GitHub |
| --- | --- | --- |
| 👩‍💻 | **Elmalia Jane Diaz** | [@EJD222](https://github.com/EJD222) |
| 👨‍💻 | **Kent Danielle Concengco** | [@Kent-Danielle](https://github.com/Kent-Danielle) |

## License

This is a **private, unreleased** project — all rights reserved. It is not currently
licensed for redistribution or reuse.
</content>
