'use strict';

let Schema = require('./models/notes-schema');

class Notes {
  constructor() {
  }
  async save(anyNote,flag) {
    // saving to my DB= mongo : ORM= mongoose
    // use schema ... obj = new ObjectSchema(data) , obj.save();
    // console.log('flag',flag);
    if(flag == 'add'){
      // console.log(flag);
      let id = Math.ceil(Math.random()*10);
      var idObj = {};
      idObj['ID'] = id;
      // console.log(anyNote);
      let schemaObj = new Schema({
        note: `${anyNote.note.payload}`,
        category: `${anyNote.category}`,
        id: `${id}`,
      // body  + header
      });
      // eslint-disable-next-line no-unused-vars
      let saved = await schemaObj.save();
    }
    else if(flag == 'list') {
      let allNotes = await Schema.find({});
      console.log({allNotes});
    // do select all
    }
    else if(flag== 'specList') {
      let allNotes = await Schema.find({category:anyNote.list});
      console.log({allNotes});
    // do select all
    }
  }
  async delete(id) {
    // eslint-disable-next-line no-unused-vars
    let deleteItem = await Schema.findByIdAndRemove(id);
    console.log(`Deleted Note ${id}`);
  }
}
module.exports = Notes;