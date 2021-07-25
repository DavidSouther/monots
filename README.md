"Simple" Typescript CRA with Typescript local dependency.

What needs to happen!?

Currently:

1. `(cd common ; npx tsc)`
2. `(cd server ; npx tsc)`

```
src/index.ts:1:24 - error TS2307: Cannot find module 'common/assert' or its corresponding type declarations.

1 import { assert } from "common/assert";
                         ~~~~~~~~~~~~~~~


Found 1 error.
```

What should happen?

This should compile app/src/index.ts to app/lib/index.js, which itself should be executable.