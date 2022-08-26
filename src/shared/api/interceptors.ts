import { ApiError, ApiRequestConfig, ApiResponse } from './types';

export const errorHandler = (err: ApiError) => {
  console.error('[Error handler]:', err);

  if (err.response?.status === 401) {
    // todo: redirect to login page
  }

  return Promise.reject(err);
};

export const requestHandler = (config: ApiRequestConfig) => {
  const headers = config.headers || {};

  return { ...config, headers };
};

export const createAuthenticatedRequestHandler = (token: string) => (config: ApiRequestConfig) => {
  const headers = config.headers || {};

  headers.Authorization = token;

  return { ...config, headers };
};

export const responseHandler = (res: ApiResponse) => {
  return res.data;
};
