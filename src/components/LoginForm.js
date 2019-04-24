import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'
import Auth from '@aws-amplify/auth';

Auth.configure('../aws-exports.js')

const LoginForm = ({ email, bindEmail, resetEmail, password, bindPassword, resetPassword, setLogin }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(email, password); // USER OBJECT IS HERE <-
      console.log(user)
      switch(user.challengeName) {
        case "NEW_PASSWORD_REQUIRED":
          await Auth.completeNewPassword(
            user,               // the Cognito User Object
            'best1234'       // the new password
          )
          break;
        
        default:
          console.log('Login successful!');
          break;
      }
      setErr('Login successful!');
      setTimeout(() => setLogin(true), 1000);
      
    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        setErr('Your account is not yet confirmed. Check your email!')
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === 'PasswordResetRequiredException') {
        setErr('Login error: please reset your password.')
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === 'NotAuthorizedException') {
        setErr('Invalid password or username.')
        // The error happens when the incorrect password is provided
      } else if (err.code === 'UserNotFoundException') {
        setErr('Invalid password or username.')
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
          console.log(err);
      }
    }

    resetEmail();
    resetPassword();

  }

  const [errMsg, setErr] = useState('');

  return (
    <div className="login-form-div">
      <Form className='login-form' onSubmit={handleSubmit}>
        <Form.Field>
          <input placeholder='Email' {...bindEmail } />
        </Form.Field>
        <Form.Field>
          <input type='password' placeholder='Password' {...bindPassword } />
        </Form.Field>

        <Button type='submit'>Login</Button> <span className='error-msg'>{errMsg}</span>
      </Form>
    </div>
  );
}

export default LoginForm;