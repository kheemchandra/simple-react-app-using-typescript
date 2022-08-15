import React, { useState } from "react";

import Todo from '../models/Todo';

type TodosContextType = {
  items: Todo[]; 
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextType>({
  items: [], 
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = props => {

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

  const TodosContextObj: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };

  return <TodosContext.Provider value={TodosContextObj}>
    {props.children}
  </TodosContext.Provider>
};

export default TodosContextProvider;