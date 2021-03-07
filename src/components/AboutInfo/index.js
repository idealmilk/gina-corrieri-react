import React from 'react';
import './styles.scss';

const AboutInfo = ({ headline, children }) => {
    return (
        <div className="aboutInfo">
            <div className="wrap">
                <div className="body">
                    <p>Gina Corrieri is an independent designer and reworker based in London who draws on a combination of influences - her multicultural heritage, colour as an expression of mind and mood, the euphoria and unity of clubbing and nightlife.</p>
                    <p>By reworking secondhand materials she aims to create unique pieces that paint a picture of vibrancy and fusion.</p>
                    <p>Made for all but with the intention that no wearer is the same.</p>
                    <p>For press/artist loans, and other enquiries, please contact: info@ginacorrieri.com</p>
                </div>
        
            </div>
        </div>
    );
}

export default AboutInfo;
