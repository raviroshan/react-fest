// Packages
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// Components
import LoginForm from '../LoginForm/LoginForm';


// Actions

// Styles

class Login extends Component {
  state = {
    isRedirect: false,
    reDirectTo: '/landing'
  };

  onSubmit = ({ username, password }) => {
    console.log(username, password);
    this.setState({
      isRedirect: true
    });
  };

  render() {
    if (this.state.isRedirect) {
      return (<Redirect to={this.state.reDirectTo} />);
    }
    return (
      <div className="Login">
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Login;
