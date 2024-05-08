import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='half'>
          <div className='cont'>
            <h1 className='title'>WELCOME TO <span className='span'>SOFT</span>APP.</h1>
            <p>Our store contain Android apps, Windows programs free and easy to download, we also offer modded version of these Apps and programs! enjoy the surf !</p>
            <Link to="/android" className='link'>Surf now</Link>
          </div>
        </div>
        <div className='half'>
          <img src={process.env.PUBLIC_URL + 'dark.png'} alt='error' className='img' />
        </div>
      </div>
    </div>

  );
};

export default Home;