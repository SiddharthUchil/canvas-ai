# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In Progress

## Current Goal

- Feature 03 complete. Ready for Feature 04.

## Completed

- Next.js boilerplate stripped to minimal shell (globals.css, page.tsx cleaned up).
- Feature 01: Design System
  - shadcn/ui initialized with radix + nova preset (Lucide + Geist)
  - Components added: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea → components/ui/
  - lucide-react installed (bundled with nova preset)
  - lib/utils.ts created with cn() helper (clsx + tailwind-merge)
  - globals.css: dark-only :root with all Ghost AI design tokens + shadcn semantic tokens
  - layout.tsx: `dark` class added to <html> so shadcn dark: variants activate
- Feature 02: Editor Chrome
  - components/editor/editor-navbar.tsx — fixed h-12 navbar, sidebar toggle with PanelLeftOpen/PanelLeftClose, left/center/right sections
  - components/editor/project-sidebar.tsx — floating overlay sidebar, slides in from left, Projects header + close button, My Projects / Shared tabs with empty states, New Project button
  - Dialog pattern ready: existing components/ui/dialog.tsx + globals.css tokens cover all future dialog needs
- Feature 03: Auth
  - @clerk/ui installed; @clerk/nextjs already present
  - proxy.ts at project root — clerkMiddleware with public route matcher for /sign-in and /sign-up
  - middleware.ts re-exports from proxy.ts (Next.js auto-discovery)
  - app/layout.tsx — ClerkProvider wraps root layout with dark theme + CSS variable overrides
  - app/editor/layout.tsx + app/editor/page.tsx — editor chrome moved under /editor route
  - app/page.tsx — redirects authenticated users to /editor, unauthenticated to /sign-in
  - app/sign-in/[[...sign-in]]/page.tsx — two-panel layout (left: logo/tagline/features, right: Clerk SignIn)
  - app/sign-up/[[...sign-up]]/page.tsx — two-panel layout (left: logo/tagline/features, right: Clerk SignUp)
  - editor-navbar.tsx — UserButton added to right section

## In Progress

- None.

## Next Up

- Feature 04 (TBD per feature-specs)

## Open Questions

- None yet.

## Architecture Decisions

- Tailwind v4 CSS-based config — no tailwind.config.ts. All theme tokens live in globals.css via `@theme inline`.
- shadcn/ui on top of Tailwind. Generated files in components/ui/ are not modified post-install.

## Session Notes

- Project uses Tailwind v4 (`@import "tailwindcss"` syntax).
- Dark-only theme. All color tokens defined as CSS custom properties in globals.css.
