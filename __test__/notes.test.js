'use strict';


const Notes = require('../lib/notes.js');
const notes = new Notes();
// jest.spyOn
jest.spyOn(global.console, 'log');

describe('Notes Mdules', ()=> {
  it('save() does nothing with invalid notes', ()=> {
    notes.save();
    expect(console.log).not.toHaveBeenCalled();
  });
  // setTimeout because save() run async:   
  it('save() will log out notes when given', ()=> {
    notes.save('why','specList');
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    });
  });
  it('delete() will console.log the deleted note', ()=> {
    notes.delete('id=asdsacsacee023i1k');
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    });
  });

});


