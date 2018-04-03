const { PASS, UNKNOWN, FAIL } = require('./status');

const Filter = filterWord => ({
  matches: (target) => {
    const ors = filterWord.split('|');
    if (ors.length > 1) return (ors.some(or => Filter(or).matches(target) === PASS) ? PASS : UNKNOWN);
    if (filterWord.startsWith('-')) return (Filter(filterWord.substring(1)).matches(target) === PASS ? FAIL : PASS);

    return (target.includes(filterWord) ? PASS : UNKNOWN);
  },
});

module.exports = Filter;
