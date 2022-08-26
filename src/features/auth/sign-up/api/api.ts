import { ApiResponseData, api } from '~shared/api';
import { setAsyncTimeout } from '~shared/lib/utils';

import { routes } from './routes';
import { ApiSignUpData, ApiSignUpResponseData } from './types';

// for example purposes
export const signUp = (data: ApiSignUpData) => {
  return api.post<any, ApiResponseData<ApiSignUpResponseData>>(routes.signUp(), data);
};

export const mockSignUp = async (_data?: ApiSignUpData) => {
  let result: unknown = null;

  await setAsyncTimeout(() => {
    result = {
      data: {
        token: 'token',
        ttl: 120,
        type: 'Bearer',
      },
    };
  }, 1000);

  return result as ApiResponseData<ApiSignUpResponseData>;
};
