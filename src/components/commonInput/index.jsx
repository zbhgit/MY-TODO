import React, {Component} from 'react'
import './index.scss'

export default class CommonInput extends Component {
  constructor(props) {
    super(props);
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      focus: false
    };
  }
  handleChange(event) {
    let value = event.target.value
    this.props.handleChange(value)
  }
   handleFocus() {
    this.setState({
      focus: true
    })
  }
  handleBlur(event){
    if(event.target.value.trim()) {
      return
    }
    this.setState({
      focus: false
    })
  }
  render() {
    const {title, iconType, inputType, value} = this.props
    const active = this.state.focus ? 'active' : ''

    return (
      <label className="input-wrapper">
        <span className={"desc " + active}>{title}</span>
        <input
          type={inputType}
          value={value}
          autoComplete="off"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          />
        <span className={"iconfont " + iconType}></span>
      </label>
    )

  }
}
