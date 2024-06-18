// Home.js
import React from 'react';
import '../../css/home.css';
import NavBar from './homeComponents/navBar';
import Dashboard from './homeComponents/dashboard';

const Home = () => {
  return (
    <div className="container">
      <div className="navBar"> <NavBar /></div>
      <div className="dashboard"><Dashboard /></div>
    </div>
  );
};

export default Home;
