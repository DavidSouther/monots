"Simple" Typescript CRA with Typescript local dependency.

What needs to happen!?

Currently:

1. `(cd common ; npx tsc)`
2. `(cd server ; npm install; npx tsc)`
3. `(cd app ; npm start)`

Step 2 fails with:

```
src/index.ts:3:24 - error TS2307: Cannot find module 'common/assert' or its corresponding type declarations.

3 import { assert } from "common/assert";
                         ~~~~~~~~~~~~~~~


Found 1 error.
```

Step 3 fails with:

```
Failed to compile.

./src/index.tsx
Module not found: Can't resolve 'common' in '/Users/dsouther/devel/monots/app/src'
```

What should happen?

For step 2:
This should compile app/src/index.ts to app/lib/index.js, which itself should be executable.

For step 3:
This should find `common/lib/index.js` etc and load them.
