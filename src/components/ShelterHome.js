import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/Shelter.css';
import Post from './Post';

const ShelterHome = () => {

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://mk5ta87g8l.execute-api.us-west-2.amazonaws.com/posts');
      setFeed(result.data);
    };
    fetchData();
  }, []);



  return (<>
    <CreatePost />
    <div id='posts-container'>
      {feed.map(item => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  </>);
}

export default ShelterHome;
