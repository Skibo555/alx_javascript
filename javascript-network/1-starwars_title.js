#!/usr/bin/node

const request = require('request');

if (process.argv.length >= 2) {
    let id = process.argv[2];
    request.get(`https://swapi-api.alx-tools.com/api/films/${id}`, (body));
    console.log(body);
};