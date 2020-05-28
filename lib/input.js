'use strict'; 

// capturing the input args. (minimist) + Validate it -m , url is-url
const minimist = require('minimist');

class Input {
    
  constructor() {
  // capturing the args
    const args = minimist(process.argv.slice(2)); // command line argu
    this.note = this.getAdd(args.a||args.add) ;
    this.category = this.getCategory(args.c||args.category);
    this.list = this.getList(args.l||args.list);
    this.delete = this.getDelete(args.d||args.delete);
    this.update = this.getUpdate(args.u||args.update);

  }
  /**
 * 
 * @param {string} add 
 */
  getAdd(add) {

    if (add === true) {
      throw ('Error: Add some thing paleeez') ;
    }
    // console.log('add=',add);
    if (add === undefined) {
      return {
        action:'add', payload:'undefined',
      }; 
    }else {return {
      action:'add', payload:add,
    };
    }
  }
 
  /**
   * 
   * @param {string} list 
   */
  getList(list = 'error') {
    // console.log('list=',list);
    return list.toString(); }

  getDelete(deleteo = 'delete Error') {
    if (deleteo === true) {
      throw ('Error: Add some thing to delete paleeez') ;
    }
    // console.log('deleteo=',deleteo);
    return deleteo;
  }

  /**
 * 
 * @param {string} updato 
 */
  getUpdate(updato) {
    if (updato === true) {
      throw ('Error: Add some thing to update paleeez') ;
    }
    // console.log('deleteo=',deleteo);
    return updato;
  }
  
  /**
 * 
 * @param {string} category 
 */
  getCategory(category) {
    if (category === true) {
      throw ('Error: Add category') ;
    }else if (category === undefined) {
      // throw ('Error: Use --category to add category');
    }
    // console.log('category=',category);
    return category;
  }
}




module.exports = Input;