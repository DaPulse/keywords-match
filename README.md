# keywords-match [![Build Status](https://travis-ci.org/DaPulse/keywords-match.svg?branch=master)](https://travis-ci.org/DaPulse/keywords-match)

## Demo
[Try it out on CodeSandBox](https://codesandbox.io/s/wkjpqyy62k)

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
