'use strict';

const months = require('./lib/months');
const weekday = require('./lib/weekday');
const options = require('./lib/options');

class CommitStatistics {

  constructor(path, options) {
    if (!path) {
      throw new Error('Repositry required');
    }
    this._path = path;
    this._options = options;
  }

  commandBuilder() {
    this._command = "";
    this._command = `git --git-dir ${this._path}`

    if (!this._options) {
      return this._command;
    }


    return this._command;
  }

}

module.exports = CommitStatistics;
