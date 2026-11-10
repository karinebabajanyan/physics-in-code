# #1 Schrödinger's Cat → "It works on my machine"

## The physics

A cat is in a closed box. Until you open the box, you don't know if it is alive or dead. Only when you **look** do you find out.

## The programming

Code is the same. It works on my laptop, but on the server? We don't know until we run it there.

## The example

The app reads the API address from `.env`:

```js
function getUsersUrlBuggy() {
  return `${process.env.API_URL}/users`;
}
```

| Machine | Result |
|---|---|
| My laptop (has `.env`) | `https://api.myshop.com/users` 🐱 |
| Server (no `.env`) | `undefined/users` 💀 |

Same code, different result. The server has no `.env` file, so `API_URL` is `undefined`, and the app silently calls a wrong address.

## The fix

Check the variable first and stop with a clear message:

```js
function getUsersUrl() {
  if (!process.env.API_URL) {
    throw new Error("API_URL is not set. Add it to your .env file.");
  }
  return `${process.env.API_URL}/users`;
}
```

Now on the server we immediately see:

```
🚨 API_URL is not set. Add it to your .env file.
```

## Try it

```bash
node open-the-box.js   # runs the code on two "machines"
node --test            # runs the tests
```

## Takeaway

"It works on my machine" means you opened only one box. Check what your code needs (like environment variables) and fail early with a clear message.
