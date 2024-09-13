# Node `Object.__proto__` bug reproduction

This repository is a reproduction of an error that occurs when using `Object.__proto__` in a Node.js environment.

This was first discovered while generating a router asynchronously via `itty-router` from within a Cloudflare Worker, but this minimal reproduction shows the issue is not specific to `itty-router` or Cloudflare Workers.

## Bug

When using `Object.__proto__` in a Node.js environment, the execution never gets to the point where a response is returned as shown in this reproduction.

## Reproduction

To reproduce the bug, run the following commands:

```bash
npm install
npm start
```

To toggle the bug, switch between using `createAsyncRouter` and `createRouter` with the following commands:

```bash
npm run sync
npm run async
```

Just by calling `createAsyncRouter` instead of `createRouter`, the error is shown -- even if you don't use the returned value.
