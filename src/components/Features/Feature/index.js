import React from 'react';

const Feature = props => {
  const { url, desc, styledBy } = props;

  return (
    <div className="feature">
      <p className="desc">{desc}</p>
      <p className="styledBy">{styledBy}</p>
      <iframe width="600" height="350" src={url} frameborder="0" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default Feature;
