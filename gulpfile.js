/* eslint-env node */
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');

// Source maps are files that associate line numbers from the processed file 
// to the original.
const sourcemaps = require('gulp-sourcemaps');

// prefixes css with cross-browser supported standards
const autoprefixer = require('gulp-autoprefixer');

// transpiler to convert ES6 code to ES5 which is widely
// supported accross multiple browsers.
const babel = require('gulp-babel');

// allows jasmine tests to be run headlessly in the browser
const jasmineBrowser = require('gulp-jasmine-browser');

// browser - sync enables live editing
const browserSync = require('browser-sync').create();

gulp.task('lint', () => {
    return gulp.src(['js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
        .pipe(browserSync.stream());
});

gulp.task('styles', () => {
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('styles-dist', () => {
    gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', () => {
    gulp.src('js/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', () => {
    gulp.src('js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-html', () => {
    gulp.src('index.html')
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
});

gulp.task('copy-fonts', () => {
    gulp.src('fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('dist',[
    'styles',
    'styles-dist',
    'copy-html',
    'copy-fonts'
]);

gulp.task('tests', () => {
    gulp.src('jasmine/spec/feedreader.js')
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({port : 3001}));
});

gulp.task('default', ['lint', 'tests', 'styles', 'styles-dist', 'copy-html', 'copy-fonts','scripts', 'scripts-dist'],
    ()=> {
        browserSync.init({
            // automatically watch for html/css/js changes. Some directories will be
            // ignored automatically such as node_modules .vscode .git .idea
            watch : true,
            server: './'
        });
    });