import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const env = process.env.NODE_ENV || 'development';
const config = {
  input: 'src/index.js',
  output: {
    name: 'library',
    file: pkg.browser,
    format: 'umd',
  },
  plugins: [
    resolve(),
    babel({ babelrc: true }),
    commonjs(),
    replace({
      __DEV__: (env === 'development'),
      __PROD__: (env === 'production'),
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
    }),
  );
}

export default config;
