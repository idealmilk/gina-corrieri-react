import React from 'react';
import marked from 'marked';
import './styles.scss';
import MobilePageTitle from '../MobilePageTitle';

const AboutInfo = ({ siteMetaData }) => {
    return (
        <div className="aboutInfo">
            <MobilePageTitle title="About"/>
            <div className="wrap">
                <div className="body">
                    {siteMetaData.map((data, pos) => {
                        const { about, email } = data.fields;

                        return (
                            <div>
                                <p dangerouslySetInnerHTML={{__html: marked(about)}} />
                                <a href = "mailto: info@ginacorrieri.com" className="email" target="_blank" rel="noopener noreferrer">info@ginacorrieri.com</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AboutInfo;
