import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/applicationStore';
export class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">home menu de usuario</h1>
        </header>
        <button onClick={() => this.props.logOut()}>Log Out</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { applicationStore: state.applicationStore };
};
export default connect(mapStateToProps, actions)(Home);
