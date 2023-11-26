import { Dispatch } from 'react';

import { handleReq } from 'handler/api/handler';
import { IUser } from 'interfaces/user';
import { AnyAction } from 'redux';

import * as actions from 'store/modules/users/actions';

export const createUser = async (
  user: IUser,
  dispatch: Dispatch<AnyAction>,
  users: IUser[]
) => {
  //FAKE API
  await handleReq({
    method: 'post',
    url: '/user',
    body: user
  });

  const hasUser = users.find((item) => item.email === user.email);

  if (!hasUser) {
    dispatch(actions.create(user));
    return true;
  }

  return new Error('Usuário já registrado');
};

export const updateUser = async (
  user: IUser,
  dispatch: Dispatch<AnyAction>
) => {
  //FAKE API
  await handleReq({
    method: 'put',
    url: '/user',
    body: user
  });

  dispatch(actions.update(user));
};

export const deleteUser = async (
  user: IUser,
  dispatch: Dispatch<AnyAction>
) => {
  //FAKE API
  await handleReq({
    method: 'delete',
    url: '/user',
    params: user.email
  });

  dispatch(actions.destroy(user));
};

export const listUsers = async (
  query: { limit: number; offset: number },
  users: IUser[]
) => {
  //FAKE API
  await handleReq({
    method: 'get',
    url: '/user',
    query
  });

  const { limit, offset } = query;
  const page = offset === 1 ? offset - 1 : offset;

  return users.slice(page, page + limit);
};
