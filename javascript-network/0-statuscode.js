#!/usr/bin/node
const http = require('http');
const request = require('request');

if (process.argv.length >= 2) {
    const url = process.argv[2];
    http.get(url, (response) => {
        const statusCode = response.statusCode;
        console.log('code:' + { statusCode })
    })
};