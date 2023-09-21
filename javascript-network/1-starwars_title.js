#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
    process.exit(1);
}
const id = process.argv[2];
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/' + id;
routes = [];
request.get(url)
    .on('data', function (data) {
        routes.push(data);
    })
    .on('complete', function () {
        const res = JSON.parse(routes)
        console.log(res.title)
    })