import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const ShelterForm = () => {
  return (
    <div className="shelter-form">
      <div className='shelter-inner-form'>
        <h1>Shelters</h1>
        <Form className='signup-form'>
          <Form.Field>
            <input placeholder='Shelter Name' />
          </Form.Field>
          <Form.Field>
            <input placeholder='Phone' />
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

export default ShelterForm;