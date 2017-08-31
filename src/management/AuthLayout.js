import React, { Component } from 'react';
import { Button, Header, Image, Modal, Message } from 'semantic-ui-react';
import { LoginForm, RegisterForm } from './Auth.js';

class AuthLayout extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      btn_lock: false,
      alert_visible: false
    }
    
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister(email, name, password, password_confirmation){
    if (this.state.btn_lock) return;

    this.setState({ btn_lock: true, alert_visible: false });

    fetch('http://quiz.net/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'email': email,
        'name': name,
        'password': password,
        'password_confirmation': password_confirmation
      })
    })
      .then(response => {
        const status = response.status;
        if (status == 201) {
          response.json().then((json) => {
            //success register
          });
        } else {
          response.json().then((json) => {
            this.setState({
              errors: json,
              alert_visible: true
            })
          });
        }
        this.setState({ btn_lock: false });
      })
      .catch((error) => {
        this.setState({
          errors: { fail: error },
          btn_lock: false,
          alert_visible: true
        })
        console.log('errors: ' + error)
    });
  }

  handleLogin(email, password) {
    if (this.state.btn_lock) return;

    this.setState({ btn_lock: true, alert_visible: false });

    fetch('http://quiz.net/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(response => {
        const status = response.status;
        if (status == 201) {
          response.json().then((json) => {
            //success login
          });
        } else {
          response.json().then((json) => {
            this.setState({
              errors: json,
              alert_visible: true
            })
          });
        }
        this.setState({ btn_lock: false });
      })
      .catch((error) => {
        this.setState({
          errors: { fail: error },
          btn_lock: false,
          alert_visible: true
        })
        console.log('errors: ' + error)
      });
  }

  render() {
    let errors = []
    for(let i in this.state.errors){
      errors.push(`${i}: ${this.state.errors[i]}`)
    }
    errors = errors.map((e, i) => { return <li value="*" role="listitem" className="" key={i}>{e}</li>})
    return (
      <div className="App">
        <RegisterForm click={this.handleRegister} lock={this.state.btn_lock}>
          <Message
            error
            floating
            hidden={!this.state.alert_visible}
            list={errors}
            onDismiss={ ()=>{ this.setState({ alert_visible: false }) } }
          />
        </ RegisterForm>
      </div>
    );
  }
}

export default AuthLayout;
