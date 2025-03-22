import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirrame, 'index.html'),
                history: resolve(__dirrame, 'history.html'),
            },
        },
    },
});