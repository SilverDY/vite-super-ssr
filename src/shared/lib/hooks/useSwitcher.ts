import { useCallback, useState } from 'react';

export type UseSwitcher = (initialValue: boolean) => {
  value: boolean;
  switchOn: () => void;
  switchOff: () => void;
  toggle: () => void;
};

export const useSwitcher: UseSwitcher = (initialValue: boolean = false) => {
  const [value, setValue] = useState<typeof initialValue>(initialValue);

  const switchOn = useCallback(() => {
    setValue(true);
  }, []);

  const switchOff = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((value) => !value);
  }, []);

  return { value, switchOn, switchOff, toggle };
};
