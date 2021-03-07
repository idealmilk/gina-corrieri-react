import React from 'react';
import ScrollHorizontal from 'react-scroll-horizontal';

import Image1 from './../../../assets/Phenomena/IMG_0505.jpg'
import Image2 from './../../../assets/Phenomena/IMG_0698.jpg'
import Image3 from './../../../assets/Phenomena/IMG_0766.jpg'
import Image4 from './../../../assets/Phenomena/IMG_0851.jpg'
import Image5 from './../../../assets/Phenomena/IMG_0868.jpg'
import Image6 from './../../../assets/Phenomena/IMG_1367.jpg'
import Image7 from './../../../assets/Phenomena/IMG_1548.jpg'
import Image8 from './../../../assets/Phenomena/IMG_1941.jpg'
import Image9 from './../../../assets/Phenomena/IMG_1995.jpg'
import Image10 from './../../../assets/Phenomena/IMG_2110.jpg'
import Image11 from './../../../assets/Phenomena/IMG_2613.jpg'

const images = [Image1, Image2, Image3, Image4, Image5,
    Image6, Image7, Image8, Image9, Image10, Image11];

const galleryImages = images.map((image, pos) => {
    return <img alt={pos} key={pos} src={image} className="scrollImage"/>
})

const Gallery = () => {
    return (
        <ScrollHorizontal reverseScroll = { true }>
            {galleryImages}
        </ScrollHorizontal>
    );
};

export default Gallery;
