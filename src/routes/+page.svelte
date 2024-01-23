<script lang="ts">
  import {
    DataHandler,
    ThFilter,
    Search,
    RowCount,
    Th,
  } from "@vincjo/datatables";
  import IconJson from "@tabler/icons-svelte/dist/svelte/icons/IconJson.svelte";
  import IconDownload from "@tabler/icons-svelte/dist/svelte/icons/IconDownload.svelte";
  import { base } from "$app/paths";
  import dataObject from "../../static/CollectiveGovernanceDirectoryData.json"
  const data = dataObject.data

  const handler = new DataHandler(data, { rowsPerPage: 50 });
  const rows = handler.getRows();
</script>

<header class="mb1">
  <Search {handler} class="searchBar" />
</header>

<div class="tableContainer">
  <div class="flexGrower" />
  <table class="mb1">
    <thead>
      <tr>
        <Th {handler} orderBy="organizationName">Organization name</Th>
        <Th {handler} orderBy="artefactTitle">Artefact title</Th>
        <Th {handler} orderBy="translationOf">Translated from</Th>
        <Th {handler} orderBy="language">Language</Th>
        <Th {handler} orderBy="numberOfCharacters">Number of characters</Th>
        <Th {handler} orderBy="lastChecked">Last checked on</Th>
      </tr>
      <tr>
        <ThFilter {handler} filterBy="organizationName" />
        <ThFilter {handler} filterBy="artefactTitle" />
        <ThFilter {handler} filterBy="translationOf" />
        <ThFilter {handler} filterBy="language" />
        <ThFilter {handler} filterBy="numberOfCharacters" />
        <ThFilter {handler} filterBy="lastChecked" />
      </tr>
    </thead>
    <tbody>
      {#each $rows as row}
        <tr>
          <td><a href={row.organizationURL}>{row.organizationName}</a></td>
          <td><a href={row.artefactURL}>{row.artefactTitle}</a></td>
          <td>
            {#if row.translationOf}
              {row.translationOf}
            {:else}
              —
            {/if}
          </td>
          <td>{row.language}</td>
          <td>{row.numberOfCharacters.toLocaleString()}</td>
          <td style="white-space:nowrap">{row.lastChecked}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="flexGrower" />
</div>

<footer>
  <RowCount {handler} />
</footer>

<a href="{base}/CollectiveGovernanceDirectoryData.json" download style="display:flex;align-items:center;gap:0.5rem">
  Download data 
  <IconDownload size={25} /> 
  <IconJson size={30} />
</a>

<style>
  div.tableContainer {
    width: 100vw;
    overflow-x: auto;
    display: flex;
    justify-content: flex-start;
  }
  div.flexGrower {
    flex-grow: 1;
  }
  table {
    border-spacing: 0;
  }
  tbody td {
    border: 1px solid lightgray;
    padding: 0.5rem;
  }
  tbody tr {
    transition: all, 0.2s;
  }
  tbody tr:hover {
    background: #f5f5f5;
  }
  .mb1 {
    margin-bottom: 1rem;
  }
  :global(input.searchBar) {
    width: 300px;
  }
</style>
