<script lang="ts">
  import { DataHandler, Th } from '@vincjo/datatables';
  // import Th from './Th.svelte';
  import data from './data';

  const handler = new DataHandler(data, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>

<h1>Collective Governance Archive</h1>

<details>
	<summary>Item 1</summary>
	<p>
		Details go here
	</p>
</details>
<details>
	<summary>Aims of the CGA</summary>
  <ul>
    <li>To improve the discoverability of exsiting public governance, _and_</li>
    <li>To encourage the publication of as-yet unpublished governance, _in the belief that doing so helps,_</li>
    <ul>
      <li>to assist new collectives drafting initial governance</li>
      <li>to inpsire existing collectives facing common issues</li>
      <li>to inform individuals considering joining collectives</li>
      <li>to facilitate research into collective governance</li>
    </ul>
  </ul>    
</details>
<details>
	<summary>Item 3</summary>
	<p>
		Details go here
	</p>
</details>

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