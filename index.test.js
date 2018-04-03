const match = require('./index');
const data = require('./data');

it('filters broad', () => {
  const input = [
    'abc',
    'efg',
    'hij'];

  const keyword = 'abc';
  const result = match(keyword, input);
  expect(result).toContain('abc');
});

it('filters negative', () => {
  const input = [
    'abc',
    'efg',
    'hij'];

  const keyword = 'efg -abc';
  const result = match(keyword, input);
  expect(result).toContain('efg');
});

it('filters or', () => {
  const input = [
    'abc',
    'efg',
    'hij'];

  const keyword = 'abc|efg';
  const result = match(keyword, input);
  expect(result).toContain('efg');
  expect(result).toContain('abc');
});

it('filters from property', () => {
  const keyword = 'the';
  const result = match(keyword, data, e => e.title);
  expect(result.length).toBe(10);
});
