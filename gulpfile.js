const gulp   = require( 'gulp' ),
      babel  = require( 'gulp-babel' ),
      concat = require( 'gulp-concat' ),
      sass   = require( 'gulp-sass' );

sass.compiler = require( 'node-sass' );

const cssFiles = [
  'source/sass/**/*.scss'
];

const jsFiles = [
  'source/js/**/*.js'
];

gulp.task( 'sass', function () {
  return gulp.src( cssFiles )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( concat( 'tamagotchi.min.css' ) )
    .pipe( gulp.dest( 'docs/build/css' ) );
} );

gulp.task( 'js', function() {
  return gulp.src( jsFiles )
        .pipe( babel( { presets: [ 'minify' ] } ) )
        .pipe( concat( 'tamagotchi.min.js' ) )
        .pipe( gulp.dest( 'docs/build/js' ) );

});

gulp.task( 'default', gulp.series( 'sass', 'js' ) );
