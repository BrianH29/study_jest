const fn = require('./fn')

test('1 is 1', () => {
  expect(1).toBe(1);
});

test('2 더하 3은 5di', () => {
  expect(fn.add(2,3)).toBe(5);
});

test('3 더하 3은 5가 아니야', () => {
  expect(fn.add(3,3)).not.toBe(5);
});
