import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'

const LoginForm = ({ email, bindEmail, resetEmail, password, bindPassword, resetPassword, setLogin }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test' && password === 'test') {
      setLogin(true);
      setErr('');
    } else {
      setErr('Wrong email / password.');
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