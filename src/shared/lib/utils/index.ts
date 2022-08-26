export const setAsyncTimeout = (cb: Function, timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve(null);
    }, timeout);
  });
