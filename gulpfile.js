var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    //pega todos os arquivos .js que estão na pasta src   
    gulp.src('src/js/*.js')
        .pipe(concat('main.js')) //contatena em um arquivo chamado main.js       
        .pipe(uglify())//minifica tudo       
        .pipe(gulp.dest('js'));//e manda para a pasta js 

    gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});