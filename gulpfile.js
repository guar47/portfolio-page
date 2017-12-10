const gulp = require('gulp');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

const paths = {
    html: ['index.html'],
    css: ['css/main.css'],
};

gulp.task('css', () => gulp.src(paths.css)
    .pipe(reload({
        stream: true,
    })));

gulp.task('html', () => gulp.src(paths.html)
    .pipe(reload({
        stream: true,
    })));

gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: './',
        },
        port: 8080,
        open: true,
        notify: false,
    });
});

gulp.task('watcher', () => {
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watcher', 'browserSync']);