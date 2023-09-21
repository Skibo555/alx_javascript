#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const completedTask = [];

request.get(apiUrl, (error, response, body))
    .on('complete', function () {
        const res = JSON.parse(completedTask)
        for (task in res);
        console.log(task)