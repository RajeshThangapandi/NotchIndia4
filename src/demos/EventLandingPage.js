import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import TrendingCard from "../components/cards/TwoTrendingPreviewCardsWithImage.js";


import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import tw from "twin.macro";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";

import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";
import TabCardGrid from "components/cards/TabCardGrid";
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Subheading = tw.span`tracking-wider text-sm font-medium`;
 
 
  const imageCss = tw`rounded-4xl`;

export default () => (
  <AnimationRevealPage>
    <Hero />
   <TrendingCard/>
    <TabCardGrid
        heading={
          <>
            Our <HighlightedText>Projects.</HighlightedText>
          </>
        }
      />
{/* <BlogIndex/>/ */}
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
    <ProfileThreeColGrid/>
    <ThreeColCenteredStatsPrimaryBackground/>
    <ContactUsForm />
   
    <Footer />
  </AnimationRevealPage>
);
