import React     from 'react';
import { Route } from 'react-router';
import App from 'components';
import Home from 'components/Home';
import ProfileOwner from 'components/ProfileOwner';

export default (
  <Route name="app" component={App} path="/">
    <Route component={Home} path="home" />
    <Route component={ProfileOwner} path="profile-owner" />
  </Route>
);