 import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
 // import all reducers here
 import sweetReducer from './reducer';
 
 
 // combine reducers
 const reducers = combineReducers({
   // if we had other reducers, they would go here
   sweet: sweetReducer,
   todoList: todoReducer,
 });
 
 // make the combined reducers available for import
 export default reducers;
 
 