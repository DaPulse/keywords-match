const match = require('./index');

it('dummy', () => {
  expect(1).toBe(1);
});

it('Filters an array of strings', () => {
  const input = [
    'abc',
    'efg',
    'hij'];

  const keyword = 'abc';
  const result = match(keyword, input);
  expect(result).toContain('abc');
});

