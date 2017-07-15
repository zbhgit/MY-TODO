import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import {Link} from 'react-router-dom'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      email: '',
      user: '',
      password: ''
    };
  }
  // 监听email值变化
  handleEmailChange(value) {
    this.setState({
      email: value
    })
  }
  // 监听user值变化
  handleUserChange(value) {
    this.setState({
      user: value
    })
  }
  // 监听password变化
  handlePasswordChange(value) {
    this.setState({
      password: value
    })
  }
  render() { 
    return (
      <form className="signInForm" onSubmit={this.handleSubmit}>
        <Link className='to-sign-in' to='/signin'>Sign In</Link> 
        
        <CommonInput 
        title={"email"}
        iconType={"icon-email-copy"}
        inputType={"text"}
        value={this.state.email}
        handleChange={this.handleEmailChange}
        />
        <CommonInput 
        title={"user"}
        iconType={"icon-user"}
        inputType={"text"}
        value={this.state.user}
        handleChange={this.handleUserChange}
        />
        <CommonInput 
        title={"password"}
        iconType={"icon-mima"}
        inputType={"password"}
        value={this.state.password}
        handleChange={this.handlePasswordChange}
        />
        <button>SIGN UP NOW <span className="iconfont icon-right"></span> </button>
      </form>
    )
  }
}

export default SignUpForm