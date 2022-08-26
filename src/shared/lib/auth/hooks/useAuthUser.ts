import { useContext } from 'react';

import { AuthContext } from '../AuthContext';
import { AuthStateUserObject } from '../types';

/**
 * Auth State Hook
 *
 * @returns - Auth State Function
 */
export function useAuthUser(): () => AuthStateUserObject | null {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('Auth Provider is missing. Please add the AuthProvider before Router');
  }

  return () => {
    return context.authState.auth ? context.authState.userState : null;
  };
}
