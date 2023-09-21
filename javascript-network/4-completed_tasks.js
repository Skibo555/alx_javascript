#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];


request.get(apiUrl, function (error, response, body) {
    const members = JSON.parse(body);
    const completedTask = {};
    members.forEach((member) => {
        if (member.completed) {
            if (completedTask[member.userId]) {
                completedTask[member.userId]++;
            } else {
                completedTask[member.userId] = 1;
            }
        }
    });
    const members_completed_tasks = {};
    for (const userId in completedTask) {
        members_completed_tasks[userId] = completedTask[userId]
    };
    console.log(members_completed_tasks);
});