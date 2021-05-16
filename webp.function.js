import imagemin from 'imagemin';
// import imageminWebp from 'imagemin-webp';
// import imageminJpegtran from 'imagemin-jpegtran';
// import imageminJpegoptim from 'imagemin-jpegoptim';
// import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
// import imageminZopfli from 'imagemin-zopfli';

// imagemin(["./public/raw/*.{jpg,png}"], {
//     destination: "./public/photos/webp/",
//     plugins: [
//         imageminWebp(),
//     ],
// }).then(() => {
//     console.log("Images Converted to WebP Successfully!!!");
// });

imagemin(["./public/raw/*.png"], {
    destination: "./public/photos/",
    plugins: [
        imageminPngquant(),
    ],
}).then(() => {
    console.log("Images PNG Optimized Successfully!!!");
});


// imagemin(['./public/raw/*.jpg'], {
//     destination: './public/photos',
//     plugins: [
//         imageminMozjpeg({
//             quality: 82,
//             quantTable: 2
//         })
//         ,
//     ],
//     use: [
//         imageminZopfli({ more: true })
//     ]
// }).then(() => {
//     console.log("Images JPG Optimized Successfully!!!");
// })

// imagemin(['./public/raw/*.jpg'], {
//     destination: './public/photos/thumbnail/',
//     plugins: [
//         imageminJpegtran(),
//         imageminJpegoptim({
//             max: 82,
//             size: 20
//         })
//     ],
//     use: [
//         imageminZopfli({ more: true })
//     ]
// }).then(() => {
//     console.log("Thumbnails from Images JPG Created Successfully!!!");
// })