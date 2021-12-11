const { src, watch, dest } = require("gulp")
var postcss = require('gulp-postcss');
var sass = require('gulp-sass')(require('sass'));
function buildStyles() {
    return src('./src/theme/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss())
        .pipe(dest('./theme'));
};

exports.build = buildStyles;
exports.watch = function () {
    watch('./src/theme/*.scss',{ ignoreInitial: false }, buildStyles);
};