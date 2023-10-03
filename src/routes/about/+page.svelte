<script>
  import SvelteMarkdown from "svelte-markdown";
  const source = `

### General issue

The public body of governance used by collectives is small, and that which exists is hard to find. This negatively affects: 
1. new collectives, which have an increased barrier to self-organization, since they must often design their governance 'from scratch'; 
2. existing collectives, which fail to benefit from the innovations other collectives make in addressing common issues; 
3. individuals wanting to join collectives, who must decide whether or not to join a collective not knowing how it governs itself until after they join, and; 
4. researchers, who must each work individually to gain access to governance material.

### Aims

- To improve the discoverability of exsiting public governance, _and_
- To encourage the publication of as-yet unpublished governance, _in the belief that doing so helps,_
	- to assist new collectives drafting initial governance
	- to inpsire existing collectives facing common issues
	- to inform individuals considering joining collectives
	- to facilitate research into collective governance

### Inclusion criteria à la [rfc2119](https://datatracker.ietf.org/doc/html/rfc2119)

- Artefacts MUST be public. There MUST NOT be a paywall or other financial barrier to access. There MUST NOT be a requirement of membership or the provision of personal information for access.
- Artefacts MUST be self-published. The collective in question MUST be the direct author, whether published on a platform or a self-owned site.
- Artefacts SHOULD be openly licensed in a way that facilitates their use. Recommendation of [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [CC BY](https://creativecommons.org/licenses/by/4.0/), [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) or similar [free culture license](https://freedomdefined.org/Definition).
- Artefacts MUST be used by an existing collective at the time of inclusion. Thereafter, the CGD is responsible to monitor and act to ensure this condition is maintained.

## CGD elements
- website: this will display the data. It could be a wiki, a pad or a static website.
- badge: (optional) a distiguishable web-badge that participants in the CGD could attach to their published governance, to increase discoverability of others.

### Personal motivation
- When I was drafting governance for Kanthaus in 2017, I really struggled to find examples from other projects I could draw from. In the end I found fragments of governance from living projects, and had to rely primarily on more theoretical resources (in particular, ["Governing the Commons"](https://archive.org/details/governingthecommons) by Elinor Ostrom)
- In the last couple years I've had at least four people contact me looking for governance from other living projects ([Ecodorp Zuiderveld](https://www.ecodorpzuiderveld.nl/), [Schwarz10](http://schwarz10.de/), [Pödelwitz hat Zukunft](https://www.poedelwitz.de/de/), [Mietshäuser Projekt](https://en.wikipedia.org/wiki/Mietsh%C3%A4user_Syndikat) working group) either for inspiration for an specific area with which they were struggling, or for the drafting of whole new artefacts.

## Words for a better title
- adjectives: living, live, current, collective, commons, anarchist, for-purpose, self-organized
- nouns: commons, governance, rules, system, organizarion, constitution, archive, repository, directory, compendium, collection, database, list, articles

## CGD approach
- practical. CGD seeks to help people address probems they face
- anti-authoritarian. organizations and their artefacts seek to reduce domination and exploitation as far as possible
- agnostic. artefacts can be documents, poems, diagrams or pictures

## CGD governance
- collective decision-making: by informed consent of all members, with a good-faith fallback to 2/3 majority
- CGD membership: inclusion and exclusion per standard collective decision-making
- current CGD members: Doug

## Tech
- ethercalc https://ethercalc.net
	- seemingly no authorship restrictions possible
- svelte component https://madewithsvelte.com
	- https://github.com/dasDaniel/svelte-table
	- https://flowbite-svelte.com/docs/components/table
	- seems very feature rich, bit confusing though https://svelte-headless-table.bryanmylee.com/
	- ordring, no filterng https://tanstack.com/table/v8/docs/examples/vue/sorting
	- ordering and search https://gridjs.io/docs/examples/search

`;
</script>

<section>
  <SvelteMarkdown {source} />
</section>

<style>
  section {
    max-width: 60ch;
  }
</style>
