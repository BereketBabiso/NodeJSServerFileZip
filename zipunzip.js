var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var gunzip=zlib.createGunzip();

// var readable= fs.createReadStream(path.join(__dirname+'/text.txt'));

// var compressed = fs.createWriteStream(path.join(__dirname+'/compressed.txt.gz'));
// readable.pipe(gzip).pipe(compressed);

var readable2 = fs.createReadStream(path.join(__dirname+'/compressed.txt.gz'));
var decompressed = fs.createWriteStream(path.join(__dirname+'/writefile.txt'));
readable2.pipe(gunzip).pipe(decompressed);