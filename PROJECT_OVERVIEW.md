## Project overview

This repository is a **demo** showing how a Sanity Studio CMS can drive an
Eleventy static site using a component‑based page builder. It is intentionally
small and opinionated to make the flow easy to understand, not to represent the
full capability of Sanity or Eleventy.

### What this demo is

- **A proof of concept** for how content edits in Sanity can power a static site.
- **A single‑repo setup** (“monorepo”) for convenience while prototyping.
- **A component library + page builder** approach to composing pages.

### What this demo is not

- **Not a full production architecture.** Many teams split the Studio and the
  frontend into separate repos and deploy them independently.
- **Not a complete reflection of Sanity’s capabilities.** The Studio is highly
  customizable (custom tools, workflows, roles, previews, scheduled publishing,
  etc.) and this demo only uses a subset.
- **Not a design system.** The UI is a clean, minimal aesthetic to prove layout
  flexibility, not a finalized brand system.

### How a typical enterprise setup differs

In real client projects, it’s common to see:

- **Separate repos and deployments** for CMS and frontend.
- **Preview environments** (drafts visible only in staging).
- **SSO / role‑based access** in the Studio.
- **Custom content workflows** (approvals, publishing rules).
- **Automated build hooks** for production rebuilds.

### What to tell stakeholders

This demo illustrates the **shape of the solution**:

- Content teams edit in a **customizable CMS**.
- The website is assembled from **reusable components**.
- Publishing content can **trigger rebuilds** and update the site.

It does **not** represent the full range of customization, scale, or governance
that can be applied in a production build.
