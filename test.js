const assert = require('assert');

function add(a, b) {
  return a + b;
}

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(error.message);
  }
}

test('adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('handles negative numbers', () => {
  assert.strictEqual(add(-1, 2), 1);
});
