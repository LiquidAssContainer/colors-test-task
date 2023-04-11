export const debounce = (fn: (...args: unknown[]) => void, timeout: number) => {
  let lastCall: number;
  let prevCall: number;
  let lastCallTimer: ReturnType<typeof setTimeout>;

  const resultFn = function (...args: unknown[]) {
    prevCall = lastCall;
    lastCall = Date.now();

    if (prevCall && lastCall - prevCall <= timeout) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => fn(...args), timeout);
  };

  const clearTimeoutFn = () => clearTimeout(lastCallTimer);

  return [resultFn, clearTimeoutFn];
};
