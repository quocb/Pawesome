import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const VolunteerForm = () => {
  return (
    <div className="volunteer-form">
      <div>
        <h1>Volunteers</h1>
        <Form className='signup-form'>
          <Form.Field>
            <input placeholder='Full Name' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <input type='password' placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Create Account!</Button>
        </Form>
      </div>
    </div>
  );
}

export default VolunteerForm;