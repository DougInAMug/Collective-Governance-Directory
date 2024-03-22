# Collective Governance Directory

_A collection of links to publicly available governance documents, published by the collectives that use them._

Main project info on the [about page](https://collectivegovernance.directory/about). 

## tech overview

This project uses Svelte(kit). Pages and layout are in `src/routes`. The datatable on the main page uses [@vincjo/datatables](https://vincjo.fr/datatables/home), with the data stored in `static/CollectiveGovernanceDirectoryData.json`. Icons from [@tabler/icons-svelte](https://tabler-icons.io/). Hosted via GitHub pages, which requires a static site: [relevant SvelteKit adapter](https://kit.svelte.dev/docs/adapter-static). 

## development

```bash
# start development server
npm run dev

# build
npm run build

# generate json from csv (performed as part of build)
node static/csvtoJSON.js
```

