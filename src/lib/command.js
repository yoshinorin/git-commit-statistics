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
    options: options.basic
  },
  shortlog: {
    id: COMMAND_BASE.SHORTLOG,
    baseCommand: 'git --git-dir',
    defaultOptions: 'shortlog -s -n',
    options: options.shortlog
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

function create(type, path, opts) {
  let commandSet = getCommamdSet(type.commandBase);
  let command = commandSet.baseCommand + ` ${path}` + ' log ';

  if (opts === undefined) {
    return command += ' ' + commandSet.defaultOptions;
  }

  Object.entries(opts).forEach(opt => {
    command += ' ' + createOption(opt[0], opt[1], commandSet.options);
  });
  return command += ' ' + commandSet.defaultOptions;
}

function createOption(key, value, enableOptions) {

  let x = Object.entries(enableOptions).find(function(kv) {
    return kv[0] === key;
  });

  if (x === undefined) {
    throw new Error(`Option ${key} is invalid.`);
  }

  if (x[1].requiredArgument) {
    if (value === undefined) {
      throw new Error(`Option ${key} is a required argument.`);
    }
    return `${x[1].command}="${value}"`;
  }

  if (x[1].argumentType === "boolean" && value) {
    return x[1].command;
  }
}

function getCommamdSet(commandBase) {
  switch (commandBase) {
    case COMMAND_BASE.BASIC:
      return commandSet.basic;
    case COMMAND_BASE.SHORTLOG:
      return commandSet.shortlog;
    default:
      throw new Error("Unknown command base.");
  }
}

module.exports = {
  create: create,
  type: type
};
