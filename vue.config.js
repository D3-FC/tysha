module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/sass/variables.scss";
        @import "@/assets/sass/mixins.scss";
        @import "@/assets/sass/classes.scss";
        `
      }
    }
  }
}
