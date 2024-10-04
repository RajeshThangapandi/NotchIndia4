import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = styled.header(({ isScrolled }) => [
  tw`flex justify-between items-center w-full fixed top-0 left-0 z-50 px-4 transition-all duration-300`,
  { backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)' }, // Change background based on scroll
]);

export const NavLink = styled.a`
  ${tw`my-2 lg:mx-4 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent`}
  
  font-size: 1.1rem;

  &:nth-child(1) {
    color: #0ed1b2 !important;
  }

  &:hover {
    color: rgb(37, 150, 190) !important;
  }

  @media (max-width: 1024px) {
    color: black !important;
  }

  @media (max-width: 1024px) {
    font-size: 1.0rem;
  }
`;

export const NavLinks = styled.div`
  ${tw`inline-block flex lg:flex-row lg:items-center`}
  gap: 0;

  @media (min-width: 640px) and (max-width: 1023px) {
    gap: 20px;
  }
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0 px-8 py-3 rounded bg-green-500 text-gray-100
  hocus:bg-green-700 hocus:text-gray-200 focus:shadow-outline border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  padding: 10px;
  border-radius: 8px;
  img {
    ${tw`w-20 h-20 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between md:hidden`;
export const NavToggle = tw.button`
  md:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

export const MobileNavLinks = motion(styled.div`
  ${tw`md:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900`}
  background-color: white;
  
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
};

export const DesktopNavLinks = tw.nav`
  hidden md:flex flex-1 justify-between items-center
  gap-4 
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "md" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const homeRef = useRef(null);


  console.log(isScrolled)
  const defaultLogoLink = (
    <LogoLink href="/">
      <img src="https://www.Notchindiaprojects.com/images/609bb0ddc3467logo.png" alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links;

  // Effect to add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header  isScrolled={isScrolled}>
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
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`hidden`,
    desktopNavLinks: tw`flex`,
    mobileNavLinksContainer: tw`hidden`,
  },
  xl: {
    mobileNavLinks: tw`hidden`,
    desktopNavLinks: tw`flex`,
    mobileNavLinksContainer: tw`hidden`,
  },
  tablet: {
    mobileNavLinks: tw`hidden`,
    desktopNavLinks: tw`flex`,
    mobileNavLinksContainer: tw`hidden`,
  },
};
