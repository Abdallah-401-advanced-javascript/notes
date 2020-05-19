#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const myInputs = new Input();
const notes = new Notes();
notes.add(myInputs);