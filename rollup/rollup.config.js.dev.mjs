// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import taichi from "rollup-plugin-taichi"

export default {
  input: 'src/index.js',
  output: [
    {
      file: "dist/index.js",
      format: 'es',
    },
  ],
  plugins: [
    taichi(),
    commonjs(),
    resolve({
      browser: true
    }),
  ]
};