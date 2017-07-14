import React from 'react'
import './style/addInput.scss'
class AddInput extends React.Component {
  render() {
    return (
      <div className="add-input">
        <input type="text" placeholder="Add a task"/>
        <span>+</span>
      </div>
    )
  }
}

export default AddInput