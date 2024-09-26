import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`bg-center bg-cover relative rounded-t mx-auto`}
  width: 144px; /* 36 * 4 = 144px */
  height: 144px; /* 36 * 4 = 144px */
`;


const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;


const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Ongoing:[
      {
        project_id: 5,
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
        title: "Construction of Vaigai River North Bank Road",
        location: "Namakkal - Karur Toll Road, Tamil Nadu",
        client: "Tamil Nadu Highways Department ",
        content: " Kamarajar Bridge to Varanasi - Kanyakumari road (NH-44) Near Samayanallur (MDU-213)",
        estimated_cost: "Rs. 54.60 Cr/- inc. GST"
      },
      {
        project_id: 5,
        imageSrc:
            "https://media.licdn.com/dms/image/v2/D560BAQHOkdMus_fLpg/company-logo_200_200/company-logo_200_200/0/1709119399719/indinfravit_trust_logo?e=2147483647&v=beta&t=tKpV26mD71dqj58T2Mu4N3ZoNRBFMw0YzDmyYg3WlhU",
        title: "MMR Overlay Works at Simhapuri Expressway Ltd.",
        location: "Namakkal - Karur Toll Road, Tamil Nadu",
        client: "IndInfravit Trust ",
        content: "The MMR Overlay Works at Simhapuri Expressway Ltd involves resurfacing and strengthening the existing pavement to enhance road durability and safety.",
        estimated_cost: "Rs. 54.60 Cr/- inc. GST"
      },
      {
        project_id: 5,
        imageSrc:
            "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
        title: "Strengthening of two lanes with paved shoulder.",
        location: "Namakkal - Karur Toll Road, Tamil Nadu",
        client: "Nation Highway Authority of India",
        content: "Procurement & Construction (EPC) mode under Annual Plan 2022-23 in the State of Tamil Nadu",
        estimated_cost: "Rs. 54.60 Cr/- inc. GST"
      },
      {
        project_id: 5,
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
        title: "Construction of Grade Separator.",
        location: "Namakkal - Karur Toll Road, Tamil Nadu",
        client: "Tamil Nadu Highways Department",
        content: "km 1/2 of Madurai - Thondi Road (SH33) including junction improvements at km 0/0 & 0/4",
        estimated_cost: "Rs. 54.60 Cr/- inc. GST"
      }


      
    ],
    Completed: [
      {
        project_id: 7,
        imageSrc:
            "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
        title: "Overlay and Repairs in the Stretch",
       
        content: "Madurai – Kanyakumari Section of NH-7",
        client: "NHAI PIU, Madurai",
        estimated_cost: "Rs. 59.89 Cr/-"
    },
      {
        imageSrc:
          "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
        title: "Construction of Widening of Two Lane to Four Lane bypasses",
        client: "Reliance Infrastructure Limited",
        content: "Reliance Infrastructure Limited BOT Concessionaire Supervision of PD NHAI, PIU – Salem",
    },{
      project_id: 5,
      imageSrc:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
      title: "Periodic maintenance along the Namakkal - Karur Toll Road",
      location: "Namakkal - Karur Toll Road, Tamil Nadu",
      client: "Nation Highway Authority of India",
      content: "BOT Concessionaire NHAI, PIU Salem",
      estimated_cost: "Rs. 54.60 Cr/- inc. GST"
    },
    {
      project_id: 8,
      imageSrc:
          "https://upload.wikimedia.org/wikipedia/en/3/36/Bangalore_Development_Authority_logo.jpeg",
    title: "Formation of Magadi Road",
    content:"Gangondanahalli Junction (4.661 Kms) & Madanayakanahalli in the State of Karnataka",
      location: "NH-44, Tamil Nadu",
      details: {
          black_spots: ["TN-(02)-61", "TN(02)-186", "TN-(02)-185"],
          mitigation_mode: "EPC mode",
          areas: ["Salem", "Attayampatti", "Rasipuram"]
      },
      client: "Bangalore Development Authority",
      estimated_cost: "Rs. 63 Cr/-"
  }
  ],
    Signature:  [
      {
          project_id: 1,
          imageSrc:"https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
          title: "Widening from Two Lane to Four Lane and Improvements",
          location: "Tambaram - Mudichur - Sriperumbudur Road",
          client: "Tamil Nadu Highways Department",
          division: "Construction and Maintenance Wing",
          content: "Rs. 95 Cr/- inc. GST"
      },
      {
          project_id: 2,
          imageSrc:
          "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
          title: "Construction of Widening of Two Lane to Four Lane bypasses",
          location: "Salem – Ulundurpet Section",
          client: "Reliance Infrastructure Limited",
          supervision: "BOT Concessionaire Supervision of PD NHAI, PIU – Salem",
         content: "Rs. 254.78 Cr/- inc. GST"
      },
      {
          project_id: 3,
          imageSrc:"https://i0.wp.com/complainthub.org/wp-content/uploads/2024/03/Corporation-of-Madurai-Logo.png?fit=720%2C480&ssl=1",
          title: "Renewal proposal for Nagapattinam – Gudalur – Mysore Road",
          location: "NH 67 (New No: 83)",
          client: "MORTH National Highways Madurai Circle",
          content: "Rs. 98 Cr/- inc. GST"
      },
      {
          project_id: 4,
          imageSrc:
          "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
          title: "Periodic maintenance along the Trichy Karur Toll Road",
          location: "Trichy Karur Toll Road, Tamil Nadu",
          client: "Reliance Infrastructure Limited",
          supervision: "BOT Concessionaire NHAI",
          content: "Rs. 67.84 Cr/- inc. GST"
      }
  ]
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                   
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>{card.client}</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};


