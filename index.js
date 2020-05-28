#!/usr/bin/env node
'use strict';
const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const DB_URI = 'mongodb://localhost:27017/firstDatabase';

mongoose.connect(DB_URI, {  useNewUrlParser: true,  useUnifiedTopology: true});

const myInputs = new Input();
// console.log(myInputs);
// {note:12321321,category:asdkhaslkdh,delete:MediaStreamAudioDestina, list:asdsad}
const notes = new Notes();//notes.save(sadasdas)
// {save():function,delete():function}
if (myInputs.delete!=='delete Error') {
  notes.delete(myInputs.delete)
    .then(mongoose.disconnect);
}
else if (myInputs.note.payload!=='undefined' && myInputs.update == undefined) {
  notes.save(myInputs,'add')
    .then(mongoose.disconnect);
}
else if (myInputs.update!=='undefined' && myInputs.list=='error') {
  console.log(myInputs.list);
  notes.update(myInputs)
    .then(mongoose.disconnect);
}
else if (myInputs.list =='true'){
  // console.log(myInputs);
  notes.save(myInputs,'list')
    .then(mongoose.disconnect); 
}else if (myInputs.list !=='true' && myInputs.list!=='error'){
  // console.log(myInputs);
  notes.save(myInputs,'specList')
    .then(mongoose.disconnect);
}else {
  help();
}
function help(){
  console.log( `Hint: You can use these args: -a/--add with -c/--category to save a note, -d "_id"/--delete "_id" to delete a note, -l/--list to list all the notes, -l/--list "category" to list elements from the same category` );
  process.exit();
}