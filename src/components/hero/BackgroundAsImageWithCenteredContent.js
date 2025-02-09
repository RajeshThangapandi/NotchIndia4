import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Slider from "react-slick"; // Import react-slick
import Header, { NavLink, NavLinks } from "../headers/light.js"; // Assuming this is your Header component
import { MdArrowBack, MdArrowForward } from 'react-icons/md'; // Importing Material Design icons for arrows

// Styled Header without any background
const StyledHeader = styled(Header)`
  ${tw`fixed top-0 left-0 w-full`} // Keep it fixed at the top
  background: none; // No background color or transparent
  ${NavLink} {
    ${tw`text-gray-900 hover:border-gray-300 hover:text-gray-300`}
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 80vh; /* Height of the carousel */
  width: 100%; /* Full width */
  position: relative;
`;

const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-25 z-10`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  width: 100%; /* Ensure the container takes the full width */
  padding: 0 20px; /* Optional: Add some padding to the icons */
`;

const Icon = styled.button`
  ${tw`bg-gray-200 rounded-full p-2`}
  &:hover {
    ${tw`bg-gray-300`}
  }
`;

const imageUrls = [
  "https://www.notchindiaprojects.com/images/gallery/6505fa87a27917ee9f208-13b2-4e77-8c80-47ea9511fb3c.JPG",
  "https://www.notchindiaprojects.com/images/gallery/6505face5a549Screenshot%202023-07-16%20231558.png",
  "https://www.notchindiaprojects.com/images/gallery/6505faab32256IMG-1011.JPG",
  // Add more images as needed
];

const FullWidthCarousel = ({ refs }) => {
  const [sliderRef, setSliderRef] = useState(null); // Ref to hold the slider instance
  const [navbarVisible, setNavbarVisible] = useState(true); // State to manage navbar visibility

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows
  };

  const scrollToSection = (elementRef) => {
    // Hide the navbar immediately when a nav link is clicked
    setNavbarVisible(false);

    // Smooth scroll to the specific section
    elementRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const navLinks = (
    <NavLinks key={1}>
      <NavLink onClick={() => scrollToSection(refs.homeRef)} style={{ color: '#0ed1b2' }}>Home</NavLink>
      <NavLink onClick={() => scrollToSection(refs.projectRef)} style={{ color: 'black' }}>Projects</NavLink>
      <NavLink onClick={() => scrollToSection(refs.EqpRef)} style={{ color: 'black' }}>Equipments</NavLink>
      <NavLink onClick={() => scrollToSection(refs.TeamRef)} style={{ color: 'black' }}>Team</NavLink>
      <NavLink onClick={() => scrollToSection(refs.CareerRef)} style={{ color: 'black' }}>Careers</NavLink>
      <NavLink onClick={() => scrollToSection(refs.ContactRef)} style={{ color: 'black' }}>Contact Us</NavLink>
    </NavLinks>
  );
  
  return (
    <>
      <Slider ref={setSliderRef} {...settings}>
        {/* Uncomment this section if you want to include the background images */}
        {/* {imageUrls.map((imageUrl, index) => (
          <BackgroundImage key={index} imageUrl={imageUrl}>
            <OpacityOverlay /> 
            <IconContainer>
              <Icon onClick={() => sliderRef?.slickPrev()}>
                <MdArrowBack size={24} /> 
              </Icon>
              <Icon onClick={() => sliderRef?.slickNext()}>
                <MdArrowForward size={24} /> 
              </Icon>
            </IconContainer>
          </BackgroundImage>
        ))} */}
      </Slider>
      {/* Always render the navbar, but toggle its visibility with CSS */}
      <StyledHeader links={navLinks} style={{ display: navbarVisible ? 'block' : 'none' }} />
    </>
  );
};

export default FullWidthCarousel;
