import AV from './leancloud'
var currentUser = AV.User.current()
console.log(currentUser)

const signIn = (username,password,successFn,errorFn)=> {
  AV.User.logIn(username,password).then((response)=>{
    successFn(response)
  },(error)=>{
    errorFn(error)
  })

}

export default signIn