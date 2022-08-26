import { pageContext as context } from './context';
import { PageProviderProps } from './types';

export const PageContextProvider: React.FC<PageProviderProps> = ({ pageContext, children }) => {
  return <context.Provider value={pageContext}>{children}</context.Provider>;
};
