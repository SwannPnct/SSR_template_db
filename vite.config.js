import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		alias: [{ find: /^svelte$/, replacement: 'svelte/internal' }],
		setupFiles: './setupTest.js',
		coverage: {
			provider: 'v8',
			reporter: ['text-summary', 'cobertura', 'html'],
			enabled: true
		}
	},
	server: {
		open: true
	}
});
