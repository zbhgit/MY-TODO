import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import signIn from '../../api/signIn'
import {actions} from '../../signUp'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.successFn = this.successFn.bind(this)
    this.errorFn = this.errorFn.bind(this)
    this.state = {
      user: '',
      password: ''
    };
  }
  // button点击登录事件
  handleClick(event){
    event.preventDefault()
    let username = this.state.user
    let password = this.state.password
    signIn(username,password,this.successFn,this.errorFn)
    
  }
  // 登录成功事件
  successFn(response){
    let email = response.attributes.email
    let username= response.attributes.username
    this.props.handleSignIn(email,username)    
  }
  // 登录失败事件
  errorFn(error){
    console.log(error)
  }
  // 监听username值
  handleUserChange(value) {
    this.setState({
      user: value
    })
  }
  // 监听password值
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
        <button onClick={this.handleClick}>SIGN UP NOW <span className="iconfont icon-right"></span> </button>
        <p>Fogot password? <span>Reset</span></p>
      </form>
    )
  }
}

const addUser = actions.addUser
const mapDispatchToProps = (dispatch)=>{
  return {
    handleSignIn: (email,username) => {
      console.log('in')
      dispatch(addUser(email,username))
    }
  }
}
export default connect(null, mapDispatchToProps)(SignInForm)