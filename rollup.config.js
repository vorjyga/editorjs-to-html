const babel = require("@rollup/plugin-babel")
const terser = require("@rollup/plugin-terser");
const typescript = require("@rollup/plugin-typescript");
const pcss = require("rollup-plugin-postcss");

module.exports = {
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
    plugins: [
        pcss({
            plugins: [
                require('postcss-import'),
                require('postcss-mixins'),
                require('autoprefixer'),
                require('cssnano'),
                require('postcss-nested'),
                require('postcss-nesting'),
                require('postcss-simple-vars'),
                require('postcss-custom-media'),
            ]
        }),
        typescript(),
        babel(),
        terser(),
    ],
};
