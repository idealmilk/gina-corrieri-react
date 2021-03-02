import React from 'react';
import { Link } from 'react-router-dom';
import Phenomena from './../../assets/phenomena.mp4';
import PhenomenaLogo from './../../assets/phenomena.png';
import './styles.scss';

const Landing = props => {
  return (
    <div className="landing">
      <div className="hero">
        <video className='video' autoPlay loop muted>
          <source src={Phenomena} type='video/mp4' />
        </video>
        <img src={PhenomenaLogo} alt="Phenomena Logo" className="logo"/>
      </div>
      <div className="copy">
        <p>CLOTHING HAS THE POWER TO MANIFEST YOUR MIND AND VALUES.</p>
        <p>IN THE 1960s MY MATERNAL GRANDPARENTS LEFT SAN FERNANDO, TRINIDAD TO COME TO <span style={{color: "red"}}>LONDON</span>, ALSO THE CITY WHERE MY ITALIAN PATERNAL GRANDFATHER LIVED WITH MY NORTHERN ENGLISH GRANDMOTHER.</p>
        <p>IN THE 1980s MY PARENTS MET AT UNIVERSITY, MY DAD WAS A PUNK AND MY MUM LOVED DISCO.</p>
        <p>MIXTURES AND FUSIONS FEEL NATURAL TO ME, OFTEN MELDING WITH A SENSE OF UNCERTAINTY.</p>
        <p>I HAVE GROWN UP WONDERING WHERE MY PLACE IN THE WORLD IS.</p>
        <p>PHENOMENA IS MY WORLD WITHOUT BOUNDARIES. A SURREAL, INCANDESCENT PLACE INSPIRED BY THE LATE 1970s REGGAE SCENE AND ITS INFLUENCE ON PUNK IN LONDON; BOTH WERE ROOTED IN THE CITY EXPERIENCE AND BONDED PEOPLE THROUGH MUSIC AND A SHARED RESISTANCE TO THE SYSTEM.</p>
        <p>I USE HEAT AS A METAPHOR FOR DEFIANCE.</p>
        <p>THE FABRIC IS UNIQUE TO EACH PIECE, AND CANNOT BE REPLICATED.</p>
      </div>
    </div>
  );
};

export default Landing;
