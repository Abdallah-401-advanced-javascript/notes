'use strict';
// implement the CRUD operations in food class.
// interface to communicate with food schema.
const schema = require('./notes-schema');

class CrudHandler {

  constructor() {

  }
  /**
 * 
 * @param {obj} what 
 * @param {string} flag 
 */
  async get(what,flag) {
    // if you pass an id for me i will get you the record by id
    if (flag=='_id') {
      //    return schema.findById(_id);
      return await schema.findOne(what);
    } else if(flag=='category'){
      // else I think you mean to fetch everything
      return await schema.find(what);
    } else {
      // else I think you mean to fetch everything
      return await schema.find({});
    }
  }
  /**
 * 
 * @param {obj} record 
 */
  async create(record) {
    let newRecord =  new schema(record);
    return await newRecord.save();
  }

  /**
   * 
   * @param {sring} _id 
   * @param {obj} record 
   */
  // The update still not in use (:
  async update(_id, record) {
    return await schema.findByIdAndUpdate(_id, record);
  }

  /**
   * 
   * @param {string} _id 
   */
  async delete(_id) {
    await schema.findByIdAndDelete(_id);
  }
}

module.exports = CrudHandler;