'use strict';

// const notes = {};
// notes.fetch = function (anyNote) {
//   if(anyNote) {
//     console.log('action:',anyNote.note.action);
//     console.log(anyNote.note.payload);
//   }
// };

class Notes {
  constructor() {
  }
  add(anyNote) {
    if(anyNote) {
      let id = Math.ceil(Math.random()*10);
      var idObj = {};
      idObj[`id = ${id}`] = anyNote.note.payload;
      console.log('action:',anyNote.note.action);
      console.log(idObj);
      // console.log(anyNote);
    }
  }
}


module.exports = Notes;