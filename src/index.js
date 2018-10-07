'use strict';

const months = require('./lib/months');
const weekday = require('./lib/weekday');
const command = require('./lib/command');

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

  commandExecuter(type, opts) {
    let exec = require('child_process').execSync;
    return exec(command.create(type, this._path, opts), { maxBuffer: 1024 * 1024 });
  }

  commandExecuteResultToArray(line) {
    return line.toString().split('\n');
  }

}

module.exports = CommitStatistics;
