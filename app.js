const getNotes = require('./notes.js')
// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe:'Add a new note',
  handler: function (){
    console.log('Adding a new note')
  }
})


// create a remove command

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  handler: function(){
    console.log('removing the note')

  }

})



// list command

yargs.command({
  command: 'list',
  description: 'Listing a note',
  hndler: function(){
    console.log('Listing a note')
  }
})

yargs.command({
  command: 'read',
  description: 'Reading a note',
  hndler: function(){
    console.log('Reading a note')
  }
})

console.log(yargs.argv)