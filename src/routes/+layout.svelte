<script>
    export const prerender = true; // for static generation
    import { base } from "$app/paths"; // to account for GH base path differenc
</script>

<main>
  <section>This project is in alpha! Everything may change rapidly and without warning. Feedback very welcome!</section>

  <a href="{base}">
    <h1>Collective Governance Archive</h1>
  </a>

  <a href="{base}/about">
    <h2>About</h2>
  </a>

  <slot />
</main>

<style>
  section {
    max-width: 60ch;
    border: 5px solid red;
    font-weight: bold;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  :global(body) {
    margin: 3rem 1rem 1rem 1rem;
  }

  :global(h1, h2, h3) {
    margin-top: 0;
  }

  :global(main) {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    margin: 0 auto;
  }

  /* prevent scrollbar from making page jump  */
  /* https://css-tricks.com/elegant-fix-jumping-scrollbar-issue/ */
  :global(html) {
    margin-left: calc(100vw - 100%);
  }
</style>

