import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';
import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),

		// 🔥 Build-time image compression
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 75, // ideal for photos
			},
			pngquant: {
				quality: [0.65, 0.8],
				speed: 4,
			},
			svgo: false,
		}),
	],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},

	test: {
		environment: 'jsdom',
		setupFiles: './src/tests/setup.ts',
	},
});
