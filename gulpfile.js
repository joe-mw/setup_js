// Preprocessor directives --sort of
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// Gulp Dependencies go here

gulp.task('default', function() {
    // gulp tasks go here
    
    // Run ESlint
    gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
        .pipe(eslint()) 
        .pipe(eslint.format());

    // Node source
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    // Browser Source
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));    
});

/*
    Here's what's going on here,
        - The code will first be passed through a linter, to iron it out.
        - Next, the source filter will pick up all .js files in es6 and all 
          sud dirs thereof, no matter how deep. 
        - The source filter will pipe those files to babel which is what does
          the actual transformation.
        - Finally, pipe the compiled ES5 to its destination, the dist directory
        
        * Also to make sure to preserve the names of the files that are converted.
        
        * Testing these settings is encouraged.      
*/
