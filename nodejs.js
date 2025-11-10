/*
🧭 𝗡𝗢𝗗𝗘.𝗝𝗦 𝗥𝗢𝗔𝗗𝗠𝗔𝗣 — Every Concept (Beginner to Advanced)

🟢 1. Prerequisites (Before Node.js)

Learn these first to be comfortable:
    ✅ JavaScript fundamentals
        Variables (let, const, var)
        Functions (normal, arrow)
        Scope, Hoisting
        Closures
        Callbacks, Promises, async/await
        this keyword
        Destructuring, spread/rest
        ES6 modules (import/export)
        JSON
    ✅ Basic understanding of HTTP (GET, POST, PUT, DELETE)
    ✅ Basic understanding of terminal (CLI commands)
    ✅ Git & GitHub basics

🟩 2. Introduction to Node.js
    What is Node.js
    Node.js vs Browser JS
    How Node works (V8 Engine, Libuv)
    Event Loop & Callbacks
    Asynchronous vs Synchronous
    Non-blocking I/O Model
    Global Objects (__dirname, __filename, process, global)
    REPL (Read-Eval-Print Loop)

🟢 3. Node.js Core Modules

    Learn each core module with hands-on examples:

    Module	               Concepts

    fs	                   Read/write files, streams, watch files
    path	               Resolve, join, dirname, basename, extname
    os	                   System info (CPU, memory, uptime)
    events	               EventEmitter class, custom events
    http	               Create basic HTTP server
    url	                   Parse and format URLs
    querystring	           Parse query parameters
    util	               Promisify, inspect, deprecate
    crypto	               Hashing, encryption, JWT signing
    child_process	       spawn, exec, fork
    stream	               readable, writable, duplex, transform streams
    zlib	               Compression and decompression

🟩 4. NPM (Node Package Manager)
    npm vs yarn vs pnpm
    Installing global and local packages
    package.json explained
    Semantic versioning (^, ~, exact versions)
    Scripts (start, build, test)
    npm hooks (preinstall, postinstall)
    Using npx
    Creating and publishing your own npm package

🟢 5. Modules & Architecture
    CommonJS (require/module.exports) vs ES Modules (import/export)
    Folder structure conventions
    Using environment variables (dotenv)
    Config management (config package or .env)

🟩 6. Building HTTP Server (Without Frameworks)
    Create a server using http.createServer()
    Parse URL, query params, and body
    Routing manually (if/else or map)
    Sending HTML/JSON responses
    Error handling (status codes)

🟢 7. Express.js (Most Important Framework)
    Install & setup (express())
    Middleware concept (global, route, error-handling)
    Built-in middlewares (express.json, express.static)
    Routing
    Route parameters & query params
    req, res, next usage
    Serving static files
    REST API creation (GET, POST, PUT, DELETE)
    Error handling middleware
    Using external middleware (like morgan, cors)
    Router modularization (express.Router)

🟩 8. Template Engines (Optional)
    EJS / Pug / Handlebars basics
    Passing data to templates
    Rendering dynamic HTML

🟢 9. Database Integration
    🧩 SQL (MySQL / PostgreSQL)
        Installing drivers (mysql2, pg)
        Connecting & querying database
        Using connection pool
        Query parameterization to prevent SQL Injection
    🧩 NoSQL (MongoDB + Mongoose)
        Install & connect (mongoose.connect())
        Schema & Model
        CRUD Operations
        Validation & middleware (pre, post)
        Virtual fields, population (relations)
        Aggregation pipelines

🟩 10. Authentication & Authorization
    Password hashing (bcryptjs, argon2)
    Session-based auth (express-session)
    Token-based auth (JWT)
    Access & refresh tokens
    Role-based access control (RBAC)
    Middleware for auth & role checking
    Secure routes using JWT verification

🟢 11. Middleware Deep Dive
    Custom middlewares (logging, validation, error handling)
    Third-party middlewares (helmet, cors, rate-limit, compression)
    Order of middleware execution
    Global vs route-level middleware

🟩 12. File Uploads
    Using multer for handling files
    File validation (type, size)
    Saving to local storage or cloud (AWS S3, Cloudinary)

🟢 13. APIs and Best Practices
    REST API Design Principles
    Versioning APIs (/api/v1/...)
    Request validation (joi, zod, express-validator)
    Consistent response format (success/error)
    Pagination, filtering, sorting
    Error handling and status codes

🟩 14. Async Programming & Performance
    Callbacks vs Promises vs async/await
    Handling async errors (try/catch, .catch)
    Node.js Event Loop, microtasks
    Worker Threads & Clustering
    Load balancing
    Caching (Redis integration)

🟢 15. Logging & Monitoring
    Logging (winston, morgan, pino)
    Error tracking (Sentry, LogDNA)
    Health check routes
    Performance metrics (pm2, node --inspect)

🟩 16. Testing
    Unit testing (mocha, jest, chai)
    Integration tests (supertest with express)
    Mocking dependencies
    Test coverage reports

🟢 17. Security Concepts
    Helmet (set HTTP headers)
    CORS configuration
    Preventing XSS, CSRF, SQL Injection
    Rate limiting
    HTTPS setup

🟩 18. Deployment
    Environment setup (dev, staging, prod)
    Using PM2 or Nodemon
    Reverse proxy with Nginx
    Deploy on:
        AWS EC2 / Lightsail
        Render / Railway / Vercel
        Docker containerization
    CI/CD basics (GitHub Actions)

🟢 19. Advanced Node.js
    Streams (create, pipe, transform)
    Buffer and binary data
    Cluster module
    Worker Threads
    Event loop phases deep dive
    Native addons (C++)
    WebSockets (socket.io)
    GraphQL APIs (apollo-server)

🟩 20. Project Ideas (Practice)
    Todo REST API (CRUD + MongoDB)
    Authentication System (JWT + bcrypt)
    Blog API with comments & likes
    E-commerce backend (cart, orders, payment using Stripe)
    Real-time chat app (Socket.io + Redis)
    File upload + download service
    URL shortener (MongoDB + Express)

🟩 21. Code Quality & Architecture
    Folder structures (controllers, services, models, routes, utils)
    MVC pattern
    Service layer separation
    Dependency injection
    Linting (eslint, prettier)
    TypeScript with Node.js

🟢 22. Scaling & Optimization
    Horizontal scaling
    Load balancers
    Message queues (RabbitMQ, Kafka)
    Caching strategies (Redis, in-memory)
    DB optimization
    Profiling (clinic.js, node --prof)

🟩 23. DevOps Integration
    Dockerize your Node.js app
    Kubernetes basics
    Environment variables & secrets
    Monitoring tools (Prometheus, Grafana)

🟢 24. Bonus Topics
    Using WebSockets (real-time)
    GraphQL with Apollo Server
    gRPC communication
    Serverless functions (AWS Lambda, Netlify)
    Payment gateways (Stripe, Razorpay)
*/
