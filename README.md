# keywords-match
Super simple keywords matcher

[![Build Status](https://travis-ci.org/DaPulse/keywords-match.svg?branch=master)](https://travis-ci.org/DaPulse/keywords-match)
[![Coverage Status](https://coveralls.io/repos/github/DaPulse/keywords-match/badge.svg?branch=master)](https://coveralls.io/github/DaPulse/keywords-match?branch=master)

## Usage
```sh
const matcher = require('keywords-matcher');
const collection = ['cat', 'lion', 'sandcat', 'catfish'];
const expression = 'cat -fish';
const result = matcher(expression, collection);
console.log(result); // ['cat', 'sandcat']
```
## Supported operators
* ' ' (space) - Means both expressions are required
* '|' (pipeline) - Means at least one expression is required
* '-' (dash) - Means the following expression must not be met
* expression - The filtered string contains the expression

## Operators in progress
* '""' (quotes) - Means the expression is matched exactly

## Installation

```sh
npm i keywords-match
```
