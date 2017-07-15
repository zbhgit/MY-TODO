import React from 'react'

import SHeader from './header'
import Form from './form'

const SignIn = () => {
  const style={
    margin: "0 auto",
    width: "336px",
    textAlign: "center"
  }
  return (
    <div style={style} className="signIn">
      <SHeader/>
      <Form/>
    </div>
  )
}
export default SignIn