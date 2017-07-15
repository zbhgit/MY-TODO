import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import {view as SignIn } from '../signIn'
import {view as SignUp }from '../signUp'
import {view as Todo} from '../todos'

class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/todo" component={Todo}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/signUp" component={SignUp}/>
        </div>
      </Router>    
    )
  }
}
export default RouterMap

