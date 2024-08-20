import handler from './index';

const main = async () => await handler.fetch(new Request(new URL('https://www.shopify.com')), {}, {} as any);

main();
