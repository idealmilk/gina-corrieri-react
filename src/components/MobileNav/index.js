import React from "react";
import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #fff;
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  z-index: 1000;
`;

const MobileNav = (props) => {
  return (
    <NavbarContainer>
      <HamburgerMenu />
    </NavbarContainer>
  );
};

export default MobileNav;