/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// import { Router, RouterType } from 'itty-router';

const Router = ({ base = '', routes = [], ...other } = {}) => ({
	// This is simplified version of what itty-router does:
	// https://github.com/kwhitley/itty-router/blob/3a819942b11ba85bf8ac8dfbb37b4c98f977fb41/src/Router.ts#L15
	notUsingProtoWorksFine: new Proxy(
		{},
		{
			get: (target, prop, receiver) => () => receiver,
		}
	),
	routes,
	...other,
});

const createRouter = () => {
	const router = Router();
	return router;
};

const createAsyncRouter = async () => {
	return new Promise<any>((resolve, reject) => {
		const router = Router();
		resolve(router);
	});
};

export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log('[inside fetch]');
		// !!! Doing it synchronously works fine!
		// const router = createRouter();

		console.log('[before createAsyncRouter]');

		// !!! Doing it asynchronously does not work!
		const router = await createAsyncRouter();

		console.log('[before returning Response]');
		return new Response('Hello World! ...');
	},
} satisfies ExportedHandler<Env>;
