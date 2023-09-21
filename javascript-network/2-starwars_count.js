#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
    process.exit(1);
}
const id = 18;
const url = process.argv[2] + id;
routes = [];
request.get(url)
    .on('data', function (data) {
        routes.push(data);
    })
    .on('complete', function () {
        const good = data.filter(d => d.Text && d.Text.startsWith('Wedge Antilles'));
        const res = JSON.parse(good)
        console.log(res)
    })