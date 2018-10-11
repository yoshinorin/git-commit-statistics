'use strict';

const ByPerDayOfMonth = require('./byPerDayOfMonth');
const ByPerMonth = require('./byPerMonth');
const ByPerWeekDay = require('./byPerWeekDay');
const ByPerYear = require('./byPerYear');
const statisticsTypes = require('../types/statisticsTypes');

function createInstance(gitDir, type, options) {
  switch (type) {
    case statisticsTypes.BY_PER_DAY_OF_MONTH:
      return new ByPerDayOfMonth(gitDir, options);
    case statisticsTypes.BY_PER_MONTH:
      return new ByPerMonth(gitDir, options);
    case statisticsTypes.BY_PER_WEEK_DAY:
      return new ByPerWeekDay(gitDir, options);
    case statisticsTypes.BY_PER_YEAR:
      return new ByPerYear(gitDir, options);
    default:
      throw new Error('Unknown statistics type.');
  }
}

module.exports = {
  createInstance: createInstance
};
