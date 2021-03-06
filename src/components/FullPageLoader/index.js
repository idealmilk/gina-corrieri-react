import React, { Component } from 'react';

import './style.scss';
import LoaderGif from './../../assets/transparency_logo.gif';



class FullPageLoader extends Component {
    state = { };

    render() {
        return (
            <div className="loader">
                <img src={LoaderGif} alt=""/>
            </div>
        );
    };
};

export default FullPageLoader;
