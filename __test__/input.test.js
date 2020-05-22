'use strict';

///// mock 
const Input = require('../lib/input.js');
let myInputs = new Input();

describe('Input Module', ()=> {
    
  it('getAdd() vaild case for payload', ()=> {
    expect(myInputs.getAdd('hi').payload).toEqual('hi');
  });
  it('getAdd() vaild case for action', ()=> {
    expect(myInputs.getAdd('hi').action).toEqual('add');
  });
  it('getAdd() defaults to ERROR when there is no values', ()=> {
    expect(myInputs.getAdd().payload).toEqual('undefined');
  });


  it('getList() vaild case for List', ()=> {
    expect(myInputs.getList('hi')).toEqual('hi');
  });
  it('getList() error case for List', ()=> {
    expect(myInputs.getList()).toEqual('error');
  });


  it('getDelete() vaild case for delete', ()=> {
    expect(myInputs.getDelete('id=123123123sad')).toEqual('id=123123123sad');
  });
  it('getDelete() error case for delete', ()=> {
    expect(myInputs.getDelete()).toEqual('delete Error');
  });


  it('getCategory() vaild case for category', ()=> {
    expect(myInputs.getCategory('mamoul')).toEqual('mamoul');
  });
  it('getCategory() Defult case for cotegory', ()=> {
    expect(myInputs.getCategory()).toEqual(undefined);
  });

});
