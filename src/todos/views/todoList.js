import React from 'react' 
import TodoUndone from './todoUndone'
import TodoDone from './todoDone'
const TodoList = ()=> {
  return (
    <div className="todolist">
      <TodoUndone />
      <TodoDone />      
    </div>
  )
}
export default TodoList