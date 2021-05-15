import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminJpegoptim from 'imagemin-jpegoptim';
import imageminZopfli from 'imagemin-zopfli'

imagemin(["./public/raw/*.{jpg,png}"], {
    destination: "./public/photos/webp/",
    plugins: [
        imageminWebp(),
    ],
}).then(() => {
    console.log("Images Converted to WebP Successfully!!!");
});

imagemin(['./public/raw/*.jpg'], {
    destination: './public/photos',
    plugins: [
        imageminJpegtran(),
        imageminJpegoptim({
            max: 82,
            size: 150
        })
    ],
    use: [
        imageminZopfli({ more: true })
    ]
}).then(() => {
    console.log("Images JPG Optimized Successfully!!!");
})