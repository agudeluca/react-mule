import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/applicationStore';
export class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { applicationStore: state.applicationStore }
}
export default connect(mapStateToProps, actions)(Home)