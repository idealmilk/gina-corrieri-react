import React from 'react';
import { Link } from 'react-router-dom';
import Phenomena from './../../assets/phenomena.mp4';
import PhenomenaLogo from './../../assets/phenomena.png';
import './styles.scss';

const Landing = props => {
  return (
    <div className="landing">
      <div className="wrap">
        <video className='video' autoPlay loop muted>
          <source src={Phenomena} type='video/mp4' />
        </video>
        <img src={PhenomenaLogo} alt="Phenomena Logo" className="logo"/>
      </div>
    </div>
  );
};

export default Landing;
