// console.log('Starting app.js');

// const fs = require('fs');
// const os = require('os');
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');


// customize yargs version

yargs.version('1.1.0');


//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log('Adding new note!',argv);
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note');
  }
})

//Create list command
yargs.command({
  command: 'lists',
  describe: 'List your notes',
  handler: function () {
    console.log('Listing out all notes');
  }
})

//Creat read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
      console.log('Reading the note');
  }
})


yargs.parse()

// console.log(yargs.argv);



//
// if (command === 'add') {
//   console.log('Note ADDED');
// }
// else if (command === 'remove') {
//   console.log('Note removed');
// }













// console.log(chalk.blue('Success!'));
// var user = os.userInfo()
// var userName = os.userInfo().username
// var res = notes.addNote();
// console.log(res);
//
// var add =notes.add(12,-12)
// console.log(add);
//
//
// console.log(user);
// console.log(userName);


// fs.appendFileSync('greetings.txt',`Hello world first appending using fs by ${userName}! your are ${notes.age}`);
