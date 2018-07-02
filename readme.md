[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)
[![Documentation](https://img.shields.io/badge/documentation-github.io-28a745.svg)](https://dukelearninginnovation.github.io/learn.duke/)
[![UXPin](https://img.shields.io/badge/mockup-uxpin-006cff.svg)](https://preview.uxpin.com/97f1536f1e1180fb99f4e5e05651cf146eef0747#/pages/85694982/simulate/sitemap)
[![InvisionApp](https://img.shields.io/badge/art%20style-invisionapp-FF2C5B.svg)](https://projects.invisionapp.com/boards/7B3NU02UC4M/)
[![Components](https://img.shields.io/badge/components-patternlab-ff69b4.svg)](https://toolkits.webservices.duke.edu/?p=all)
[![GitHub license](https://img.shields.io/github/license/DukeLearningInnovation/learn.duke.svg)](https://github.com/DukeLearningInnovation/learn.duke)


# Scope

> Faculty aren’t always risk takers, *insert app here* might not be around next year, so what will be here that I get guaranteed returns out of? --Mine

learn.duke is an effort to bring [NGDLE](//ngdle.org) into our faculty and student reality here at Duke, an attempt at creating the ideal learning technology future for our users in a lean way.

The problem statement and questions below drive [MVP1](https://github.com/DukeLearningInnovation/learn.duke/milestone/1) and are prioritized above the rest of the project.

The scope of learn.duke is on courses at this time. Learning communities may encompass more variety than courses at a later date.

learn.duke is an open source project [licensed under the GPL v3](LICENSE.md).


### [#83 Problem Statement 1](https://github.com/DukeLearningInnovation/learn.duke/issues/83)

The current state of Learning Technologies has focused primarily on meeting faculty's teaching needs through the Learning Management System.

At Duke, our IT and academic culture is one of technological plurality and choice, not a single, forced enterprise option. We see relying on a single solution like the LMS, as a short-sighted IT strategy that provides suboptimal learning experience as a monolithic system cannot provide the best learning experience for all aspects of a learning community.

The best learning happens when appropriate tools are used in conjunction with active learning pedagogies.

What Toolkits and the Learning Management System fail to address is a solid user experience for managing the cognitive load of selecting and using multiple tools for learning through a semester.

Our service will initially address this gap by

* providing students a unified interface for accessing the tools used by their learning communities
* providing faculty a catalog of learning technologies for use in their learning communities
* allowing faculty to manage the people in and tech of their learning communities.
* providing information on learning technology management and policies.

# Terms
Term | Our definition | | | 
-----|---------------|---|---
Learning community | Functionally, for the time being, a course. Technically, a context that ties a Grouper group for a roster + guests to tools used by that group.  
Tool | A technology used by a learning community in the context of learning that is listed in /apps. Not limited to enterprise licensed technologies. School, departmental, and unlicensed tools will also be listed.
Ecosystem | All of the integrated technologies used for learning at Duke. Shortened synonym for Learning Technology Ecosystem. | |
User story| "As a *who*, I want *goal* so that *reasons*". These are the specification for design and development work. Acceptance criteria written in Gerkin These are tracked via a Github Label. | [All User Stories](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+label%3A%22user+story%22) | [![Add User Story](https://img.shields.io/badge/Add-User%20Story-green.svg)](https://github.com/DukeLearningInnovation/learn.duke/issues/new?template=user_story.md&labels=user%20story)
Assumption | Unknowns that require further discussion, user research, or development iterations to be known. These are tracked via a Github Label. | [All Assumptions](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+label%3Aassumption) | [![Add User Story](https://img.shields.io/badge/Add-Assumption-green.svg)](https://github.com/DukeLearningInnovation/learn.duke/issues/new?labels=assumption)
Hypothesis | A question used to drive design and development deliverables that can be tested in order to learn. Help explicitly state assumptions related to user stores. These are tracked via a Github Label. | [All Hypothesis](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+label%3Ahypothesis) | [![Add Hypothesis](https://img.shields.io/badge/Add-Assumption-green.svg)](https://github.com/DukeLearningInnovation/learn.duke/issues/new?labels=hypothesis)
MVP | The minimum viable piece/thing/product/idea/design we can build to validate or invalidate a hypothesis. These are tracked via Github Milestones. | [All MVP](https://github.com/DukeLearningInnovation/learn.duke/milestones) |


# Actors

Actor | Role
------|-----
Student | someone with read access to a community
Learning community manager | someone with edit access to a community. May or may not be the faculty teaching the course.
Learning Innovation | Functional owner of learn.duke
OIT | Technical owner of learn.duke
Duke Web Services | UX and design agency consulting on the creation of learn.duke

# Project Goals
1. Provide students a unified interface for accessing the tools used by their learning communities
1. Provide faculty a catalogue of learning technologies for use in their learning communities
1. Allow faculty to manage membership of and technologies used by their learning communities.
1. Provide information on learning technology management and policies. 
	
### Stretch
1. Let students know what they should do next for those classes.
1. Suggest tool packages, or standard sets of tool combinations, to help faculty accomplish their learning objectives.
1. Solicit suggestions for new tools Duke should support, then Duke can research support, automation and provisioning behind the new tools. 

# Projects
MVP1 is comprised of the following projects, these are tracked via Github Projects.

Project | Issues | Details
---|---|---
apps | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F2) | [Details](apps/readme.md)
courses | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F1) | [Details](courses/readme.md)
cms | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F10) | [Details](cms/readme.md)

We plan to add the following projects in subsequent iterations.  

Projects | Issues | Details
---|---|---
templates | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F13) | [Details](templates/readme.md)
wizard | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F12) | [Details](wizard/readme.md)
content-creation | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F11) | [Details](content-creation/readme.md)
dlx | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F9) | [Details](dlx/readme.md)


# Technical Specifications
Many decisions have not yet been made, [/docs/techspec/readme.md](/docs/techspec/readme.md) will be updated as more information is known.

# Contributing
We don't have all the answers. We can't build it all by ourselves. Whether you're in or outside of Duke, read [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how you can contribute to this project.
