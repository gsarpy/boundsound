import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));;
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} id="email" value={this.state.email} name="email" />
          <input type="password" onChange={this.handleChange} id="password" value={this.state.password} name="email" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
