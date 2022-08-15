import { useState } from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); 

  const addTodoHandler = (todoText: string) => {
    setTodos(prevTodos => {
      return prevTodos.concat(new Todo(todoText));
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
