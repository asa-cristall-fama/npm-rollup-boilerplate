import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;
const config = {
  format: 'umd',
  moduleName: 'Library',
  plugins: [
    nodeResolve({
      jsnext: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
};

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    })
  );
}

export default config;
// import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';
// import babelrc from 'babelrc-rollup';
// import commonjs from 'rollup-plugin-commonjs';
// import pkg from './package.json';

// const external = Object.keys(pkg.dependencies);

// const plugins = [
//   babel(babelrc()),
//   commonjs(),
//   resolve({
//     jsnext: true,
//     main: true,
//     browser: true,
//   }),
// ];

// export default {
//   input: 'src/index.js',
//   output: {
//     file: 'dist/index.min.js',
//     name: 'library',
//     format: 'umd',
//     sourcemap: 'inline',
//   },
//   plugins,
// };

// // export default {
// //   entry: 'src/index.js',
// //   plugins,
// //   external,
// //   targets: [
// //     {
// //       dest: 'dist/index.js',
// //       format: 'umd',
// //       moduleName: 'index',
// //       sourceMap: true,
// //     },
// //     {
// //       dest: 'dist/index.mjs',
// //       format: 'es',
// //       sourceMap: true,
// //     },
// //   ],
// // };
