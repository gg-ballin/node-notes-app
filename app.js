// const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Seccion 4, 21 Removing a Note


yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function() {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function(argv) {
    notes.readNote(argv.title);
  },
});

console.log(yargs.argv);
