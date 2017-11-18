# apps
A new service that contains a database of all learning technologies around the university.

* All apps and their apis
* presented via API to learn.duke or does it have it's own UI?

An app store UI built that allows searching/filtering for apps and has grouper group awareness.
![](../_assets/3.png)

A new interface for selecting and managing these apps in Sakai, indicated here by the + button on the left navigation. This overrules site info::manage tools
![](../_assets/1.png)


This calls the app store, but the UI is changed slightly as the interface knows it's inside Sakai via LTI and already knows what what group context we're in.

This should be applied to all platforms, wordpress, drupal, open edx, sakai.
![](../_assets/2.png)

## Tasks done at apps
* turn on the tools
* configure tools
* basic add url of specific tool or block for things not in the ecosystem
* usage metrics
* discipline specific app management

## Questions on apps
* Should we include 'advertising' space for whatever apps we want to push at any given time? A featured, section.
* Do we build in a rating system for each app?
* What is a good metric for 'used' in a course? The existence of a tool in Sakai means nothing when that tool is part of the template. 2 create.tool events or existence of 1 item in the sakai-db?
