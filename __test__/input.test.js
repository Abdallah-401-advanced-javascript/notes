'use strict';

///// mock 
const Input = require('../lib/input.js');
let myInputs = new Input();

describe('Input Module', ()=> {
    
  it('getAdd() vaild case for payload', ()=> {
    expect(myInputs.getAdd('hi').payload).toEqual('Adding Note: hi');
  });

  it('getAdd() vaild case for action', ()=> {
    expect(myInputs.getAdd('hi').action).toEqual('add');
  });
  it('getAdd() defaults to ERROR when there is no values', ()=> {
    expect(myInputs.getAdd().payload).toEqual('Adding Note: Error: you can just use -a or --add');
  });

  // it('getMethods() validating and using the proper methods', ()=> {
  //     let options = new Input();
  //     expect(options.getMethod('get')).toEqual('get');
  //     expect(options.getMethod('post')).toEqual('post');
  //     expect(options.getMethod('delete')).toEqual('delete');
  //     expect(options.getMethod('put')).toEqual('put');
  // });

  // it('getUrl() returns undefned when it is invalid', ()=> {
  //     let options = new Input();
  //     expect(options.getUrl('google')).toBeUndefined();
  // });

  // it('getUrl() returns our url when it is properly formatted', ()=> {
  //     let options = new Input();
  //     let url = 'http://google.com';
  //     expect(options.getUrl(url)).toEqual(url);
  // });

});
