import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'
import {useInput} from './../hooks/useInput';
import axios from 'axios';

const CreatePost = ({setFeed}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || content === '' || needed === '' || image === '') {
      setErr('All fields need to be filled in');
    } else {
      const variables = {
        shelter_id: 2,
        content,
        title,
        needed,
        image
      }
      axios.post('https://jr80834v17.execute-api.us-west-2.amazonaws.com/post_post/', variables)
      .then(async () => {
        const result = await axios('https://mk5ta87g8l.execute-api.us-west-2.amazonaws.com/posts');
        setFeed(result.data);
      })
      setErr('');
      resetTitle();
      resetContent();
      resetNeeded();
      resetImage();
    }
  }

  const [errMsg, setErr] = useState('');

  const { value:title, bind:bindTitle, reset:resetTitle } = useInput('');
  const { value:content, bind:bindContent, reset:resetContent } = useInput('');
  const { value:needed, bind:bindNeeded, reset:resetNeeded } = useInput('');
  const { value:image, bind:bindImage, reset:resetImage } = useInput('');

  return (
    <div className="post-form-div">
      <h2>Add New Posting</h2>
      <Form className='post-form' onSubmit={handleSubmit}>
        <Form.Field>
          <input placeholder='title' {...bindTitle } />
        </Form.Field>
        <Form.Field>
          <input placeholder='content' {...bindContent } />
        </Form.Field>
        <Form.Field>
          <input placeholder='# of volunteers needed' {...bindNeeded } />
        </Form.Field>
        <Form.Field>
          <input placeholder='image' {...bindImage } />
        </Form.Field>

        <Button type='submit'>Add Posting</Button> <span className='error-msg'>{errMsg}</span>
      </Form>
    </div>
  );
}

export default CreatePost;