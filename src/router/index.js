import React from 'react'
import {Route} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {view as SignIn } from '../signIn'
import {view as SignUp }from '../signUp'
import {view as Todo} from '../todos'
import {history} from '../store'
import AV from '../api/leancloud'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {actions as SignUpActions} from '../signUp'
// 检测当前登录账户
const currentUser = AV.User.current()

class RouterMap extends React.Component {
  componentDidMount(){
    if(currentUser) {
      this.props.push('/todo')
      let email = currentUser.attributes.email
      let username = currentUser.attributes.username
      this.props.signInAuto(email,username)

    }else {
      this.props.push('/signin')
    }
  }
  componentDidUpdate() {
    if(currentUser) {
      this.props.push('/todo')
      let email = currentUser.attributes.email
      let username = currentUser.attributes.username
      this.props.signInAuto(email,username)

    }else {
      this.props.push('/signin')
    }
  }
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/todo" component={Todo}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/signUp" component={SignUp}/>
        </div>
      </ConnectedRouter>    
    )
  }
}

// 如果用户已登录，更新到store

const addUserSuccess = SignUpActions.addUserSuccess
const mapDispatchToProps = (dispatch) => {
  return {
    push: (url) => {
      dispatch(push(url))
    },
    signInAuto: (email,username) => {
      dispatch(addUserSuccess(email,username))
    }
  }
}
export default connect(null, mapDispatchToProps)(RouterMap)

