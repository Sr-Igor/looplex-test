import { IUser } from 'interfaces/user';

import * as types from './types';

export const create = (params: IUser) => {
  return {
    type: types.USER_CREATE,
    payload: params
  };
};

export const update = (params: IUser) => {
  return {
    type: types.USER_EDIT,
    payload: params
  };
};

export const destroy = (params: IUser) => {
  return {
    type: types.USER_REMOVE,
    payload: params
  };
};

export const resetList = () => {
  return {
    type: types._RESET_LIST
  };
};
