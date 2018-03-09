import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/applicationStore';
import Home from './views/home';
import Login from './views/login';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Redirect, BrowserRouter } from 'react-router-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
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
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return { applicationStore: state.applicationStore };
};
export default connect(mapStateToProps, actions)(App);
