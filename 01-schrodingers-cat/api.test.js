// Run: node --test
const test = require("node:test");
const assert = require("node:assert/strict");
const { getUsersUrl } = require("./api");

test("works when API_URL is set", () => {
  process.env.API_URL = "https://api.myshop.com";
  assert.equal(getUsersUrl(), "https://api.myshop.com/users");
});

test("stops with a clear message when API_URL is missing", () => {
  delete process.env.API_URL;
  assert.throws(() => getUsersUrl(), /API_URL is not set/);
});
