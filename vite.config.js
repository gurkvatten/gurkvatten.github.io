// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        react(),
        tailwindcss({
            // LÄGG TILL DENNA 'content' SEKTION
            content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}", // Skanna alla dina React-komponenter i src/
            ],
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    server: {
        mimeTypes: {
            'text/javascript': ['jsx']
        }
    }
});