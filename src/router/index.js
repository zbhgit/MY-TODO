import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import {ConnectedRouter} from 'react-router-redux'

import {view as SignIn } from '../signIn'
import {view as SignUp }from '../signUp'
import {view as Todo} from '../todos'

import {history} from '../store'

class RouterMap extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/todo" component={Todo}/>
          <Route exact path="/signIn" component={SignIn}/>
          <Route exact path="/signUp" component={SignUp}/>
        </div>
      </ConnectedRouter>    
    )
  }
}
export default RouterMap

