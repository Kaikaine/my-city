import React, { Component } from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/index';
import SignIn from './components/signin/index';
import Dashboard from './components/admin/Dashboard';


const Routes = () => {
  return ( 
  <Layout>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/sign_in' component={SignIn} />
      <Route exact path='/' component={Home} />
    </Switch>
  </Layout> );
}
 
export default Routes;
