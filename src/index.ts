const Router = ({ base = '', routes = [], ...other } = {}) => ({
	// This is simplified version of what itty-router does:
	// https://github.com/kwhitley/itty-router/blob/3a819942b11ba85bf8ac8dfbb37b4c98f977fb41/src/Router.ts#L15
	// !!! NOTE: Changing this to anything other than `__proto__` avoids the issue.
	__proto__: new Proxy(
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

// ??? Doing it synchronously works fine
export const fetchWithSyncRouter = async () => {
	console.log('[inside fetchWithSyncRouter]');
	const router = createRouter();

	console.log('[before returning Response]');
	// You will see this response:
	return new Response('Hello from fetchWithSyncRouter');
};

// !!! Doing it asynchronously does not work!
export const fetchWithAsyncRouter = async () => {
	console.log('[inside fetchWithAsyncRouter]');
	const router = await createAsyncRouter();

	// it does not matter if you use the router or not!

	console.log('[before returning Response]');
	// You will never see this response:
	return new Response('Hello from fetchWithAsyncRouter');
};
