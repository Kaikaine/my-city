import React, { Component } from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/authRoutes/privateRoutes'
import PublicRoute from './components/authRoutes/publicRoutes'
import Home from './components/home/index';
import SignIn from './components/signin/index';
import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';

const Routes = (props) => {
  return ( 
  <Layout>
    <Switch>
      <PrivateRoute {...props} exact path='/admin_matches' component={AdminMatches}  />
      <PrivateRoute {...props} exact path='/dashboard' component={Dashboard}  />
      <PublicRoute {...props} restricted={true} path='/sign_in' component={SignIn} />
      <PublicRoute {...props} restricted={false} path='/' component={Home} />
    </Switch>
  </Layout> );
}
 
export default Routes;
