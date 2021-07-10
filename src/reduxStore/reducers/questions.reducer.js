import {GET_QUESTIONS,ADD_QUESTION} from '../actionTypes';

export default function questions(state={},action){
    switch (action.type) {
        case GET_QUESTIONS :
          return {
            ...state,
            ...action.questions,
          }
          default:
              return state;
        }

}