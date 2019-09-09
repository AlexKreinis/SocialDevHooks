import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Landing from './components/layout/Landing.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import Alert from './components/layout/Alert.js';
import Dashboard from './components/dashboard/Dashboard.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/route/PrivateRoute.js';
import EditProfile from './components/profile-form/EditProfile';
import CreateProfile from './components/profile-form/CreateProfile.js';
import AddExperience from './components/profile-form/AddExperience.js';
import AddEducation from './components/profile-form/AddEducation.js';
import Profiles from './components/profiles/Profiles';
import ProfileIndex from './components/profile/ProfileIndex';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" render={() => <Landing />} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/profiles" render={() => <Profiles />} />
              <Route exact path="/register" render={() => <Register />} />
              <Route exact path="/login" render={() => <Login />} />
              <Route
                exact
                path="/profile/:id"
                //render={() => <ProfileIndex />}
                component={ProfileIndex}
              />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
