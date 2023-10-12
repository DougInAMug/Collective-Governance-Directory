<script>
  import SvelteMarkdown from "svelte-markdown";
  const source = `

### Problem

The public body of governance artefacts in use by collectives is small and scattered. "Artefact" here is taken to mean any enduring design which encodes institutional structure, such as rule-books, constitutions or policies. Such artefacts, unlike purely theoretical resources, are empirically validated through collective use. The scarcity thereof negatively affects: 
1. **new collectives**, who must often design their governance from scratch; 
2. **existing collectives**, unaware of developments others make addressing common issues; 
3. **prospective participants**, ignorant of a collective's governance before joining, and; 
4. **researchers**, who must each work individually to gain access to governance material.

### Aims

1. to improve the discoverability of exsiting public governance, and
2.  encourage the publication of as-yet unpublished governance.

### Activities

- site: maintain and improve this site
- badge: a small graphic that collectives can add to their artefacts linking to the site
- advertisement: through social media, existing networks, etc
- advocacy: organized communication collectives to encourage publication

### Approach

- practical: seeking to help real people address actual problems they face
- anti-authoritarian: organizations and their artefacts seek to reduce domination and exploitation as far as possible
- agnostic: artefacts can be documents, poems, diagrams, pictures... (must be somehow digitally linkable)

### Inclusion criteria à la [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119)

- Artefacts MUST be public. There MUST NOT be a paywall or other financial barrier to access. There MUST NOT be a requirement of membership or the provision of personal information for access.
- Artefacts MUST be self-published. The collective in question MUST be the direct author, whether published on a platform or a self-owned site.
- Artefacts SHOULD be openly licensed in a way that facilitates their use. Recommendation of [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [CC BY](https://creativecommons.org/licenses/by/4.0/), [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) or similar [free culture license](https://freedomdefined.org/Definition).
- Artefacts MUST be used by an existing collective at the time of inclusion. Thereafter, the CGD is responsible to monitor and act to ensure this condition is maintained.

### Governance

This is currently a solo project by me, [Doug](https://dougwebb.site/), and as such doesn't have any governance... well, I guess you could say it's a private dictatorship. Anyway, I would like the project to become a collective endeavour, so if you or someone you know is interested to get involved, let's talk to see how to make that work! 

### Personal motivation

When I was drafting governance for [Kanthaus](https://kanthaus.online/) in 2017, I really struggled to find examples from other projects I could draw from. In the end I found fragments of governance from living projects, and had to rely primarily on more theoretical resources (in particular, ["Governing the Commons"](https://archive.org/details/governingthecommons) by Elinor Ostrom)

In the last couple years I've had at least four people contact me looking for governance from other living projects ([Ecodorp Zuiderveld](https://www.ecodorpzuiderveld.nl/), [Schwarz10](http://schwarz10.de/), [Pödelwitz hat Zukunft](https://www.poedelwitz.de/de/), [Mietshäuser Projekt](https://en.wikipedia.org/wiki/Mietsh%C3%A4user_Syndikat) working group) either for inspiration for an specific area with which they were struggling, or for the drafting of whole new artefacts.

### Links

- https://radhr.org/ - a library of uploaded progressive policies and processes from organizations + forum
- https://communityrule.info - a plug-it-together governance toolkit + library of user generated rule sets

`;
</script>

<section>
  <SvelteMarkdown {source} />
</section>

<style>
  section {
    width: 60ch;
    max-width: 100%;
    line-height: 1.65;
  }
</style>
