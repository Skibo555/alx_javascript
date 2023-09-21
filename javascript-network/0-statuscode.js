#!/usr/bin/node
const https = require('https');
const request = require('request');

if (process.argv.length >= 2) {
    const url = process.argv[2];
    https.get(url, (response) => {
        const statusCode = response.statusCode;
        console.log('code:' + { statusCode })
    })
};