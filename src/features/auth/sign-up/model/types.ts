import { ApiSignUpResponseData } from '../api/types';

export interface SignUpFormValues {
  email: string;
  name: string;
  password: string;
  password2: string;
}

export interface InviteData {
  code: string;
  expiresAt: Date | null;
}

export interface SignUpData extends ApiSignUpResponseData {}
