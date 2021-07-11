import { combineReducers } from 'redux';

import users from './users.reducers';
import authedUser from './authUser.reducer';
import questions from './questions.reducer';
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    authedUser,
    users,
    questions,
    loadingBar:loadingBarReducer
})