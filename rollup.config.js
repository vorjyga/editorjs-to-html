import babel from "@rollup/plugin-babel";
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: "./src/app.ts",
    output: [{
            file: "./build/Parser.node.js",
            format: "cjs",
            name: "edjsParser",
        },
        {
            file: "./build/Parser.esm.js",
            format: "esm",
            name: "edjsParser",
        },
        {
            file: "./build/Parser.browser.js",
            format: "iife",
            name: "edjsParser",
        },
    ],
    plugins: [babel(), terser(), typescript()],
};
