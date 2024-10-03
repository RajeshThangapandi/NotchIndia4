import React, { useRef } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center w-full bg-white
  px-4 fixed top-0 left-0 z-50
`;

export const NavLinks = tw.div`inline-block flex items-center justify-between flex-nowrap`; // Prevent wrapping

export const NavLink = styled.a`
  ${tw`text-sm my-1 lg:mx-2 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent`} // Decreased font size and margin
  color: black !important;
  flex-grow: 1; // Allow nav links to grow and take available space
  min-width: 70px; // Set a minimum width for consistent sizing
  text-align: center; // Center align text for better appearance

  &:nth-child(1) {
    color: rgb(37, 150, 190) !important;
  }

  &:hover {
    color: rgb(37, 150, 190) !important;
  }

  @media (max-width: 1024px) {
    font-size: 14px; // Maintain consistent font size on smaller screens
    padding: 5px 10px; // Adjust padding for smaller touch targets
  }
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0 px-4 py-2 rounded bg-green-500 text-gray-100
  hocus:bg-green-700 hocus:text-gray-200 focus:shadow-outline border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  background-color: white;
  padding: 10px;
  border-radius: 8px;

  img {
    ${tw`w-20 h-20 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between lg:hidden`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900`}
  background-color: white;

  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

export const DesktopNavLinks = styled.nav`
  ${tw`hidden lg:flex flex-1 justify-between items-center`}
  gap: 10px; // Decrease gap between nav links
`;

export default ({ roundedHeaderButton = false, logoLink, links, className }) => {
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink onClick={() => scrollToSection(homeRef)} style={{ color: "rgb(37, 150, 190)" }}>
        About
      </NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Pricing</NavLink>
      <NavLink href="/#">Contact Us</NavLink>
      <NavLink href="/#" style={{ color: "rgb(37, 150, 190)" }}>
        Careers
      </NavLink>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const homeRef = useRef(null);
  const defaultLogoLink = (
    <LogoLink href="/">
      <img src="https://www.Notchindiaprojects.com/images/609bb0ddc3467logo.png" alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks className="desktop-nav-container">
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer className="mobile-nav-container">
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};
