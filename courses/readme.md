# /courses
learn.duke could act similarly to the Canvas landing page, as a dashboard that can send users to whatever server their learning experience lives on.
![](../_assets/11.png)
Now, users can access sakai, extend, sites@duke, people.duke, whatever course sites from the same place.

### [User Stories for MVP1 of /courses](https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F1+label%3A%22user+story%22+milestone%3AMVP1)
<iframe src="https://github.com/DukeLearningInnovation/learn.duke/issues?q=is%3Aopen+is%3Aissue+project%3ADukeLearningInnovation%2Flearn.duke%2F1+label%3A%22user+story%22+milestone%3AMVP1"></iframe>

## courses start as grouper groups
Adding a new learning experience starts with the group selection. groups come from groupmanager.oit API to learn.duke
![](../_assets/13.png)







* faculty manage course memberships because they need to add TA or guest members who aren't in the reference groups. 
* faculty add apps from /apps to course card because they use more than one app per course
* faculty add custom URL to course for apps because they use apps that aren't in /apps
* service owners run domain level queries on all custom URLS to show what tools need to be integrated next and what integrations aren't working because users manually link instead.
* faculty initiate instructional tasks like create assignment once app is enabled because is reduces time and complexity compared to going to external tool.
* course members see recent activity for course to increase community between members and offer comparison between self and group.
* students see what they should do next for the course to reduce cognitive load of searching for what to do next.
* course members receive meaningful notifications to reduce ambiguity and cognitive load and increase sense of place in the course.

## Questions for courses
* What happens with cross-listed courses? Is there a master group that's created?
* Since a reference group is auto-generated for every roster, is a course card auto-generated or do we wait for faculty to initiate a create process?


