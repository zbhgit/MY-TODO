import * as actionTypes from './actionTypes'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  completed: false,
  id: nextTodoId++,
  text: text,
  severity: 'important'
})

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id: id
})

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  id:id
})
export const severityTodo = (id,value) => ({
  type:actionTypes.SEVERITY_TODO,
  id: id,
  value: value
})
export const removeAllDoneTodo = () => ({
  type: actionTypes.REMOVE_ALL_DONE_TODO,
  
})