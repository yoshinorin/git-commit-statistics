'use strict';

const options = require('./options');
const statisticsTypes = require('./types/statisticsTypes');

const COMMAND_BASE_TYPE = {
  BASIC: 0,
  SHORTLOG: 1
};

const commandTypes = {
  basic: {
    id: COMMAND_BASE_TYPE.BASIC,
    baseCommand: 'git --git-dir',
    defaultOptions: '--oneline --pretty=format:"%cd" --reverse',
    options: options.basic
  },
  shortlog: {
    id: COMMAND_BASE_TYPE.SHORTLOG,
    baseCommand: 'git --git-dir',
    defaultOptions: 'shortlog -s -n',
    options: options.shortlog
  }
};

const type = {
  byPerMonth: {
    type: statisticsTypes.BY_PER_MONTH,
    commandBase: COMMAND_BASE_TYPE.BASIC
  },
  byPerDayOfMonth: {
    type: statisticsTypes.BY_PER_DAY_OF_MONTH,
    commandBase: COMMAND_BASE_TYPE.BASIC
  },
  byPerWeek: {
    type: statisticsTypes.BY_PER_WEEK,
    commandBase: COMMAND_BASE_TYPE.BASIC
  },
  byPerWeekDay: {
    type: statisticsTypes.BY_PER_WEEK_DAY,
    commandBase: COMMAND_BASE_TYPE.BASIC
  },
  byPerYear: {
    type: statisticsTypes.BY_PER_YEAR,
    commandBase: COMMAND_BASE_TYPE.BASIC
  },
  byPerDayHour: {
    type: statisticsTypes.BY_PER_DAY_HOUR,
    commandBase: COMMAND_BASE_TYPE.BASIC
  },
  summaryByAuthor: {
    type: statisticsTypes.SUMMARY_BY_AUTHOR,
    commandBase: COMMAND_BASE_TYPE.SHORTLOG
  },
  summaryByCommitter: {
    type: statisticsTypes.SUMMARY_BY_COMMITTER,
    commandBase: COMMAND_BASE_TYPE.SHORTLOG
  }
};

function create(type, path, opts) {
  let commandType;
  let command;
  switch (type.commandBase) {
    case COMMAND_BASE_TYPE.BASIC:
      commandType = commandTypes.basic;
      command = `${commandType.baseCommand} ${path}` + ' log';
      if (opts === undefined) {
        return command += ` ${commandType.defaultOptions}`;
      }
      Object.entries(opts).forEach((opt) => {
        const option = createOption(opt[0], opt[1], commandType.options);
        if (option !== undefined) {
          command += ` ${option}`;
        }
      });
      return command += ` ${commandType.defaultOptions}`;
    case COMMAND_BASE_TYPE.SHORTLOG:
      commandType = commandTypes.shortlog;
      command = `${commandType.baseCommand} ${path} ${commandType.defaultOptions}`;
      if (opts === undefined) {
        return command;
      }
      Object.entries(opts).forEach((opt) => {
        const option = createOption(opt[0], opt[1], commandType.options);
        if (option !== undefined) {
          command += ` ${option}`;
        }
      });
      return command;
    default:
      throw new Error('Unknown command base.');
  }
}

function createOption(key, value, enableOptions) {
  const x = Object.entries(enableOptions).find(kv => kv[0] === key);

  if (x === undefined) {
    throw new Error(`Option ${key} is invalid.`);
  }

  if (x[1].requiredArgument) {
    if (value === undefined) {
      throw new Error(`Option ${key} is a required argument.`);
    }
    return `${x[1].command}="${value}"`;
  }

  if (x[1].argumentType === 'boolean' && value) {
    return x[1].command;
  }
}

function execute(command) {
  const exec = require('child_process').execSync;
  return exec(command, { maxBuffer: 1024 * 1024 });
}

module.exports = {
  create,
  type,
  execute
};
