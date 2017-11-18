[![View](https://img.shields.io/badge/read-github.io-ff69b4.svg)](https://dukelearninginnovation.github.io/learn.duke/)
[![Contribute](https://img.shields.io/badge/contribute-github-green.svg)](https://github.com/DukeLearningInnovation/learn.duke)
[![GitHub license](https://img.shields.io/github/license/DukeLearningInnovation/learn.duke.svg)](https://github.com/DukeLearningInnovation/learn.duke)
[![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/dukelearning)

## Table of Contents

1. [Inspiration](#inspiration)
1. Goals
1. [Scope](#scope)
1. Terms
1. Actors
1. [Assumptions](#assumptions)
1. Hypothesis
1. [Sections](#sections)
	1. [courses](#courses)
	1. [apps](#apps)
	1. [packages & templates](#packages-&-templates)
	1. [wizard](#wizard)
	1. [content creation](#content-creation)
	1. [cms](#cms)
	1. [dlx](#designed-learning-experience)
1. [Technical specification](#technical-specification)
1. Analytics
1. User stories
1. What is MVP1?
1. [Next steps](#next-steps)

learn.duke.edu will provide the following to the Duke community.

1. Provide a single place for students to see the classes they are in, what tools those classes are using, and what they should do next for those classes.
1. Cataloged and searchable platform of learning technologies available at Duke.
1. Provide a single place for faculty to provision groups, technologies, and integrations for their courses.
1. Suggest tool packages, or standard sets of tool combinations, to help faculty accomplish their learning objectives.
1. Solicit suggestions for new tools Duke should support, then Duke can research support, automation and provisioning behind the new tools. 
1. Provide information and workflows on learning technology management and policies. 
	* LearnTAC
	* process for how tools get added
	* minimum requirements from LTS, ITSO, procurement, accessibility, etc

Audiences and potential benefit:
	
* Students: Have all apps together, one stop shop. Place to suggest new tools.
* Faculty: single place with tools together to easily provision for a course. Select pre-packaged groups of tools commonly used. Suggest new tools they like. 
* Admins: get data of which tools are used most, and suggestions of new tools by faculty/students that Duke can research adopting/licensing. 

# Inspiration

* [Exploring the Next Generation Digital Learning Environment with Tsugi (次)](https://www.youtube.com/watch?v=OzrlFJNBFqY)
* [Grav + Canvas LMS: Markdown and Git Workflows](https://www.youtube.com/watch?list=PLVtu1bDQijapAcziv0r0BYKNapd8Or8gV&v=_Oj1JIIxlAk)
* [EDUCAUSE NGDLE PDF](/_assets/educause-ngdle.pdf)

# Scope

* The scope of learn.duke is on courses at this time
* Technologies must be learning related, but are not limited to enterprise licensed. School, departmental, and unlicensed tools will also be listed
* learn.duke will be an open source licensed project

# Assumptions
* We hear a lot about the the cognitive load that taking 5 courses taught 5 different ways on 5 different tech stacks has on students, does this affect that positively?
* learn.duke should help clarify the LMS's role in the future
* SISS groups are auto-created, faculty don't have to create the group
* Toolkits and Sakai run as is in parallel with this effort.
* Once we are 'done' there shouldn't be a need for Toolkits anymore

> Faculty aren’t always risk takers, ‘coursera might not be around next year, so what will be here that I get guaranteed returns out of’. --Mine

* Will faculty be receptive to change when the output is their content, easily accessible and maneuverable for the future?

* Is there an opportunity for inter-institutional collaboration here?

* At the future of online at duke panel, there was  talk about networked communities of learners. Does that have a place here or is this the thing that connects you to your communities quicker/easier?
Maybe part of the UI is linking to the community that gets created for every course? Every course gets a slack channel?

# Hypothesis
What is each hypothesis and what are the baked in assumptions that would be detrimental if wrong?

## What do we need to know that we don't know


---

# Sections
learn.duke is comprised of the following sections.

* apps
* courses
* cms

We plan to add the following sections 
* templates
* wizard
* content-creation
* dlx


### An Example
Let's walk through an example faculty experience with some of the current technologies used to accomplish them.

1. View the courses they are teaching this semester (DukeHub)
2. View the details and roster for a single course (DukeHub)
3. Build a syllabus for the course (Word)
4. Store the syllabus somewhere accessible to the roster (Sakai, Box, Email)
5. Build content and activities to support the goals described in the syllabus (Word, Sakai, Class discussion, lecture *sigh*)
6. Build assessments to evaluate how well the content supports those goals (Sakai, Clickers, Scantron, PebblePad)
7. Grade assessments and provide feedback (Red ink pen, Sakai, Word)


Level 1 - 

Level 2 - 

Level 3 - 

Level 4 - configurable experience that gives faculty choice

Today, most faculty are somewhere between links on a departmental webpage out to the various steps and app with a Duke header bar that embeds each step into the page, i.e. the LMS. 

Coursera is a move in the right direction in that it's a single interface for program and course management, teaching, learning, and credentialing. But the experience is limited to what they define.

A single, designed experience that requires each step to be done inside of the design it dictates ecosystem model would reduce the switching costs of moving between tools and user interfaces.  

A level 4 ecosystem doesn't care what system faculty use to store a syllabus, it offers a single interface to create stuff, upload stuff, and store stuff. 

If faculty want to use Box instead of Sakai Resources, it's just a checkbox in a setting somewhere, not a completely different experience.  

Instead of having to think where do I upload this file to, faculty just upload the file to the desired default location they've chosen.

### Tasks done at DLX
* none entered at this time

### Questions on DLX
* none entered at this time

---

# Technical specification

* [LRNWebComponents](https://github.com/LRNWebComponents/ontology)
* [tsugi](https://github.com/tsugiproject/tsugi)
* [LRNWC HAX Editor](https://lrnwebcomponents.github.io/hax-body/components/hax-body/)
* IMS Deep Linking
* IMS LTI Advantage
* IMS Caliper

![Next Gen Architecture](_assets/Next-Gen-Architecture.png)

---

# Next steps

Give us something to test with her students, other faculty, and Duke community and build the narratives around how to communicate these ideas.

- [ ] create a courses mockup using Negotiation DLX module
- [ ] create a content creation mockup using Negotiation DLX module

