const chalk = require('chalk')
const yargs = require('yargs');
const note = require('./notes')

//Customize yargs version
yargs.version('1.1.0')


//crate add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }  ,
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }  
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})
//create list command

yargs.command({
    command: 'list',
    describe: 'Show list of notes',
    handler() {
        note.listNotes()
    }
})
//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note titlte',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        note.readNote(argv.title)
    }
})



yargs.parse()
