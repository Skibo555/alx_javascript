#!/usr/bin/node

/* This is a private methods with closure.
*/

const studentHogwarts = (function () {
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }
    function setName(newName) {
        name = newName;
    }
    function rewardStudent() {
        return changeScoreBy(1);
    }
    function penalizeStudent() {
        return changeScoreBy(-1);
    }
    function getScore() {
        return `${name}: ${privateScore}`;
    }
    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore
    };
})();

studentHogwarts.setName('Harry');
studentHogwarts.rewardStudent();
studentHogwarts.rewardStudent();
studentHogwarts.rewardStudent();
studentHogwarts.rewardStudent();
studentHogwarts.penalizeStudent()

console.log(studentHogwarts.getScore());


studentHogwarts.setName('Draco');
studentHogwarts.rewardStudent();
studentHogwarts.penalizeStudent();
studentHogwarts.penalizeStudent();
studentHogwarts.penalizeStudent();

console.log(studentHogwarts.getScore());