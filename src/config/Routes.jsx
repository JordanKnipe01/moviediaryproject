import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import Signup from '../pages/signup/Signup';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../pages/login/ForgotPassword';
import UpdateProfile from '../pages/dashboard/UpdateProfile';
const Routes = () => {
    return (
        <Switch>
            <Route
                path='/Signup'
                component={Signup}
            />
            <Route
                path='/Login'
                component={Login}
            />
            <PrivateRoute
                exact path='/Dashboard'
                component={Dashboard}
            />
            <PrivateRoute
                path='/update-profile'
                component={UpdateProfile}
            />
            <Route
                path='/forgot-password'
                component={ForgotPassword}
            />
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

export default Routes;