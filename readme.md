[![Project Status: Concept – Minimal or no implementation has been done yet, or the repository is only intended to be a limited example, demo, or proof-of-concept.](http://www.repostatus.org/badges/latest/concept.svg)](http://www.repostatus.org/#concept)
[![View](https://img.shields.io/badge/read-github.io-orange.svg)](https://dukelearninginnovation.github.io/learn.duke/)
[![Inspiration](https://img.shields.io/badge/inspiration-invisionapp-ff69b4.svg)](https://projects.invisionapp.com/d/main#/projects/boards/5767824)
[![Contribute](https://img.shields.io/badge/contribute-github-green.svg)](https://github.com/DukeLearningInnovation/learn.duke)
[![GitHub license](https://img.shields.io/github/license/DukeLearningInnovation/learn.duke.svg)](https://github.com/DukeLearningInnovation/learn.duke)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/dukelearning)

# Scope

> Faculty aren’t always risk takers, *insert app here* might not be around next year, so what will be here that I get guaranteed returns out of? --Mine

learn.duke is an attempt to fit [NGDLE](//ngdle.org) into our faculty and student reality here at Duke, an attempt at creating the ideal learning technology future for our users in a lean way.

The problem statement and questions below drive [MVP1](https://github.com/DukeLearningInnovation/learn.duke/milestone/1) and are prioritized above the rest of the project.

The scope of learn.duke is on courses at this time. Learning communities may encompass more variety than courses at a later date.

learn.duke is an open source project [licensed under the GPL v3](LICENSE).

### Problem Statement 1

learn.duke displays to learners a unified interface for accessing the instructional tools used by their learning communities. 

We have observed that Toolkits isn’t meeting this goal, which is causing communities to either rely on a single solution, like email or the LMS, which aren’t the best learning tool for all aspects of a learning community or use unsupported tools - even when a supported alternative exists. 

How might learn.duke improve this to accommodate the entire range of learning communities, those that use a single tool, those using multiple supported tools, and those using their preferred, unsupported tools? 

How might learn.duke encourage our learning communities to more frequently use the best tools to meet their learning goals and taking less energy to do so?

# Terms
Term | Our definition
-----|---------------
Learning community | Functionally, for the time being, a course. Technically, a context that ties a Grouper group for a roster + guests to tools used by that group.  
Tool | A technology used by a learning community in the context of learning that is listed in /apps. Not limited to enterprise licensed technologies, school, departmental, and unlicensed tools will also be listed.
Ecosystem | All of the integrated technologies used for learning at Duke. Shortened synonym for Learning Technology Ecosystem.
[User story](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+label%3A%22user+story%22) | "A *who* does *what* because *reasons*". These are the specification for design and development work. These are tracked via a Github Label. 
[Assumption](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+label%3Aassumption) | Unknowns that require further discussion, user research, or development iterations to be known. These are tracked via a Github Label.
[Hypothesis](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+label%3Ahypothesis) | A question used to drive design and development deliverables that can be tested in order to learn. Help explicitly state assumptions related to user stores. These are tracked via a Github Label.
[MVP](https://github.com/DukeLearningInnovation/learn.duke/milestones) | The minimum viable piece/thing/product/idea/design we can build to validate or invalidate a hypothesis. These are tracked via Github Milestones.

# Actors

Actor | Role
------|-----
Student | someone with read access to a community
Learning community manager | someone with edit access to a community. May or may not be the faculty teaching the course.
Learning Innovation | Functional owner of learn.duke
OIT | Technical owner of learn.duke
Duke Web Services | UX and design agency consulting on the creation of learn.duke

# Goals
1. Provide students a unified interface for accessing the tools used by their learning communities
1. Provide faculty a catalogue of learning technologies for use in their learning communities
1. Allow faculty to manage membership of and technologies used by their learning communities.
1. Provide information on learning technology management and policies. 
	
### Stretch
1. Let know what they should do next for those classes.
1. Suggest tool packages, or standard sets of tool combinations, to help faculty accomplish their learning objectives.
1. Solicit suggestions for new tools Duke should support, then Duke can research support, automation and provisioning behind the new tools. 

# Projects
MVP1 is comprised of the following projects.

Project | Issues | Details
---|---|---
/apps | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F2) | [Details](apps/readme.md)
/courses | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F1) | [Details](courses/readme.md)
/cms | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F10) | [Details](cms/readme.md)

We plan to add the following projects in subsequent iterations.  

Project | Issues | Details
---|---|---
/templates | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F13) | [Details](templates/readme.md)
/wizard | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F12) | [Details](wizard/readme.md)
/content-creation | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F11) | [Details](content-creation/readme.md)
/dlx | [Issues](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F9) | [Details](dlx/readme.md)


# Technical Specifications
Many decisions have not yet been made, [/techspec/readme.md](techspec/readme.md) will be updated as more information is known.

# Contributing
We don't have all the answers. We can't build it all by ourselves. Whether you're in or outside of Duke, read [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how you can contribute to this project.
