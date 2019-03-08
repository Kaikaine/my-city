import React, { Component } from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import Home from './components/home/index';

const Routes = () => {
  return ( 
  <Layout>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </Layout> );
}
 
export default Routes;
