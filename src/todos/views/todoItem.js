import React from 'react'
import Severity from './severity'

import './style/todoItem.scss'
const TodoItem = (props) => {
  const {id,text,toggleTodo,removeTodo,completed,severity} = props
  const cname = completed ? ' completed' : ''
  return (
    <li className="todoItem">
      <label htmlFor="completed" className={"iconfont icon-right1 common" + cname} onClick={toggleTodo}>
      </label>
      <div className="content">
        <p className={"text" + cname}>{text}
          <span className={"point " + severity}></span>
        </p>
        <div className="btn">
          <span className="iconfont icon-delete1" onClick={removeTodo}></span>
        </div>
      </div>
      <Severity id={id} severity={severity}/>

    </li>
  )
}
export default TodoItem