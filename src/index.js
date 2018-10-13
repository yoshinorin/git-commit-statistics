'use strict';

const command = require('./lib/command');
const util = require('./lib/utils');
const aggregate = require('./lib/aggregate');
const processorFactory = require('./lib/processor/processorFactory');
const statisticsTypes = require('./lib/types/statisticsTypes');

class CommitStatistics {

  /**
   * Constructor
   *
   * @param {string} path Git directory path.
   */
  constructor(path) {
    if (!path) {
      throw new Error('Repositry required');
    }
    this._path = path;
  }

  getByPerDayOfMonth(options) {
    const instance = processorFactory.createInstance(this._path, statisticsTypes.BY_PER_DAY_OF_MONTH, options);
    return instance.createResult();
  }

  getByPerMonth(options) {
    const instance = processorFactory.createInstance(this._path, statisticsTypes.BY_PER_MONTH, options);
    return instance.createResult();
  }

  getByPerWeekDay(options) {
    const instance = processorFactory.createInstance(this._path, statisticsTypes.BY_PER_WEEK_DAY, options);
    return instance.createResult();
  }

  getByPerYear(options) {
    const instance = processorFactory.createInstance(this._path, statisticsTypes.BY_PER_YEAR, options);
    return instance.createResult();
  }

  getByDayHour(options) {
    const instance = processorFactory.createInstance(this._path, statisticsTypes.BY_PER_DAY_HOUR, options);
    return instance.createResult();
  }
}

module.exports = CommitStatistics;
