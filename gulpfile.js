//引入gulp，项目文件中安装的gulp的引入方式 
var gulp =require('gulp');
const rename = require("gulp-rename")

//引入gulp-sass包
var sass = require('gulp-sass')
//编译sass
gulp.task('sass',function(){
	return gulp.src(['./**/*.scss','!./node_modules/**/*.scss'])
			.pipe(sass().on('error',sass.logError))
			.pipe(rename((path)=>path.extname = '.wxss'))
			.pipe(gulp.dest('./'));
})

//检测文件变化
gulp.task('watch',function(){
	gulp.watch('./**/*.scss',['sass'])
})
// 定义默认任务
gulp.task('default', ['watch'], function () {
  console.log('====编译sass success ====')
})
