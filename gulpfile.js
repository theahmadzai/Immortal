var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    livereload  = require('gulp-livereload');

//JavaScript
gulp.task('scripts', function() {
    return gulp.src('./Immortal/Views/assets/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload());
});

//CSS
gulp.task('styles', function() {
    return gulp.src('./Immortal/Views/assets/sass/app.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

//Watch for changes
gulp.task('watch', function() {
    livereload.listen();

    gulp.watch('./Immortal/Views/assets/scripts/**/*.js', ['scripts']);
    gulp.watch('./Immortal/Views/assets/sass/**/*.sass', ['styles']);

    var files = [
        './public/index.php',
        './Immortal/**/*.*',
        './vendor/theahmadzai/immortal-framework/immortal/**/*.php'
    ];

    gulp.watch(files, function(file){
        livereload.reload(file.path);
    });
});

gulp.task('default', ['watch', 'scripts', 'styles']);
