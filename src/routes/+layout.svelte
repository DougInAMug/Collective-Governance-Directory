<script>
  import { base } from "$app/paths"; // to account for GH base path difference
  // Workaround because of vite issue https://github.com/tabler/tabler-icons/issues/518
  import IconInfoHexagon from "@tabler/icons-svelte/dist/svelte/icons/IconInfoHexagon.svelte";
  import IconCreativeCommonsZero from "@tabler/icons-svelte/dist/svelte/icons/IconCreativeCommonsZero.svelte";
  import IconFileCode from "@tabler/icons-svelte/dist/svelte/icons/IconFileCode.svelte";
  import IconExternalLink from "@tabler/icons-svelte/dist/svelte/icons/IconExternalLink.svelte";
</script>

<svelte:head>
  <!-- Overwrite existing viewport tag to specify scale -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<main>
  <a href="{base}/">
    <h1>Collective Governance Archive</h1>
  </a>

  <nav>
    <ul>
      <li>
        <a href="{base}/about">
          <IconInfoHexagon size={30}/>
          About
        </a>
      </li>
      <li>
        <a href="https://creativecommons.org/publicdomain/zero/1.0/">
          <IconCreativeCommonsZero size={30} />
          License<IconExternalLink size={18} />
        </a>
      </li>
      <li>
        <a href="https://github.com/DougInAMug/ALPHA-CGA">
          <IconFileCode size={30} />
          Source<IconExternalLink size={18} />
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
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 1.5rem;
    font-size: 2rem;
    margin-top: 0;
    padding: 0;
  }

  nav ul li a {
    display: flex;
    align-items: center;
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
    line-height: 1.25;
    margin: 0 auto;
  }

  /* prevent scrollbar from making page jump  */
  /* https://css-tricks.com/elegant-fix-jumping-scrollbar-issue/ */
  :global(html) {
    margin-left: calc(100vw - 100%);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>
