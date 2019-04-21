### React & Angular

# History of React vs. Angular

## Angular
### is a JavaScript framework written in TypeScript. It was developed and is maintained by Google, and is described as a “Superheroic JavaScript MVWFramework” on Angular’s webpage. Angular (version 2 and above), originally released in September 2016, is a complete rewrite of AngularJS (released in October 2010). The newest major release is version 6 at the time of writing. Google AdWords, one of the most important projects at Google, uses Angular – so Angular is likely to be around for a while.

## React 
### is a JavaScript library developed and maintained by Facebook. It was released in March 2013 and is described as “a JavaScript library for building user interfaces”. React is used far more at Facebook than Angular is at Google if it’s any indication as to how big Facebook is betting on this technology. By this metric, you can also conclude that React will be around for a very long time.


## Both Frameworks are available under the MIT license.
---

# Architecture of React vs. Angular
## Framework vs. Library
### Angular and React have many similarities and many differences. One of them is that Angular is a full-fledged MVC framework and React is merely a JavaScript Library (just the view). Let me elaborate. Angular is considered a framework because it offers strong opinions as to how your application should be structured. It also has much more functionality “out-of-the-box”. You don’t need to decide which routing libraries to use or other such considerations – you can just start coding. However, a drawback is that you have less flexibility – you must use what Angular provides.

### Angular provides the following “out of the box”:

* Templates, based on an extended version of HTML
* XSS protection
* Dependency injection
* Ajax requests by @angular/HTTP
* Routing, provided by @angular/router
* Component CSS encapsulation
* Utilities for unit-testing components.
* @angular/forms for building forms
## React,
### on the other hand, gives you much more freedom. It only provides the “view” in MVC – you need to solve the M and C on your own. Due to this, you can choose any of your own libraries as you see fit. You will end up using many independent, fast-moving libraries. Because of this, you will need to take care of the corresponding updates and migrations by yourself. In addition, each React project is different and requires a decision requiring its folder hierarchy and architecture. Things can go wrong much more easily due to this.

### React provides the following “out of the box”:

### Instead of classic templates, it has JSX, an XML-like language built on top of JavaScript
### XSS protection
### No dependency injection
### Fetch for Ajax requests
### Utilities for unit-testing components
### Some popular libraries to add functionality are:

### React-router for routing
### Redux or MobX for state management
### Enzyme for additional testing utilities
### Regular DOM vs. Virtual Dom
### React’s use of a virtual DOM is one of its features that makes it so blazingly fast. You’ve probably heard of it. It was React’s “killer feature” when it was first released. Let me give you an example scenario:

### Let’s say that you want to update a user’s age within a block of HTML tags. A virtual DOM only looks at the differences between the previous and current HTML and changes the part that is required to be updated. Git employs a similar method, which distinguishes the changes in a file.

### Conversely, Angular opted to use a regular DOM. This will update the entire tree structure of HTML tags until it reaches the user’s age.

### So why does this matter? The example above is trivial and probably won’t make any difference in a real app. However, if we’re dealing with hundreds of data requests on the same page (and the HTML block is replaced for every page request) it drastically affects the performance, in addition to the user’s experience.
