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
      ```sql
      ID BIGINT AUTO GENERATED;
      UserID BIGINT;
      Sequence BIGINT; -- watermark https://stackoverflow.com/a/18963950/240358
      Created DATETIME DEFAULT NOW();
      Deleted DATETIME;
      A INT;
      B INT;
      ```
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
   4. Rust + PY03 FB implementation
   5. C++ + pybind Fib implementation
   6. Database per service
   7. Container Deployment
4. Layout:
   ```
   ┝ app
   │ └ {site} - a marketing page, served at domain.com/site
   ┝ cluster - Terraform scripts and helm charts to define and bootstrap the cluster.
   ┝ components
   │ └ {lang(py,cpp,go,rust,web,k8s,proto)}-{lib} - individual libraries for shared functionality, sorted by language.
   │   └ binding.proto - object definitions for API calls.
   ┝ {org or product} - name of the org or product within the company.
   │ └ {feature} - name of the feature for this org. 
   │   ┝ proto
   │   │ ┝ domain.proto - internal domain objects
   │   │ ┝ api.proto - external service API
   │   │ └ storage.proto - API for storage layer, which gets processed into ORM and 
   │   ┝ lib - core libraries, relying only on domain.proto; pure.
   │   ┝ tools - CLI tools specific to this feature
   │   ┝ jobs - Jobs and pipeline definitions
   │   ┝ service - request handler implementations.
   │   ┝ web - Web interface, served with minimal App shell.
   │   └ deployment - Rules and details for deployments.
   ┝ experimental 
   │   └ {username} - local playgrounds for users
   └ tools - Command line utilities and helpers.
   ```
6. Components:
   1. Page Shell & Theme
   2. User Management
   3. Deployment templates
   4. Dashboard templates
7. Bazel will:
   1. Manage all toolchains & libraries at "single version".
   2. Enforce formatting, linting, and build correctness.
   3. Provide hermetic builds.
   4. Allow specific code dependency queries.
   5. Cache intermediate build phase outputs.
8. Cookbook: For each language (TypeScript, Python, Rust, C++) in my editor of choice (VSCode, IntelliJ, NeoVim) How do I...
    1. ... install or update a dependency, globally?
    2. ... connect a debugger to a service?
    3. ... run a test in a debugger?
    4. ... launch the entire stack? (Multiple languages at once)
    5. ... deploy the stack to an environment?
    6. ... define a proto interface? (Language agnostic)
    7. ... import a proto interface?
    8. ... define a service?
    9.  ... implement a service stub?
    10. ... instantiate a service client?
    11. ... advance a toolchain version?
9.  Infrastructure
   1. K8s
      1. Terraform - bootstrap K8s
      2. Okta - RBAC & OIDC
      3. Karpenter - Node Scaling
      4. Istio - Service Mesh
      5. Flux - GitOps
      6. CertManager - certificates
      7. nginx - Ingress
      8. metallB- LoadBalancer
      9. ExternalSecrets -> Hashicorp Vault - Secrets
      10. ExternalDNS -> Cloud DNS - DNS
      11. Helm - Deployment specs
      12. Elastic + Kibana - Logs (from K8s)
      13. Prometheus + Grafana - Monitoring (from Istio)
      14. Jaeger - Tracing (from Istio)
      15. Fission - serverless functions
      16. Redis - K/V Caching
      17. Livekit- streaming platforms
      18. Postgres - Relational DB
      19. Longhorn - Block storage
      20. Rook Ceph - Object Storage
      21. Keycloak - user provisioning and SSO 
      22. SpiceDB - user ACLs
      23. OpenFeature - Feature Flags
      24. LaunchDarkly- User segmentation
      25. AppSmith - low-code environment for non-engineers
      26. Ollama Operator
   2.  Kind
      1.  Some of the above in a local development environment
   3. Notebooks w/ read access to all Relational DBs
