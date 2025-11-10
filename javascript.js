/*
🧭 𝗝𝗔𝗩𝗔𝗦𝗖𝗥𝗜𝗣𝗧 𝗥𝗢𝗔𝗗𝗠𝗔𝗣 (Every Concept from Beginner → Advanced)

🟢 1. Core Foundations
    What is JavaScript
    History & versions (ES5 → ES6 → ESNext)
    How JS runs (JS Engine, Interpreter, JIT)
    Runtime environments (Browser vs Node.js)
    JS vs Java vs TypeScript

🟩 2. Basic Syntax
    Variables — var, let, const
    Data types
        Primitive (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
        Non-primitive (Objects, Arrays, Functions)
    Type conversion (implicit & explicit)
    Template literals
    Comments (single, multi-line)

🟢 3. Operators
    Arithmetic
    Assignment
    Comparison
    Logical (&&, ||, !)
    Bitwise
    Ternary operator
    Nullish coalescing (??)
    Optional chaining (?.)
    Spread (...) and Rest (...) operators

🟩 4. Control Flow
    if, else if, else
    switch statements
    for, while, do…while loops
    Loop control (break, continue)
    for…in vs for…of

🟢 5. Functions
    Function declarations & expressions
    Anonymous functions
    Arrow functions (=>)
    Default parameters
    Return values
    Function hoisting
    Higher-order functions
    Callback functions
    Pure vs impure functions

🟩 6. Scope & Closures
    Global scope
    Function scope
    Block scope
    Lexical scope
    Closure — definition, examples, and use-cases (e.g., data hiding, memoization)
    IIFE (Immediately Invoked Function Expression)

🟢 7. The this Keyword
    this in global, function, arrow, and object context
    this inside event handlers
    Losing context problem
    Fixing this with .bind()
    Arrow function’s lexical this

🟩 8. Objects & Prototypes
    Object creation (literal, constructor, class)
    Property access (dot & bracket notation)
    Object.keys(), Object.values(), Object.entries()
    Object destructuring
    Copying objects — shallow vs deep
    Object.freeze(), Object.seal()
    Prototype chain (__proto__)
    Object.create()
    Inheritance (class, extends, super)

🟢 9. Arrays
    Array creation ([], Array())
    Common methods:
        Add/remove: push, pop, shift, unshift, splice
        Iterate: forEach, map, filter, reduce, some, every, find, findIndex
        Sorting: sort, reverse
        Merging: concat, spread (...)
    Multi-dimensional arrays
    Shallow vs deep array copy
    Array destructuring

🟩 10. Strings
    Template literals
    Common methods: toUpperCase, toLowerCase, trim, split, slice, substring, replace, includes, startsWith, endsWith
    String immutability
    Tagged templates

🟢 11. Numbers, Math, Date
    Number conversions
    Math object methods (floor, ceil, round, random, etc.)
    Working with dates (Date object)
    Formatting time/date
    Timestamps

🟩 12. Type Coercion
    Implicit conversion (e.g., "5" + 2)
    Explicit conversion (Number(), String(), Boolean())
    Truthy & Falsy values
    Loose (==) vs Strict equality (===)

🟢 13. Destructuring & Spread
    Array and object destructuring
    Nested destructuring
    Default values
    Spread operator for merging/cloning
    Rest operator for variable arguments

🟩 14. DOM & Browser (For Frontend)
    DOM Tree (Document Object Model)
    Selecting elements (getElementById, querySelector)
    Modifying elements (innerText, innerHTML, style)
    Creating & removing elements
    Event handling (addEventListener)
    Event bubbling & capturing
    Event delegation
    Forms and input handling
    LocalStorage / SessionStorage / Cookies

🟢 15. Asynchronous JavaScript
    Synchronous vs Asynchronous
    Callbacks & callback hell
    Promises (then, catch, finally)
    async/await
    Promise methods (Promise.all, Promise.race, Promise.allSettled)
    Microtask queue vs macrotask queue
    Event loop & concurrency model

🟩 16. Error Handling
    try, catch, finally
    Throwing custom errors
    Error objects (Error, TypeError, etc.)
    Promise rejection handling (.catch, unhandledRejection)

🟢 17. Advanced Objects
    Property descriptors
    Getters & setters
    Symbols & hidden properties
    Iterators & Generators
    Proxy & Reflect API
    Object cloning & immutability patterns

🟩 18. Functional Programming
    Pure functions
    Immutability
    Higher-order functions
    Currying
    Function composition
    Closures in FP
    Map, filter, reduce patterns

🟢 19. ES6+ Modern Features
    let, const
    Template literals
    Destructuring
    Default & rest parameters
    Arrow functions
    Classes & inheritance
    Modules (import/export)
    Spread operator
    Promise, async/await
    Optional chaining (?.)
    Nullish coalescing (??)
    Dynamic import
    Private fields in classes (#name)

🟩 20. Modules & Bundlers
    CommonJS (require, module.exports)
    ES Modules (import/export)
    Named vs default exports
    Tree-shaking
    Webpack / Vite / Parcel basics

🟢 21. Memory & Performance
    Garbage collection basics
    Memory leaks (closures, timers, global vars)
    Event loop optimization
    Debouncing & throttling
    Async optimization (Promise.all)
    Big-O awareness for arrays/objects

🟩 22. Data Structures in JS
    Arrays, Objects
    Sets, Maps, WeakSet, WeakMap
    Stacks, Queues (implement using arrays)
    Linked lists (manual implementation)
    Trees (BFS, DFS traversal)
    Graph basics

🟢 23. Design Patterns (JS Specific)
    Module Pattern
    Revealing Module Pattern
    Singleton
    Factory
    Observer / Pub-Sub
    Prototype Pattern
    MVC Concept

🟩 24. Event Loop, Call Stack, and Web APIs
    Call stack
    Event queue
    Web APIs (DOM, fetch, timers)
    Microtasks (Promises) vs Macrotasks (setTimeout)
    Execution order visualized

🟢 25. Advanced Browser APIs
    Fetch API & AJAX
    XMLHttpRequest (legacy)
    WebSockets
    Web Workers
    Intersection Observer
    Geolocation API
    Clipboard API

🟩 26. Testing & Debugging
    Debugging with Chrome DevTools
    Breakpoints & call stack
    console methods (console.table, console.group, etc.)
    Unit testing with Jest
    Mocking & spying

🟢 27. TypeScript Fundamentals (Optional but Recommended)
    Why TypeScript
    Types, interfaces
    Enums, generics
    Classes with TS
    Type assertions
    Type narrowing
    Config (tsconfig.json)

🟩 28. JavaScript in Node.js
    Difference between browser JS & Node.js
    Global objects in Node
    CommonJS vs ESM
    Event loop in Node
    Streams, Buffers, File I/O
    Async patterns with Node APIs

🟢 29. Real-World Concepts
    Debounce & Throttle
    Deep vs Shallow copy
    Polyfills
    Shadowing variables
    Hoisting & Temporal Dead Zone
    Call, Apply, Bind
    Event delegation
    Memoization
    Currying

🟩 30. Security & Best Practices
    Avoid eval()
    Use strict mode ('use strict')
    Sanitizing inputs
    Preventing XSS
    Avoid global variable pollution
    Linting & formatting (eslint, prettier)

🟢 31. Projects to Practice
    Todo app (DOM + LocalStorage)
    Calculator (functions, DOM)
    Weather app (fetch API)
    Infinite scroll / lazy load
    Form validation
    Quiz app
    Real-time clock
    Notes app with CRUD
    E-commerce frontend (cart, localstorage)
    Chat UI (WebSockets demo)

🟩 32. Interview-Level Topics
    Event loop explanation
    Hoisting
    this binding
    Prototype inheritance
    Closure behavior
    Difference between == and ===
    Debounce vs Throttle
    Call, Apply, Bind
    Deep copy vs Shallow copy
    Promise chaining
    Microtask queue
    Polyfills for map, filter, bind, etc.
*/
