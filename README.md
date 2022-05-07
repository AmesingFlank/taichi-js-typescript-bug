

## To Repro

Build using one of the 4 build flavours, and then `npm run start` and visit http://127.0.0.1:8080

There are 4 different build flavors here
* `npm run build_js_dev`: Javascript dev version
* `npm run build_js_prod`: Javascript prod version
* `npm run build_ts_dev`: Typescript dev version
* `npm run build_ts_prod`: Typescript prod version

The 1st one is the only one that works, becasue the GPU kernel doesn't go through any transpiler/mimifier.

To make the typescript dev version work, a simple work around would be to replace `ti.ndrange()` with just `ndrange`, the taichi.js compiler recognizes even without the `ti.`, but typescript no longer recognizes this function, so it doesn't attempt to rename it anymore.

For the prod versions, the only work around for now seems to be using raw strings for the kernels.

