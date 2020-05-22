'use strict';

let Schema = require('./models/notes-schema');
let CrudHandler = require('./models/notes-collection');
const crudHandlerObj= new CrudHandler();
class Notes {
  constructor() {
  }
  /**
   * 
   * @param {obj} anyNote 
   * @param {string} flag 
   */
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
        let addNewNote =await crudHandlerObj.create(schemaObj);
        // console.log(saved);
        //To list saved note
        let allNotes = await crudHandlerObj.get({_id:addNewNote._id},'_id');
        console.log(allNotes.note);
        console.log(`Category: ${allNotes.category}`,`ID: ${allNotes._id}`);
      }
    }
    else if(flag == 'list') {
      let allNotes = await crudHandlerObj.get(false,false);
      allNotes.forEach((ele)=>{
        console.log(allNotes[0].note);
        console.log(`Category: ${allNotes[0].category}`,`ID: ${allNotes[0]._id}`);
        console.log('------------------------------');        
      });
    // do select all
    }
    else if(flag== 'specList') {

      let allNotes = await crudHandlerObj.get({category:anyNote.list},'category');
      // let allNotes = await Schema.find({category:anyNote.list});
      allNotes.forEach((ele)=>{
        console.log(allNotes[0].note);
        console.log(`Category: ${allNotes[0].category}`,`ID: ${allNotes[0]._id}`);
        console.log('------------------------------');        
      });
    // do select all
    }
  }
  /**
   * 
   * @param {string} id 
   */
  async delete(id) {
    // eslint-disable-next-line no-unused-vars
    let addNewNote =await crudHandlerObj.delete(id);
    console.log(`Deleted Note ${id}`);
  }
}
module.exports = Notes;