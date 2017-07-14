import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import './style/addInput.scss'
class AddInput extends React.Component {
  constructor(props) {
    super(props);
    this.onHandaleSubmit = this
      .onHandaleSubmit
      .bind(this)
    this.onHandleChange = this
      .onHandleChange
      .bind(this)
    this.state = {
      value: ''
    };
  }
  onHandaleSubmit(event) {
    event.preventDefault()
    const value = this.state.value
    if (!value.trim()) {
      return
    }
    this.props.onAdd(value)
    this.setState({
      value: ''
    })

  }
  onHandleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <form className="add-input" onSubmit={this.onHandaleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={this.state.value}
          onChange={this.onHandleChange}/>
        <span>+</span>
      </form>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddInput)