'use strict';

const basic = {
  author: {
    command: "--author",
    requiredArgument: true
  },
  since: {
    command: "--since",
    requiredArgument: true
  },
  after: {
    command: "--after",
    requiredArgument: true
  },
  until: {
    command: "--until",
    requiredArgument: true
  },
  before: {
    command: "--before",
    requiredArgument: false
  },
  n: {
    command: "-n",
    requiredArgument: true
  },
  noMerges: {
    command: "--no-merges",
    requiredArgument: false
  }
}

const shortlog = {
  c: {
    command: "-c",
    requiredArgument: false
  }
}

module.exports = {
  basic: basic,
  shortlog: shortlog
};
