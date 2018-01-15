import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const email = e.target.value;

    this.setState({
      email,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    fetch('/api/login', {
     method: 'POST',
     headers: {
       'Content-Type':'application/json'
     },
     body: {
      "email": email
     }
    });
    console.log("EMAIL", email)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.email} name="email" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
