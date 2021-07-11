
import {getInitialData} from '../../database/api';
import {getUsers} from './users.actions';
import {getQuestions} from './questions.actions';
import {setAuthedUser} from './authUser.actions';
import {showLoading,hideLoading} from 'react-redux-loading';
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    console.log("handleInitialData")
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(hideLoading())
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}