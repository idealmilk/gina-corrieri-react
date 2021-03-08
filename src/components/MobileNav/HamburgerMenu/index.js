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

const TopContainer = styled.div`
    display: flex;
    width: 100%;
`;

const LoginButton = styled(motion.button)`
    border: 0;
    background: transparent;
    font-size: 1.9rem;
    font-family: "Teko", sans-serif;
    transition: all 250ms ease-in-out;
    display: flex;
    cursor: pointer;

    padding: 0 12px;
    &:hover {
        color: #666;
    }
    &:focus {
        outline: none;
    }
    &:not(:last-of-type) {
        border-right: 1px solid black;
    }
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

const commonVariants = {
    show: {
        transform: "translateX(0em)",
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.01,
        },
    },
    hide: {
        transform: "translateX(5em)",
        opacity: 0,
    },
};
  
const commonTransition = { type: "spring", duration: 0.05 };

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
                <TopContainer>
                    <LoginButton
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={commonVariants}
                        transition={commonTransition}
                    >
                        LOGIN
                    </LoginButton>
                    <LoginButton
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={commonVariants}
                        transition={commonTransition}
                    >
                        SIGN UP
                    </LoginButton>
                </TopContainer>
                <ContentContainer>
                    <NavMenu isOpen={isOpen} />
                </ContentContainer>
            </MenuContainer>
        </div>
    )
};

export default HamburgerMenu;