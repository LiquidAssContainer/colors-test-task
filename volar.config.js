const sassFormatter = require('@volar-plugins/sass-formatter');
const prettier = require('@volar-plugins/prettier');
const pugBeautify = require('@volar-plugins/pug-beautify');

module.exports = {
  plugins: [sassFormatter(), prettier(), pugBeautify()],
};
