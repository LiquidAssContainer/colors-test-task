const sassFormatter = require('@volar-plugins/sass-formatter');
const prettier = require('@volar-plugins/prettier');

module.exports = {
  plugins: [sassFormatter(), prettier()],
};
