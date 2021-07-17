import {GET_QUESTIONS,ADD_QUESTION,SET_ANSWER_IN_QUESTION} from '../actionTypes';
import { saveQuestion,saveQuestionAnswer } from '../../database/api';
import { addQuestionToUser,setUserAnswer } from '../actions/users.actions';
export function getQuestions(questions){
    return{
        type:GET_QUESTIONS,
        questions,
    }

}

export function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question,
    }
}

export function updateAnswerInQuestion(authuser,qid,answer){
  return{
    type:SET_ANSWER_IN_QUESTION,
    authuser,
    qid,
    answer
  }
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {

    return dispatch => {
      return saveQuestion({ optionOneText, optionTwoText, author }).then(
        question => {
          dispatch(addQuestion(question));
          dispatch(addQuestionToUser(question));
        }
      );
    };
  }

  export  function  submitAnswer(authedUser, qid, selectedOption){
   // console.log(authedUser, qid, selectedOption);
    return dispatch => {
      try {
        return saveQuestionAnswer(authedUser, qid, selectedOption).then(
          question => {
            dispatch(setUserAnswer(authedUser, qid, selectedOption));
            dispatch(updateAnswerInQuestion(authedUser, qid, selectedOption));
          }
        );
			

			} catch (e) {
				console.log(e);
			}
    };
  }
  