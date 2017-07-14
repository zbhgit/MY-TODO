import React, {Component} from 'react'
import './style/severity.scss'
import {SEVERITY} from '../../constants'
import {connect} from 'react-redux'
import {severityTodo} from '../actions'
class Severity extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      severity: SEVERITY[0]
    };
  }
  handleClick(event) {
    let value = event.target.innerHTML
    let id = this.props.id
    this.props.onSeverityTodo(id,value)
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
    onSeverityTodo: (id,value)=>{
      dispatch(severityTodo(id,value))
    }
  }
}

export default connect(null, mapDispatchToProps)(Severity)
