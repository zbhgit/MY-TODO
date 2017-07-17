import React from 'react'
import {connect} from 'react-redux'
import {addTodoToLeanCloud} from '../actions'
import './style/addInput.scss'
class AddInput extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
    this.state = {
      value: ''
    };
  }
  onHandleSubmit(event) {
    event.preventDefault()
    const value = this.state.value
    if (!value.trim()) {
      return
    }
    this.props.onAddToLean(value,'normal')
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
      <form className="add-input" onSubmit={this.onHandleSubmit}>
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
    onAddToLean: (text,severity)=>{
      dispatch(addTodoToLeanCloud(text,severity))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddInput)