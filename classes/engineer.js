const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, email, github, id, office){
        super(name, email, github, id)
        this.office = office;
        
    }

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }

}

module.exports = Engineer;