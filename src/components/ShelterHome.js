import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../css/Shelter.css';
import Post from './Post';
import CreatePost from './CreatePost';


const ShelterHome = () => {

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    (async () => {
      // const result = await axios.get('https://gordn5jcwb.execute-api.us-west-2.amazonaws.com/get_shelter_posts/', { params: { shelter_id: 2 } });
      const result = await axios('https://mk5ta87g8l.execute-api.us-west-2.amazonaws.com/posts');
      setFeed(result.data);
    })();
  }, []);



  return (<>
    <CreatePost setFeed={setFeed}/>
    <div id='posts-container'>
      <h2>My Postings</h2>

      {feed.map(item => (
        <Post key={item.id} {...item} />
      ))}
    </div>
  </>);
}

export default ShelterHome;
