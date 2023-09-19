<script lang="ts">
  import {
    DataHandler,
    Th,
    ThFilter,
    Search,
    RowCount,
  } from "@vincjo/datatables";
  import data from "../data";

  const handler = new DataHandler(data, { rowsPerPage: 50 });
  const rows = handler.getRows();
</script>

<header>
  <Search {handler} />
</header>

<table>
  <thead>
    <tr>
      <Th {handler} orderBy="OrgName">Organization name</Th>
      <Th {handler} orderBy="ArtTitle">Artefact title</Th>
      <Th {handler} orderBy="Lang">Language</Th>
      <Th {handler} orderBy="NumChars">Number of characters</Th>
    </tr>
    <tr>
      <ThFilter {handler} filterBy="OrgName" />
      <ThFilter {handler} filterBy="ArtTitle" />
      <ThFilter {handler} filterBy="Lang" />
      <ThFilter {handler} filterBy="NumChars" />
    </tr>
  </thead>
  <tbody>
    {#each $rows as row}
      <tr>
        <td>{row.OrgName}</td>
        <td><a href={row.ArtLink}>{row.ArtTitle}</a></td>
        <td>{row.Lang}</td>
        <td>{row.NumChars}</td>
      </tr>
    {/each}
  </tbody>
</table>

<footer>
  <RowCount {handler} />
</footer>

<style>
  tbody td {
    border: 1px solid #f5f5f5;
    padding: 4px 20px;
  }
</style>
