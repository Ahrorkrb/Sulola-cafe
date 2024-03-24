var gulp = require('gulp'); //gulp o'rnatish
var autoPrefixer = require('gulp-autoprefixer'); //-webkit qo'yib berish
var csso = require('gulp-csso'); // 1 qator qilib beradi



gulp.task('style', style);

function style(){
    return gulp.src('./blacksheet') //o'qib  
    .pipe(autoPrefixer({
        browsers: ['last 50 versions'],
        cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('./Css/style.css')) // yozib


}