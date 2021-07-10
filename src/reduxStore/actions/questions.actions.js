import {GET_QUESTIONS} from '../actionTypes';
export function getQuestions(questions){
    return{
        type:GET_QUESTIONS,
        questions,
    }

}