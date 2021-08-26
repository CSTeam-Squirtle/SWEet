import * as types from '../constants/actionTypes';


export const updateSession = () => ({
  type: types.UPDATE_SESSION,
});

export const updateUser = (data) => ({
  type: types.UPDATE_USER,
  payload: data,
});

export const logoutUser = (data) => ({
  type: types.LOGOUT_USER,
  payload: data,
});

