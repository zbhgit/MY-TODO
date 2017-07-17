import React from 'react'
import TodoUndone from './todoUndone'
import TodoDone from './todoDone'
import {getAllTodoList} from '../actions'
import {connect} from 'react-redux'
import AV from '../../api/leancloud'
const currentUser = AV.User.current()



class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if(currentUser) {
      this.props.getAllTodoList()
    }
  }
  componentDidUpdate() {
    if(currentUser) {
      this.props.getAllTodoList()
    }
  }
  render() {
    return (
      <div className="todolist">
        <TodoUndone/>
        <TodoDone/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllTodoList: ()=> {
      dispatch(getAllTodoList())
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoList)