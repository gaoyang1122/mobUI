

const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");

//* nested：嵌套缩进的css代码，它是默认值。
//* expanded：没有缩进的、扩展的css代码。
//* compact：简洁格式的css代码。
//* compressed：压缩后的css代码。
gulp.task('sass', function(){
    //sass()方法用于转换sass到css
    return gulp.src('src/scss/bootstrap.scss')
        // .pipe(sass({outputStyle: 'nested'}))
        // .pipe(rename({suffix: '-4.0'}))
        .pipe(sass())
        .pipe(rename('bootstrap-4.0.css'))
        .pipe(gulp.dest('build'))
});




//Watching Sass files for changes
gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);
    // Other watchers
});

// Gulp 必须有一个default任务
// 在default任务中，将任务的名称放到数组中执行即可
// default任务相当于程序入口
gulp.task('default', [
    'sass'
]);






































// gulpfile.js
// const gulp = require('gulp');
// const clean = require('del');
// const ejs = require('gulp-ejs');
// const less = require('gulp-less');
// const jsmin  = require('gulp-jsmin');
// const minifyCSS = require('gulp-csso');
//
// gulp.task('html', function(){
//     return gulp.src('src/*.html')
//         .pipe(ejs({
//             title: '首页',
//             message: 'gulp 测试页面'
//         }))
//         .pipe(gulp.dest('build'))
// });
//
// gulp.task('css', function(){
//     return gulp.src('src/*.less')
//         .pipe(less())
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('build'))
// });
//
// gulp.task('js', function () {
//     gulp.src(['src/*.js'])
//         .pipe(jsmin())
//         .pipe(gulp.dest('build'))
// });
//
// gulp.task('clean', function () {
//     clean(['build']);
// });
//
// gulp.task('clone', function () {
//     gulp.src(['static/**'])
//         .pipe(gulp.dest('build/static/'))
// });
//
// gulp.task('default', ['clean', 'clone', 'html', 'css', 'js' ]);