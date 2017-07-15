import * as actionTypes from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      {
        return [
          {
            id: action.id,
            text: action.text,
            completed: false,
            severity: 'important'
          },
          ...state
        ]
      }
    case actionTypes.TOGGLE_TODO:
      {
        return state.map((todoItem) => {
          if (todoItem.id === action.id) {
            return {
              ...todoItem,
              completed: !todoItem.completed
            }
          } else {
            return todoItem
          }
        })
      }

    case actionTypes.REMOVE_TODO:
      {
        return state.filter((todoItem) => {
          return todoItem.id !== action.id
        })
      }
    case actionTypes.SEVERITY_TODO:
      {
        return state.map((todoItem) => {
          if (todoItem.id === action.id) {
            return {
              ...todoItem,
              severity: action.value
            }
          } else {
            return todoItem
          }
        })
      }
    case actionTypes.REMOVE_ALL_DONE_TODO: {
      return state.filter((todoItem)=>{
        return todoItem.completed !== true
      })
    }  
    default:
      {
        return state
      }
  }
}