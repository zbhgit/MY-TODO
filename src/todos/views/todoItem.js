import React from 'react'
import './style/todoItem.scss'
const TodoItem = () => {
  return (
    <li className="todoItem">
      <label htmlFor="completed" className="iconfont icon-right1 completed">
        <input id="completed" type="checkbox"/>
      </label>
      <div className="content">
        <p className="text">Pay the bill from siteleaf.com <span className="point"></span></p>
        <div className="btn">
          <span className="iconfont icon-bianji"></span>
          <span className="iconfont icon-delete1"></span>
        </div>

      </div>
    </li>
  )
}
export default TodoItem