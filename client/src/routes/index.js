import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**** Import Routes ****/
/* Import Public */
import Landing from '../views/public/Landing';
import Login from '../views/public/Login';
import Logout from '../views/public/Logout';

/* Import Private */
import Library from '../views/private/Library';
import Player from '../views/private/Player';
import Profile from '../views/private/Profile';
import Search from '../views/private/Search';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/logout" exact component={Logout}/>

      <Route path="/in/library" exact component={Library}/>
      <Route path="/in/listen" exact component={Player}/>
      <Route path="/in/profile" exact component={Profile}/>
      <Route path="/in/search" exact component={Search}/>
    </Switch>
  </BrowserRouter>
);
