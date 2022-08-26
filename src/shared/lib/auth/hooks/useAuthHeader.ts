import { useContext } from 'react';

import { AuthContext } from '../AuthContext';

export function useAuthHeader(): () => string {
  const c = useContext(AuthContext);

  if (c === null) {
    throw new Error('Auth Provider is missing. Please add the AuthProvider before Router');
  }

  return () => {
    if (c.authState.auth) {
      return `${c.authState.auth.type} ${c.authState.auth.token}`;
    }

    return ``;
  };
}
