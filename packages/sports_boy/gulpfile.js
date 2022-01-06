const { src, watch, dest,series} = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const clean = require('gulp-clean');
function cleanDist(){
  return src('./dist', {read: false})
  .pipe(clean());
}
function buildStyles() {
  return src("./src/theme/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss())
    .pipe(dest("./dist/theme"));
}

function copyFont(){
  return src("./src/theme/font/*").pipe(dest("./dist/theme/font"))
}
exports.build = series(cleanDist,buildStyles,copyFont);
exports.watch = function () {
  watch("./src/theme/*.scss", { ignoreInitial: false }, series(cleanDist,buildStyles,copyFont));
};
