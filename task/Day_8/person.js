'use strict';
let now = new Date();
let currentYear = now.getFullYear();

console.log(currentYear)

class Person {
    constructor(fName, lName, dob, graduation, designation, company, hobby) {
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
        this.graduation = graduation;
        this.designation = designation;
        this.company = company;
        this.hobby = hobby;

    }

}

let thilip = new Person('Thilip', 'Dhanavel', '29/08/1995', 'B.Tech(ECE)', 'CSE', 'ad2pro media solution', 'Meditation');


console.log(thilip)