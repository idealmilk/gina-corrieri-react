import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../../redux/User/user.actions';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { selectCartItemsCount } from './../../../redux/Cart/cart.selectors';

import MenuToggle from './menuToggle.js';
import { NavMenu } from './navMenu';

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	totalNumCartItems: selectCartItemsCount(state)
});

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
    a {
        color: black;
    }
    
    padding: 0 12px;
    &:hover {
        color: black;
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
    const location = useLocation();
	const [activeMenu, setActiveMenu] = useState(false);
	const dispatch = useDispatch();
	const { currentUser, totalNumCartItems } = useSelector(mapState);

	const signOut = () => {
		dispatch(signOutUserStart());
	};

	useEffect(() => {
		setActiveMenu(false);
    }, [location]);
    
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
                    {currentUser && [
                        <div className="topContainerLinks">
						    <LoginButton
                                initial={false}
                                animate={isOpen ? "show" : "hide"}
                                variants={commonVariants}
                                transition={commonTransition}
                            >
                                <Link to="/orders">
                                    Orders
                                    <i className="fas fa-user-circle"></i>
                                </Link>
                            </LoginButton>
                            <LoginButton
                                initial={false}
                                animate={isOpen ? "show" : "hide"}
                                variants={commonVariants}
                                transition={commonTransition}
                            >
                                <span onClick={() => signOut()}>
                                    Log Out
                                    <i className="fas fa-sign-out-alt"></i>
                                </span>
                            </LoginButton>
                        </div>
					]}

					{!currentUser && [
                        <div className="topContainerLinks">
                            <LoginButton
                                initial={false}
                                animate={isOpen ? "show" : "hide"}
                                variants={commonVariants}
                                transition={commonTransition}
                            >
                                <span onClick={() => signOut()}>
                                    <Link to="/login">
                                        Login
                                        <i className="fas fa-user-circle"></i>
                                    </Link>
                                </span>
                            </LoginButton>
                            <LoginButton
                                initial={false}
                                animate={isOpen ? "show" : "hide"}
                                variants={commonVariants}
                                transition={commonTransition}
                            >
                                <span onClick={() => signOut()}>
                                    <Link to="/signup">
                                        Sign Up
                                        <i className="fas fa-user-circle"></i>
                                    </Link>
                                </span>
                            </LoginButton>
                        </div>
					]}
                </TopContainer>
                <ContentContainer>
                    <NavMenu isOpen={isOpen} />
                </ContentContainer>
                <TopContainer>
                    <LoginButton
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={commonVariants}
                        transition={commonTransition}
                    >
                        <a 
                            href = "mailto: info@ginacorrieri.com"
                            className="email"
                            target="_blank"
                            rel="noopener noreferrer">
                                Contact
                        </a>
                    </LoginButton>
                    <LoginButton
                        initial={false}
                        animate={isOpen ? "show" : "hide"}
                        variants={commonVariants}
                        transition={commonTransition}
                    >
                        <a 
                            href="https://www.instagram.com/ginacorrieri_" 
                            target="_blank" 
                            rel="noopener noreferrer">
                                Instagram
                        </a>
                    </LoginButton>
                    </TopContainer>
            </MenuContainer>
        </div>
    )
};

export default HamburgerMenu;