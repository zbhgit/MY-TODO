import React, {Component} from 'react'
import CommonHeader from '../../components/commonHeader'
import CommonInput from '../../components/commonInput'
import CommonButton from '../../components/button'
import {Link} from 'react-router-dom'

import AV from '../../api/leancloud'
import CommonRemind from '../../components/errorComponent'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import './index.scss'
class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleClick =this.handleClick.bind(this)
    this.state = {
      email: '',
      error: ''
    };
  }
  handleClick(){
    let email = this.state.email
    if(email.trim()===false) {
      return
    }
     AV.User.requestPasswordReset(email).then((success) => {
      console.log("success")
      this.setState({
        error: 300
      })
      setTimeout(()=>{
        console.log(1)
        this.urlPush('/signin')
      },3000)
    }, (error)=>{
      console.log(error.code)
       this.setState({
        error: 205
      })
    });
  }
  urlPush(url){
    this.props.onUrlPush(url)
  }
  handleEmailChange(value) {
    this.setState({
      email: value
    })
  }
  emailHandleBlur() {}
  render() {
    const style={
    margin: "0 auto",
    width: "336px",
    textAlign: "center"
  }
    return (
      <div style={style}>
        <Link className='reset-to-signIn' to='/signin'>Sign In</Link> 
        <CommonHeader
          title={"Reset Password"}
          description={"You can change your password!"}/>
         <CommonInput 
          title={"email"}
          iconType={"icon-email-copy"}
          inputType={"text"}
          value={this.state.email}
          handleChange={this.handleEmailChange}
          handleBlurCheck = {this.emailHandleBlur}
          style={{marginTop: '5opx'}}
        />
       {
         this.state.error ?  <CommonRemind error={this.state.error}/> : ''
       }
        <CommonButton
          text={"RESET"}
          handleClick={this.handleClick}
          status={this.props.status}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onUrlPush: (url) => {
      dispatch(push(url))
    }
  }
}

export default connect(null, mapDispatchToProps)(ResetPassword)