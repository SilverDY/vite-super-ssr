export interface ApiSignUpData {
  email: string;
  password: string;
  name: string;
}

export interface ApiSignUpResponseData {
  token: string;
  ttl: number;
  type: string;
}

export interface ApiCreateInviteData {
  code: string;
  expiresAt: Date;
}
