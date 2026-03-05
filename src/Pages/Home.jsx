import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1>Brain<span>Blast</span></h1>
        <p>Challenge yourself with over 10,000 questions across 24 unique categories. Ready to test your knowledge?</p>
        <Link to="/setup">
          <button className='get-started-btn'>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;