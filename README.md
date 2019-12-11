# Kits

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
[![UXPin](https://img.shields.io/badge/mockup-uxpin-006cff.svg)](https://preview.uxpin.com/97f1536f1e1180fb99f4e5e05651cf146eef0747#/pages/85694982/simulate/sitemap)
[![InvisionApp](https://img.shields.io/badge/art%20style-invisionapp-FF2C5B.svg)](https://projects.invisionapp.com/boards/7B3NU02UC4M)


## Scope

Learning technologies across higher education have traditionally focused on meeting faculty's teaching needs through the Learning Management System (LMS). At Duke University, we see relying on any single solution, including the LMS, as a short-sighted technology strategy. No monolithic system can provide the optimal learning experience for all aspects of all learning communities. We believe learning is maximized when appropriate technologies are used in conjunction with evidence-based pedagogies. The ideal academic technology strategy should support the diversity of disciplinary and pedagogical needs. It should be pluralistic, giving faculty, staff, and students scalable, excellent, and integrated choices. Duke’s Kits project, developed outside the LMS and evolved from a home-grown group management solution, is our latest effort to provide a next generation digital learning environment for the Duke community.

## How Kits Works

For faculty, Kits allows them to start with the official roster of students and add folks like teaching assistants, collaborating faculty, support staff, or librarians, creating a group.

Faculty then turn on the apps they want to use with this group, and Kits gives everyone appropriate access to all the apps at once. 

This combination of group + apps is called a kit.

We're starting with courses, but the kit concept can be applied to all learning experiences someone might encounter with a university.

![Kits Concept Diagram](docs/_assets/kits-concept-diagram.png)

### Project Goals

1. Provide students a unified interface for accessing the apps used in their kits
1. Provide faculty a catalogue of learning technologies for use in their kits
1. Allow faculty to manage membership of and technologies used by their kits
1. Provide information on learning technology management and policies.

### Stretch Goals

1. Organize Kits to work with learning experiences from pre-matriculation to alumni learning
1. Let students know what they should do next for their classes.
1. Suggest apps packages, or standard sets of app combinations, to help faculty accomplish their learning objectives.
1. Solicit suggestions for new apps Duke should support, then Duke can research support, automation and provisioning behind the new apps. 

## Built With

* [Ruby on Rails](https://rubyonrails.org/) - Backend Framework
* [React](https://reactjs.org/) - Frontend Framework
* [Grouper](https://spaces.at.internet2.edu/display/Grouper/Grouper+Wiki+Home) - Group Management
* [Shibboleth](https://wiki.shibboleth.net/confluence/display/NEWS/) - Single Sign On
* [Learning Tools Interoperability (LTI)](https://www.imsglobal.org/activity/learning-tools-interoperability) - Integration Standard

## Terms

Term | Our definition | |
-----|---------------|---
kit | Functionally, for the time being, a course. Technically, a context that ties a Grouper group for a roster + guests to apps used by that group. May also be referenced as a learning community 
App | A technology used by a kit in the context of learning that is listed in /apps. Not limited to enterprise licensed technologies. School, departmental, and unlicensed apps will also be listed. 
Ecosystem | All of the integrated technologies used for learning. Shortened synonym for Learning Technology Ecosystem. 
User story| "As a *who*, I want *goal* so that *reasons*". These are the specification for design and development work. Acceptance criteria written in Gerkin These are tracked via a Github Label. | [All User Stories](https://github.com/DukeLearningInnovation/kits/issues?q=is%3Aopen+is%3Aissue+label%3A%22user+story%22) 
Assumption | Unknowns that require further discussion, user research, or development iterations to be known. These are tracked via a Github Label. | [All Assumptions](https://github.com/DukeLearningInnovation/kits/issues?q=is%3Aopen+is%3Aissue+label%3Aassumption) 
Hypothesis | A question used to drive design and development deliverables that can be tested in order to learn. Help explicitly state assumptions related to user stores. These are tracked via a Github Label. | [All Hypothesis](https://github.com/DukeLearningInnovation/kits/issues?q=is%3Aopen+is%3Aissue+label%3Ahypothesis)
MVP | The minimum viable piece/thing/product/idea/design we can build to validate or invalidate a hypothesis. These are tracked via Github Milestones. | [All MVP](https://github.com/DukeLearningInnovation/kits/milestones) 
Project | Github Projects are used to track sprints | [Current projects](https://github.com/DukeLearningInnovation/kits/projects) 

## Contributing

We don't have all the answers. We can't build it all by ourselves. Whether you're in or outside of Duke, read [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how you can contribute to this project.

## Historical Docs and Presentations
* [Duke Center for Instructional Technology LMS Futures Report](https://github.com/DukeLearningInnovation/kits/blob/master/docs/_assets/CIT-LMS-Futures-Report-version-7_4.pdf)
* [New Architectural Models for Central Academic Tools and Services](https://events.educause.edu/sites/default/files/library/presentations/E11/SESS074/2011_Duke-Educause_academic_architecture-overview.pdf)
* [Learn.Duke Discovery Document](https://github.com/DukeLearningInnovation/kits/blob/master/docs/_assets/Learn.Duke-Discovery.pdf)

## Ideas Shaping Kits
* [Educause NGDLE Report](https://github.com/DukeLearningInnovation/kits/blob/master/docs/_assets/educause-ngdle.pdf)
* [The NGDLE: We Are the Architects](https://er.educause.edu/articles/2017/7/the-ngdle-we-are-the-architects)
* [The Educause NGDLE and an API of Ones Own](https://eliterate.us/the-educause-ngdle-and-an-api-of-ones-own/)
* [The University API: An Unconference](https://bavatuesdays.com/the-university-api-an-unconference/)
* [A Personal API](https://bavatuesdays.com/a-personal-api/)
* [Not-yetness](http://redpincushion.us/blog/teaching-and-learning/not-yetness/)

## Presentation and Articles about Kits
* [Next Gen Digital Learning Environments](https://events.educause.edu/-/media/files/events/user-uploads-folder/eli18/sess18/eli-apereo-ngdle-panel-conversation.pdf)
* [Building the Next Generation: Emerging Stories of the NGDLE](https://events.educause.edu/eli/webinars/2018/building-the-next-generation-emerging-stories-of-the-ngdle)
* [Open Source and the NGDLE](https://er.educause.edu/articles/2017/9/open-source-and-the-ngdle)
* [Sustainable Innovation + Faculty Choice + Student-Centered Design = NGDLE](https://events.educause.edu/annual-conference/2018/agenda/sustainable-innovation--faculty-choice--studentcentered-design--ngdle)
* [Kits: Building the NGDLE Outside the LMS](https://er.educause.edu/blogs/2019/11/kits-building-the-ngdle-outside-the-lms)
* [Possible Futures: Open Source and Educational Values](https://www.youtube.com/watch?v=9sfanE9wYaQ)
* [Steering a Course for the NGDLE: Projects and Prospects](https://events.educause.edu/annual-conference/2019/agenda/steering-a-course-for-the-ngdle-projects-and-prospects)
