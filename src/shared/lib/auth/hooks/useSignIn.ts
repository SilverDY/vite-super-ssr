import { useContext } from 'react';

import { AuthContext } from '../AuthContext';
import { signInFunctionParams } from '../types';
import { doSignIn } from '../utils/reducers';

/**
 *@function
 *@name useSignIn
 *@description Authentication SignIn Hook
 *@returns - Sign In function
 */
export function useSignIn(): (signInConfig: signInFunctionParams) => boolean {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error('Auth Provider is missing. Please add the AuthProvider before Router');
  }

  return (signInConfig: signInFunctionParams): boolean => {
    const { token, tokenType, authState, expiresIn, refreshToken, refreshTokenExpireIn } =
      signInConfig;

    const expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000);

    if (context.authState.isUsingRefreshToken) {
      // Using the power of refresh token
      if (!!refreshToken && !!refreshTokenExpireIn) {
        // refresh token params are provided
        // sign in with refresh token
        const refreshTokenExpireAt = new Date(
          new Date().getTime() + refreshTokenExpireIn * 60 * 1000
        );

        context.dispatch(
          doSignIn({
            auth: {
              token: token,
              type: tokenType,
              expiresAt: expTime,
            },
            userState: authState ? authState : null,
            refresh: {
              token: refreshToken,
              expiresAt: refreshTokenExpireAt,
            },
          })
        );

        return true;
      }

      // refresh token params are not provided
      // throw an error
      throw new Error('Make sure you given "refreshToken" and "refreshTokenExpireIn" parameter');
    } else {
      // Not using refresh token
      if (!!refreshToken && !!refreshTokenExpireIn) {
        // params are not expected but provided
        // throw an error
        throw new Error(
          "The app doesn't implement 'refreshToken' " +
            'feature.\nSo you have to implement refresh token feature ' +
            "from 'AuthProvider' before using it."
        );
      } else {
        // sign in without the refresh token
        context.dispatch(
          doSignIn({
            auth: {
              token: token,
              type: tokenType,
              expiresAt: expTime,
            },
            userState: authState ? authState : null,
            refresh: null,
          })
        );

        return true;
      }
    }
  };
}
