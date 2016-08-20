var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var inlineAssets = require('gulp-inline-assets');
var inlineimg = require('gulp-inline-image-html');

gulp.task('default', ['inline-html-images']);

gulp.task('inline-html-images', ['inline-source'], function() {
    gulp.src('out/**/*.html')
        .pipe(inlineimg('src/')) // takes in the directory to use as the root when looking for images 
        .pipe(gulp.dest('out/'));
});

gulp.task('inline-source', ['inline-assets'], function() {
    return gulp.src('./src/*.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./out'));
});

gulp.task('inline-assets', function() {
    return gulp.src('./src/css/*.css')
        .pipe(inlineAssets({
            ignoreErrors: false
        }))
        .pipe(gulp.dest('./out/'));
})

