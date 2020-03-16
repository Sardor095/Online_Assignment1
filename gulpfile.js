const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');


gulp.task('hello', function(done){
  console.log('hello Sardor'); done();
});

// Copy all html files

gulp.task('copyHtml', function(done){
  gulp.src('src/*html')
  .pipe(gulp.dest('dist'));
  done();
});

// Optimize images
gulp.task ('imageMin', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

// minify JS

gulp.task('minify', function(done){
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
    done();
});

//Compile SASS

gulp.task('sass', function(done){
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
  done();
});



gulp.task('watch', function(){
  gulp.watch('src/images/*',gulp.series['imageMin']);
  gulp.watch('src/sass/*.scss',gulp.series['sass']);
  gulp.watch('src/images/*.html',gulp.series['copyHtml']);

});
