const { PASS, UNKNOWN, FAIL } = require('./status');
const Filter = require('./filter');

const defaultMap = e => e;

const Matcher = (filterString, collection, filterBy = defaultMap) => {
  const filters = filterString.split(' ');
  const requirements = filters.reduce((r, f) => { r[f] = UNKNOWN; return r; }, {}); // eslint-disable-line no-param-reassign
  const requirementsKeys = Object.keys(requirements);

  return collection.filter((element) => {
    requirementsKeys.forEach((key) => { requirements[key] = UNKNOWN; });

    const targets = filterBy(element).split(' ');
    targets.forEach(target =>
      requirementsKeys.forEach((key) => {
        if (requirements[key] === FAIL) return;
        const test = Filter(key).matches(target);
        if (test !== UNKNOWN) requirements[key] = test;
      }));

    // Assert all the requirements are met
    return requirementsKeys.every(key => requirements[key] === PASS);
  });
};

module.exports = Matcher;
