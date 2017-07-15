import * as actionTypes from './actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      {
        return {
            email: action.email,
            username: action.username
          }
        
      }
    default:
      return state
  }
}