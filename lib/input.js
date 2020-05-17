'use strict'; 

// capturing the input args. (minimist) + Validate it -m , url is-url
const minimist = require('minimist');

function Input() {
  // capturing the args
  const args = minimist(process.argv.slice(2)); // command line argu
  this.note = this.getAdd(args.a||args.add) ;
}

Input.prototype.getAdd = function(note = 'Error: you can just use -a or --add') {
  if (note === true) {
    note ='Error: Add some thing paleeez';
  }
  return {
    action:'add', payload:`Adding Note: ${note}`,
  };
};


module.exports = Input;