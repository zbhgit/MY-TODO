import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import CommonButton from '../../components/button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import signIn from '../../api/signIn'
import {actions} from '../../signUp'
import {push} from 'react-router-redux'


class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      user: '',
      password: ''
    };
  }
  componentDidUpdate() {
    if(this.props.status === 'success') {
      this.urlPush()
    }
  }

  // 登录成功后跳转

  urlPush() {
    this.props.onUrlPush('/todo')
  }
  // button点击登录事件
  handleClick(){
    let username = this.state.user
    let password = this.state.password
    this.props.handleSignIn(username,password)    
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
        {
          (this.props.status === 'error' || this.props.status === "success")? <p className="remind">提醒：{this.props.status}</p> : ''
        }
        <CommonButton 
          text={"SIGN IN"}
          handleClick={this.handleClick}
          status={this.props.status}
        />
        <p>Fogot password? <span>Reset</span></p>
      </form>
    )
  }
}

const userSignIn = actions.userSignIn

const mapStateToProps = (state) => {
  return {
    status: state.userinfo.status
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleSignIn: (username,password) => {
      dispatch(userSignIn(username,password))
    },
    onUrlPush: () => {
      dispatch(push('/todo'))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)