import AV from './leancloud'
// g构建AV.Object
// 声明一个类型
let Todo = AV.Object.extend('Todo')

// 新建对象

let query = new AV.Query('Todo');

// 添加ToDo数据
export function addTodoItem(obj, successFn, errorFn) {
  let todoList = new Todo();

  todoList.set('title', obj.title)
  todoList.set('status', obj.status)
  todoList.set('deleted', obj.deleted)
  todoList.save().then((todo) => {
    successFn(todo.id)
  }, (error) => {
    console.error(error)
  })
}
// 获取所有Todoitem信息
export function getTodoItem(successFn, errorFn) {

  query.find().then(function (todos) {
    var newTodos = []
    todos.forEach(function (todo) {
      todo.attributes.id = todo.id
      newTodos.push(todo.attributes)
    });
    successFn(newTodos)
  }, function (error) {
    errorFn(error)
  });
}

// 更新某个todoItem信息

export function updateItem(id, key, obj) {
  // 第一个参数是 className，第二个参数是 objectId
  var todo = AV.Object.createWithoutData('Todo', id);
  // 修改属性
  todo.set(key, obj);
  // 保存到云端
  todo.save();
}

// 删除某项

export function deleteItem(id,successFn,errorFn) {
  var todo = AV.Object.createWithoutData('Todo', id);
  todo.destroy().then(function (success) {
    // 删除成功
    successFn(success)
  }, function (error) {
    // 删除失败
    errorFn(error)
  });
}