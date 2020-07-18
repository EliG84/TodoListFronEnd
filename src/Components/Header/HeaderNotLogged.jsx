import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const NotLogged = (props) => {
  let login = useRef(null);
  let signup = useRef(null);
  let history = useHistory();

  const loginButton = () => {
    history.push('/login');
  };

  const signupButton = () => {
    history.push('/signup');
  };

  return (
    <div>
      <button onClick={loginButton} className='btn btn-dark text-light'>
        Login
      </button>
      <button onClick={signupButton} className='btn btn-dark text-light'>
        Signup
      </button>
    </div>
  );
};

export default NotLogged;
