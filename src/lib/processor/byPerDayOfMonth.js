'use strict';

const _ = require('lodash');
const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');

class ByPerDayOfMonth extends BaseProcessor {
  constructor(path, options) {
    super(path, command.type.byPerDayOfMonth, options);
  }

  createResult() {
    return this.sort(aggregate.groupBy(this.createObjects(), 'day'));
  }

  sort(list) {
    return _.sortBy(list, 'day');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      day: parseInt(arr[2])
    };
  }
}

module.exports = ByPerDayOfMonth;
