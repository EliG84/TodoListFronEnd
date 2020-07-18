import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { signin } from '../../Services/todoService';

const UserLogin = (props) => {
  let email = useRef(null);
  let pass = useRef(null);
  let history = useHistory();

  const formSubmit = async (e) => {
    e.preventDefault();
    let user = {
      email: email.current.value,
      password: pass.current.value,
    };
    let data = await signin(user);
    if (data.logged) {
      props.setUser(data.body);
      localStorage.setItem('token', data.token);
      history.push('/');
    }
  };

  useEffect(() => {
    if (props.user) history.push('/');
  });

  return (
    <form
      onSubmit={formSubmit}
      className='container d-flex flex-column align-items-center'>
      <input
        ref={email}
        className='form-control m-2 col-lg-6'
        type='email'
        placeholder='Your Email'
        required
      />
      <input
        ref={pass}
        className='form-control m-2 col-lg-6'
        type='password'
        placeholder='Password'
        required
      />
      <input type='submit' className='btn btn-success' value='Login' />
    </form>
  );
};
export default UserLogin;
