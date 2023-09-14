<script lang="ts">
  import { DataHandler, Th } from "@vincjo/datatables";
  import data from "../data";

  const handler = new DataHandler(data, { rowsPerPage: 50 });
  const rows = handler.getRows();
</script>

<table>
  <thead>
    <tr>
      <Th {handler} orderBy="OrgName">Organization name</Th>
      <Th {handler} orderBy="ArtTitle">Artefact title</Th>
      <Th {handler} orderBy="ArtID">Artefact ID</Th>
      <Th {handler} orderBy="Lang">Language</Th>
      <Th {handler} orderBy="NumChars">Number of characters</Th>
      <Th {handler} orderBy="SupBy">Superseded by</Th>
    </tr>
  </thead>
  <tbody>
    {#each $rows as row}
      <tr>
        <td>{row.OrgName}</td>
        <td><a href={row.ArtLink}>{row.ArtTitle}</a></td>
        <td>{row.ArtID}</td>
        <td>{row.Lang}</td>
        <td>{row.NumChars}</td>
        <td>{row.SupBy}</td>
      </tr>
    {/each}
  </tbody>
</table>


