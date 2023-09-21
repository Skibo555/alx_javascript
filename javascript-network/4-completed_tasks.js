#!/usr/bin/node

const request = ('request');

const apiUrl = process.argv[2];
const completedTask = [];
request.get(apiUrl, (error, response, body) => {
    const todos = JSON.parse(body)
};
// an array of completed tasks
todos.forEach(function (complete) {
    if (complete.completed) {
        completedTask.push(complete);
    }
})

const userCompleted = {};
completedTask.forEach(function (user) {
    const userId = user.userId;
    if (userCompleted[userId]) {
        userCompleted[userId]++;
    }
    else {
        userCompleted[userId] = 1;
    }
})
console.log(userCompleted[userId]) = 1;