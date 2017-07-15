import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import {Link} from 'react-router-dom'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.state = {
      user: '',
      password: ''
    };
  }
  handleUserChange(value) {
    this.setState({
      user: value
    })
  }
  handlePasswordChange(value) {
    this.setState({
      password: value
    })
  }
  render() { 
    return (
      <form className="signInForm">
        <Link className="to-sign-up" to="/signup">Sign UP</Link>
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
        <p>Fogot password? <span>Reset</span></p>
      </form>
    )
  }
}

export default SignInForm