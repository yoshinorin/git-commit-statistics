'use strict';

const aggregate = require('../aggregate');
const command = require('../command');
const util = require('../utils');

class BaseProcessor {
  constructor(path, commandType, options) {
    if (!path) {
      throw new Error('Repositry required');
    }
    this._path = path;
    this._commandType = commandType;
    this._options = options;
  }

  getGitLogs() {
    return util.toArray(command.execute(command.create(this._commandType, this._path, this._options)), '\n');
  }

  createObjects() {
    const logs = this.getGitLogs();
    if (logs.length === 0) {
      return logs;
    }

    let list = [];
    logs.forEach(log => {
      list.push(this.parseGitLog(log));
    });

    return list;
  }

  createResult() {
    throw new Error('Not implemented');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      year: arr[4],
      month: arr[1],
      day: arr[2],
      hour: (arr[3].split(':'))[0],
      dayOfWeek: arr[0]
    }
  }
}

module.exports = BaseProcessor;
