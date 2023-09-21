#!/usr/bin/node

const request = require('request');


const url = process.argv[2];

request.get(url, (error, response, body) {
    const filmData = JSON.parse(body);
    const films = filmData.results.filter((film) =>
        film.characters.some((url1) =>
            url1.endsWith('/18/'))
    );
    const counter = films.length;
    console.log(counter);
});