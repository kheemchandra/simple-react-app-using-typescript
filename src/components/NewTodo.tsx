import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";

import classes from './NewTodo.module.css';

const NewTodo = () => {
  const TodosCtx = useContext(TodosContext);

  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = todoTextRef.current!.value;
    if(todoText.trim().length === 0){
      // Throw an error
      return;
    }

    TodosCtx.addTodo(todoText);
    
  }
  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo text</label>
    <input type='text' id='text' ref={todoTextRef}/>
    <button>Add Todo</button>
  </form>
};

export default NewTodo;