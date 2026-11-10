// The app reads the API address from an environment variable.
// On my laptop, the .env file has: API_URL=https://api.myshop.com

// ❌ BUGGY: just uses the variable, even if it is not there.
function getUsersUrlBuggy() {
  return `${process.env.API_URL}/users`;
}

// ✅ FIXED: checks the variable first and stops with a clear message.
function getUsersUrl() {
  if (!process.env.API_URL) {
    throw new Error("API_URL is not set. Add it to your .env file.");
  }
  return `${process.env.API_URL}/users`;
}

module.exports = { getUsersUrlBuggy, getUsersUrl };
