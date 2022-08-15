import TodoItem from "./TodoItem";
import Todo from "../models/Todo";

import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], onRemoveTodo: (todoId: string) => void }> = props => {
  return <ul className={classes.todos}>
    {props.items.map(todo => <TodoItem key={todo.id} text={todo.text} onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}/>)}
  </ul>
};

export default Todos;