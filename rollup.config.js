import pkg from './package.json'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
const extensions = ['.js', '.jsx', '.ts', '.tsx']

/** @type {import('rollup').RollupOptions} */

export default {
	input: 'src/main.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	// output: {
	// file: 'bundle.js',
	// format: 'cjs',
	// format: 'umd',
	// name: 'parallaxing',
	// },
	plugins: [
		resolve({ extensions }),
		commonjs(),
		babel({
			extensions,
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
		}),
		terser(),
		json(),
	],
	external: ['react', '@emotion/core', '@emotion/styled'],
}