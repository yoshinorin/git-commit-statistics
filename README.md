# git-commit-statistics

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/700d8374e80a46e5b14e1b180e385507)](https://app.codacy.com/app/YoshinoriN/git-commit-statistics?utm_source=github.com&utm_medium=referral&utm_content=YoshinoriN/git-commit-statistics&utm_campaign=Badge_Grade_Settings)
[![NPM version](https://badge.fury.io/js/git-commit-statistics.svg)](https://www.npmjs.com/package/git-commit-statistics)
[![Build Status](https://travis-ci.org/YoshinoriN/git-commit-statistics.svg?branch=master)](https://travis-ci.org/YoshinoriN/git-commit-statistics) [![Coverage Status](https://coveralls.io/repos/github/YoshinoriN/git-commit-statistics/badge.svg?branch=master)](https://coveralls.io/github/YoshinoriN/git-commit-statistics?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/YoshinoriN/git-commit-statistics.svg)](https://greenkeeper.io/)

Get commit log statistics of git repository.

## Features

Can get belows statistics. Examples of result are [here](#examples-of-result).

* byPerDayOfMonth
* byPerMonth
* byPerWeekDays
* byPerYear
* byPerDayHour
* byDayHourOfWeekDay

## Installation

```sh
$ npm install git-commit-statistics
```

## Usaga

```js
const CommitStatistics = require('git-commit-statistics');

const cs = new CommitStatistics('<yourRepositoryPath>/.git');

//No options
let result = cs.getByPerDayOfMonth();

//With options
const options = {
  author: 'YoshinoriN',
  since: '2017-01-01',
  after: '2018-01-01',
  maxCount: 100,
  noMerges: true
};
let result = cs.getByPerDayOfMonth(options);
```

All available methods are belows.

|name|options|result|
|---|---|---|
|getByPerDayOfMonth()|[Options](#options)|[example](#getbyperdayofmonth)|
|getByPerMonth()|[Options](#options)|[example](#getbypermonth)|
|getByPerWeekDay()|[Options](#options)|[example](#getbyperweekday)|
|getByPerYear()|[Options](#options)|[example](#getbyperyear)|
|getByDayHour()|[Options](#options)|[example](#getbydayhour)|
|getByDayHourOfWeekDay()|[Options](#options)|[example](#getbydayhourofweekday)|

### Options

Input argument to each method. Example is below.

```js
const options = {
  author: 'YoshinoriN',
  maxCount: 100
};
let result = cs.getByPerDayOfMonth(options);
```

Allowable options for each methods argument.

|name|type|example|
|---|---|---|
|author|`string`|'YoshinoriN'|
|since|`string`|'2017-01-01'|
|after|`string`|'2018-01-01'|
|until|`string`|'2018-01-01'|
|before|`string`|'2018-01-01'|
|maxCount|`number`|100|
|noMerges|`boolean`|true|

Please see [official git document](https://git-scm.com/docs/git-log#_options) what is mean.

## Examples of Result

Example result of each methods.

### getByPerDayOfMonth

```js
[ { day: 1, count: 809 },
  { day: 2, count: 733 },
...
  { day: 30, count: 642 },
  { day: 31, count: 340 } ]
```

### getByPerMonth

```js
[ { id: 1, month: 'Jan', count: 2124 },
  { id: 2, month: 'Feb', count: 2147 },
...
  { id: 11, month: 'Nov', count: 1631 },
  { id: 12, month: 'Dec', count: 2110 } ]
```

### getByPerWeekDay

```js
[ { id: 0, dayOfWeek: 'Sun', count: 1891 },
  { id: 1, dayOfWeek: 'Mon', count: 3899 },
...
  { id: 5, dayOfWeek: 'Fri', count: 3765 },
  { id: 6, dayOfWeek: 'Sat', count: 1950 } ]
```

### getByPerYear

```js
[ { year: 2009, count: 915 },
  { year: 2010, count: 1945 },
...
  { year: 2017, count: 4610 },
  { year: 2018, count: 3429 } ]
```

### getByDayHour

```js
[ { hour: 0, count: 744 },
  { hour: 1, count: 671 },
...
  { hour: 22, count: 987 },
  { hour: 23, count: 938 } ]
```

### getByDayHourOfWeekDay

```js
{ id: 0,
  Sun:
   [ { hour: 11, count: 1 },
     { hour: 12, count: 1 },
     { hour: 23, count: 1 } ] }
{ id: 1,
  Mon:
   [ { hour: 8, count: 1 },
     { hour: 9, count: 3 },
...
     { hour: 20, count: 2 },
     { hour: 21, count: 1 } ] }
...
{ id: 5,
  Fri:
   [ { hour: 5, count: 4 },
     { hour: 7, count: 2 },
...
     { hour: 21, count: 1 } ] }
{ id: 6,
  Sat:
   [ { hour: 1, count: 2 },
     { hour: 4, count: 1 },
...
     { hour: 20, count: 1 },
     { hour: 21, count: 2 } ] }
```

## License

MIT
