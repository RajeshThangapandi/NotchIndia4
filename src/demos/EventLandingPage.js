import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import TrendingCard from "../components/cards/TwoTrendingPreviewCardsWithImage.js";
import styled from "styled-components";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import tw from "twin.macro";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";
import sampleVideo from '../images/video.mp4'; // Import your video file here
import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";
import TabCardGrid from "components/cards/TabCardGrid";

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Subheading = tw.span`tracking-wider text-sm font-medium`;
const imageCss = tw`rounded-4xl`;

const StyledVideo = styled.video`
  ${tw`rounded bg-black shadow-xl`} // Keep existing styles
  max-width: 800px; // Set a maximum width
  width: 100%; // Make it responsive
  height: auto; // Maintain aspect ratio
`;

const VideoContainer = styled.div`
  ${tw`flex justify-center mt-12`} // Flexbox for centering and margin-top for gap
`;

export default () => (
  <AnimationRevealPage>
    <Hero />
    <VideoContainer>
      <StyledVideo controls autoPlay muted loop>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoContainer>
    <TrendingCard />
    <TabCardGrid
      heading={
        <>
          Our <HighlightedText>Projects.</HighlightedText>
        </>
      }
    />
    <MainFeature2
      subheading={<Subheading>A Reputed Brand</Subheading>}
      heading={<>Our <HighlightedText>Equipments</HighlightedText></>}
      statistics={[
        {
          key: "Orders",
          value: "94000+",
        },
        {
          key: "Customers",
          value: "11000+"
        },
        {
          key: "Chefs",
          value: "1500+"
        }
      ]}
      primaryButtonText="Order Now"
      primaryButtonUrl="https://order.now.com"
      imageInsideDiv={false}
      imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
      imageCss={Object.assign(tw`bg-cover`, imageCss)}
      imageContainerCss={tw`md:w-1/2 h-auto`}
      imageDecoratorBlob={true}
      imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
      textOnLeft={true}
    />
    <ProfileThreeColGrid />
    <ThreeColCenteredStatsPrimaryBackground />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
