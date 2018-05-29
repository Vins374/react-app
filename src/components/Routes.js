import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginNew from './LoginNew';
import Login from './Login';

class Routes extends Component {
   render() {
      return (
        <div>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/login-new' component={LoginNew} />
            </Switch>
        </div>
      );
   }
}
export default Routes;