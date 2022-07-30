import { useEffect } from 'react';

/**
 * Set a page title
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

/**
 * Scrolls the page to the top
 * @todo Find a better way to scroll
 */
export const scrollToTop = () => {
  document.querySelector('html')?.scrollTo({ top: 0, behavior: 'smooth' });
};
