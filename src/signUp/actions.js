import * as actionTypes from './actionTypes'

export const addUser = (email,username) => ({
  type: actionTypes.ADD_USER,
  email: email,
  username: username
})