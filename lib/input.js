'use strict'; 

// capturing the input args. (minimist) + Validate it -m , url is-url
const minimist = require('minimist');

class Input {
    
  constructor() {
  // capturing the args
    const args = minimist(process.argv.slice(2)); // command line argu
    this.note = this.getAdd(args.a||args.add) ;
    this.category = this.getCategory(args.category);
    this.list = this.getList(args.list);
    this.delete = this.getDelete(args.delete);
  }

  getAdd(add) {

    if (add === true) {
      throw ('Error: Add some thing paleeez') ;
    }
    console.log('add=',add);
    if (add === undefined) {
      return {
        action:'add', payload:'undefined',
      }; 
    }else {return {
      action:'add', payload:add,
    };
    }
    

  }
  getList(list = 'error') {
    console.log('list=',list);
    return list.toString();

  }

  getDelete(deleteo = 'delete Error') {
    if (deleteo === true) {
      throw ('Error: Add some thing paleeez') ;
      
    }
    console.log('deleteo=',deleteo);
    return deleteo;
  }

  getCategory(category='school') {

    if (category === true) {
      throw ('Error: Add category') ;
    }
    console.log('category=',category);
    return category;
  }
}




module.exports = Input;