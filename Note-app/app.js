console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const chalk = require('chalk');

const command = process.argv[2];


if (command === 'add') {
  console.log('Note ADDED');
}
else if (command === 'remove') {
  console.log('Note removed');
}


console.log(chalk.blue('Success!'));

var user = os.userInfo()
var userName = os.userInfo().username
var res = notes.addNote();
console.log(res);

var add =notes.add(12,-12)
console.log(add);


console.log(user);
console.log(userName);


fs.appendFileSync('greetings.txt',`Hello world first appending using fs by ${userName}! your are ${notes.age}`);
