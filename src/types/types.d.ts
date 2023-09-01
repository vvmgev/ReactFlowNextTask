type NodeTodoType = 'todoForm';

type NodeTodoData = {
    id: string,
    title: string,
    description: string,
    completed: boolean,
  }
  
type NodeTodoPosition = {
    x: number,
    y: number,
}
  
type NodeTodo = {
    id: string,
    data: NodeTodoData,
    type: string,
    position: NodeTodoPosition,
}