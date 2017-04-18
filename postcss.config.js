module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-url")(),
    require('postcss-cssnext')(),
    require('precss')(),
    require('postcss-custom-media')(),
    require('postcss-font-awesome')(),
    require('postcss-reporter')(),
    require('postcss-modules')({generateScopedName: '[local]'})
  ]
};
