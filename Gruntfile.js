/***** Gruntfile.js *****/
module.exports = function (grunt) {
  /* ... */

  grunt.initConfig({
    dump_dir: {
      fonts: {
        options: {
          pre: "this.pdfMake = this.pdfMake || {}; this.pdfMake.vfs = ",
          rootPath: "./src/assets/examples/fonts/",
        },
        files: {
          "./node_modules/pdfmake/build/vfs_fonts.js": [
            "./src/assets/examples/fonts/*",
          ],
          // "./dist/build/vfs_fonts.js": ["./src/assets/examples/fonts/*"],
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-dump-dir");

  /* ... */
};
