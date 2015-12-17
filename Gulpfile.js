var gulp = require( "gulp" );
var sass = require( "gulp-sass" );
var concat = require( "gulp-concat" );
var rename = require( "gulp-rename" );
var uglify = require( "gulp-uglify" );
var mocha = require( "gulp-mocha" );
var browserSync = require( "browser-sync" );
var minify = require( "gulp-minify-css" );

gulp.task( "styles", function() {
  gulp.src( "src/sass/**/*.scss" )
    .pipe( sass().on( "error", sass.logError ) )
    .pipe( minify() )
    .pipe( rename( {
      suffix: ".min"
    } ) )
    .pipe( gulp.dest( "./app/css/" ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( "scripts", function() {
  gulp.src( "src/js/**/*.js" )
    .pipe( concat( "scripts.js" ) )
    .pipe( gulp.dest( "./app/js/" ) )
    .pipe( uglify() )
    .pipe( rename( {
      suffix: ".min"
    } ) )
    .pipe( gulp.dest( "./app/js/" ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );;
} );

gulp.task( "watch", [ "styles", "scripts" ], function() {
  gulp.watch( "src/js/**/*.js", [ "scripts" ] );
  gulp.watch( "src/sass/*.scss", [ "styles" ] );
} );

gulp.task( "tests", function() {
  gulp.src( "test/test.js", { read: false } )
    .pipe( mocha( { reporter: "spec" } ) );
} );

gulp.task( "browser-sync", [ "watch" ], function() {
  browserSync.init( {
    files: [ "app/**" ],
    proxy: "localhost:3000",
    port: 4000,
    browser: [ "google chrome" ]
  } );
} );

gulp.task( "default", [ "styles", "scripts", "tests" ] );
