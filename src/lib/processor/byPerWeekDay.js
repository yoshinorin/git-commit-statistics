'use strict';

const sortBy = require('lodash.sortby');
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
    const objects = aggregate.groupBy(this.createObjects(), 'dayOfWeek');
    // Re-Create object for sort order
    let reCreatedObject = objects.map(x => {
      return {
        id: x.id,
        dayOfWeek: x.dayOfWeek,
        count: x.count
      };
    });
    return this.sort(reCreatedObject);
  }

  sort(list) {
    const mappedList = util.typeMapper(list, 'dayOfWeek', weekdayTypes.weekday);
    return sortBy(mappedList, 'id');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      dayOfWeek: arr[0]
    };
  }
}

module.exports = ByPerWeekDay;
