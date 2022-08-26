import { useEffect, useRef } from 'react';

/**
 * React useInterval Hook
 * Used to integrate the power of setInterval seamlessly
 *
 * @param callback - The callback function
 * @param delay - The amount of delay in minutes.
 *
 * @returns the ref of setInterval
 */
function useInterval(
  callback: () => void,
  delay: number | null
): React.MutableRefObject<number | null> {
  const savedCallback = useRef(callback);
  const intervalRef = useRef<number | null>(null);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(tick, delay * 60 * 1000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearTimeout(intervalRef.current);
      }
    };
  }, [delay]);

  return intervalRef;
}

export { useInterval };
