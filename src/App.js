import React, { useState, useEffect } from 'react';
import * as Api from './Services/todoService';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import HeaderMain from './Components/Header/HeaderMain';
import UserLogin from './Components/UserComponents/UserLogin';
import UserSignup from './Components/UserComponents/UserSignup';
import MainTodos from './Components/TodoComponents/MainTodos';

const App = (props) => {
  let [user, setUser] = useState(null);
  let [logged, setLogged] = useState(false);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLogged(true);
      setLoading(false);
      return;
    } else if (localStorage['token']) {
      async function fetchData() {
        let data = await Api.getTodos();
        if (data.logged) {
          setUser(data.body);
        }
      }
      fetchData();
    } else {
      setLoading(false);
      setLogged(false);
    }
  }, [user]);

  return (
    <Router>
      <div className='container text-center'>
        <HeaderMain logged={logged} setLogged={setLogged} setUser={setUser} />
        {loading ? (
          'Loading....'
        ) : logged ? (
          <MainTodos user={user} setUser={setUser} />
        ) : (
          <Redirect to='/login' />
        )}
      </div>
      <Switch>
        <Route
          exact
          path='/login'
          render={() => <UserLogin user={user} setUser={setUser} />}
        />
        <Route
          exact
          path='/signup'
          render={() => <UserSignup user={user} setUser={setUser} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
