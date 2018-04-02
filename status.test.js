const { PASS, UNKNOWN, FAIL } = require('./status');

it('Exports pass status', () => {
  expect(PASS).toBeDefined();
});

it('Exports unknown status', () => {
  expect(UNKNOWN).toBeDefined();
});

it('Exports fail status', () => {
  expect(FAIL).toBeDefined();
});
