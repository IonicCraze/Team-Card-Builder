const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, email, github, id, office){
    super(name, email, github, id)
        this.office = office;
    
}

getRole() {
    return "Manager"
}

getGithub() {
    return this.github;
}

}

module.exports = Manager;