import React from 'react'
import TodoItem from './todoItem'
import {connect} from 'react-redux'
import {removeAllDoneTodo,changeKeyValue} from '../actions'
import {CSSTransitionGroup} from 'react-transition-group'
import TodoLine from './todoLine'
import './style/todoDone.scss'
const TodoDone = ({todos, onToggleTodo,onRemoveTodo,onRemoveAllDoneTodo,changeKeyValue}) => {
  const items = todos.map((item) => {
    return <TodoItem
      key={item.id}
      id={item.id}
      completed={item.completed}
      text={item.text}
      severity={item.severity}
      toggleTodo={() => changeKeyValue(item.id,'completed',!item.completed)}
      removeTodo={() => changeKeyValue(item.id,'deleted',true)}
      />
  })
  return (
    <div>
      {todos.length ? <TodoLine  removeAllDoneTodo={()=> onRemoveAllDoneTodo(todos)}/> :''}
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
  return todos.filter(item => (item.completed && !item.deleted))
}

const mapStateToProps = (state) => {
  return {
    todos: selectUndoneTodos(state.todos)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveAllDoneTodo: (doneTodos)=> {
      dispatch(removeAllDoneTodo(doneTodos))
    },
    changeKeyValue: (id,key,value)=>{
      dispatch(changeKeyValue(id,key,value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoDone)