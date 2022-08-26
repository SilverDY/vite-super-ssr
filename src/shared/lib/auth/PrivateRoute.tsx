import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Navigate } from '../router';

import { AuthContext } from './AuthContext';
import { doSignOut } from './utils/reducers';

interface RequireAuthProps {
  children: JSX.Element;
  loginPath: string;
}

/**
 * Private Route for Components
 *
 * @remarks
 * This Component is based on {@link https://reactrouter.com/web/api/Route | reactrouter.Route}.
 * So you need to install react-route-dom before use it
 *
 * @param props
 */
export const RequireAuth: React.FunctionComponent<RequireAuthProps> = ({ children, loginPath }) => {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('Auth Provider is missing. Please add the AuthProvider before Router');
  }

  const isAuth = () => {
    if (context.authState.auth && new Date(context.authState.auth.expiresAt) > new Date()) {
      return true;
    }

    context.dispatch(doSignOut());

    return false;
  };

  const location = useLocation();

  if (!isAuth()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  return children;
};
