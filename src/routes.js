import React, { Component } from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/authRoutes/privateRoutes'
import PublicRoute from './components/authRoutes/publicRoutes'
import Home from './components/home/index';
import SignIn from './components/signin/index';
import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AddEditMatches from './components/admin/matches/AddEditMatches';
const Routes = (props) => {
  return ( 
  <Layout>
    <Switch>
            <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatches}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatches}/>
            <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
    </Switch>
  </Layout> );
}
 
export default Routes;
