module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-url")(),
    require("postcss-cssnext")(),
    require("precss")(),
    require("postcss-nesting"),
    require("postcss-custom-media")(),
    require("postcss-font-awesome")(),
    require("postcss-modules")({generateScopedName: "[local]"}),
    require("postcss-reporter")()
  ]
};
