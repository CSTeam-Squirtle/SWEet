import * as types from '../constants/actionTypes';

export const loadTodo = () => (dispatch) => {
  fetch('/getTodo', {
    method: 'GET',
    headers: {
      'Content-Type': 'Application/JSON',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOAD_TODO,
        payload: data,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

export const addTodo = (data) => (dispatch) => {
  // console.log(data);
  fetch(`/addTodo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      dispatch({
        type: types.ADD_TODO,
        payload: data,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

export const deleteTodo = (id) => (dispatch) => {
  fetch(`/todo/?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/JSON',
    },
  })
    .then(() => {
      dispatch({
        type: types.DELETE_TODO,
        payload: id,
      });
    })
    .catch((err) => {
      // dispatch errors here later...
      console.log(err);
    });
};

export const editApp = () => ({
  type: types.EDIT_TODO,
  payload: 'editApp payload placeholder',
});

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

