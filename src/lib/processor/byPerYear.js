'use strict';

const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');

class ByPerYear extends BaseProcessor {

  constructor(path, options) {
    super(path, command.type.byPerYear, options);
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
