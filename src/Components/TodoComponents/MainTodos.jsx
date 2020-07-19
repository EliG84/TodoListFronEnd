import React, { useState, useEffect } from 'react';
import * as Api from '../../Services/todoService';
import InputTodo from './InputTodo';
import TodosTable from './TodosTable';

const MainTodos = (props) => {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(props.user.todos);
  });

  const addTodo = async (todo) => {
    console.log(todo.name);
    if (
      todos.filter((t) => t.name.toLowerCase() === todo.name.toLowerCase())
        .length
    )
      return alert('This Todo already Exists!');
    let data = await Api.addTodo(todo);
    setTodos(data);
    let tempUser = { ...props.user };
    tempUser.todos = [...data];
    props.setUser(tempUser);
  };

  const delTodo = async (id) => {
    let data = await Api.delTodo(id);
    setTodos(data);
    let tempUser = { ...props.user };
    tempUser.todos = [...data];
    props.setUser(tempUser);
  };

  return (
    <div className='container d-flex flex-column align-items-center align-content-center'>
      <InputTodo addTodo={addTodo} />
      <TodosTable todos={todos} delTodo={delTodo} />
    </div>
  );
};

export default MainTodos;
