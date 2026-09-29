const test = require("node:test");
const assert = require("node:assert");
const greet = require("../public/script.js");

test('greet("World") returns "Hello, World!"', () => {
  const result = greet("World");
  assert.strictEqual(result, "Hello, World!");
});
