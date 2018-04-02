const Coordinator = (filterString, collection, filterBy = e => e) => {
  const filters = filterString.split(' ');
  const requirements = filters.reduce((r, f) => { r[f] = UNKNOWN; return r; }, {});
  const requirementsKeys = Object.keys(requirements);

  return collection.filter((element) => {
    requirementsKeys.forEach(key => requirements[key] = UNKNOWN);

    const targets = filterBy(element).split(' ');
    targets.forEach(target =>
      requirementsKeys.forEach((key) => {
        if (requirements[key] === FAIL) return;
        const test = (new Filter(key)).matches(target);
        if (test !== UNKNOWN) requirements[key] = test;
      }),
    );

    return requirementsKeys.every(key => requirements[key] === PASS);
  });
};

module.exports = Coordinator;
