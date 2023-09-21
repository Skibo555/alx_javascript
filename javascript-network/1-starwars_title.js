#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
    process.exit(1);
}
const id = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${id}`;
req = request.get(apiUrl);
const movieData = JSON.parse(req);
console.log(movieData.title);