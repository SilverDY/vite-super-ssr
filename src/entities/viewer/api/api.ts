import { ApiResponseData, api } from '~shared/api';
import { setAsyncTimeout } from '~shared/lib/utils';

import { routes } from './routes';
import { ApiViewerData } from './types';

export const getViewer = () => {
  return api.get<any, ApiResponseData<ApiViewerData>>(routes.getViewerData());
};

export const mockGetViewer = async () => {
  let result: unknown = null;

  await setAsyncTimeout(() => {
    result = {
      data: {
        uuid: 'q1wr3tf34yhfi756',
        name: 'User_Nickname',
        email: 'vsssr@gmail.com',
        avatar:
          'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=1480&t=st=1661529929~exp=1661530529~hmac=69c0026e85995528acd2047ef6969aebe795cba5da97c1477341272ae13b8af8',
      },
    };
  }, 1000);

  return result as ApiResponseData<ApiViewerData>;
};
