import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import sampleVideo from '../images/video.mp4';
import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter";
import HeroSection from "components/headers/HeroSection";
import Navbar from "components/headers/NavSection";

// Lazy load non-critical components
const AnimationRevealPage = lazy(() => import("helpers/AnimationRevealPage"));
const Hero = lazy(() => import("components/hero/BackgroundAsImageWithCenteredContent"));
const TrendingCard = lazy(() => import("components/cards/TwoTrendingPreviewCardsWithImage"));
const ContactUsForm = lazy(() => import("components/forms/SimpleContactUs"));
const Footer = lazy(() => import("components/footers/SimpleFiveColumn"));
const ProfileThreeColGrid = lazy(() => import("components/cards/ProfileThreeColGrid"));
const MainFeature = lazy(() => import("components/features/TwoColWithButton"));
const TabCardGrid = lazy(() => import("components/cards/TabCardGrid"));
const Header = lazy(() => import("components/headers/light"));
const BackToTop = lazy(() => import("components/headers/BackTotop"));
const MainFeature2 = lazy(() => import("components/features/TwoColSingleFeatureWithStats2"));
const ThreeColCenteredStatsPrimaryBackground = lazy(() => import("components/features/ThreeColCenteredStatsPrimaryBackground"));

// Keyframes for the bouncing effect
const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); } 
  40% { transform: scale(1); }
`;

// Styled components
const FullPageLoader = styled.div`
  ${tw`flex items-center justify-center fixed inset-0 bg-gray-100 z-50`}
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70px;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  animation: ${bounce} 1.4s infinite ease-in-out both;
  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }
  &:nth-child(3) { animation-delay: 0s; }
`;

const TwoColumnContainer = styled.div`
  ${tw`flex flex-col md:flex-row justify-between items-center mt-32`} 
  max-width: 1200px;
  margin: 80px auto;
  gap: 40px;
  
`;

const VideoColumn = styled.div`
  ${tw`md:w-1/2 w-full p-4`}
`;

const ContentColumn = styled.div`
  ${tw`md:w-1/2 w-full text-left p-4`}
  background: #f9fafb;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const StyledVideo = styled.video`
  ${tw`rounded-lg bg-black shadow-xl`}
  width: 100%;
  height: auto;
`;

const Description = styled.p`
  ${tw`text-lg text-gray-600 mt-4 leading-relaxed`}
`;

const LearnMoreButton = styled.button`
  ${tw`mt-8 text-gray-100 px-8 py-3 rounded-lg hover:bg-[#28b3b3] transition duration-300`}
  background-color: #32c5d2;
  box-shadow: 0px 8px 16px rgba(37, 150, 190, 0.3);
`;

const StyledHeader = styled(Header)`
  ${tw`fixed top-0 left-0 w-full transition-opacity duration-300 ease-in-out`}
  ${({ isScrolled }) => isScrolled && tw`bg-white`} /* Add styles when scrolled */
`;

const MainContent = styled.div`
  background-color: #ffffff;
  padding-top: 100px; 
`;

// Custom Loader component
const Loader = () => {
  return (
    <FullPageLoader>
      <DotContainer>
        <Dot color="#ff6057" />
        <Dot color="#febc2e" />
        <Dot color="#2ec843" />
      </DotContainer>
    </FullPageLoader>
  );
};

const MainComponent = () => {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(() => {
    // Retrieve the scroll state from localStorage
    return localStorage.getItem('isScrolled') === 'true';
  });

  const homeRef = useRef(null);
  const videoRef = useRef(null);

  const handleScroll = () => {
    const isCurrentlyScrolled = window.scrollY > 50; // Change this threshold as needed
    setIsScrolled(isCurrentlyScrolled);
    localStorage.setItem('isScrolled', isCurrentlyScrolled); // Store the scroll state
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    handleScroll(); // Check scroll position on component mount

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll); // Clean up listener
    };
  }, []);

  const handleWatchVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <AnimationRevealPage>
            <div ref={homeRef}>
              <HeroSection />

              {/* <StyledHeader isScrolled={isScrolled} /> Pass isScrolled prop */}
            </div>

            <MainContent>
              <Hero refs={{ homeRef }} />

              {/* The "About" Section */}
              <div>
                <TwoColumnContainer>
                  <VideoColumn>
                    <StyledVideo ref={videoRef} controls autoPlay muted loop>
                      <source src={sampleVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </StyledVideo>
                  </VideoColumn>
                  <ContentColumn>
                    <h2 tw="text-4xl font-bold text-gray-900 leading-snug">
                      Captivating <span tw="bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block">Video Experience</span>
                    </h2>
                    <Description>
                      Dive into this amazing visual journey with our latest projects.
                      Explore cutting-edge designs, technology, and solutions.
                    </Description>
                    <LearnMoreButton onClick={handleWatchVideo}>
                      Watch Video
                    </LearnMoreButton>
                  </ContentColumn>
                </TwoColumnContainer>
              </div>

              {/* Other Sections */}
              <div>
                <MainFeature ref={homeRef} subheading={<span>Since 2014</span>} heading="25 Years of Award-Winning Work" />
                <TabCardGrid />
                <ProfileThreeColGrid />
                <ContactUsForm />
                <Footer />
              </div>

              <BackToTop />
            </MainContent>
          </AnimationRevealPage>
        </Suspense>
      )}
    </>
  

  );
};

export default MainComponent;
