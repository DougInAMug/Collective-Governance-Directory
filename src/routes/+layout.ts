// if you don't do the following...

export const prerender = true;

// ... you get the following error when trying to build:

    // @sveltejs/adapter-static: all routes must be fully prerenderable, but found the following routes that are dynamic:
    // - src/routes/
    // - src/routes/about

    // You have the following options:
    // - set the `fallback` option — see https://kit.svelte.dev/docs/single-page-apps#usage for more info.
    // - add `export const prerender = true` to your root `+layout.js/.ts` or `+layout.server.js/.ts` file. This will try to prerender all pages.
