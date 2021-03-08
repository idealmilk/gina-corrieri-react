import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import MenuToggle from './menuToggle.js';
import { NavMenu } from './navMenu';

const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 90%;
  height: 100%;
  background-color: lime;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const menuVariants = {
    open: {
        transform: "translateX(3%)",
    },
    closed: {
        transform: "translateX(103%)",
    },
};

const menuTransition = {
    type: "spring",
    duration: 1,
    stiffness: 33,
    delay: 0.1,
};

const HamburgerMenu = props => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="container">
            <MenuToggle 
                toggle={toggleMenu} 
                isOpen={isOpen} 
            />
            <MenuContainer
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={menuTransition}
            >
                <ContentContainer>
                    <NavMenu isOpen={isOpen} />
                </ContentContainer>
            </MenuContainer>
        </div>
    )
};

export default HamburgerMenu;