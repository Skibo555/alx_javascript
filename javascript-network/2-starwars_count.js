#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
    process.exit(1);
}
const id = 18;
const url = process.argv[2];

request.get(apiUrl, (response, body));
const filmData = JSON.parse(body);

const films = filmData.results.filter((film) =>
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${id}/`)
);
console.log(films)