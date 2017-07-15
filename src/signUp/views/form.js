import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from '../actions'
import signUp from '../../api/signUp'


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.successFn = this.successFn.bind(this)
    this.errorFn = this.errorFn.bind(this)
    this.state = {
      email: '',
      user: '',
      password: ''
    };
  }

  onHandleSubmit() {
    console.log('test')
  }
  successFn(response){
    const email = response.attributes.email
    const username= response.attributes.username
    this.props.handleSubmit(email,username)
  }
  errorFn(error){
    console.log(error)
  }
  onHandleClick(event){
    event.preventDefault()
    let username = this.state.user
    let email = this.state.email
    let password = this.state.password
    signUp(username,password,email,this.successFn,this.errorFn)
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
      <form className="signInForm" onSubmit={this.onHandleSubmit}>
        <Link className='to-sign-in' to='/signin'>Sign In</Link> 
        <input type="text"/>
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
        <div className="button" onClick={this.onHandleClick}>SIGN UP NOW <span className="iconfont icon-right"></span> </div>
      </form>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleSubmit: (email,username) => {
      dispatch(addUser(email,username))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm)