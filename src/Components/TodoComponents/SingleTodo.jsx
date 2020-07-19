import React, { useState, useEffect } from 'react';

const SingleTodo = (props) => {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td className='font-italic font-weight-bold'>{props.item.name}</td>
      <td>{props.item.date === 0 ? 'Today' : props.item.date}</td>
      <td>
        <button
          onClick={() => props.delTodo(props.item._id)}
          className='btn btn-sm btn-outline-dark'>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default SingleTodo;
