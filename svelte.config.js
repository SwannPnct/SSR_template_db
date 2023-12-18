import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		env: {
			privatePrefix: 'PRIVATE_'
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;
