import { ApiResponseData, api } from '~shared/api';
import { setAsyncTimeout } from '~shared/lib/utils';

import { routes } from './routes';
import { ApiSignInData, ApiSignInResponseData } from './types';

// for example purposes
export const signIn = (data: ApiSignInData) => {
  return api.post<any, ApiResponseData<ApiSignInResponseData>>(routes.signIn(), data);
};

export const mockSignIn = async (_data?: ApiSignInData) => {
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

  return result as ApiResponseData<ApiSignInResponseData>;
};
