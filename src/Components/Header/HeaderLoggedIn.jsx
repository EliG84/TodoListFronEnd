import React from 'react';
import { Redirect } from 'react-router-dom';

const Logged = (props) => {
  const logoutButton = () => {
    localStorage.removeItem('token');
    props.setUser(null);
    props.setLogged(false);
    return <Redirect to='/' />;
  };

  return (
    <button onClick={logoutButton} className='btn btn-dark text-light'>
      Logout
    </button>
  );
};

export default Logged;
