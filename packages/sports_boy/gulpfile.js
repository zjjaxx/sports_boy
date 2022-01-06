const { src, watch, dest,series} = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const clean = require('gulp-clean');
const {existsSync}=require("fs")
const path =require("path")
function cleanDist(cb){
  const isExists=existsSync(path.resolve(__dirname,"./theme"))
  if(!isExists){
    cb();
    return false
  }
  return src('./theme', {read: false})
  .pipe(clean());
}
function buildStyles() {
  return src("./src/theme/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss())
    .pipe(dest("./theme"));
}

function copyFont(){
  return src("./src/theme/font/*").pipe(dest("./theme/font"))
}
exports.build = series(cleanDist,buildStyles,copyFont);
exports.watch = function () {
  watch("./src/theme/*.scss", { ignoreInitial: false }, series(cleanDist,buildStyles,copyFont));
};
