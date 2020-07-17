import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import HeaderMain from './Components/Header/HeaderMain';

const App = (props) => {
  let [user, setUser] = useState({});
  let [logged, setLogged] = useState(true);

  useEffect(() => {}, []);

  return (
    <Router>
      <div className='container'>
        <HeaderMain logged={logged} />
      </div>
    </Router>
  );
};

export default App;
