/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosRequestConfig } from 'axios';
import qs from 'qs';

import api from './index';

// class CustomError extends Error {
//   public data: any;

//   constructor(message: string, data: any) {
//     super(message);
//     this.data = data;
//   }
// }

const methods = {
  post: api.post,
  get: api.get,
  put: api.put,
  delete: api.delete
};

type HandleApiRequestParams = {
  url: string;
  body?: object;
  query?: Record<string, any>;
  params?: string | number;
  successMessage?: string;
  showSuccess?: boolean;
  method: keyof typeof methods;
  config?: AxiosRequestConfig;
  hideError?: boolean;
};

export const handleReq = async ({
  url,
  body,
  method,
  params,
  query,
  successMessage,
  config,
  showSuccess
}: HandleApiRequestParams) => {
  let composeUrl = url;
  composeUrl = params ? `${url}${params}` : url;
  composeUrl = query ? `${composeUrl}?${qs.stringify(query)}` : composeUrl;

  if (method === 'get' && body)
    throw new Error('Body is not allowed in get method');

  const response = await methods[method](composeUrl, body, config)
    .then((res) => {
      showSuccess && (res.data.message || successMessage);

      const data = res?.data?.data;
      return data;
    })
    .catch((err) => {
      const res = err?.response?.data;
      console.log('REQUEST ERROR', composeUrl, res);
      //NOTE!: This is commented because it's not working with the current API (It's a fake API)
      // const errorMessage = res?.error || 'Ops! Ocorreu um erro de conexão';
      // throw new CustomError(errorMessage, res);
    });
  return response;
};
