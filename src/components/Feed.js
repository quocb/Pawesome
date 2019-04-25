import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/Posts.css';
import Post from './Post';

const Feed = () => {

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios('https://mk5ta87g8l.execute-api.us-west-2.amazonaws.com/posts');
      setFeed(result.data);
    })();
  }, []);

  return (
    <div id='posts-container'>
      {feed.map(item => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Feed;
