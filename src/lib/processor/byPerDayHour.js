'use strict';

const _ = require('lodash');
const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');

class ByPerDayHour extends BaseProcessor {
  constructor(path, options) {
    super(path, command.type.byPerDayHour, options);
  }

  createResult() {
    return this.sort(aggregate.groupBy(this.createObjects(), 'hour'));
  }

  sort(list) {
    return _.sortBy(list, 'hour');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      hour: parseInt((arr[3].split(':'))[0])
    };
  }
}

module.exports = ByPerDayHour;
