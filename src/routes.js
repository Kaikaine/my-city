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
import AddEditPlayers from './components/admin/players/AddEditPlayers';
import AdminPlayers from './components/admin/players/index';
import TheTeam from './components/theTeam/index';
import TheMatches from './components/theMatches/index';
import NotFound from './components/utils/not_found';
const Routes = (props) => {
  return ( 
  <Layout>
    <Switch>
            <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
            <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
            <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatches}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatches}/>
            <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
            <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
            <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
            <PublicRoute {...props} restricted={false} exact component={NotFound}/>
    </Switch>
  </Layout> );
}
 
export default Routes;
