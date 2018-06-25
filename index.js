'use strict';

const MONTHS = require('./lib/MONTHS');
const WEEKDAY = require('./lib/WEEKDAY');
const OPTIONS = require('./lib/OPTIONS');

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
