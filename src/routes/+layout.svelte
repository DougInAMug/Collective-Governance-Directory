<script>
  export const prerender = true; // for static generation
  import { base } from "$app/paths"; // to account for GH base path differenc
</script>

<main>
  <a href="{base}/">
    <h1>Collective Governance Archive</h1>
  </a>

  <nav>
    <ul>
      <li>
        <a href="{base}/about">
          <img
            src="src/icons/info-hexagon.svg"
            alt="Information icon: a hexagon with an 'i' in it"
            class="navIcon"
          />
          About
        </a>
      </li>
      <li>
        <a href="https://creativecommons.org/publicdomain/zero/1.0/">
          <img
            src="src/icons/creative-commons-zero.svg"
            alt="The Creative Commons Zero license: a circle with a '0' inside"
            class="navIcon"
          />
          License<img
            src="src/icons/external-link.svg"
            alt="External link icon: a square with an arrow pointing out through the top-right corner"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/DougInAMug/ALPHA-CGA">
          <img
            src="src/icons/file-code.svg"
            alt="Source code icon: a circle with '<>' in it"
            class="navIcon"
          />
          Source<img
            src="src/icons/external-link.svg"
            alt="External link icon: a square with an arrow pointing out through the top-right corner"
          />
        </a>
      </li>
    </ul>
  </nav>

  <slot />
</main>

<style>
  nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    font-size: 2rem;
    margin-top: 0;
    padding: 0;
  }

  nav ul li a {
    display: flex;
    align-items: center;
  }

  .navIcon {
    height: 2rem;
  }

  :global(body) {
    margin: 3rem 1rem 1rem 1rem;
  }

  :global(h1, h2, h3) {
    margin-top: 0;
    text-align: center;
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
