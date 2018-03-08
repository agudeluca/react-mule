import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/applicationStore';
import Home from './views/home';
import Login from './views/login';
import { Router, Route, Redirect, BrowserRouter } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route
            exact
            render={props =>
              localStorage.getItem('session') ? (
                <Redirect to={{ pathname: '/' }} />
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              )
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return { applicationStore: state.applicationStore };
};
export default connect(mapStateToProps, actions)(App);
