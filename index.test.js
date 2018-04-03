const match = require('./index');

it('dummy', () => {
  expect(1).toBe(1);
});

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
