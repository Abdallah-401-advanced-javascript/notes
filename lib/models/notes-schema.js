'use strict';

const mongoose = require('mongoose'); // npm Package
mongoose.set('useFindAndModify', false);
const noteData = mongoose.Schema({
  note: { type: String, required: true},
  // category: { type: String, uppercase: true, enum: ['SCHOOL', 'REDBULL', 'MAMOUL', 'FALFOOL']},
  category: { type: String, required: true},
  id: { type: String, required: true},
  // body  + header
});

module.exports = mongoose.model('noteData', noteData);