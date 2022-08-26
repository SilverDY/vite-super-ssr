export interface ApiSignInData {
  email: string;
  password: string;
}

export interface ApiSignInResponseData {
  token: string;
  ttl: number;
  type: string;
}
