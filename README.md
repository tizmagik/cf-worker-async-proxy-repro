# CF Worker + Async Proxy Error Reproduction

This repository is a reproduction of an error that occurs when using Cloudflare Workers with an async proxy.

## Error

When using an async proxy in a Cloudflare Worker, the following error is thrown:

```
Error: The script will never generate a response.
    at async Object.fetch (file:///Users/jeremygayed/src/repro/node_modules/miniflare/dist/src/workers/core/entry.worker.js:1026:22)
```

## Reproduction

To reproduce the error, run the following commands:

```bash
npm install
npm run start
```

To toggle the error, switch between using `createAsyncRouter` and `createRouter`.

Just by calling `createAsyncRouter` instead of `createRouter`, the error is shown -- even if you don't use the returned value.
