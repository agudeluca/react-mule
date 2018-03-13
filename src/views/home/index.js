import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/applicationStore';
import RaisedButton from 'material-ui/RaisedButton';
import { styles } from '../../styles';
export class Home extends Component {
  render() {
    return (
      <div className="App" style={styles.container}>
       
    <h1 style={styles.textAlign} className="App-title">User Panel</h1>
 
        <RaisedButton style={styles.container} onClick={() => this.props.logOut()}>
          Log Out
          </RaisedButton>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { applicationStore: state.applicationStore };
};
export default connect(mapStateToProps, actions)(Home);
