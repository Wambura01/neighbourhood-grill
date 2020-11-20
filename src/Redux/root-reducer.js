import { combineReducers } from 'redux'; //enable combine of all reducers

import userReducer from './User/user.reducer';

export default combineReducers({
	user: userReducer,
});
