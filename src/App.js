import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null
    }
    fetch('http://quiz.net/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        const status = response.status;
        if (status == 200) {
          response.json().then((json) => {
            this.setState({ user: json })
          });
        } else {
          response.json().then((json) => {
            this.setState({ errors: json })
          });
        }
      })
      .catch((error) => console.log('errors: ' + error));
  }
  render() {
    let errors = []
    for(let i in this.state.errors){
      errors.push(`${i}: ${this.state.errors[i]}`)
    }
    errors = errors.map((e, i) => { return <li value="*" role="listitem" className="" key={i}>{e}</li>})
    return (
      <div className="App">
        <ul role="list" className="ui list">
          {errors}
        </ul>
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        {this.state.user}
      </div>
    );
  }
}

export default App;
