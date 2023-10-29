import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@scss': path.resolve(__dirname, './src/scss'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: [react()],
});
