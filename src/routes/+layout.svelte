<script>
  import { base } from "$app/paths"; // to account for GH base path difference
  // Workaround because of vite issue https://github.com/tabler/tabler-icons/issues/518
  import InfoHexagon from "@tabler/icons-svelte/IconInfoHexagon.svelte";
  import CreativeCommonsZero from "@tabler/icons-svelte/IconCreativeCommonsZero.svelte";
  import CreativeCommons from "@tabler/icons-svelte/IconCreativeCommons.svelte";
  import FileCode from "@tabler/icons-svelte/IconFileCode.svelte";
  import ExternalLink from "@tabler/icons-svelte/IconExternalLink.svelte"
</script>

<svelte:head>
  <!-- Overwrite existing viewport tag to specify scale -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="A collection of links to publicly available governance documents, published by the collectives that use them."
  />
  <title>Collective Governance Directory</title>
</svelte:head>

<main>
  <h1><a href="{base}/">Collective Governance Directory</a></h1>

  <em style="margin-bottom: 1rem; max-width: 45ch; text-align:center; font-size: 1.25rem">A collection of links to publicly available governance documents, published by the collectives that use them.</em>
  <nav>
    <ul>
      <li>
        <a href="{base}/about">
          <InfoHexagon size={30} />
          About
        </a>
      </li>
      <li>
        <a href="https://github.com/DougInAMug/Collective-Governance-Directory">
          <FileCode size={30} />
          Source<ExternalLink size={18} style="align-self:baseline" />
        </a>
      </li>
    </ul>
  </nav>

  <slot />

  <p
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:dct="http://purl.org/dc/terms/"
  >
    <a
      property="dct:title"
      rel="cc:attributionURL"
      href="https://collectivegovernance.directory/"
      >Collective Governance Directory</a
    >
    is marked with
    <a
      href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1"
      target="_blank"
      rel="license noopener noreferrer"
      style="display:inline-block;"
      >CC0 1.0 Universal <CreativeCommons
        size={22}
        style="vertical-align:text-bottom"
      /><CreativeCommonsZero size={22} style="vertical-align:text-bottom" /></a
    >
  </p>
</main>

<style>
  nav ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 1.5rem;
    font-size: 1.5rem;
    margin-top: 0;
    padding: 0;
  }

  nav ul li a {
    display: flex;
    align-items: center;
  }

  :global(a) {
    text-decoration: none;
    color: black;
    background: #e6e6fa;
    padding: 0.25rem;
    border-radius: 0.25rem;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  :global(a:hover) {
    background: #d0d0ff;
  }
  
  :global(a:active) {
    background: #babaff;
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
    line-height: 1.4;
    margin: 0 auto;
  }

  /* prevent scrollbar from making page jump  */
  /* https://css-tricks.com/elegant-fix-jumping-scrollbar-issue/ */
  :global(html) {
    margin-left: calc(100vw - 100%);
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
</style>
