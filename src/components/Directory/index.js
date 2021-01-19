import React from 'react';
import { Link } from 'react-router-dom';
import Phenomena from './../../assets/phenomena.mp4';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <video className='videoTag' autoPlay loop muted>
          <source src={Phenomena} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Directory;
