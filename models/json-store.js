'use strict';

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

import logger from '../utils/logger.js';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const fs = require('fs').promises; 

class JsonStore {
  constructor(file, defaults) {
    this.db = new Low(new JSONFile(file), defaults);
    this.db.read();
  }

  findAll(collection) {
    return this.db.data[collection];
  }

  findBy(collection, filter) {
    const results = this.db.data[collection].filter(filter);
    return results;
  }

  findOneBy(collection, filter) {
    const results = this.db.data[collection].filter(filter);
    return results[0];
  }

}

export default JsonStore;
