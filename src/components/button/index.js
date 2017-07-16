import React, {Component} from 'react'
import './index.scss'

export default class CommonButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(event) {    
    event.preventDefault()
    event.preventDefault()
    this.props.handleClick()
  }
  render() {
    const {text,status} = this.props
    return (
      
      <button className="common-button" onClick={this.handleClick}>{text}
        <span className="iconfont icon-right"></span>
      </button>
    )
  }
}
