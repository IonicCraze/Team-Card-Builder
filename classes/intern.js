const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, github, id, school){
    super(name, email, github, id)
    this.school = school;
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;