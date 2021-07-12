import { GET_QUESTIONS, ADD_QUESTION, SET_ANSWER_IN_QUESTION} from '../actionTypes';

export default function questions(state = {}, action) {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				...action.questions,
			};
		case ADD_QUESTION:
			let {question}=action
			
			return {
				...state,
				[question.id]: question,
			};
		case SET_ANSWER_IN_QUESTION:
			let {authuser,qid,answer}=action;
			return {
				...state,
				[qid]:{
					...state[qid],
					[answer]:{
						...state[qid][answer],
					votes:state[qid][answer].votes.concat(authuser)
					}
				}
			}
		default:
			return state;
	}
}
