import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './views/Main';
import Home from './views/home/Home';

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
