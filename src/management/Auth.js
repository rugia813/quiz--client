import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div className='login-form'>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>

            <Header as='h2' color='teal' textAlign='center'>
              Login account
            </Header>

            <Form error size='large' onSubmit={(() => this.props.click(this.state.email, this.state.password))}>
              <Segment stacked>
                {/*Alert*/}
                {this.props.children}
                
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  value={this.state.email}
                  id="email"
                  onChange={(event) => this.handleChange(event)}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  id="password"
                  onChange={(event) => this.handleChange(event)}
                />

                <Button loading={this.props.lock} color='teal' fluid size='large'>Login</Button>
              </Segment>
              <Message>
                New to us? <a href='#'>Sign Up</a>
              </Message>
            </Form>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
}

class RegisterForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      name: '',
      password: '',
      password_confirmation: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div className='login-form'>
        <style>{`
      div.login-form {
        min-height: -webkit-fill-available;
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>

            <Header as='h2' color='teal' textAlign='center'>
              Register account
            </Header>

            <Form error size='large' onSubmit={(() => this.props.click(this.state.email, this.state.name, this.state.password, this.state.password_confirmation))}>
              <Segment stacked>
                {/*Alert*/}
                {this.props.children}
                
                <Form.Input
                  fluid
                  icon='mail'
                  iconPosition='left'
                  placeholder='E-mail address'
                  value={this.state.email}
                  id="email"
                  onChange={(event) => this.handleChange(event)}
                /><Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Name'
                  value={this.state.name}
                  id="name"
                  onChange={(event) => this.handleChange(event)}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  id="password"
                  onChange={(event) => this.handleChange(event)}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password Confirmation'
                  type='password'
                  value={this.state.password_confirmation}
                  id="password_confirmation"
                  onChange={(event) => this.handleChange(event)}
                />

                <Button loading={this.props.lock} color='teal' fluid size='large'>Register</Button>
              </Segment>
            </Form>

          </Grid.Column>
        </Grid>
      </div>
    )
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
}

export { RegisterForm, LoginForm };