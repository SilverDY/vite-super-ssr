import { useMemo } from 'react';
import { useMediaQuery as mediaQuery } from '@mui/material';

export const useMediaQuery = () => {
  const mobile = mediaQuery('(max-width: 768px)');
  const tablet = mediaQuery('(min-width: 769px) and (max-width: 960px)');
  const mobileAndTablet = mediaQuery('(max-width: 960px)');
  const desktop = mediaQuery('(min-width: 1280px)');

  const isMediaQuery = (query: string) => {
    return mediaQuery(query);
  };

  const isMobileView = useMemo(() => mobile, [mobile]);
  const isTabletView = useMemo(() => tablet, [tablet]);
  const isMobileAndTabletView = useMemo(() => mobileAndTablet, [mobileAndTablet]);
  const isDesktopView = useMemo(() => desktop, [desktop]);

  return { isMobileView, isTabletView, isMobileAndTabletView, isDesktopView, isMediaQuery };
};
