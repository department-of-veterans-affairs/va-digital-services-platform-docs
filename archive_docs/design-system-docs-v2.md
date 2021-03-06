## What is this document?

**v2 Modified 1/29/18**

A draft of recommended governance for the Vets.gov design system. [Feedback welcome](https://github.com/department-of-veterans-affairs/design-system/issues). Strong opinions, loosely held.

**It contains:** an explanation of what the design system is, who it's for, and how to use it.

**Table of Contents:**
[TOC]

## What is the design system?

The design system (affectionately named "Jean Pants") is a Fractal implementation for Vets.gov. It's based on USWDS' own system, and modified for the unique needs of Vets.gov. 

Vets.gov has a collection of components that make up the website. These components have a visual styleguide associated with them, as well as reviewed and refined code that drives them, and best practices for when to use them. Jean Pants is a single source of documentation and truth for people looking to use the Vets.gov components.

Jean Pants' purpose is to provide accepted guidance for:

* code implementations for existing components
* visual design for existing components
* use guidelines for existing components (when and when *not* to use a thing)
* implementation of new visual patterns and components

Its purpose is _not_ to limit the creation of new components and applications. If you need something, and it's not already a part of Jean Pants, we have a process for you! 

### Component contents

Each component included in the design system has the same core files and views associated with it, accessible from the tabs for each component: 

* HTML: Fractal's rendered code

* Notes: Generated by a component's `README.md` file, the Notes section includes links to robust documentation (if available) and guidance for when and when not to use a given component. Gotchas, considerations, and major decision points should be found here as well.

  * > Meeting this promise will require that we go back and document!

* View: Generated by a component's `.njx` file, this shows the code that's producing the component you see in the preview window. 

* Context: Generated by a component's `config.yml` file, the context shows what props and data are being passed to the component's preview.

* Assets: Available for React components only, the Assets tab reveals which `.jsx` files are associated with a component.

* Info: Fractal's info window, showing filepaths and handles for use within Fractal itself.

* Props: Exposes a React component's `props`, their types, and whether or not they are required.



### Organization

> This is probably the least well-defined part of the system, and I will come back to it. -SD

> From Mel: It's still not clear to me if there's anything that *shouldn't* be in the design system. Would be good to clarify so we don't end up with a bunch of things living outside of it because people aren't sure where they go.

> Right now our implementation is a mess; needs to be organized appropriately



### How does it work? 

integration w/ vets-website, etc



### How do I use it? 

Don't identify with any of these categories? [Submit an issue](https://github.com/department-of-veterans-affairs/design-system/issues) to our repo!

#### As a designer



#### As a developer



#### As a writer




### Definitions

**Core**: The tried & true, tested parts of our design system. Comprises a subset of USWDS' core code, plus the patterns in production on Vets.gov

**Component**: An element that is visible on the design system. Differs from a React component in that it might or might not actually _be_ React code. So named because that's Fractal's default, but maybe we should look into finding a new term?

**Static component**: A Fractal component that is static HTML — not React — that up until recently has been hand-copied-and-pasted into `.md` files

**React component:** A Fractal component that _is_ React. Is also, technically, a React component in the usual sense of the phrase. Is called upon in React apps. 

## Contribution

> What is the contribution process?
>
- - Instructions
  - Technical requirements
  - Criteria for inclusion
  - General process -- say I'm building out a new form and have created a new component for it. What's the timing for adding it to the design system? Does it go on a branch? Does it go into master? Does it only go in once the form is in production?
- Adding a new component
  - If a new component doesn't check all the boxes, does it stay in vets-website? Does it go in kitchen sink? Does it go back to the drawing board?
- Modifying or expanding on an existing component 
  - I think this deserve a similar level of detail you gave to new components. Existing components will no doubt evolve and the process for them will be even hairier given potential regressions.

With thanks to USWDS:

### Required questions

- Describe the pattern: what’s its purpose and functionality?

- What user-need does it solve?

### Optional questions

  - Have you conducted primary research? If so, provide.
  - Do you have secondary research (e.g. articles, outside research)? If so, provide.
  - Are there any similar or related patterns in the system already?

###Share the component

Submit sketches, wireframes, design, or code (link to code on their repo, post code directly to the issue, CodePen, or pull request).

---

### Creating new components

Loosely, the process for bringing a new component into the design system mirrors the creation of a new design pattern. New components should result from a demonstrated need for a new visual or user-interaction pattern.

New components **should**:

- Satisfy a need that cannot be satisfied by a current component — or a minor variation thereof

  > How do we define "minor"?

- Adhere to existing Vets.gov standards of color, padding, grid, typography, etc.

- Follow best practices for accessibility, design, and user experience

  > as defined by whom? Could we point to relevant USWDS/18F/Vets.gov playbook documentation?

- Have gone through review with both the product-owning team, and the design teams. Doesn't matter if it's a formal review or not — but there need to be eyes on it other than yours. 

- Have gone through basic research, either in concert with the product housing the new component, or on its own.

- Have been tested for accessibility / 508 compliance, with the awareness that those are _not_ the same thing!

- Have been assessed for best practices in code

New components **should not**:

* Duplicate existing function or the visual pattern of an existing pattern or component
* Violate accessibility rules and standards as defined by the 508 office and our own best practices
* Violate Vets.gov visual rules as set forth by the design system and the design team
* Be integrated into the product, and by extension the system, without having undergone design, accessibility, and code review



### Moving new components into Fractal

New design system components should follow this general path:

`idea/design sketch` » `code (static or React)` » `Fractal's kitchen sink` » `Some assessment period where we decide if it's a one-off or not` »  `if one-off, should stay in kitchen sink; else should be integrated into the appropriate place in Core`

> Mel: Moving new components into Fractal -- I love this process flow. What do you think about making it into a more visual flow chart?

#### The Kitchen Sink

This is a holding pen for potential new components, and for one-off components that haven't demonstrated reusability AND are in active use on Vets.gov. Components in the kitchen sink can be prototypes / works in progress or as fully developed as they need to be.

> When does a component move from beta/kitchen sink to core?

> Kitchen sink -- rather than a separate folder, what do you think about utilizing the orange "WIP"/green "ready" tags to indicate that status? It seems like beta-type components could easily get lost if they're all bundled away in one folder.

#### At what point is a component ready to become part of the Core?

* Has been used in more than two discrete places on Vets.gov (ie, shows once in Education, and again in Healthcare — not twice on the same page / in the same file), AND we can see a future use case
* Has been refined by the design team, as needed
* Has been refined by the engineering team, as needed
* Has passed accessibility and 508 testing

#### At what point do we feed back into USWDS?

This is an open question that we need to further discuss, but suggest that if we have a component that is not already represented in USWDS's system and has potential to be useful, that we fork their repo and go from there.

#### What files should all components have? 

- React
  - `.config.yml` (Fractal labeling and props used in the component example)
  - `.jsx` (the React component itself)
  - `.njk` (jsx code that creates an example use of the component from props in the config file)
  - `.unit.spec.test.js` (tests for the React component)
  - `README.md` (will display in **Notes** tab and carries relevant context for design + content to know when to use a given pattern)
- Static HTML
  - `.config.yml` (Fractal labeling and props used in the component example)
  - `.njk` (carries HTML markup)
  - `README.md` (will display in **Notes** tab; carries relevant context for design + content to know when to use a given pattern)

#### Naming Conventions

How do we name components in our design system? These names should be recognizable and unique.

Because this system is based on USWDS' system, we should maintain the names that USWDS has set, to make it easier to upgrade the USWDS core in the future.

Additional components have been brought in that are currently in use on Vets.gov. Those also have existing naming conventions that go beyond the codebase — we use them to verbally communicate patterns as we work through design. As these components get moved into the design system, their names (based on the filenames that house the code) should be maintained. 

> If there is a conflict between Vets.gov's code and USWDS' code, **how should we proceed?**

New components should have names that:

 * do not conflict with the existing codebase
 * are descriptive of the component (ie, "errorable checkbox")
 * are plain-language (call a list a list.)

> I think you have the checks and balances covered. Does it make sense to also specify the method through which review/approval should happen, like PR review?


## Maintenance

### Who is responsible for ongoing maintenance?

Rather than appointing specific people from each team, every designer and FE should be responsible and comfortable with maintenance. Otherwise bottlenecking may be a concern.

- The responsible individuals should make it part of their offboarding process to transfer their design system responsibilities to their successor.
- Consider making a turn on design system part of standard Ad Hoc/DSVA onboarding — best way to get familiar with our patterns and best practices


### Who owns the design system? Where does the buck stop?

> Suggest: Nebula PM, so long as design system is a Nebula product

The owner is responsible for making sure that maintenance work is getting prioritized into each PI. 

### Timing

> I'd suggest this becomes an established step in the prod. dev process we're starting to more tightly define -- [@rtluu](https://github.com/rtluu) [@minafarzad](https://github.com/minafarzad) would love your thoughts

- How often do we update components?
  - This should probably be on an as-needed basis. If you see that a component needs to be updated, ticket it and work it into the next sprint. 
- How often to we assess maintenance needs?
  - Once a PI, everyone with design system assigned to them should take a look at their constituent components and assess whether they need to be hardened in any way. That work should be ticketed, and those tickets should work their way into the next sprint in the PI. 
- How often do we integrate new components?
  - If a component is ready to move from the kitchen sink, it should be ticketed and worked into the next sprint/PI (which one depends on the existing workload).


### Maintenance tasks

- Possible maintenance tasks:
  - Unit testing: are the tests still making sense and passing?
  - CSS hardening
  - Has the component been modified in any way to accomodate an outside task? (IE the way the alert box component was extended to become a collapsible "one-off" crisis box, implemented by hand)
  - Is this component still in use? 
  - Is this component being used outside of the recommended context?
    * might another pattern be developed instead?
    * should the existing pattern's docs be modified to reflect the new reality?

### Deprecation

- There's a difference between removing components that have never been used (like those from USWDS) and removing the ones we've outgrown (like piano keys). Right now the system's in pretty good shape, but what should our criteria be for deprecating components? 

