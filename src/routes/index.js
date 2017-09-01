import React from 'react';
import { BrowserRouter as Router, Route, Switch, IndexRoute } from 'react-router-dom';
import { App } from '../containers';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

export default (

    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
    </Switch>

)