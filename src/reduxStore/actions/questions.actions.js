import {GET_QUESTIONS,ADD_QUESTION} from '../actionTypes';
import { saveQuestion } from '../../database/api';
import { addQuestionToUser } from '../actions/users.actions';

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

export function handleAddQuestion(option1, option2, author) {
    console.log("handleAddQuestion::",author)
    return dispatch => {
      return saveQuestion({ option1, option2, author }).then(
        question => {
          dispatch(addQuestion(question));
          dispatch(addQuestionToUser(question));
        }
      );
    };
  }
  