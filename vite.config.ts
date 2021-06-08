import { defineConfig } from "vite"
import path from "path"
import dts from "vite-plugin-dts"

const dirname = path.join(path.dirname(""))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [dts()],
    build: {
        lib: {
            fileName: "viteproject",
            formats: ["es", "cjs", "umd", "iife"],
            entry: path.resolve(__dirname, "src/main.ts"),
            name: "viteproject"
        }
    },
    resolve: {
        alias: {
            "/@": path.resolve(dirname, "src")
        }
    }
})
