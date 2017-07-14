import React, {Component}from 'react'
import './style/severity.scss'

export default class Severity extends Component {
  render(){
    return (
      <div className="severity">
        <p>important<span className="iconfont icon-up"></span></p>
        <ul>
          <li>normal</li>
          <li className="active">important</li>
          <li>urgent</li>
          <li>someday</li>
        </ul>
      </div>  
    )
  }
}
