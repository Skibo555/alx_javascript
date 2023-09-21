#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
    process.exit(1);
}
const id = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${id}`;
request.get(apiUrl, (body));
const movieData = JSON.parse(body);
console.log(movieData.title);