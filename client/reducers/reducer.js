import * as types from '../constants/actionTypes';

const initialState = {
  id: '',
  team_id: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  hash: '',
  linkedin: '',
  github: '',
  message: '',
  admin: '',
  password: '',
  isLoggedIn: false,
};

 const sweetReducer= (state = initialState, action) =>{
  switch(action.type) {

  // Change isLoggedIn state variable depending on previous value
  case types.UPDATE_SESSION: {
    return { 
      ...state, 
      isLoggedIn : (!state.isLoggedIn) 
    };
  }
  
  // Upon successful sign-up or login, update session state with all user info
  case types.UPDATE_USER: {
    const {
      id,
      team_id,
      firstname,
      lastname,
      email,
      phone,
      hash,
      linkedin,
      github,
      message,
      admin,
      password
    } = action.payload;

    return { 
      ...state,
      id,
      team_id,
      firstname,
      lastname,
      email,
      phone,
      hash,
      linkedin,
      github,
      message,
      admin,
      password
    };
  }

  // after logging out, remove all user info from session state
  case types.LOGOUT_USER: {
    return { 
      ...initialState 
    };
  }

  default: return {...state};
  }
}
export default sweetReducer
