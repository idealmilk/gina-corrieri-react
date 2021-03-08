import React, { useState } from 'react';

import MenuToggle from './menuToggle.js';

const HamburgerMenu = props => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="container">
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <div className="menuContainer">Menu</div>
        </div>
    )
};

export default HamburgerMenu;