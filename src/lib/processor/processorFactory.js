'use strict';

const statisticsTypes = require('../types/statisticsTypes');
const ByPerDayOfMonth = require('./byPerDayOfMonth');
const ByPerMonth = require('./byPerMonth');
const ByPerWeekDay = require('./byPerWeekDay');
const ByPerYear = require('./byPerYear');

function createInstance(gitDir, type, options) {
  switch (type) {
    case statisticsTypes.BY_PER_DAY_OF_MONTH:
      return new ByPerDayOfMonth(gitDir, statisticsTypes.BY_PER_DAY_OF_MONTH, options);
    case statisticsTypes.BY_PER_MONTH:
      return new ByPerMonth(gitDir, statisticsTypes.BY_PER_MONTH, options);
    case statisticsTypes.BY_PER_WEEK_DAY:
      return new ByPerWeekDay(gitDir, statisticsTypes.BY_PER_WEEK_DAY, options);
    case statisticsTypes.BY_PER_YEAR:
      return new ByPerYear(gitDir, statisticsTypes.BY_PER_YEAR, options);
    default:
      throw new Error('Unknown statistics type.');
  }
}

module.exports = {
  createInstance: createInstance
};
