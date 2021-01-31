import React from 'react';
import Input from '../components/inputs/input.component';
import './login.style.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// here you display various stores.

function Register() {
  // you return a register page here.
}

export default class LoginPasge extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3 className='bisform-login'>Bisform Login</h3>
        <div className='login-div'>
          <div>
            <Input variant='standard' type='email' label='Email' width='90%' />
          </div>
          <div>
            <Input
              variant='standard'
              type='password'
              label='Password'
              width='90%'
            />
          </div>
          <Link className='forgot-password-link' to='/forgot-password'>
            Forgot your password?
          </Link>
          <div className='login-button'>
            <Button variant='contained' color='primary'>
              Login
            </Button>
          </div>
          <Link className='need-account-link' to='/register'>
            Need an account?
          </Link>

          <hr />
          <p style={{ textAlign: 'center' }}>Or</p>
          <div className='login-button'>
            {/* later you wrpa the text with a Link */}
            <Button variant='outlined' color='primary'>
              <i class='fab fa-google login-icon'></i> Sign in with Google
            </Button>
          </div>
          <div className='login-button'>
            <Button variant='outlined' color='primary'>
              <i class='fab fa-facebook-f login-icon'></i>Sign in with Facebook
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
