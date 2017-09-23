import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from '../actions'
import ErroRemind from '../../components/errorComponent'

// import signUp from '../../api/signUp'
import {push} from 'react-router-redux'

const emailReg = /^\w+@[\w-]+\.\w+(\.\w+)?$/
const userReg = /\w{3,}/
const passwordReg = /\w{6,10}/





class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.emailHandleBlur = this.emailHandleBlur.bind(this)
    this.userHandleBlur = this.userHandleBlur.bind(this)
    this.passwordHandleBlur = this.passwordHandleBlur.bind(this)
    this.buttonAble = this.buttonAble.bind(this)
    this.urlPush = this.urlPush.bind(this)
    this.state = {
      email: '',
      user: '',
      password: '',
      error: null
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
  onHandleSubmit() {
    console.log('test')
  }
  onHandleClick(event){
    event.preventDefault()
    let username = this.state.user
    let email = this.state.email
    let password = this.state.password
    if((username.trim() === '')||(email.trim()==='')||(password.trim()==='')){
      this.setState({
        error: 104
      })
      return
    }
    this.props.handleSubmit(email,username,password)    
  }
  // 监听email值变化
  handleEmailChange(value) {
    this.setState({
      email: value
    })
    this.buttonAble()    
  }
  //失去焦点检测email的值是否符合要求
  emailHandleBlur() {
    let email = this.state.email
    if(!email.trim()) {
      this.setState({
        error: 104
      })
    }
    if(emailReg.test(email)=== false) {
      this.setState({
        error: 103
      })
    }
    this.buttonAble()    
  }
  // 监听user值变化
  handleUserChange(value) {
    this.setState({
      user: value
    })
    this.buttonAble()    
  }
    //失去焦点检测user的值是否符合要求
  userHandleBlur() {
    let user = this.state.user
    if(!user.trim()) {
      this.setState({
        error: 105
      })
    }
    if(userReg.test(user)=== false) {
      this.setState({
        error: 100
      })
    }
    this.buttonAble()
    
  }
  // 监听password变化
  handlePasswordChange(value) {
    this.setState({
      password: value
    })
    this.buttonAble()    
  }
//失去焦点检测user的值是否符合要求
  passwordHandleBlur() {
    let password = this.state.password
    if(!password.trim()) {
      this.setState({
        error: 106
      })
    }
    if(passwordReg.test(password)=== false) {
      this.setState({
        error: 102
      })
    }
    this.buttonAble()
  }
  //判断所有表单合格，启用提交按钮
  buttonAble(){
    let email = this.state.email
    let user = this.state.user
    let password = this.state.password
    
    if(emailReg.test(email) && userReg.test(user)&& passwordReg.test(password)){
      this.setState({
        error: null
      })
    }
  }
  

  //更新错误码
  render() { 
    return (
      <form className="signInForm" onSubmit={this.onHandleSubmit}>
        <Link className='to-sign-in' to='/signin'>Sign In</Link> 
        <CommonInput 
        title={"Email"}
        iconType={"icon-email-copy"}
        inputType={"text"}
        value={this.state.email}
        handleChange={this.handleEmailChange}
        handleBlurCheck = {this.emailHandleBlur}
        />
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
          (this.props.status === 'init' && this.state.error)? <ErroRemind  error={this.state.error} /> : ''
        } 
        {
          (this.props.status === 'error' && this.props.error)? <ErroRemind  error={this.props.error} /> : ''
        }    
        <button disabled={this.state.error ? 'disabled': ''} className="button" onClick={this.onHandleClick}>SIGN UP NOW <span className="iconfont icon-right"></span> </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.userinfo.status,
    error: state.userinfo.error
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    handleSubmit: (email,username,password) => {
      dispatch(addUser(email,username,password))
    },
    onUrlPush: (url) => {
      dispatch(push(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)