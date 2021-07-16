import {GET_USERS,ADD_QUESTION_USER,SET_USER_ANSWER} from '../actionTypes';
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

  export function setUserAnswer(authUser, qid, answer){
    return{
      type: SET_USER_ANSWER,
      authUser,
      qid,
      answer
    }
  }

  export function handleUserAnswerUpdate(authUser, questionId, answer) {
   // console.log("handleUserAnswerUpdate",authUser)
  }