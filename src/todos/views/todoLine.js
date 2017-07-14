import React from 'react'
import './style/todoLine.scss'
const TodoLine = () => {
  return (
    <div className="todoline">
      <div className="line"></div>
      <div className="clear">
        <span className="iconfont icon-delete"></span>
        <span>CLean all removed tasks</span>
      </div>
    </div>
  )
}
export default TodoLine