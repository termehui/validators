import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, "src", "validators.ts"),
            name: "validators",
            fileName: (format) => `validators.${format}.js`,
        },
        rollupOptions: {
            external: ["@termehui/date-utils", "yup"],
        },
    },
    plugins: [dts({ rollupTypes: true })],
});
