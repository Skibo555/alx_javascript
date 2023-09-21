#!/usr/bin/node

const request = require('request');

if (process.argv.length >= 2); {
    let id = process.argv[2];
    req = request.get('https://swapi-api.alx-tools.com/api/films/:id', id);
    console.log(req);
};