import React from 'react';
import SingleTodo from './SingleTodo';

const TodosTable = (props) => {
  return (
    <div className='col-12 d-flex flex-column'>
      <h1>My Todos</h1>
      <table className='table table-border table-striped'>
        <thead className='bg-dark text-light'>
          <tr>
            <td>No.</td>
            <td>Name</td>
            <td>Days Left</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {props.todos
            .sort((a, b) => a.date - b.date)
            .map((item, index) => (
              <SingleTodo
                key={index}
                index={index}
                item={item}
                delTodo={props.delTodo}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;
