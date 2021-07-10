import { GET_USERS } from '../actionTypes'

export default function users (state = {}, action) {
  switch (action.type) {
    case GET_USERS :
      return {
        ...state,
        ...action.users,
      }
    default :
      return state
  }
}