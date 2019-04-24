import React from 'react';

const Post = ({name, address, email, content, title, image, needed}) => {

  return (
    <div className='post'>
      <div>
        <img className='post-image' alt='post' src={image} />
      </div>
      <div className='post-details'>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>Volunteers needed: {needed}</p>
        <p>
          <strong>Contact Info:</strong><br />
          <span className='shelter-name'>{name}</span><br />
          {address} <br />
          <a href="mailto:someone@yoursite.com">Email Us</a>
        </p>
      </div>
    </div>
  );
}

export default Post;
