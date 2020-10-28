import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const basedir = "D:\\Users\\lpsouza\\OneDrive\\Pictures\\Wallpapers\\Bigger";

fs.readdir(basedir, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        sharp(path.join(basedir, file))
            .resize(4480, 1080)
            .toFile(path.join(basedir, "_transform", file), (err, info) => {
                if (err) {
                    return console.log('Unable to transform image: ' + err);
                }
                console.log(file, "ok");
            });
    });
});
