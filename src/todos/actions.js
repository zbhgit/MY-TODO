import * as actionTypes from './actionTypes'
import AV from '../api/leancloud'
// g构建AV.Object 声明一个类型 新建对象

let Todo = AV.Object.extend('Todo')

export const addTodo = (todos) => ({
  type: actionTypes.ADD_TODO,
  todos: todos
})

// export const toggleTodo = (id) => ({type: actionTypes.TOGGLE_TODO, id: id})

// export const removeTodo = (id) => ({type: actionTypes.REMOVE_TODO, id: id})
// export const severityTodo = (id, value) => ({type: actionTypes.SEVERITY_TODO, id: id, value: value})


// 添加数据 到leanCloud
export const addTodoToLeanCloud = (text, severity) => {
  return (dispatch) => {
    let todoItem = new Todo();
    todoItem.set('text', text)
    todoItem.set('severity', severity)
    todoItem.set('completed', false)
    todoItem.set('deleted', false)
    // 这样做就可以让这个 Todo 只被当前用户看到
    let acl = new AV.ACL()
    acl.setPublicReadAccess(false) // 注意这里是 false
    acl.setWriteAccess(AV.User.current(), true)
    acl.setReadAccess(AV.User.current(), true)
    todoItem.setACL(acl);
    todoItem
      .save()
      .then((todo) => {
        dispatch(getAllTodoList())
      }, (error) => {
        console.error(error)
      })
  }
}

// 获取所有TodoList信息

export const getAllTodoList = () => {  
  return (dispatch) => {
     let query = new AV.Query('Todo')    
    query.find().then((todos) => {
      let newTodos = []
      todos.forEach(function (todo) {
        todo.attributes.id = todo.id
        newTodos.push(todo.attributes)
      });
      dispatch(addTodo(newTodos))
    }, (error) => {
      console.log(error)
    });
  }
}

// 更改单个item的状态

export const changeKeyValue = (id, key, obj)=>{
  return (dispatch) => {
    var todo = AV.Object.createWithoutData('Todo', id);
    // 修改属性
    todo.set(key, obj);
    // 保存到云端
    todo.save().then(()=>{
      dispatch(getAllTodoList())
    });
  }
}


// 更新所有completed ： true的deleted=true

export const removeAllDoneTodo = (todos) => {
  return (dispatch)=> {
    todos.forEach((item)=>{
      dispatch(changeKeyValue(item.id,'deleted',true))
    })
  }
}