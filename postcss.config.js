/* eslint-disable */

module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}), // keep this first
    require('cssnano')({
      preset: 'default',
    }),
    require('autoprefixer'), // so imports are auto-prefixed too
  ],
};
