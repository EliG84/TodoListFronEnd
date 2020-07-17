import React from 'react';
import Logged from './HeaderLoggedIn';
import NotLogged from './HeaderNotLogged';

const HeaderMain = (props) => {
  return (
    <header className='nav row justify-content-between h-100 bg-dark text-light'>
      <div className='col-lg-6'>
        <h2>Todo List</h2>
      </div>
      {props.logged ? <Logged /> : <NotLogged />}
    </header>
  );
};

export default HeaderMain;
