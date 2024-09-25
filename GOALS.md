# Goals for a Monorepo

Provide a canonical reference for a multi-project monorepo across multiple services with shared components.
It has two products, Fibonacci and FizzBuzz, each providing Fib and FB as a Service.
It has one website, with a static marketing page and after-signin pages for Fib & FB.
Has observability defaults (logging, metrics, & tracing) for the services, and analytics for the front ends.

1. Fib as a service:
   1. Create a new Fib sequence specifying A and B start
   2. Fib as a service providing RPC and Streaming replies
      1. Cached recent streaming states
   3. Front End
   4. Data model: 
2. FB as a service:
   1. Create new FizzBuzzConfig with list of (Mod, Word) tuples.
   2. FizzBuz API for N, N Batch, and N Streaming
   3. Front End
3. Technologies:
   1. proto API Definitions
      1. Python server stubs
      2. Typescript & Python client libraries
   2. TypeScript + NextJS
   3. Python + FastAPI
   4. Rust + PY03
   5. C++ + pybind
   6. Database per service
   7. Container Deployment
4. Components:
   1. Page Shell & Theme
   2. User Management
5. Bazel will:
   1. Manage all toolchains & libraries at "single version".
   2. Enforce formatting, linting, and build correctness.
   3. Allow specific code dependency queries.
   4. Cache intermediate build phase outputs.
6. Cookbook: For each language (TS, PY, RS, CPP) in my editor of choice (VSCode, IntelliJ, NeoVim) How do I...
    1. ... install or update a dependency, globally?
    3. ... connect a debugger to a service?
    4. ... run a test in a debugger?
    5. ... launch the entire stack? (Multiple languages at once)
    6. ... deploy the stack to an environment?
    7. ... define a proto interface? (Language agnostic)
    8. ... import a proto interface?
    9. ... define a service?
    10. ... implement a service stub?
    11. ... instantiate a service client?
    12. ... advance a toolchain version?