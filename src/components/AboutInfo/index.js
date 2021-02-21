import React from 'react';
import './styles.scss';

const AboutInfo = ({ headline, children }) => {
    return (
        <div className="aboutInfo">
            <div className="wrap">
                <div className="body">
                    <p>Gina Corrieri is an independent designer and reworker based in London.</p>
                    <p>Gina works to the belief that clothing manifests your mind. Expressing emotions through layering vibrancy, or stripping back tones, selecting colours and symbols with care to construct new chapters for the existing story of each material.</p>
                    <p>From a combination of influences - her multicultural heritage, working with colour as an expression of mood, and the euphoria of music and dance - Gina uses primarily recycled materials to create one-off pieces.</p>
                    <p>Made for all, but with the intention that no wearer is the same.</p>
                    <p>For press/artist loans and custom orders, please contact via email:</p>
                </div>
        
            </div>
        </div>
    );
}

export default AboutInfo;
