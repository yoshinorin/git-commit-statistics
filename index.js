'use strict';

const months = require('./lib/months');
const weekday = require('./lib/weekday');
const options = require('./lib/options');
const commands = require('./lib/commands');

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

  /**
   * Command builder for git log.
   *
   * @param {Object} opts git log options
   */
  commandBuilder(opts) {
    let command = "";
    command = commands.basic;

    if (opts === undefined) {
      return command;
    }

    Object.entries(opts).forEach(opt => {
      let x = options.list.find(function(v) {
        return v === opt[0];
      });
      if (x === undefined) {
        throw new Error(`Option ${opt[0]} is invalid.`);
      }
      command += ` --${opt[0]}="${opt[1]}"`;
    });

    return command;
  }

}

module.exports = CommitStatistics;
