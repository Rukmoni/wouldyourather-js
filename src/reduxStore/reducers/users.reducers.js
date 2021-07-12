import { GET_USERS , ADD_QUESTION_USER,SET_ANSWER } from '../actionTypes'

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
    default :
      return state
  }
}