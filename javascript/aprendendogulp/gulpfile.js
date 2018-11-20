var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    csslint = require('gulp-csslint'),
    autoPrefixer = require('gulp-autoprefixer');

gulp.task('default',['copy'],function(){
    
    gulp.start('build-img','usemin');
    gulp.start('server');

});

const diretorioFinal = 'public/dist';

gulp.task('copy', ['clean'],function(){

 return  gulp.src('src/**/*')
  .pipe(gulp.dest(diretorioFinal));

});


gulp.task('clean',function(){
  return gulp.src(diretorioFinal)
  .pipe(clean());

});

gulp.task('build-img',['copy'],function(){
  return gulp.src(diretorioFinal + '/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(diretorioFinal + '/img'));
});


gulp.task('usemin',['copy'],function(){
    return gulp.src(diretorioFinal + '/**/*.html')
          .pipe(usemin({
            'js' : [uglify],
            'css': [autoPrefixer, cssmin]
          }))
          .pipe(gulp.dest(diretorioFinal));

});


gulp.task('server',function(){

    browserSync.init({
      server:{
        baseDir: 'src'
        // proxy: 'localhost:3000'
      }
    });

    gulp.watch('src/js/*.js').on('change', function(event){
      gulp.src(event.path).pipe(jshint()).pipe(jshint.reporter(jshintStylish));
    });

    gulp.watch('src/css/*.css').on('change', function(event){
      gulp.src(event.path).pipe(csslint()).pipe(csslint.formatter());
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);

})

// gulp.task('build-js',['copy'],function(){
//   return gulp.src([
//     diretorioFinal + '/js/jquery.js',
//     diretorioFinal + '/js/home.js',
//     diretorioFinal + '/js/produto.js'])
//     .pipe(concat('all.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest(diretorioFinal + '/js'));
// });

// gulp.task('build-html',['copy'],function(){

//     return gulp.src(diretorioFinal + '/**/*.html')
//     .pipe(htmlReplace({
//       'js' : 'js/all.js'
//     }))
//     .pipe(gulp.dest(diretorioFinal));

// });