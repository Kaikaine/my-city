import React, { Component } from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/index';
import SignIn from './components/signin/index';
import Dashboard from './components/admin/Dashboard';
import PrivateRoute from './components/authRoutes/privateRoutes'
import PublicRoute from './components/authRoutes/publicRoutes'

const Routes = (props) => {
  return ( 
  <Layout>
    <Switch>

      <PrivateRoute {...props} exact path='/dashboard' component={Dashboard}  />
      <PublicRoute {...props} restricted={true} path='/sign_in' component={SignIn} />
      <PublicRoute {...props} restricted={false} path='/' component={Home} />
    </Switch>
  </Layout> );
}
 
export default Routes;
