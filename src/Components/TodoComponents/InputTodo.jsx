import React, { useRef } from 'react';

const InputTodo = (props) => {
  let todo = useRef(null);
  let date = useRef(null);

  const handleClick = () => {
    if (todo.current.value === '' || date.current.value === '')
      return alert('Fill all fields please');
    let newTodo = {
      name: todo.current.value,
      date: calcDays(date.current.value),
    };
    if (newTodo.date < 0) return alert('Choose a future date');
    if (newTodo.name.length > 60)
      return alert('Todo is To long, type less text!');
    props.addTodo(newTodo);
    todo.current.value = '';
    date.current.value = '';
  };

  const calcDays = (_newDate) => {
    let timeUnix = Date.parse(_newDate) - Date.parse(new Date());
    let timeDays = timeUnix / (1000 * 60 * 60 * 24);
    return Math.floor(timeDays) + 1;
  };

  return (
    <div className='container d-flex flex-column align-items-center mb-5'>
      <h2>Add A new Todo</h2>
      <div className='container d-flex flex-column flex-lg-row justify-content-center'>
        <input
          ref={todo}
          className='form-control col col-lg-5'
          type='text'
          placeholder='Todo or Not Todo? That is the question'
        />
        <input
          ref={date}
          className='form-control col my-2 m-lg-0 col-lg-2'
          type='date'
          style={{ minHeight: '2rem' }}
        />
        <button onClick={handleClick} className='btn btn-outline-success'>
          Add
        </button>
      </div>
    </div>
  );
};

export default InputTodo;
