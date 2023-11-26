import { IUser } from 'interfaces/user';

import * as types from './types';

export type UserState = {
  user: IUser[];
};

const initialState = {
  user: []
};

type UserAction = {
  type: string;
  payload: IUser;
};

export default function userReducer(
  state: UserState = initialState,
  action: UserAction
) {
  switch (action.type) {
    case types.USER_CREATE:
      return {
        user: [action.payload, ...state.user]
      };
    case types.USER_EDIT:
      return {
        user: state.user.map((user) =>
          user.email === action.payload.email ? action.payload : user
        )
      };
    case types.USER_REMOVE:
      return {
        user: state.user.filter((user) => user.email !== action.payload.email)
      };
    case types._RESET_LIST:
      return {
        user: []
      };
    default:
      return state;
  }
}
