# keywords-match
Adwords-like keywords matcher
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

## Installation

```sh
npm i keywords-match
```

## Keyword matches

Broad match
Broad match is the default match type that all your keywords are assigned. Ads may show on searches that include misspellings, synonyms, related searches, and other relevant variations. So if your keyword is “women’s hats,” someone searching for “buy ladies hats” might see your ad. 

Example keyword: women's hats
Example search: buy ladies hats
Learn more about broad match.

Broad match modifier
Add a plus sign (for example, +keyword) to modify a broad match keyword. Ads may show on searches that include modified broad match keywords (or close variations, but not synonyms), in any order.

Symbol: Plus sign, for example +keyword
Example keyword: +women's +hats
Example search: hats for women
Learn more about broad match modifier.

Phrase match
Ads may show on searches that match a phrase, or are close variations of that phrase, with additional words before or after. Ads won't show, however, if a word is added to the middle of the phrase, or if words in the phrase are reordered in any way.

Symbol: "keyword"
Example keyword: "women's hats"
Example search: buy women's hats
Learn more about phrase match.

Exact match
Ads may show on searches that match the exact term or are close variations of that exact term. Close variations here may also include a reordering of words if it doesn’t change the meaning, and the addition or removal of function words (prepositions, conjunctions, articles, and other words that don’t impact the intent of a search).

Symbol: [keyword]
Example keyword: [women's hats]
Example search: hats for women
Learn more about exact match.

Negative match
Ads may show on searches without the term. So, if you’re a hat company but you don’t sell baseball hats, you could add “-baseball hats” as a negative keyword so that your ads don’t show for people searching for baseball hats. 

Symbol: -keyword
Example keyword: -baseball hats
Example search: women’s hats

NOTE: In this example, ads will show on searches for “women’s hats” but not on searches for “baseball hats.”
