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
      if (anyNote.note.payload && anyNote.category){
        let schemaObj = new Schema({
          note: `${anyNote.note.payload}`,
          category: `${anyNote.category}`,
          id: `${id}`,
          // body  + header
        });
        // eslint-disable-next-line no-unused-vars
        let saved = await schemaObj.save();
        // console.log(saved);
        let allNotes = await Schema.find({_id:saved._id});
        console.log(allNotes[0].note);
        console.log(`Category: ${allNotes[0].category}`,`ID: ${allNotes[0]._id}`);
      }
    }
    else if(flag == 'list') {
      let allNotes = await Schema.find({});
      allNotes.forEach((ele)=>{
        console.log(allNotes[0].note);
        console.log(`Category: ${allNotes[0].category}`,`ID: ${allNotes[0]._id}`);
        console.log('------------------------------');        
      });
    // do select all
    }
    else if(flag== 'specList') {
      let allNotes = await Schema.find({category:anyNote.list});
      allNotes.forEach((ele)=>{
        console.log(allNotes[0].note);
        console.log(`Category: ${allNotes[0].category}`,`ID: ${allNotes[0]._id}`);
        console.log('------------------------------');        
      });
    // do select all
    }
  }
  async delete(id) {
    // eslint-disable-next-line no-unused-vars
    let deleteItem = await Schema.findByIdAndDelete(id);
    console.log(`Deleted Note ${id}`);
  }
}
module.exports = Notes;