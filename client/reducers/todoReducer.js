import * as types from '../constants/actionTypes';

// define initialState

const initialState = {
  todoList: ['TEST', 'Let'],
};

const reducer = (state = initialState, action) => {
  // console.log({ action });
  // console.log(state);
  switch (action.type) {
    case types.LOAD_TODO:
      return {
        ...state,
        todo_list: action.payload,
      };
    case types.ADD_TODO:
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (application) => application.id !== action.payload
        ),
      };
    case types.EDIT_TODO:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
