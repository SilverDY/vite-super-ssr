import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiErrorResponse {
  data: {
    token: string;
    ttl: string;
    type: string;
  };
  extendedMessage: string;
  message: string;
}

export interface ApiError<T = ApiErrorResponse> extends AxiosError<T> {}

export interface ApiResponse<T = ApiResponseData> extends AxiosResponse<T> {}
export interface ApiResponseData<T = any> {
  data: T;
  message: string;
}

export interface ApiRequestConfig<T = any> extends AxiosRequestConfig<T> {}
