import { createContext, useContext } from 'react';

import { PageContext } from './types';

const initialState: PageContext = {} as any;

export const pageContext = createContext<PageContext>(initialState);

export const usePageContext = () => {
  return useContext(pageContext);
};
