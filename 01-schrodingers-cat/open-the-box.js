// Runs the same code on two "machines".
// Usage: node open-the-box.js

const { getUsersUrlBuggy, getUsersUrl } = require("./api");

console.log("❌ Buggy version");

process.env.API_URL = "https://api.myshop.com"; // My laptop: has .env
console.log("  My laptop:", getUsersUrlBuggy());

delete process.env.API_URL; // Server: no .env
console.log("  Server:   ", getUsersUrlBuggy());

console.log("\n✅ Fixed version");

process.env.API_URL = "https://api.myshop.com";
console.log("  My laptop:", getUsersUrl());

delete process.env.API_URL;
try {
  getUsersUrl();
} catch (error) {
  console.log("  Server:    🚨", error.message);
}
