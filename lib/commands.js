'use strict';

module.exports = {
  basic: `git --git-dir ${this._path} --oneline --pretty=format:"%cd" --reverse`,
  shortlog: `git --git-dir ${this._path} shortlog -s -n`
};
