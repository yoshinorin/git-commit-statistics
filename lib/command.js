'use strict';

const options = require('./options');

const COMMAND_BASE = {
  BASIC: 0,
  SHORTLOG: 1
}

const STATISTICS_TYPE = {
  BY_PER_WEEK_DAY: 0,
  BY_PER_WEEK: 1,
  BY_PER_MONTH: 2,
  BY_PER_YEAR: 3,
  BY_PER_DAY_OF_MONTH: 4,
  SUMMARY_BY_AUTHOR: 5,
  SUMMARY_BY_COMMITTER: 6
}

const commandSet = {
  basic: {
    id: COMMAND_BASE.BASIC,
    baseCommand: 'git --git-dir',
    defaultOptions: '--oneline --pretty=format:"%cd" --reverse',
    options: [ options.basic ]
  },
  shortlog: {
    id: COMMAND_BASE.SHORTLOG,
    baseCommand: 'git --git-dir',
    defaultOptions: 'shortlog -s -n',
    options: [ options.shortlog ]
  }
}

const type = {
  byPerWeekDay: {
    type: STATISTICS_TYPE.BY_PER_WEEK_DAY,
    commandBase: COMMAND_BASE.BASIC
  },
  byPerWeek: {
    type: STATISTICS_TYPE.BY_PER_WEEK,
    commandBase: COMMAND_BASE.BASIC
  },
  byPerMonth: {
    type: STATISTICS_TYPE.BY_PER_MONTH,
    commandBase: COMMAND_BASE.BASIC
  },
  byPerYear: {
    type: STATISTICS_TYPE.BY_PER_YEAR,
    commandBase: COMMAND_BASE.BASIC
  },
  byPerDayOfMonth: {
    type: STATISTICS_TYPE.BY_PER_DAY_OF_MONTH,
    commandBase: COMMAND_BASE.BASIC
  },
  summaryByAuthor: {
    type: STATISTICS_TYPE.SUMMARY_BY_AUTHOR,
    commandBase: COMMAND_BASE.SHORTLOG
  },
  summaryByCommitter: {
    type: STATISTICS_TYPE.SUMMARY_BY_COMMITTER,
    commandBase: COMMAND_BASE.SHORTLOG
  }
}

function create(commandType, opts) {

  let commandSet = this.getCommamdSet(commandType);
  let command = "";
  //TODO;
}

function getCommamdSet(commandBase) {
  switch (commandBase) {
    case this.COMMAND_BASE.BASIC:
      return this.commandSet.basic;
    case this.COMMAND_BASE.SHORTLOG:
      return this.commandSet.shortlog;
    default:
      throw new Error("TODO");
  }
}

module.exports = {
  create: create
};
