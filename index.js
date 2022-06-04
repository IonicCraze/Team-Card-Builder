const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./classes/employee')
const Manager = require('./classes/manager')
const Engineer = require('./classes/engineer')
const Intern = require('./classes/intern')


const employeelist = [];
var cardlist = '';
var htmlfile = '';
const buildcards = () => {
    let card = '';
    
    employeelist.forEach(Element => {
        card = 
`<div class="employee-card">
    <div class="card-head">
        <h2 class="title">${Element.name}</h2>
        <h3 class="title">${Element.getRole()}</h3>
    </div>
    <div class="info">
        <ul class="info-list">
            <li class="list-item">ID: ${Element.id}</li>
            <li class="list-item">Email: ${Element.email} </li>
            <li class="list-item">Github: ${Element.github}</li>
            <li class="list-item">Office number: ${Element.office}</li>
        </ul>
    </div>
</div>`
cardlist = cardlist.concat(card);
    })
  console.log(cardlist);
    htmlfile = `<!DOCTYPE html>
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>` + cardlist + `</body>
    </html>`;
    console.log(htmlfile);

    fs.writeFile('index.html', htmlfile, (err) => 
    err ? console.log(err) : console.log("index.html created"))
    
}



inquirer
    const teammanager = () => {
        return inquirer.prompt([
            {
            type: 'input',
            name: 'managername',
            message: 'What is the name of the team manager?'
        },
        {
            type: 'input',
            name: 'managerid',
            message: "What is the team manager's employee ID?"
        },
        {
           type: 'input',
           name: 'manageremail',
           message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'manageroffice',
            message: "What is the team manager's office number?"
        },
        {
            type: 'input',
            name: 'managergithub',
            message: "What is the manager's github?"
         },
        {
            type: 'list',
            name: 'nextemployee',
            message: 'Please choose the next employee',
            choices: ['Engineer', 'Employee', 'Intern', 'None'], 
        },
        
    ])
    }

const start = () => {
    teammanager()

    .then ((data) => {
       const teammanager = new Manager (data.managername, data.manageremail, data.managergithub, data.managerid, data.manageroffice)
       employeelist.push(teammanager);
       console.log(employeelist);

    switch(data.nextemployee) {
        case 'Engineer':
           teamengineer();
           break;
        case 'Employee':
            teamemployee();
            break;
        case 'Intern':
            teamintern();
            break;
        case 'None':
            buildcards();
            break; 
    }


    });
}

const teamengineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerid',
            message: "What is the team engineer's employee ID?"
        },
        {
           type: 'input',
           name: 'engineeremail',
           message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'engineeroffice',
            message: "What is the team engineer's office number?"
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: "What is the engineer's github?"
         },
        {
            type: 'list',
            name: 'nextemployee',
            message: 'Please choose the next employee',
            choices: ['Engineer', 'Employee', 'Intern', 'None'], 
        },
    ]) 

    .then ((data) => {
        const teamengineer = new Engineer (data.engineername, data.engineeremail, data.engineergithub, data.engineerid, data.engineeroffice)
        employeelist.push(teamengineer);
        console.log(employeelist);
 
     switch(data.nextemployee) {
         case 'Engineer':
            teamengineer();
            break;
         case 'Employee':
             teamemployee();
             break;
         case 'Intern':
             teamintern();
             break;
         case 'None':
             buildcards();
             break; 
     }
 
 
     });
}

const teamintern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internid',
            message: "What is the team intern's employee ID?"
        },
        {
           type: 'input',
           name: 'internemail',
           message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'internschool',
            message: "What is the team intern's school?"
        },
        {
            type: 'input',
            name: 'interngithub',
            message: "What is the intern's github?"
         },
        {
            type: 'list',
            name: 'nextemployee',
            message: 'Please choose the next employee',
            choices: ['Engineer', 'Employee', 'Intern', 'None'], 
        },
    ]) 

    .then ((data) => {
        const teamintern = new Intern (data.internname, data.internemail, data.interngithub, data.internid, data.internschool)
        employeelist.push(teamintern);
        console.log(employeelist);
 
     switch(data.nextemployee) {
         case 'Engineer':
            teamengineer();
            break;
         case 'Employee':
             teamemployee();
             break;
         case 'Intern':
             teamintern();
             break;
         case 'None':
             buildcards();
             break; 
     }
 
 
     });
}

const teamemployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeename',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'employid',
            message: "What is the team employee's employee ID?"
        },
        {
           type: 'input',
           name: 'employeeemail',
           message: "What is the employee's email address?"
        },
        
        {
            type: 'input',
            name: 'employeegithub',
            message: "What is the employee's github?"
         },
        {
            type: 'list',
            name: 'nextemployee',
            message: 'Please choose the next employee',
            choices: ['Engineer', 'Employee', 'Intern', 'None'], 
        },
    ]) 

    .then ((data) => {
        const teamemployee = new Employee (data.employeename, data.employeeemail, data.employeegithub, data.employeeid)
        employeelist.push(teamemployee);
        console.log(employeelist);
 
     switch(data.nextemployee) {
         case 'Engineer':
            teamengineer();
            break;
         case 'Employee':
             teamemployee();
             break;
         case 'Intern':
             teamintern();
             break;
         case 'None':
             buildcards();
             break; 
     }
 
 
     });
}















start();   
