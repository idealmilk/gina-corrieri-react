import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from "react-icons/fa";
import HamburgerMenu from './HamburgerMenu';
import Logo from './../../assets/transparency_logo.gif';

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  z-index: 1000;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const NavbarLogo = styled.div`
	width: 13rem;
	position: absolute;
	top: 50%;
	left: 0;
	margin-left: 4px;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	transform: translateY(-50%);
	img {
		display: block;
		width: 100%;
		margin: 0;
	}
`;

// const NavbarIcons = styled.div`
// 	display: flex;
// 	position: absolute;
// 	top: 50%;
// 	right: 0;
// 	font-size: 2.5rem;
// 	margin-right: 65px;
// 	-webkit-transform: translateY(-50%);
// 	-moz-transform: translateY(-50%);
// 	transform: translateY(-50%);
// 	a {
// 		color: black;
// 	}
// `;

const MobileNav = (props) => {
  return (
    <NavbarContainer>
		<NavbarLogo>
			<Link to="/">
				<img src={Logo} alt="SimpleTut LOGO" />
			</Link>
		</NavbarLogo>
		{/* <NavbarIcons>
			<Link to="/cart">
				<FaShoppingCart />
			</Link>
		</NavbarIcons> */}
		<HamburgerMenu />	
    </NavbarContainer>
  );
};

export default MobileNav;