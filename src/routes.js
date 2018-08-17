import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './components/authentication/LoginPage';

export default function () {
    return (
        <Switch>
            <Route path="/login" component={LoginPage}/>
        </Switch>
    );
}
