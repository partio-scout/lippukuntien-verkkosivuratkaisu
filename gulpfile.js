// Do we have args?
let skipImages = false;

for (let n = 3; n < process.argv.length; n++) {
    switch(process.argv[n]) {
    case '--lite':
    case '-l':
        skipImages = true;
        break;
    case '--imagemin':
    case '-m':
        skipImages = false;
        break;
    case '--inline':
    case '-i':
        inline = true;
        break;
    }
}

// Here we go
const gulp = require('gulp');

// Add needed plugins
const plumber         = require('gulp-plumber'),
      sass            = require('gulp-sass'),
      postcss         = require('gulp-postcss'),
      sourcemaps      = require('gulp-sourcemaps'),
      autoprefixer    = require('autoprefixer'),
      imagemin        = require('gulp-imagemin'),
      cssnano         = require('gulp-cssnano'),
      concat          = require('gulp-concat'),
      rimraf          = require('rimraf'),
      webpackStream   = require('webpack-stream'),
      webpack         = require('webpack'),
      named           = require('vinyl-named'),
      imports         = require('imports-loader'),
      babelLoader     = require('babel-loader'),
      VueLoaderPlugin = require('vue-loader/lib/plugin');

// Build folders
const dir_dev     = './dev/',
      dir_dist    = './dist/';

// Common webpack options for dev/dist
const webpackOptions = {
    externals: {
        jquery: 'jQuery'
    },
    plugins : [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        fallback: {
            './components/all': './dummy/components/all.js'
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    output : { filename: '[name].js' }
};

// Build js to dev directory
function devJs () {

    webpackOptions.devtool = 'source-map';
    webpackOptions.mode = 'development';

    return gulp.src('js/*.js')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(named())
        .pipe(webpackStream(webpackOptions, webpack))
        .pipe(gulp.dest(dir_dev+'js'));
}

// Watch js and build to dev directory
function watchJs () {

    webpackOptions.watch = true;

    return devJs();

}

// Compile sass to css and run autoprefixer
function devSass () {
    return gulp.src(['./sass/*.scss', '!./sass/admin.scss', '!./sass/editor-style.scss'])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['sass/dummy']
        }))
        .pipe(postcss(
            [ autoprefixer() ]
        ))
        .pipe(sourcemaps.write('./sourcemaps/'))
        .pipe(gulp.dest(dir_dev+'stylesheets'));
}

function adminSass () {
    return gulp.src(['./sass/admin.scss', './sass/editor-style.scss'])
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['sass/dummy']
        }))
        .pipe(postcss(
            [ autoprefixer() ]
        ))
        .pipe(sourcemaps.write('./sourcemaps/'))
        .pipe(gulp.dest(dir_dev+'stylesheets'));
}

// Watch Files For Changes
function watch () {
    //gulp.watch('./js/**/*.js', devJs);
    gulp.watch('./sass/**/*.scss', devSass);
    gulp.watch('./components/**/*.scss', devSass);
}

/* run publish */
function distClean (done) {
    /* first clear the previous dist version */
    console.log('/**** clear dist ****/');
    rimraf(dir_dist+'**/*', [], done);
}

function distCopy () {
    /* copy the folder structure */
    console.log('/**** copy structure ****/');
    return gulp.src(
        [
            dir_dev+'**/*',
            '!**/sourcemaps',
            '!**/logs',
            '!**/*.log',
            '!**/*.css',
            '!**/*.js',
            '!**/*.map',
            '!'+dir_dev+'image/*.png'
        ],
        {
            dot: true
        }
    ).pipe(gulp.dest(dir_dist));
}

function distCopyFonts () {
    /* fonts too */
    console.log('/**** copy structure ****/');
    return gulp.src(
        [
            dir_dev+'fonts/*'
        ],
        {
            dot: true
        }
    ).pipe(gulp.dest(dir_dist+'fonts/'));
}

function distCss () {
    /*
      1. minify
      3. copy output to dist
    */
    console.log('/**** minify & copy css ****/');
    return gulp.src(dir_dev+'stylesheets/*.css')
        .pipe(plumber())
        .pipe(cssnano())
        .pipe(gulp.dest(dir_dist+'stylesheets'));
}

function distImages (done) {
    /* overwrite the dist png files with compressed ones */
    if(!skipImages) {
        console.log('/**** compress images ****/');
        return gulp.src(dir_dev+'images/*.png')
            .pipe(plumber())
            .pipe(imagemin({
                //use: [pngquant()]
            }))
            .pipe(gulp.dest(dir_dist+'images'))
            .on('end', done);
    } else {
        done();
        return true;
    }
}

function distJs () {
    /* concatenate and minify app javascript */
    console.log('/**** minify js ****/');

    webpackOptions.mode = 'production';

    webpackOptions.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }));

    return gulp.src('js/*.js')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(named())
        .pipe(webpackStream(webpackOptions, webpack))
        .pipe(gulp.dest(dir_dist+'js'));
}

gulp.task('init', gulp.parallel(devJs, devSass));
gulp.task('admin', gulp.parallel(adminSass));
gulp.task('publish', gulp.series(distClean, distCopy, distCopyFonts, adminSass, distCss, distImages, distJs));
gulp.task('default', gulp.parallel(watch, watchJs, devSass));
