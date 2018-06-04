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
