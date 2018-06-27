'use strict';

const months = require('./lib/months');
const weekday = require('./lib/weekday');
const commands = require('./lib/command');

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
}

module.exports = CommitStatistics;
