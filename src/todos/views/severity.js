import React, {Component} from 'react'
import './style/severity.scss'
import {SEVERITY} from '../../constants'
import {connect} from 'react-redux'
import {changeKeyValue} from '../actions'
class Severity extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      severity: this.props.severity
    };
  }
  handleClick(event) {
    let value = event.target.innerHTML
    let id = this.props.id
    this.props.changeKeyValue(id,'severity',value)
    this.setState({
      severity: event.target.innerHTML
    })
  }
  render() {
    let {severity} = this.state
    return (
      <div className="severity">
        <p>{severity}</p>
        <span className="iconfont icon-up"></span>
        <ul>
          {SEVERITY.map((item) => {
            return (
              <li
                key={item}
                className={(item === severity) ? 'active' : ''}
                onClick={this.handleClick}
                >{item}</li>
            )
          })
}
        </ul>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeKeyValue: (id,key,value)=> {
      dispatch(changeKeyValue(id,key,value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Severity)
