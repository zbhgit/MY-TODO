import AV from './leancloud'

 const signUp = (username,password,email,successFn,errorFn) => {
  const user = new AV.User()
  user.setUsername(username)
  user.setPassword(password)
  user.setEmail(email)

  user.signUp().then(function (response) {
      successFn(response)
    }, function (error) {
      errorFn(error)
    })
}
export default signUp