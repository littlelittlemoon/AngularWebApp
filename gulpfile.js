var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
    srcPath: 'src/',    //源文件环境目录
    devPath: 'build/',  //生产环境目录
    prdPath: 'dist/'    //开发环境目录
};

gulp.task('lib', function(){
    gulp.src('bower_components/**/*')    //将bower_components目录下的js文件拷贝到build和dist目录下
    .pipe(gulp.dest(app.devPath + 'vendor'))
    .pipe(gulp.dest(app.prdPath + 'vendor'))
    .pipe($.connect.reload());
});

gulp.task('html', function(){
    gulp.src(app.srcPath + '**/*.html')
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload());
});

gulp.task('json', function(){
    gulp.src(app.srcPath+'data/**/*.json')
    .pipe(gulp.dest(app.devPath + 'data'))
    .pipe(gulp.dest(app.prdPath + 'data'))
        .pipe($.connect.reload());
});

gulp.task('less', function(){
    gulp.src(app.srcPath + 'style/index.less')
    .pipe($.less())     //编译
    .pipe(gulp.dest(app.devPath + 'css'))
    .pipe($.cssmin())   //压缩
    .pipe(gulp.dest(app.prdPath + 'css'))
        .pipe($.connect.reload());
});

gulp.task('js', function(){
    gulp.src(app.srcPath + 'script/**/*.js')
    .pipe($.concat('index.js'))     //合并
        .pipe(gulp.dest(app.devPath + 'js'))
        .pipe($.uglify())   //压缩
        .pipe(gulp.dest(app.prdPath + 'js'))
        .pipe($.connect.reload());
});

gulp.task('image', function(){
    gulp.src(app.srcPath + 'image/**/*')
        .pipe(gulp.dest(app.devPath + 'image'))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.prdPath + 'image'))
        .pipe($.connect.reload());  //IE8以下不支持， 自动刷新页面
});

gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json']);

gulp.task('clean', function(){
   gulp.src([app.devPath, app.prdPath])
       .pipe($.clean());
});

gulp.task('server',['build'], function(){
    $.connect.server({
        root:[app.devPath],
        livereload: true,       //IE8以下不支持， 自动刷新页面
        port:1234
    });

    open('http://localhost:1234');
    //当修改下列内容则会自动启动构建工具，构建代码
    gulp.watch('bower_components/**/*', ['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
    gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'image/**/*', ['image']);

});

gulp.task('default', ['server']);  //gulp 默认任务