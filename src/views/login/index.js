import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/applicationStore';
export class Login extends Component {
    render() {
        console.log(this)
        return (
            <div >
                <p>
                    login
        </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { applicationStore: state.applicationStore }
  }
  export default connect(mapStateToProps, actions)(Login)
