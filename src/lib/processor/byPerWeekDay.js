'use strict';

const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');

class ByPerWeekDay extends BaseProcessor {

  constructor(path, options) {
    super(path, command.type.byPerWeekDay, options);
  }

  createResult() {
    return aggregate.groupBy(this.createObjects(), 'dayOfWeek');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      dayOfWeek: arr[0]
    }
  }

}

module.exports = ByPerWeekDay;
