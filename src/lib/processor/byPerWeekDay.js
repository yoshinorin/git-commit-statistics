'use strict';

const _ = require('lodash');
const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');
const weekdayTypes = require('../types/weekdayTypes');
const util = require('../utils');

class ByPerWeekDay extends BaseProcessor {
  constructor(path, options) {
    super(path, command.type.byPerWeekDay, options);
  }

  createResult() {
    return aggregate.groupBy(this.createObjects(), 'dayOfWeek');
  }

  createResult() {
    return this.sort(aggregate.groupBy(this.createObjects(), 'dayOfWeek'));
  }

  sort(list) {
    const mappedList = util.typeMapper(list, 'dayOfWeek', weekdayTypes.weekday);
    return _.sortBy(mappedList, 'id');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      dayOfWeek: arr[0]
    };
  }
}

module.exports = ByPerWeekDay;
