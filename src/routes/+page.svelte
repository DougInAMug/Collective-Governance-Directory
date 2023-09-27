<script lang="ts">
  import {
    DataHandler,
    ThFilter,
    Search,
    RowCount,
    Th,
  } from "@vincjo/datatables";
  import data from "../data";

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
          <td>{row.organizationName}</td>
          <td><a href={row.artefactLink}>{row.artefactTitle}</a></td>
          <td>
            {#if row.translationOf}
              {row.translationOf}
            {:else}
              —
            {/if}
          </td>
          <td>{row.language}</td>
          <td>{row.numberOfCharacters.toLocaleString()}</td>
          <td>{row.lastChecked}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="flexGrower" />
</div>

<footer>
  <RowCount {handler} />
</footer>

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
    border: 1px solid #f5f5f5;
    padding: 4px 20px;
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
