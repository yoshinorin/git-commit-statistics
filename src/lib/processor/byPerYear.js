'use strict';

const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');

class ByPerYear extends BaseProcessor {

  constructor(path, commandType, options) {
    super(path, commandType, options);
  }

  createResult() {
    return aggregate.groupBy(this.createObjects(), 'year');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      year: arr[4]
    }
  }

}

module.exports = ByPerYear;
