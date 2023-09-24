#!/usr/bin/node

/* The function that counts number of seats occupied by students.
*/

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }
    const students = [];
    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i + 1)); //the seat variable in studentSeat gets it's value from here.
    }
    return students;
}
const classRoom = createClassRoom(10);