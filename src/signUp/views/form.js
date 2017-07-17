import React from 'react'
import './style/form.scss'
import CommonInput from '../../components/commonInput'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from '../actions'

// import signUp from '../../api/signUp'
import {push} from 'react-router-redux'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.onHandleClick = this.onHandleClick.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
    this.urlPush = this.urlPush.bind(this)
    this.state = {
      email: '',
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
  onHandleSubmit() {
    console.log('test')
  }
  onHandleClick(event){
    event.preventDefault()
    let username = this.state.user
    let email = this.state.email
    let password = this.state.password
    this.props.handleSubmit(email,username,password)    
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
        {
          (this.props.status === 'error' || this.props.status === "success")? <p className="remind" >提醒：{this.props.status}</p> : ''
        }    
        <button className="button" onClick={this.onHandleClick}>SIGN UP NOW <span className="iconfont icon-right"></span> </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.userinfo.status
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