import { combineReducers } from 'redux';

import users from './users.reducers';
import authedUser from './authUser.reducer';
import questions from './questions.reducer';

export default combineReducers({
    authedUser,
    users,
    questions

})