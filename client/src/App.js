import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" render={() => <Landing />} />
        <section className="container">
          <Switch>
            <Route exact path="/register" render={() => <Register />} />
            <Route exact path="/login" render={() => <Login />} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
