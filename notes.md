###### w1d1
What ways can graphs be represented? Pros/cons of various ways.
>

What does it mean to be RESTful?
> Representational State Transfer or REST, is a stateless set of design principles. As opposed to SOAP which uses XML, REST can use JSON. RESTful apps are stateless in the sense that clients and servers do not need to be aware of each other's state, simple `GET`, `PUT`, `POST`, `DELETE` requests that have no logic suffice.

Explain prototypes in JavaScript.
>  Prototypes is how object inheritance is passed. An object's class methods are available to all its children.

List the key benefits that HTML5 introduced.
>  Better semantic tags, access to Local Storage of a browser, better error handling.

How do media queries work?
>  Its a css module that recognizes screen resolution making responsive web design possible.

###### w1d2
What is a closure? How are they used?
> JavaScript follows lexical scope which means variables are defined line by
> line rather than at execution. Since functions are objects in JS, a closure is
> a function that has variables defined within its scope that inner functions
> can use. Closures differ from callbacks in that cb's take functions are a
> parameter rather than creating the function internally.

How does CSS grid work?
> CSS grid follows component architecture methodology. Each html element
> becomes its own component if it `{display: grid}`. Child elements are either
> rows or columns. Rather than the layout residing in the html markup, it lives
> in the css file. Simply put: CSS grid is a module that transfers the layout
> from the html to a css file.

###### w1d3
What are the steps for DFS on a graph?
> For each vertex, start traversal. Keep track of visited vertices so as to
> when presented with the opportunity to cycle, visit unvisited vertex or
> terminate.

What happens what you navigate to www.google.com?
> * check caches for address (browser, OS, router, ISP)
> * ISP recursively reads domain
> * domain server routes address
> * connection is formed with browser and data is transferred + status code
> * browser renders data

What's the event loop?
> The event loop is the order in which programs are performed making
> JavaScript's asynchronous execution work. Callstack pushes programs onto the
> event queue, once event queue is empty callstack pushes next.

###### w1d4
What are the steps of BFS of a graph?
> BFS of a graph acts like a queue. Push a vertex onto the queue, push all of the
> the first vertex's children onto the queue. Keep track of visited vertices to
> prevent getting trapped in a cycle.

How does DNS work?
> Domain registrars keep track of domain names and their IP addresses.

What are React's lifecycle methods?
> * getDefaultProps()
> * getInitialState()
> * componentWillMount()
> * componentDidMount()
> * componentWillReceiveProps(nextProps)
> * shouldComponentUpdate(nextProps, nextState)
> * componentWillUpdate(nextProps, nextState)
> * componentDidUpdate(prevProps, prevState)

###### w1d5
What are the steps of topological sort?
> Start with vertices that don't have any in-edges. Don't add a vertex until all
> its in-edges have been included. Topo sort is like a combination of DFS and
> BFS.

What is TCP?
> Transmission Control Protocol is the main protocol for the internet. It's
> optimized for data reliability as opposed to UDP which emphasizes reduced
> latency.

What's an IIFE?
> Immediately-invoked function expression ("iffy") can be used to avoid variable
> hoisting from within blocks, protect against polluting the global environment
> and simultaneously allow public access to methods while retaining privacy for
> variables defined within the function. ~ Wikipedia

What lifecycle methods get called in the update/unmount phase?
>

###### w1d6
What are the steps of Djikstra's algorithm?
> * Default all nodes unvisited and distance nil. Original node distance = 0
> * Traverse neighboring nodes reseting distance to prev distance + edge
 if less than prev value.
 > * Done when all nodes are visited or destination node distance is smaller potential

What is UDP?
> Unlike TCP, UDP does not guarantee data reliability but should see better
> latency. A situation when UDP would be advantageous is when streaming data
> that quickly becomes dated.

== vs. ===
> === doesn't include type conversion

What is **this** in JS?
> It refers to the object that called the function.

###### w2d1
What is recursion?
> Recursion is when a function calls itself.

What are the HTTP methods?
> The main ones are: GET, POST, PUT, DELETE. There is also: HEAD, CONNECT,
> OPTIONS, TRACE.

What is hoisting in JS?
> Hoisting is the declaration of a variables and functions of the current scope.

###### w2d2
What is `new` in JS?
> It is syntactic sugar to instantiate an instance of the function it's being
> called with. It was added to make JS look more like other OO languages.

###### w2d3
HTTP vs HTTPS
> HTTPS is secure because the 's' stands for socket which means a secured
> connection is established between the client and server preventing anyone
> from intercepting data during transmission.

PUT vs PATCH
> Though PUT & PATCH are often interchangeable, PUT replaces the whole object
> while PATCH contains only the key value pair that needs updating.

What is event bubbling
> In JS when a nested click handler triggers events on its parent element.

###### w2d4
Cookies vs localStorage vs sessionStorage
> These differ on datatypes, duration, size, whether they're sent with requests.
> Cookies stored as strings, have expire dates, 4kb max, sent with reqs.
> localStorage can be JS primitives, don't expire,  5MB max, not sent w/reqs.
> sessionStorage is like localStorage except, expires on window close

What is event delegation in JS?
> Event delegation is the handling of events from a common ancestor of many
> elements e.g. instead of putting clickHandler's on every element of a table,
> monitor events from the table via event.target.

###### w2d5
What is Cross-site Scripting (XXS) Attack?
> XXS is when malicious code is executed on the client compromising the
> security of a site.

ES5 vs ES6
> * `let` allows for block level scope
> * anonymous functions
> * fat arrow functions which maintain `this`
> * spread operator
> * syntactic sugar like Class

Tabulation vs Memoization
> Tabulation is a bottom up approach utilized in dynamic programming.
> Memoization is a top down approach of caching solutions for a parent
> case.

###### w2d6
Function Expression vs Function Declaration in JS
> Function expressions are non-hoisted variables while declarations are.

SQL: `GROUP BY` vs `HAVING`
> Group by takes a column name. Having could behave like `WHERE` if absent,
> however it typically used with aggregate functions.

###### w3d1
What is a heap and its various operations?
> A heap is a more complex binary tree. Heaps are evenly filled, starting with
> the left node. Min heaps are when parent nodes <= children. Max heap is the
> inverse of min heap - >= - LR order of nodes doesn't otherwise matter.

> A child node of an item in heap is 2i + 1||2, important if you want to look
> at it as an array or queue. When add/removing elements, rebalance heap.

What is AJAX?
> Asynchronous JavaScript And XML (AJAX), is not a language it's a technique.
> It decouples data interchange and view creating a more dynamic feeling exp.

What are the different sages of a page's lifecycle?
> * DOMContentLoaded - fully loaded
> * load - events trigger one images and styles are loaded
> * beforeunload/unload is when the user is leaving the page triggers action

###### w3d2
var vs let vs const
> var is function scoped while let and const are block scope. const is
> immutable, let isn't.

How does heap sort work?
> Heapsort is a in-place sorting algorithm that works bottom up.

What's the same origin policy?
> It's a concept in web app security that describes allowing a browser to
> load scripts from a particular origin.

What is CORS?
> Cross-Origin Resource Sharing is a mechanism that let's an app draw content
> from multiple origins via permissions in the header of the request.
> i.e. think images hosted elsewhere

###### w3d3
NoSQL vs NoSQL
> SQL is a predefined table vs a non-predefined one. Sharding becomes difficult.

###### w3d4
What does bind do in JS?
> Bind preserves the context of this when a method is passed separately from its
> object. bind takes the object the method belongs to.

###### w4d1
Value vs reference copying in JS
> Primitives are copied by value - think null, undefined, boolean, number,
> string - immutable. Reference copying is for objects, arrays, and functions.

###### w4d2
What are the 7 different JS types?
> null, undefined, boolean, number, string, object, symbol, all of which are
> primitives save object.

What is AWS SageMaker?
> SageMarker is the AWS platform for machine learning. It can help perform
> image, sentiment, and other analysis with a number of frameworks like
> tensorflow and apachemxnet. It's a pretty comprehensive environment that
> manages the storage, training, and deployment of models.

###### w4d3
AVL Trees
> AVL trees are a type of balances BST. Each subtree differs by no more than 1.
