import React from 'react'
import TodoUndone from './todoUndone'
import TodoDone from './todoDone'
import TodoLine from './todoLine'
const TodoList = ()=> {
  return (
    <div className="todolist">
      <TodoUndone />
      <TodoLine />
      <TodoDone />      
    </div>
  )
}
export default TodoList