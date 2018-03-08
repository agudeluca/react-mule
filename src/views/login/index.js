import React, { Component, Text } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/applicationStore';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  handleChangeUserName = event => {
    console.log(event);
    this.setState({ username: event.target.value });
  };
  handleChangePassword = event => {
    console.log(event);
    this.setState({ password: event.target.value });
  };

  handleSubmit = () => {
    console.log('go');
    this.props.authenticate(this.state);
  };
  render() {
    console.log(this);
    return (
      <div>
        <div>
          <label>Name:</label>
        </div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeUserName}
        />
        <div>
          <label>Password:</label>
        </div>
        <input type="password" onChange={this.handleChangePassword} />
        <div>
          <button onClick={this.handleSubmit}>Enviar</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { applicationStore: state.applicationStore };
};
export default connect(mapStateToProps, actions)(Login);
