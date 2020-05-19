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
      console.log('action:',anyNote.note.action);
      console.log(anyNote.note.payload);
      console.log(anyNote);
    }
  }
}


module.exports = Notes;