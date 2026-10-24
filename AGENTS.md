<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

## Animation
- All interactive and entrance motion uses Framer Motion (already installed;
  check package.json for `framer-motion` vs `motion`). Use existing wrappers
  in components/MotionEntrance first.
- Do not implement hover/click/reveal animations with CSS transitions,
  keyframes, or Tailwind transition utilities unless the task says so.
- Always honor reduced motion via useReducedMotion or MotionConfig.

<!-- END:nextjs-agent-rules -->
