var gulp = require('gulp');
gulp.task('moveJquery',function () {
    return gulp.src('node_modules/jquery/*/*')
        .pipe(gulp.dest('public/libs/jquery/'));
});
gulp.task('moveBootstrap',function () {
    return gulp.src('node_modules/bootstrap/*/*/*')
        .pipe(gulp.dest('public/libs/bootstrap/'));
});