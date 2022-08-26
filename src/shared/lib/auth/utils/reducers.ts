import { AuthKitStateInterface } from '../types';

import {
  ActionType,
  AuthActions,
  RefreshTokenAction,
  RefreshTokenActionPayload,
  SignInAction,
  SignInActionPayload,
  SignOutAction,
} from './actions';

/**
 * Auth Reducer
 * Used in auth state
 * @param state
 * @param action
 */
export function authReducer(
  state: AuthKitStateInterface,
  action: AuthActions
): AuthKitStateInterface {
  switch (action.type) {
    case ActionType.SignIn:
      return {
        ...state,
        auth: action.payload.auth,
        refresh: action.payload.refresh,
        userState: action.payload.userState,
        isSignIn: true,
      };
    case ActionType.SignOut:
      return {
        ...state,
        auth: null,
        refresh: null,
        userState: null,
        isSignIn: false,
      };
    case ActionType.RefreshToken:
      if (state.isSignIn && state.auth && state.refresh) {
        return {
          ...state,
          auth: {
            token: action.payload.newAuthToken ? action.payload.newAuthToken : state.auth.token,
            type: state.auth.type,
            expiresAt: action.payload.newAuthTokenExpireIn
              ? new Date(new Date().getTime() + action.payload.newAuthTokenExpireIn * 60 * 1000)
              : state.auth.expiresAt,
          },
          refresh: {
            token: action.payload.newRefreshToken
              ? action.payload.newRefreshToken
              : state.refresh.token,
            expiresAt: action.payload.newRefreshTokenExpiresIn
              ? new Date(new Date().getTime() + action.payload.newRefreshTokenExpiresIn * 60 * 1000)
              : state.refresh.expiresAt,
          },
          userState: action.payload.newAuthUserState
            ? action.payload.newAuthUserState
            : state.userState,
        };
      }

      return state;
  }
}

// Helper functions
/**
 * used to make sign in
 * @param signInParams
 */
export function doSignIn(signInParams: SignInActionPayload): SignInAction {
  return {
    type: ActionType.SignIn,
    payload: signInParams,
  };
}

/**
 * used to refresh the Token
 * @param refreshTokenParam
 */
export function doRefresh(refreshTokenParam: RefreshTokenActionPayload): RefreshTokenAction {
  return {
    type: ActionType.RefreshToken,
    payload: refreshTokenParam,
  };
}

/**
 * Used to make sign out
 */
export function doSignOut(): SignOutAction {
  return {
    type: ActionType.SignOut,
  };
}
