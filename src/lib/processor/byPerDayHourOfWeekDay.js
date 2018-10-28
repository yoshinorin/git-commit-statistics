'use strict';

const groupBy = require('lodash.groupby');
const sortBy = require('lodash.sortby');
const toArray = require('lodash.toarray');
const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');
const weekdayTypes = require('../types/weekdayTypes');
const util = require('../utils');

class ByPerDayHour extends BaseProcessor {
  constructor(path, options) {
    super(path, command.type.byPerDayHourOfWeekDay, options);
  }

  createResult() {
    return this.createObjects();
  }

  createObjects() {
    const logs = this.getGitLogs();
    if (logs.length === 0) {
      return logs;
    }

    const gitLoglist = [];
    logs.forEach((log) => {
      gitLoglist.push(this.parseGitLog(log));
    });

    //TODO: clean up
    const byWeekdays = groupBy(gitLoglist, 'dayOfWeek');
    const weekDayNames = Object.keys(byWeekdays);
    let list = [];
    const byWeekDaysArray = toArray(byWeekdays);
    for (let i = 0, l = byWeekDaysArray.length; i < l; i++) {
      list.push({
        id: weekdayTypes.getValueByKeyName(weekDayNames[i]),
        [weekDayNames[i]]: sortBy(aggregate.groupBy(byWeekDaysArray[i], 'hour'))
      });
    }
    return sortBy(list, 'id');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      dayOfWeek: arr[0],
      hour: parseInt((arr[3].split(':'))[0])
    };
  }
}

module.exports = ByPerDayHour;
