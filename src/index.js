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

  commandExecuter(command) {
    let exec = require('child_process').execSync;
    return exec(command, { maxBuffer: 1024 * 1024 });
  }

  commandExecuteResultToArray(line) {
    return line.toString().split('\n');
  }

  parseShortLog(array) {
    const line = array.match(/\S+/g);
    return {
      author: line[1],
      commits: line[0]
    }
  }

}

module.exports = CommitStatistics;
