#!/usr/bin/env node
'use strict';
const mongoose = require('mongoose');

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const DB_URI = 'mongodb://localhost:27017/firstDatabase';

mongoose.connect(DB_URI, {  useNewUrlParser: true,  useUnifiedTopology: true});


const myInputs = new Input();
const notes = new Notes();
if (myInputs.delete!=='delete Error') {
  notes.delete(myInputs.delete)
    .then(mongoose.disconnect);
}else if (myInputs.note.payload!=='undefined') {
  notes.save(myInputs,'add')
    .then(mongoose.disconnect);
}
else if (myInputs.list =='true'){
  notes.save(myInputs,'list')
    .then(mongoose.disconnect); 
}else if (myInputs.list !=='true' && myInputs.list!=='error'){
  notes.save(myInputs,'specList')
    .then(mongoose.disconnect);
}else {
  help();
}
function help(){
  console.log( ` api USAGE -m <method> -u <url> ..bodyheader` );
  process.exit();
}