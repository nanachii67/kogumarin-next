## This is Kogumarin's Website

Migrated from Vite to NEXT.JS (v16)

### Additionals

- Contentlayer (v2)
    - See [`/content`](./content).
    - Add your own contents in `.mdx`

        Nest them like so if you want, like this:

        ```bash
        content
        └── notes
            ├── happy-new-year-2026.mdx
            ├── regarding-a-name-change.mdx
            ├── regarding-the-album-rins-silly-tunes.mdx
            └── why-i-have-been-inactive.mdx
        ```

    - You want to add more and customize it? See [contentlayer.config.ts](./contentlayer.config.ts)

### Must read

- Organize your project structure. [See this](https://nextjs.org/docs/app/getting-started/project-structure).

- Some notable features in NEXT.JS
    - [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers)
    - [Font Optimization](https://nextjs.org/docs/app/getting-started/fonts)
    - [Client & Server components](https://nextjs.org/docs/app/getting-started/server-and-client-components).

    - [Image optimization](https://nextjs.org/docs/app/getting-started/images)
    - [Native SEO](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)

### Optionals

- Use `pnpm` instead of `npm`. [(why?)](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html)
    - Install it like this:

        ```bash
        npm install -g pnpm
        ```

        and start using `pnpm`
