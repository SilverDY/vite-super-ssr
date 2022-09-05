import { useEffect, useMemo } from 'react';

import { useSetViewer, useViewer } from '~entities/viewer';
import { useAuthHeader, useIsAuthenticated } from '~shared/lib/auth';

export interface AuthProviderProps extends ComponentWithChildren {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const setViewer = useSetViewer();
  const viewer = useViewer();
  const isAuth = useIsAuthenticated();
  const getToken = useAuthHeader();

  const token = useMemo(() => getToken(), [getToken]);

  useEffect(() => {
    if (!viewer && isAuth() && token) {
      setViewer({ token });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isAuth]);

  return children;
};
