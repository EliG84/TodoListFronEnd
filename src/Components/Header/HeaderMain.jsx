import React from 'react';
import Logged from './HeaderLoggedIn';
import NotLogged from './HeaderNotLogged';

const HeaderMain = (props) => {
  return (
    <header className='nav row justify-content-between h-100 bg-dark text-light mb-5'>
      <div className='col-lg-6 text-left'>
        <h2>Todo List</h2>
      </div>
      {props.logged ? (
        <Logged setLogged={props.setLogged} setUser={props.setUser} />
      ) : (
        <NotLogged />
      )}
    </header>
  );
};

export default HeaderMain;
