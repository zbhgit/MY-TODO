import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style/signOut.scss'
import AV from '../../api/leancloud'
import {connect} from 'react-redux'
import {actions} from '../../signUp'

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    AV.User.logOut()
    this.props.signOut()
  }
  render() {
    return <Link onClick={this.handleClick} className="signOut" to='/signin'>SIGN OUT </Link>
  }
}

const userSignOut = actions.userSignOut
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=>{
      dispatch(userSignOut())
    }
  }
}
export default connect(null, mapDispatchToProps)(SignOut)