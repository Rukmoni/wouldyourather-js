import {GET_USERS,ADD_QUESTION_USER} from '../actionTypes';
export function getUsers(users){
    return {
        type:GET_USERS,
        users,
    }
}

export function addQuestionToUser({ id, author }) {
    return {
      type: ADD_QUESTION_USER,
      id,
      author
    };
  }