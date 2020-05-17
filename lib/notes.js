'use strict';

const notes = {};
notes.fetch = function (anyNote) {
  if(anyNote) {
    console.log('action:',anyNote.note.action);
    console.log(anyNote.note.payload);
  }
};
// function Notes() {
// }
// Notes.prototype.execute=function(){
// }
// Notes.prototype.add=function(){
// }
module.exports = notes;