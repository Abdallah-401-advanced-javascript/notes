'use strict';


const Notes = require('../lib/notes.js');
const notes = new Notes();
// jest.spyOn
jest.spyOn(global.console, 'log');

describe('Notes Mdule', ()=> {
  it('add() does nothing with invalid notes', ()=> {
    notes.add();
    expect(console.log).not.toHaveBeenCalled();
  });
    
  it('add() will log out notes when given', ()=> {
    notes.add({note: { action: 'add', payload: 'Adding Note: hello' }});
    expect(console.log).toHaveBeenCalled();
  });

});


