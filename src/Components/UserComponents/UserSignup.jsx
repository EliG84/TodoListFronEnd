import React from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { singup } from '../../Services/todoService';

const UserSignup = (props) => {
  let email = useRef(null);
  let password = useRef(null);
  let rep_pass = useRef(null);
  let answer = useRef(null);

  let history = useHistory();

  const formSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      email: email.current.value,
      password: password.current.value,
      rep_pass: rep_pass.current.value,
      answer: answer.current.value,
    };
    let data = await singup(newUser);
    if (data.logged) {
      props.setUser(data.body);
      localStorage.setItem('token', data.token);
      history.push('/');
    }
  };

  return (
    <form
      onSubmit={formSubmit}
      className='container d-flex flex-column align-items-center'>
      <input
        ref={email}
        className='form-control col-lg-6 m-2'
        type='email'
        placeholder='user@email.com'
        required
      />
      <input
        ref={password}
        className='form-control col-lg-6 m-2'
        type='password'
        placeholder='password'
        required
      />
      <input
        ref={rep_pass}
        className='form-control col-lg-6 m-2'
        type='password'
        placeholder='repeat password'
        required
      />
      <label>Your favorite food?</label>
      <input
        ref={answer}
        className='form-control col-lg-6 m-2'
        type='answer'
        placeholder='your answer'
        required
      />
      <input type='submit' className='btn btn-success' value='Signup' />
    </form>
  );
};

export default UserSignup;
