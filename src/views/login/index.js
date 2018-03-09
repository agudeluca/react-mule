import React, { Component, Text } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/applicationStore';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { styles } from '../../styles';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    this.props.authenticate(this.state);
  };
  render() {
    return (
      <div style={styles.container}>
        <div>
          <TextField
            id="username"
            hintText={!!this.state.username ? '' : 'UserName'}
            value={this.state.value}
            name="username"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <TextField
            id="password"
            type="password"
            name="password"
            hintText={!!this.state.password ? '' : 'Password'}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <RaisedButton style={styles.rowButton} onClick={this.handleSubmit}>
            Enviar
          </RaisedButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { applicationStore: state.applicationStore };
};
export default connect(mapStateToProps, actions)(Login);
