
import {getInitialData} from '../../database/api';
import {getUsers} from './users.actions';
import {getQuestions} from './questions.actions';
import {setAuthedUser} from './authUser.actions';

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    console.log("handleInitialData")
  return (dispatch) => {
    //dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets }) => {
       // dispatch(hideLoading())
        dispatch(getUsers(users))
        dispatch(getQuestions(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}