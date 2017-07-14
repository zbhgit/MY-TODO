import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo, removeTodo} from '../actions'
import TodoItem from './todoItem'
import {CSSTransitionGroup} from 'react-transition-group'
import './style/todoundone.scss'
const TodoUndone = ({todos, onToggleTodo, onRemoveTodo}) => {
  const items = todos.map((item) => {
    return <TodoItem
      key={item.id}
      id={item.id}
      completed={item.completed}
      text={item.text}
      severity={item.severity}
      toggleTodo={() => onToggleTodo(item.id)}
      removeTodo={() => onRemoveTodo(item.id)}/>
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
  return todos.filter(item => !item.completed)
}

const mapStateToProps = (state) => {
  return {
    todos: selectUndoneTodos(state.todos)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoUndone)