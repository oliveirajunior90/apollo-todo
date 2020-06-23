export const createAddTodo = (todosVar) => {

    const createNewTodoId = (todosVar) => todosVar.reduce((maxId, todo) => {
      return todosVar.reduce(
        (maxId, todo) => Math.max(todo.id, maxId),
        -1
      ) + 1;
    })
    
    const createNewTodo = (text, todosVar) => ({ text, completed: false, id: createNewTodoId(todosVar)})
  
    return (text) => {
      const allTodos = todosVar();
      todosVar(allTodos.concat([createNewTodo(text, allTodos)]));
    }
  
  }