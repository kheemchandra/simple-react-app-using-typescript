import { useContext } from "react";

import TodoItem from "./TodoItem"; 
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

const Todos= () => {
  const TodosCtx = useContext(TodosContext);

  return <ul className={classes.todos}>
    {TodosCtx.items.map(todo => <TodoItem key={todo.id} text={todo.text} onRemoveTodo={TodosCtx.removeTodo.bind(null, todo.id)}/>)}
  </ul>
};

export default Todos;