#!/usr/bin/node

const { addAbortListener } = require('events');
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
        const res = JSON.parse(routes);
        let films = 0;
        res.results.forEach(function (actiste) {
            actiste.characters.forEach((act) => {
                if (actiste.includes(url)) {
                    films++;
                }
            })
        })
        console.log(files);
    })
