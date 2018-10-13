'use strict';

const basic = {
  author: {
    command: '--author',
    requiredArgument: true,
    argumentType: 'string'
  },
  since: {
    command: '--since',
    requiredArgument: true,
    argumentType: 'string'
  },
  after: {
    command: '--after',
    requiredArgument: true,
    argumentType: 'string'
  },
  until: {
    command: '--until',
    requiredArgument: true,
    argumentType: 'string'
  },
  before: {
    command: '--before',
    requiredArgument: true,
    argumentType: 'string'
  },
  maxCount: {
    command: '--max-count',
    requiredArgument: true,
    argumentType: 'number'
  },
  noMerges: {
    command: '--no-merges',
    requiredArgument: false,
    argumentType: 'boolean'
  }
};

const shortlog = {
  c: {
    command: '-c',
    requiredArgument: false,
    argumentType: 'boolean'
  }
};

module.exports = {
  basic,
  shortlog
};
