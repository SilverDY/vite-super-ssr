import { useContext } from 'react';

import { AuthContext } from '../AuthContext';
import { doSignOut } from '../utils/reducers';

/**
 *@public
 *@function
 *@name useSignOut
 *@description Sign out Hook
 */
export function useSignOut(): () => boolean {
  /**
   *A constant c.
   *@kind constant
   */
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('Auth Provider is missing. Please add the AuthProvider before Router');
  }

  return () => {
    try {
      if (context) {
        context.dispatch(doSignOut());

        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  };
}
