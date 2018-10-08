'use strict';

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
    const str = line.toString().trim();
    if (str.length === 0) {
      return [];
    }
    return str.split('\n');
  }

  parseGitLogByLine(line) {
    const arr = line.match(/\S+/g);
    return {
      year: arr[4],
      month: arr[1],
      day: arr[2],
      hour: (arr[3].split(':'))[0],
      dayOfWeek: arr[0]
    }
  }

  parseGitShortLogByLine(line) {
    const arr = line.match(/\S+/g);
    return {
      author: arr[1],
      commits: arr[0]
    }
  }

  groupBy(list, field) {
    return list.reduce((result, current) => {
      const y = result.find((x) => x[field] === current[field]);
      if (y) {
        y.count ++;
      } else {
        result.push({
          [field]: current[field],
          count: 1
        });
      }
      return result;
    }, []);
  }

}

module.exports = CommitStatistics;
