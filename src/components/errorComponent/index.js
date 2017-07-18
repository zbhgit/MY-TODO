import React,{Component} from 'react'
import {ERROR} from '../../error'
class ErrorRemind extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const code = this.props.error + ''
    const text = ERROR[code]
    return (
      <p className="remind" >提醒:{text}</p>
    )
  }
}

export default ErrorRemind