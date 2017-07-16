import * as actionTypes from './actionTypes'
import AV from '../api/leancloud'


export const addUserStart = () => ({
  type: actionTypes.ADD_USER_START
})

export const addUserSuccess = (email,username) => ({
  type: actionTypes.ADD_USER_SUCCESS,
  email: email,
  username: username
})

export const addUserError = (error)=>({
  type: actionTypes.ADD_USER_ERROR,
  error
})


export const addUser = (email,username,password) => {
  return (dispatch) => {
    dispatch(addUserStart())
    const user = new AV.User()
    user.setUsername(username)
    user.setPassword(password)
    user.setEmail(email)
    user.signUp().then(function (response) {
      const email = response.attributes.email
      const username= response.attributes.username
      dispatch(addUserSuccess(email,username))
    }, function (error) {
      dispatch(addUserError(error.code))
    })
  }
}