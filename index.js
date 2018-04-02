const PASS = 1;
const UNKNOWN = 0;
const FAIL = -1;

const Filter = filterWord => ({
    matches: (target) => {
        const ors = filterWord.split('|');
        if (ors.length > 1) return (ors.some(or => new Filter(or).matches(target) === PASS) ? PASS : UNKNOWN);
        if (filterWord.startsWith('-')) return (new Filter(filterWord.substring(1)).matches(target) === PASS ? FAIL : PASS);
        // if(filterWord.startsWith('+')) return (target === filterWord.substring(1) ? PASS : UNKNOWN)

        return (target.includes(filterWord) ? PASS : UNKNOWN);
    },
});

const ResearchFilter = (filterString, collection, filterBy = e => e) => {
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

module.exports = ResearchFilter;
