import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'

const CreatePost = ({ email, bindEmail, resetEmail, password, bindPassword, resetPassword, setLogin }) => {

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
  const { value:title, bind:bindTitle, reset:resetTitle } = useInput('');
  const { value:content, bind:bindContent, reset:resetContent } = useInput('');
  const { value:needed, bind:bindNeeded, reset:resetNeeded } = useInput('');
  const { value:image, bind:bindImage, reset:resetImage } = useInput('');

  return (
    <div className="post-form-div">
      <Form className='post-form' onSubmit={handleSubmit}>
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

export default CreatePost;