import { AuthStateUserObject } from '../types';

export enum ActionType {
  SignIn,
  SignOut,
  RefreshToken,
}

export interface SignInActionPayload {
  auth: {
    token: string;
    type: string;
    expiresAt: Date;
  };
  refresh: {
    token: string;
    expiresAt: Date;
  } | null;
  userState: AuthStateUserObject | null;
}

export interface RefreshTokenActionPayload {
  newAuthToken: string | null;
  newAuthTokenExpireIn?: number | null;
  newRefreshToken?: string | null;
  newRefreshTokenExpiresIn?: number | null;
  newAuthUserState?: AuthStateUserObject | null;
}

export interface SignInAction {
  type: ActionType.SignIn;
  payload: SignInActionPayload;
}

export interface RefreshTokenAction {
  type: ActionType.RefreshToken;
  payload: RefreshTokenActionPayload;
}

export interface SignOutAction {
  type: ActionType.SignOut;
}

export type AuthActions = SignInAction | SignOutAction | RefreshTokenAction;
