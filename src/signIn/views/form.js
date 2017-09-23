import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import CommonButton from '../../components/button'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import signIn from '../../api/signIn'
import {actions} from '../../signUp'
import {push} from 'react-router-redux'
import ErroRemind from '../../components/errorComponent'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.linkHandleClick = this.linkHandleClick.bind(this)
    this.state = {
      user: '',
      password: ''
    };
  }
  componentDidUpdate() {
    if(this.props.status === 'success') {
      this.urlPush('/todo')
    }
  }

  // 登录成功后跳转

  urlPush(url) {
    this.props.onUrlPush('url')
  }
  linkHandleClick() {
    this.props.cleanError('')
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
  passwordHandleBlur(){}
  userHandleBlur() {}
  render() { 
    return (
      <form className="signInForm">
        <Link  className="to-sign-up" to="/signup">Sign UP</Link>
        <CommonInput 
        title={"User"}
        iconType={"icon-user"}
        inputType={"text"}
        value={this.state.user}
        handleChange={this.handleUserChange}
        handleBlurCheck = {this.userHandleBlur}
        />
        <CommonInput 
        title={"Password"}
        iconType={"icon-mima"}
        inputType={"password"}
        value={this.state.password}
        handleChange={this.handlePasswordChange}
        handleBlurCheck = {this.passwordHandleBlur}
        />
        {
          (this.props.status === 'error' && this.props.error)? <ErroRemind  error={this.props.error} /> : ''
        } 
        <CommonButton 
          text={"SIGN IN"}
          handleClick={this.handleClick}
          status={this.props.status}
        />
        <p>Fogot password? <Link  to="/reset" className="reset">Reset</Link></p>
      </form>
    )
  }
}

const userSignIn = actions.userSignIn
const cleanError = actions.addUserError
const mapStateToProps = (state) => {
  return {
    status: state.userinfo.status,
    error: state.userinfo.error
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleSignIn: (username,password) => {
      dispatch(userSignIn(username,password))
    },
    onUrlPush: () => {
      dispatch(push('/todo'))
    },
    cleanError: (error) => {
      dispatch(cleanError(error))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)