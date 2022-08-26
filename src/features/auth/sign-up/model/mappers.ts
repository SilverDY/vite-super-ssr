import { ApiSignUpData } from '../api';

import { SignUpFormValues } from './types';

export const mapFormDataToApiData = (data: SignUpFormValues) => {
  const result: ApiSignUpData = {
    email: data.email,
    password: data.password,
    name: data.name,
  };

  return result;
};
