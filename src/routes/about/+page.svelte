<script>
  import SvelteMarkdown from "svelte-markdown";
  const source = `

---

**Table of contents** 
- [Problem](#problem)
- [Aims](#aims)
- [Activities](#activities)
- [Approach](#approach)
- [Inclusion criteria à la RFC 2119](#inclusion-criteria-à-la-rfc-2119httpsdatatrackerietforgdochtmlrfc2119)
- [Governance](#governance)
- [Contributing](#contributing)
- [Personal motivation](#personal-motivation)
- [Links](#links)

---

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

### Inclusion criteria à la [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119):

- Artefacts MUST be public. There MUST NOT be a paywall or other financial barrier to access. There MUST NOT be a requirement of membership or the provision of personal information for access.
- Artefacts SHOULD be self-published on an independent website. If published on a secondary site, the artefact MUST be associated beyond doubt (e.g. an outgoing link from the primary website).
- Artefacts SHOULD be openly licensed in a way that facilitates their use. Recommendation of [CC0](https://creativecommons.org/publicdomain/zero/1.0/), [CC BY](https://creativecommons.org/licenses/by/4.0/), [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) or similar [free culture license](https://freedomdefined.org/Definition).
- Artefacts MUST be in use by the authoring collective at the time of inclusion. Thereafter, the CGD is responsible to monitor and act to ensure this condition is maintained.
- Artefacts MUST come from organizations with 3 or more members. If this information is not clearly available, a best guess will be made.
- Artefacts SHOULD be those used internally by the collective (i.e. not be a summary version or FAQ for site visitors.) Exceptions may be made if 1) sufficient detail is given for reproduction, or 2) the concepts are significantly novel.

### Governance

This is currently a solo project by me, [Doug](https://dougwebb.site/), and as such doesn't have any governance... well, I guess you could say it's a private dictatorship. Anyway, I would like the project to become a collective endeavour, so if you or someone you know is interested to get involved, let's talk to see how to make that work! 

### Contributing

To add an artefact to the directory, send me relevant links and info via [email](mailto:doug@dougwebb.site) or [mastodon](https://mastodon.xyz/@douginamug). If you're willing and able, pull requests to the [\`CollectiveGovernanceDirectoryData.json\`](https://github.com/DougInAMug/Collective-Governance-Directory/blob/main/static/CollectiveGovernanceDirectoryData.json) are very welcome! (Also for any other part of the site)

### Personal motivation

When I was drafting governance for [Kanthaus](https://kanthaus.online/) in 2017, I really struggled to find examples from other projects I could draw from. In the end I found fragments of governance from living projects, and had to rely primarily on more theoretical resources (in particular, ["Governing the Commons"](https://archive.org/details/governingthecommons) by Elinor Ostrom)

In the last couple years I've had at least four people contact me looking for governance from other living projects ([Ecodorp Zuiderveld](https://www.ecodorpzuiderveld.nl/), [Schwarz10](http://schwarz10.de/), [Pödelwitz hat Zukunft](https://www.poedelwitz.de/de/), [Mietshäuser Projekt](https://en.wikipedia.org/wiki/Mietsh%C3%A4user_Syndikat) working group) either for inspiration for an specific area with which they were struggling, or for the drafting of whole new artefacts.

### Links
Other directories or repositories of contemporary governance documents:
- **https://www.thefec.org** - the Federation of Egalitarian Communities _"a union ... joined together in our common struggle to create a lifestyle based on Equality, Cooperation, and Harmony with the Earth."_ They host a [collection](https://www.thefec.org/systems-and-structures) of over 100 uploaded governance documents; all link to their authors, none to source.
- **https://radhr.org** - _"RadHR is a space for social change organisations to share the nuts and bolts ... of how to organise ourselves"_ They host a [policy library](https://radhr.org/policies/) of 53 uploaded documents; most link to their authors, none to source.
- **https://fossgovernance.org** - _"An indexed collection of governance documents from Free and Open Source Software (FOSS) projects."_ A [Zotero collection](https://www.zotero.org/groups/2310183/foss_governance/items) of 359 free software governance documents; most link to source.
- **https://govbase.metagov.org/** - _"Govbase is a warehouse of qualitative and quantitative data sets relating to the governance of online communities."_ An [Airtable](https://airtable.com/appx3e9Przn9iprkU/shrgnUrj0dqzZDsOd/tblh8o2b7sNPq2yGz/viwUEtsRJkkp5L1P8) of 93 documents; most link to source.
- **[GitHub OSS Governance File Dataset](https://doi.org/10.5281/zenodo.7530768)** - _"a longitudinal dataset of 710 GitHub-hosted OSS projects with GOVERNANCE.MD governance files."_ Resulting from [Yan et al., 2023](https://arxiv.org/abs/2304.00460#). ~600 mb in CSV, SQL or MongoDB dump—no web UI.
- **https://communityrule.info** - _"CommunityRule is a governance toolkit for great communities."_ This web-tool for drafting governance has a [library](https://communityrule.info/library/) of user generated documents: most seem to be testing, some link to authors, none to source..


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
