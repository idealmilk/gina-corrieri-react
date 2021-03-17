import React from 'react';
import ScrollHorizontal from 'react-scroll-horizontal';

const Gallery = ({ project }) => {
	const galleryImages = project.map((image, pos) => {
		return <img alt={image.title} key={pos} src={image.file.url} className="scrollImage"/>
	})

	return (
		<ScrollHorizontal reverseScroll = { true }>
			{galleryImages}
		</ScrollHorizontal>
	);
};

export default Gallery;
