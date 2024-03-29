import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="first_name">First Name</label>
        <input
          type="first_name"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handle_change}
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          type="last_name"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handle_change}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
