import React from 'react'
import THeader from './header.js'
import AddInput from './addInput.js'
import TodoList from './todoList'
 
const Todo = () => {
  const style={
    margin: "0 auto",
    width: "635px"
  }
  return (
  <div style={style}>
    <THeader title={"Just do"} description={"Dead Simple to-do App"}/>
    <AddInput />
    <TodoList />
  </div>
)
}
export default Todo