'use strict';

const command = require('./lib/command');
const util = require('./lib/utils');
const aggregate = require('./lib/aggregate');

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

  getByPerMonth(opts) {
    //TODO
  }

  getByPerDayOfMonth(opts) {
    //TODO
  }

  getByPerWeekDay(opts) {
    //TODO
  }

  getByYear(opts) {
    //TODO
  }
}

module.exports = CommitStatistics;
