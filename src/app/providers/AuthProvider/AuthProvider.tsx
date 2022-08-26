import { useEffect, useMemo } from 'react';

import { useSetViewer } from '~entities/viewer';
import { api, createAuthenticatedRequestHandler } from '~shared/api';
import { useAuthHeader, useIsAuthenticated } from '~shared/lib/auth';

export interface AuthProviderProps extends ComponentWithChildren {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const setViewer = useSetViewer();
  const isAuth = useIsAuthenticated();
  const getToken = useAuthHeader();
  const token = getToken();

  // add token for axios
  useMemo(() => {
    api.interceptors.request.use(createAuthenticatedRequestHandler(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isAuth]);

  useEffect(() => {
    if (isAuth()) {
      setViewer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};
