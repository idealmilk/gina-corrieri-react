import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Phenomena from './../../assets/phenomena.mp4';
import PhenomenaLogo from './../../assets/phenomena.png';
import Image1 from './../../assets/Phenomena/IMG_0505.jpg'
import Cord from './../../assets/Phenomena/Cord_Clear2.png';
import Necklace from './../../assets/Phenomena/Accessories.png';
import './styles.scss';
import Gallery from './Gallery';

const Landing = ({ project }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="landing">
      <div className="hero">
        <video className='video' autoPlay loop muted>
          <source src={Phenomena} type='video/mp4' />
        </video>
        <img src={Image1} alt="Phenomena"className="mobileBanner"/>
        <img src={PhenomenaLogo} alt="Phenomena Logo" className="logo"/>
      </div>
      <div className="copy" data-aos="fade-up">
        <div className="text">
          <p>Clothing has the power to manifest your mind and values.</p>
          <p>In the 1960s my maternal grandparents left San Fernando, Trinidad to come to <span style={{color: "red"}}>London</span>, also the city where my Italian paternal grandfather lived with my Northern English grandmother.</p>
          <p>In the 1980s my parents met at university, my dad was a Punk and my mum loved Disco.</p>
          <p>Mixtures and fusions feel natural to me, often melding with a sense of uncertainty.</p>
          <p>I have grown up wondering where my place in the world is.</p>
          <p><em>Phenomena</em> is my world without boundaries. A surreal, incandescent place inspired by the late 1970s Reggae scene and its influence on Punk in London; both were rooted in the city experience and bonded people through music and a shared resistance to the system.</p>
          <p>I use heat as a metaphor for defiance.</p>
          <p>The fabric is unique to each piece, and cannot be replicated.</p>
        </div>
        <div className="textures">
          <img src={Cord} alt="Phenomena Cord" />
          <img src={Necklace} alt="Phenomena Necklace" />
        </div>
      </div>
      <Gallery project={project} />
    </div>
  );
};

export default Landing;
