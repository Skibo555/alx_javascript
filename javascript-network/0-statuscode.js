#!/usr/bin/node
const { STATUS_CODES } = require('http');
const request = require('request');

if (process.argv.length >= 2) {
    const url = process.argv[2];
    req = request.get(url)
    console.log('code:' + { STATUS_CODES })
}