import { GET_USERS , ADD_QUESTION_USER,SET_USER_ANSWER } from '../actionTypes'

export default function users (state = {}, action) {
  switch (action.type) {
    case GET_USERS :
      return {
        ...state,
        ...action.users,
      }
    case ADD_QUESTION_USER:
      let {author,id}=action
      return{
        ...state,
        [author]:{
          ...state[author],
          questions: state[author].questions.concat(id)
        }
      }
    case SET_USER_ANSWER:
      let {authUser,qid,answer}=action
      return{
        ...state,
        [authUser]:{
          ...state[authUser],
          answers:{
          ...state[action.authUser].answers,
          [qid]:answer
          }
        }
      }
    default :
      return state
  }
}