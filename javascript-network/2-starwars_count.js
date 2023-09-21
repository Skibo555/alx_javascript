#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, function (response, body) {
    const films = JSON.parse(body);
    const actor = films.results.filter((film) =>
        film.characters.some((characterUrl) =>
            characterUrl.endsWith('/18/'))
    );
    const counter = actor.length;
    console.log(counter);
});