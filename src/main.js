import { fetchWithAsyncRouter, fetchWithSyncRouter } from './index.js';

const main = async () => {
  // Toggle between sync and async (default) by passing '--sync' or nothing
  const fn = process.argv[2] === '--sync' ? fetchWithSyncRouter : fetchWithAsyncRouter;

  const response = await fn();
  console.log(`Response: ${await response.text()}`);
};

main();
