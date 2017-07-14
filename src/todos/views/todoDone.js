import React from 'react'
import TodoItem from './todoItem'
import todoDone from './style/todoDone.scss'
const TodoDone = () => {
  return (
    <ul className="doneItem">
      <TodoItem />
    </ul>
  )
}
export default TodoDone