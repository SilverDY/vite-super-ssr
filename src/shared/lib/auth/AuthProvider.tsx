import { useEffect, useReducer } from 'react';

import { AuthContext } from './AuthContext';

import { TokenObject } from './TokenObject';
import { AuthProviderProps } from './types';
import { authReducer, doRefresh } from './utils/reducers';
import { useInterval } from './utils/hooks';

/**
 * AuthProvider - The Authentication Context Provider
 *
 * @param children
 * @param authStorageName
 * @param cookieDomain
 * @param cookieSecure
 *
 * @return Functional Component
 */
export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
  authType,
  authName,
  serverCookies,
  cookieDomain = '',
  cookieSecure = false,
  refresh,
}) => {
  if (authType === 'cookie') {
    if (!cookieDomain) {
      throw new Error(
        "authType 'cookie' " +
          "requires 'cookieDomain' and 'cookieSecure' " +
          'props in AuthProvider'
      );
    }
  }

  const refreshTokenName = refresh ? `${authName}_refresh` : null;

  const tokenObject = new TokenObject(
    authName,
    authType,
    refreshTokenName,
    serverCookies,
    cookieDomain,
    cookieSecure
  );

  const [authState, dispatch] = useReducer(authReducer, tokenObject.initialToken());

  if (refresh) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInterval(
      () => {
        refresh
          .refreshApiCallback({
            authToken: authState.auth?.token,
            authTokenExpireAt: authState.auth?.expiresAt,
            authUserState: authState.userState,
            refreshToken: authState.refresh?.token,
            refreshTokenExpiresAt: authState.refresh?.expiresAt,
          })
          .then((result) => {
            // IF the API call is successful then refresh the AUTH state
            if (result.isSuccess) {
              // store the new value using the state update
              dispatch(doRefresh(result));
            }
          });
      },
      authState.isSignIn ? refresh.interval : null
    );
  }

  useEffect(() => {
    tokenObject.syncTokens(authState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  return <AuthContext.Provider value={{ authState, dispatch }}>{children}</AuthContext.Provider>;
};
