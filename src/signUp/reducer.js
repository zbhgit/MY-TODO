import * as actionTypes from './actionTypes'
import * as Status from '../constants'

export default (state = {status: Status.INIT}, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_SUCCESS:
      {
        return {
            ...state,
            status: Status.SUCCESS,
            email: action.email,
            username: action.username,
          }
        
      }
    case actionTypes.ADD_USER_ERROR: {
      return {
        ...state,
        status: Status.ERROR,
        error:action.error
      }
    }
    case actionTypes.ADD_USER_START: {
      return {
        status: Status.SIGNUP
      }
    }
    case actionTypes.USER_LOGOUT: {
      return {}
    }
    default:
      return state
  }
}