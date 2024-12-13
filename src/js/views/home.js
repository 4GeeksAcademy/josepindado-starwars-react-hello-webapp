// Home.js
import React from 'react';
import Characters from '../component/Characters';
import Vehicles from '../component/Vehicles';
import Planets from '../component/Planets';

export const Home = () => (
  <div className="container mt-4">
    <Characters />
    <Planets />
    <Vehicles />
    
  </div>
);

export default Home;