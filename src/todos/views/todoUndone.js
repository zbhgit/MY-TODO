import React from 'react'
import {connect} from 'react-redux'
import {changeKeyValue} from '../actions'
import TodoItem from './todoItem'
import {CSSTransitionGroup} from 'react-transition-group'
import './style/todoundone.scss'
const TodoUndone = ({todos, onToggleTodo, onRemoveTodo,changeKeyValue}) => {
  const items = todos.map((item) => {
    return <TodoItem
      key={item.id}
      id={item.id}
      completed={item.completed}
      text={item.text}
      severity={item.severity}
      toggleTodo={() => changeKeyValue(item.id,'completed',!item.completed)}
      removeTodo={() => changeKeyValue(item.id,'deleted',true)}/>
  })
  return (
    <ul className="undoneItem">
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {items}
      </CSSTransitionGroup>
    </ul>
  )
}

const selectUndoneTodos = (todos) => {
  return todos.filter(item => (!item.completed && !item.deleted))
}

const mapStateToProps = (state) => {
  return {
    todos: selectUndoneTodos(state.todos)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeKeyValue: (id,key,value)=>{
      dispatch(changeKeyValue(id,key,value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoUndone)