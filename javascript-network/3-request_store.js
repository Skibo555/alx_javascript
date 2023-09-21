const request = require('request');
const fs = require('fs')

url = process.argv[2];
path = process.argv[3];

request.get(url).pipe(fs.createReadStream(path));