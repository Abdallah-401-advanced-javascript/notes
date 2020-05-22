'use strict';

require('@code-fellows/supergoose');

let CrudHandler = require('../lib/models/notes-collection');
const crudHandlerObj= new CrudHandler();


describe('Note Model', ()=> {
  it('can create() a new note ', ()=> {
    let schemaObj = {
      note: 'Test note',
      category: 'Test category',
      id: 'Test id',
      // body  + header
    };
    return crudHandlerObj.create(schemaObj)
      .then(record => { 
        Object.keys(schemaObj).forEach(key => {
          expect(record[key]).toEqual(schemaObj[key]);
        });
      });
  }) ;

  it('can get() a note ', ()=> {
    let schemaObj = {
      note: 'Test note',
      category: 'Test category',
      id: 'Test id',
      // body  + header
    };
    return crudHandlerObj.create(schemaObj)
      .then(record => {
        return crudHandlerObj.get(record._id)
          .then(noteItem => {
            Object.keys(schemaObj).forEach(key=> {
              expect(noteItem[0][key]).toEqual(schemaObj[key]);
            });
          });
      });

  });
});

