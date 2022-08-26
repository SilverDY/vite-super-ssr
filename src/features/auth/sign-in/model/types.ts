import { ApiSignInResponseData } from '../api/types';

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface SignInData extends ApiSignInResponseData {}
