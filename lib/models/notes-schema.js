'use strict';

const mongoose = require('mongoose'); // npm Package

const noteData = mongoose.Schema({
  note: { type: String, required: true},
  category: { type: String, uppercase: true, enum: ['SCHOOL', 'REDBULL', 'MAMOUL', 'FALFOOL']},
  id: { type: String, required: true},
  // body  + header
});

module.exports = mongoose.model('noteData', noteData);