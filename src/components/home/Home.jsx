import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Aside from './Aside';
import Feed from './feed/Feed';
import Story from './feed/Story'
import Suggestions from '../suggestions/Suggestions';
const Home = () => {
  return (

    <div className='d-flex shadow-none p-0 vh-100'>

      <div className='aside p-0 bg-dark'><Aside /></div>


      <div className='w-75 shadow-none'>
        <Story />
        <Feed />
      </div>

      <div className='suggestions shadow-none'>
        <Suggestions />
      </div>

    </div>

  );
};

export default Home;