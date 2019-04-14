# Node TS Starter

## Description 
A boilerplate template for a RESTFUL api backend using MongoDB and Node.JS using TypeScript

TypeScript compiles to JavaScript, but development can be run using the package `ts-node` without going through compilation.

However, deployment requires compilation to JavaScript for performance's sake, so `tsc` is used to compile the code to JavaScript to be run on the Node Runtime.

## How to run

run `npm i` and then run `npm run build` to compile the TypeScript to JavaScript

Run `npm run prod` to launch the compiled Node code.

## Libraries used
- Winston: Logger
- Mongoose: MongoDB Connector
- TS-Node: Node Runtime for TypeScript
- Signale: Simplified console logger
- Chalk: Coloured console logging
- Node Cache: Caching for incoming request

## Remarks on TypeScript's Type Coverage
While popular NPM packages do have type coverage for typescript by installing the package @types/\<package name>, It is far from perfect and requires some elbow grease (self definitions) for it to work right.

More information on how to handle this can be found in section # Handling TypeScript Type Completion Gaps

## Handling TypeScript Type Completion Gaps
Sometimes Type completion might be lacking for TypeScript types (the library maintainers should have a more robust @types support). 
Other times, its that the libraries that TypeScript uses to compile to JS does not have updated typings for a particular type (e.g. Promises), and can be solved by going into `tsconfig` and include `es2017` in the `lib` options.

To solve this, you need to declare the namespace for that type globally, and import it (if not declared in the same file)

See `./helpers/response/index.ts` for more information