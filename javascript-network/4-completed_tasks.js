#!/usr/bin/node

const { userInfo } = require('os');
const request = require('request');

const apiUrl = process.argv[2];
const completedTask = {};

request.get(apiUrl, function (error, response, body) {
    const members = JSON.parse(body);
    members.forEach((member) => {
        if (member.completed) {
            if (completedTask[userId]) {
                completedTask[userId]++;
            } else {
                completedTask[userId] = 1;
            }
        }
    })
    const members_completed_tasks = {};
    for (const userId in completedTask) {
        members_completed_tasks[userId] = completedTask[userId]
    }
    console.log(members_completed_tasks);
})