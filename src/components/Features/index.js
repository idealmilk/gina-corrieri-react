import React from 'react';
import './styles.scss';
import Feature from './Feature';

const features = [
  {
    url: "https://www.youtube.com/embed/qJhyhaf_uRs",
    desc: "Amaarae wearing Flame trousers in red/yellow in her Colors video of ‘Leave Me Alone’",
    styledBy: "Styled by Natalie Roar and assisted by Emmanouela Megkistou",
  },
  {
    url: "https://www.youtube.com/embed/dqJ8oud7l2Q",
    desc: "Mars leather jacket and Flame trousers in brown/orange worn by cast member in the Biig Piig music video for ‘Feels Right’",
    styledBy: "Styled by Suzie Walsh",
  },
  {
    url: "https://www.youtube.com/embed/csVTig5bqFE",
    desc: "Master Peace wearing Venus and Neptune necklaces in his music video for ‘Love Bites’",
    styledBy: "Styled by Kayla Garner-Jones",
  },
  {
    url: "https://www.youtube.com/embed/uc72XIXoZ2g",
    desc: "Master Peace wearing Eternal Flame jacket and bleached corduroy panel trousers in his music video for ‘Party Never Ends’",
    styledBy: "Styled by Kayla Garner-Jones",
  },
  {
    url: "https://www.youtube.com/embed/H0kAAoahJQM",
    desc: "Haiyti wearing Eternal Flame jacket and bleached corduroy panel trousers in her music video for ‘Was hast du damit zu tun’",
    styledBy: "Styled by Cynthia Igbokwe",
  }
];

const Features = props => {
  return (
    <div className="features">
      {features.map((feature, pos) => {
        return (
            <Feature key={pos} {...feature} />
        )
      })}
    </div>
  );
}

export default Features;
