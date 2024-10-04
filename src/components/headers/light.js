import React, { useRef } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center w-full bg-white /* Full width and white background for the header */
  px-4 /* Padding for sides */
  fixed top-0 left-0 z-50 /* Fixed position at the top with z-index */
`;
// Update NavLink styled component
export const NavLink = styled.a`
  ${tw`text-sm my-2 lg:text-xs lg:mx-4 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent`}

  /* Default color for the "About" link */
  &:nth-child(1) {
    color: rgb(37, 150, 190) !important; /* Set color for "About" link */
  }

  /* Hover color */
  &:hover {
    color: rgb(37, 150, 190) !important; /* Set hover color */
  }

  /* Light blue color in mobile views */
  @media (max-width: 1024px) {
    color: black !important;
  }

  /* Increase font size for desktop view */
  @media (min-width: 1024px) { /* Tailwind's lg breakpoint */
    font-size: 0.9rem; /* Adjust to your desired font size */
  }
`;

// Update NavLinks styled component
export const NavLinks = styled.div`
  ${tw`inline-block flex lg:flex-row lg:items-center`}

  /* Default gap for larger screens */
  gap: 0; /* No gap by default */

  /* Gap for tablet views */
  @media (min-width: 640px) and (max-width: 1023px) { /* Tailwind's md breakpoint */
    gap: 20px; /* Decrease gap size for tablet views */
  }
`;



export const PrimaryLink = tw(NavLink)`
  lg:mx-0 px-8 py-3 rounded bg-green-500 text-gray-100
  hocus:bg-green-700 hocus:text-gray-200 focus:shadow-outline border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  background-color: white; /* Set white background here */
  padding: 10px;
  border-radius: 8px;

  img {
    ${tw`w-20 h-20 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between md:hidden`; // Adjusted to hide on md and larger
export const NavToggle = tw.button`
  md:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

export const MobileNavLinks = motion(styled.div`
  ${tw`md:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900`}
  background-color: white; /* Set white background here */
  
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth', // Smooth scroll effect
  });
};

export const DesktopNavLinks = tw.nav`
  hidden md:flex flex-1 justify-between items-center // Changed lg:flex to md:flex
  gap-4 // Set a smaller gap for desktop
`;


export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "md" }) => {
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink onClick={() => scrollToSection(homeRef)} style={{ color: 'rgb(37, 150, 190)' }}>Home</NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Pricing</NavLink>
      <NavLink href="/#">Contact Us</NavLink>
      <NavLink href="/#" style={{ color: 'rgb(37, 150, 190)' }} >Careers</NavLink>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
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
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

// Update the collapseBreakPointCssMap
const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`, // Hidden on small screens
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`, // Hidden on medium screens (tablets)
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`hidden`, // Completely hidden on large screens (tablets and above)
    desktopNavLinks: tw`flex`, // Always flex on large screens
    mobileNavLinksContainer: tw`hidden` // Hide the mobile nav links container
  },
  xl: {
    mobileNavLinks: tw`hidden`, // Hidden on extra-large screens
    desktopNavLinks: tw`flex`, // Always flex on extra-large screens
    mobileNavLinksContainer: tw`hidden` // Hide the mobile nav links container
  },
  tablet: {
    mobileNavLinks: tw`hidden`, // Hidden on tablets
    desktopNavLinks: tw`flex`, // Always flex on tablet screens
    mobileNavLinksContainer: tw`hidden` // Hide the mobile nav links container
  }
};
