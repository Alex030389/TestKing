var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rigger = require('gulp-rigger'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),

    notify = require('gulp-notify'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),

    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant');

gulp.task('browser-sync', function () {
  browserSync({
    server: 'dist',
    notify: true,
    // open: false,
    // online: false, // Work Offline Without Internet Connection
    // tunnel: true
  })
});

// gulp.task('clean', function () {
//   return del(['dist/css/', 'dist/js/']);
// });

gulp.task('clean', function () {
  return del('dist');
});


gulp.task('html', function () {
  return gulp.src([
      '!src/pages/modules/**/*.html',
      'src/pages/*.html'
    ])
    .pipe(rigger())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
});

gulp.task('fonts', function () {
  return gulp.src('src/design/fonts/**/*')
    .pipe(gulp.dest('dist/design/fonts/'))
});

gulp.task('css:libs', function () {
  return gulp.src('src/design/styles/libs.scss')
    .pipe(sass())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cleancss())
    .pipe(gulp.dest('dist/design/css/'))
    .pipe(browserSync.stream())
});

gulp.task('css', function () {
  return gulp.src('src/design/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on("error", notify.onError()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/design/css/'))
    .pipe(browserSync.stream())
});

gulp.task('css:host', function () {
  return gulp.src('src/design/styles/main.scss')
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss())
    .pipe(gulp.dest('s:/host02/design/css'))
});

gulp.task('css:build', function () {
  return gulp.src('src/design/styles/main.scss')
    .pipe(sass().on("error", notify.onError()))
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss())
    .pipe(gulp.dest('dist/design/css/'))
    .pipe(browserSync.stream())
});

gulp.task('css:build-host', function () {
  return gulp.src('src/design/styles/main.scss')
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss())
    .pipe(gulp.dest('s:/host02/design/css'))
});

gulp.task('js:libs', function () {
  return gulp.src([
      // 'node_modules/jquery/dist/jquery.min.js',
      // 'node_modules/svg4everybody/dist/svg4everybody.min.js',
      // 'node_modules/selectric/public/jquery.selectric.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
      'node_modules/plyr/dist/plyr.polyfilled.min.js',
      'node_modules/plyr/dist/plyr.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/design/js/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function () {
  return gulp.src([
      'src/design/js/main.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/design/js/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// gulp.task('js:host', function () {
//   return gulp.src([
//       'src/design/js/main.js',
//     ])
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(concat('main.min.js'))
//     .pipe(gulp.dest('s:/host02/design/js/'))
// });

gulp.task('js:build', function () {
  return gulp.src([
      'src/design/js/main.js'
    ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/design/js/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js:build-host', function () {
  return gulp.src([
    'src/design/js/main.js'
  ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('s:/host02/design/js/'))
});

gulp.task('img', function () {
  return gulp.src([
      'src/design/images/**/*.{png,jpg,gif,svg}'
    ])
    .pipe(gulp.dest('dist/design/images/'));
});

gulp.task('img:build', function () {
  return gulp.src([
      'src/design/images/new/**/*.{png,jpg,gif,svg}'
    ])

    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminJpegRecompress({
        loops: 5,
        min: 75,
        max: 80,
        quality: 'medium'
      }),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({speed: 5}),
      imagemin.svgo()
    ], {
      verbose: true
    }))

    .pipe(gulp.dest('dist/design/images/new/'));
});

gulp.task('watch', function () {
  gulp.watch('src/pages/**/*.html', gulp.series('html'));
  gulp.watch('src/design/styles/**/*.scss', gulp.series('css'));
  gulp.watch('src/design/styles/**/*.scss', gulp.series('css:build-host'));
  gulp.watch('src/design/js/**/*.js', gulp.series('js'));
  // gulp.watch('src/design/js/**/*.js', gulp.series('js:build-host'));
});

gulp.task('default', gulp.series(
  'clean',
  'img',
  gulp.parallel(
    'html',
    'fonts',
    'css:libs',
    'css',
    // 'css:build-host',
    'js:libs',
    'js',
    // 'js:build-host',
    'watch',
    'browser-sync'
  )));

gulp.task('build', gulp.series(
  'clean',
  'img:build',
  gulp.parallel(
    'html',
    'fonts',
    'css:libs',
    'css:build',
    'js:libs',
    'js:build',
    // 'watch',
    // 'browser-sync'
  )));
