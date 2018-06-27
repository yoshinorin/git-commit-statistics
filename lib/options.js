'use strict';

const basic = {
  author: {
    command: "--author",
    hasArgument: true
  },
  since: {
    command: "--since",
    hasArgument: true
  },
  after: {
    command: "--after",
    hasArgument: true
  },
  until: {
    command: "--until",
    hasArgument: true
  },
  before: {
    command: "--before",
    hasArgument: false
  },
  n: {
    command: "-n",
    hasArgument: true
  },
  noMerges: {
    command: "--no-merges",
    hasArgument: false
  }
}

const shortlog = {
  c: {
    command: "-c",
    hasArgument: false
  }
}

module.exports = {
  basic: basic,
  shortlog: shortlog
};
