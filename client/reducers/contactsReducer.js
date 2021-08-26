import * as types from '../constants/actionTypes';

const initialState = {
    contactList: []
};

 const contactsReducer= (state = initialState, action) =>{
  switch(action.type) {

    case types.CONTACT_LIST: {
        const newContactList = action.payload;
        return { 
          contactList: newContactList,  
        };
      }

  default: return {...state};
  }
}
export default contactsReducer