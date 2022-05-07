// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: "dist/index.ts",
      format: 'es',
    },
  ],
  plugins: [
    commonjs(),
    resolve({
      browser: true
    }),
    terser(),
    typescript(),
  ]
};