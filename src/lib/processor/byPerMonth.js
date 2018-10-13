'use strict';

const sortBy = require('lodash.sortby');
const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');
const monthTypes = require('../types/monthsTypes');
const util = require('../utils');

class ByPerMonth extends BaseProcessor {
  constructor(path, options) {
    console.log(options);
    super(path, command.type.byPerMonth, options);
  }

  createResult() {
    const objects = aggregate.groupBy(this.createObjects(), 'month');
    // Re-Create object for sort order
    let reCreatedObject = objects.map(x => {
      return {
        id: x.id,
        month: x.month,
        count: x.count
      };
    });
    return this.sort(reCreatedObject);
  }

  sort(list) {
    const mappedList = util.typeMapper(list, 'month', monthTypes.months);
    return sortBy(mappedList, 'id');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      month: arr[1]
    };
  }
}

module.exports = ByPerMonth;
