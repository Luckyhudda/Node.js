const fs = require('fs');

const file = fs.createReadStream('data.txt2');
const filewrite = fs.createWriteStream('data.txt3');

console.log(file, filewrite)