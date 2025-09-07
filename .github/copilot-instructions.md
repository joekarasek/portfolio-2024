# Copilot & GPT-4.1 Project Instructions

Welcome to the codebase for Joe Karasek’s personal website—a portfolio, blog, and professional hub for a design engineer with a decade of experience in web engineering, UI/UX, and design systems. This site features a visually engaging landing page, a curated portfolio of projects, recommendations, and a blog, all crafted to showcase Joe’s expertise and leadership in design systems (currently leading the team at Nike). The primary goal is to promote Joe’s personal brand, share insights, and support career growth in the design and engineering community.

## General Guidelines
- Adhere to the established code style, structure, and naming conventions throughout the project.
- Use TypeScript
- Write SCSS for styling; keep styles modular, component-scoped, and avoid global leakage.
- Always use functional React components.
- Add comments where intent or logic may not be obvious.
- Favor simplicity and readability over cleverness.

## Directory Overview
- `src/` — Main source code: React components, pages, sections, and theme overrides. All new UI and logic should be placed here.
- `blog/` — Blog posts and metadata. Write posts in Markdown with frontmatter; use existing posts as templates.
- `projects/` — Portfolio project content. Each project should have its own folder or markdown file, following the established format.
- `static/` — Static assets such as images, avatars, and downloadable files. Reference these assets using relative paths in your code or content.
- `scripts/` — Utility scripts (Node.js, .mjs) for automation, data processing, or build tasks. Keep scripts modular and documented.

## Copilot & GPT-4.1 Usage
- When creating new blog posts or project entries, always use the existing Markdown and YAML formats as templates—review recent examples for structure and metadata.
- For configuration or script changes, ensure full compatibility with Docusaurus and any custom scripts; validate changes locally.
- Avoid introducing large or unnecessary dependencies; prefer lightweight, well-maintained packages only when essential.
- Add comments to clarify intent, especially for non-obvious logic or prompt engineering techniques.

---

**Note:** This project is powered by [Docusaurus](https://docusaurus.io/). All site generation, routing, and theming are managed through Docusaurus configuration and conventions. Refer to the Docusaurus documentation for advanced customization, plugin usage, and deployment best practices.
