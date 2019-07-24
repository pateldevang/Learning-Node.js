console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');


var user = os.userInfo()
var userName = os.userInfo().username
var res = notes.addNote();
console.log(res);

var add =notes.add(12,-12)
console.log(add);


console.log(user);
console.log(userName);


fs.appendFileSync('greetings.txt',`Hello world first appending using fs by ${userName}! your are ${notes.age}`);
