import React from 'react'
import TodoItem from './todoItem'
import {connect} from 'react-redux'
import {toggleTodo, removeTodo,removeAllDoneTodo} from '../actions'
import {CSSTransitionGroup} from 'react-transition-group'
import TodoLine from './todoLine'
import './style/todoDone.scss'
const TodoDone = ({todos, onToggleTodo,onRemoveTodo,onRemoveAllDoneTodo}) => {
  const items = todos.map((item) => {
    return <TodoItem
      key={item.id}
      id={item.id}
      completed={item.completed}
      text={item.text}
      severity={item.severity}
      toggleTodo={() => onToggleTodo(item.id)}
      removeTodo={() => onRemoveTodo(item.id)}
      />
  })
  return (
    <div>
      {todos.length ? <TodoLine  removeAllDoneTodo={()=> onRemoveAllDoneTodo()}/> :''}
      <ul className="doneItem">
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {items}
      </CSSTransitionGroup>
    </ul>
    </div> 
    
  )
}
const selectUndoneTodos = (todos) => {
  return todos.filter(item => item.completed)
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
    },
    onRemoveAllDoneTodo: ()=> {
      dispatch(removeAllDoneTodo())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoDone)