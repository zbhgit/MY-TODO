import React from 'react'
import './style/todoLine.scss'
const TodoLine = (props) => {
  return (
    <div className="todoline">
      <div className="line"></div>
      <div className="clear"  onClick={props.removeAllDoneTodo}>
        <span className="iconfont icon-delete"></span>
        <span>CLean all removed tasks</span>
      </div>
    </div>
  )
}
export default TodoLine