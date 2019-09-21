import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login.js';
import Register from '../auth/Register.js';
import Alert from '../layout/Alert.js';
import Dashboard from '../dashboard/Dashboard.js';
import PrivateRoute from '../route/PrivateRoute.js';
import EditProfile from '../profile-form/EditProfile';
import CreateProfile from '../profile-form/CreateProfile.js';
import AddExperience from '../profile-form/AddExperience.js';
import AddEducation from '../profile-form/AddEducation.js';
import Profiles from '../profiles/Profiles';
import ProfileIndex from '../profile/ProfileIndex';
import Posts from '../posts/Posts.js';
import Post from '../post/Post.js';
import NotFound from '../layout/NotFound.js';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/profiles" render={() => <Profiles />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/profile/:id" component={ProfileIndex} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
