import React, { useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Slider from "react-slick";
import { SectionHeading, Subheading as SubheadingBase } from "../../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import image1 from "../../images/1.png"

import image2 from "../../images/2.png"

import image3 from "../../images/3.png"

import image4 from "../../images/4.png"

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

// Ensure consistent image size
const Image = styled.img(props => [
  tw`w-full h-64`,  // Fixed height
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
  `object-fit: cover;`,  // Ensures image covers container while keeping its aspect ratio
  `object-position: center;`  // Ensures the image is centered
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

const CarouselContainer = styled(Slider)`
  ${tw`w-full`};

  .slick-slide {
    padding: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-dots {
    bottom: -35px;
  }

  img {
    ${tw`w-full h-auto`}
  }
`;

const ControlButton = styled.button`
  ${tw`absolute top-1/2 transform -translate-y-1/2 bg-white text-primary-500 rounded-full p-3 shadow-lg transition-all duration-300`}
  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:hover {
    ${tw`bg-primary-500 text-white shadow-2xl`}
    transform: scale(1.1);
  }
`;

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrcs = [
   image1,
   image2,image3,image4

  ],
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {
  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const nextSlide = () => {
    carouselRef.current.slickNext();
  };

  const prevSlide = () => {
    carouselRef.current.slickPrev();
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <CarouselContainer ref={carouselRef} {...carouselSettings}>
            {imageSrcs.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Carousel Image ${index + 1}`}
                imageBorder={imageBorder}
                imageShadow={imageShadow}
                imageRounded={imageRounded}
              />
            ))}
          </CarouselContainer>
          
          <ControlButton className="left" onClick={prevSlide}>
            <ArrowBackIcon />
          </ControlButton>
          <ControlButton className="right" onClick={nextSlide}>
            <ArrowForwardIcon />
          </ControlButton>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
