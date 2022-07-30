import { ForwardedRef, MutableRefObject, useEffect, useRef } from 'react';

export function useEnsuredForwardedFunctionalRef<T>(
  forwardedRef?: ForwardedRef<T>
): MutableRefObject<T> {
  const ensuredRef = useRef(
    typeof forwardedRef === 'function' ? null : forwardedRef?.current ?? null
  );

  useEffect(() => {
    if (!forwardedRef) {
      return;
    }

    if (typeof forwardedRef === 'object') {
      forwardedRef.current = ensuredRef.current;
    }

    if (typeof forwardedRef === 'function') {
      forwardedRef(ensuredRef.current);
    }
  }, [forwardedRef]);

  return ensuredRef;
}
