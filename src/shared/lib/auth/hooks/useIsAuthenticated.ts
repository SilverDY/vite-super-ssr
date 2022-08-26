import { useContext } from 'react';

import { AuthContext } from '../AuthContext';
import { doSignOut } from '../utils/reducers';

/**
 *@function
 *@name useIsAuthenticated
 *@description check weather user is authenticated or not
 */
export function useIsAuthenticated(): () => boolean {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('Auth Provider is missing. Please add the AuthProvider before Router');
  }

  return () => {
    if (context.authState.auth) {
      if (new Date(context.authState.auth.expiresAt) > new Date()) {
        return true;
      }

      context.dispatch(doSignOut());

      return false;
    }

    return false;
  };
}
