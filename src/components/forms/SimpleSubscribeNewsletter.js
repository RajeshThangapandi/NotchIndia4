import React from "react";
import tw from "twin.macro";
import { ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton } from "components/misc/Buttons.js";

const Container = tw(ContainerBase)`bg-secondary-800 -mx-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`;
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`;
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`;

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-green-500`;
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`;
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`;
const Description = tw.p`text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`;

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`;
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200`;
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`;

const FooterContent = tw.div`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-md mx-auto text-gray-400 text-sm`;
const FooterColumn = tw.div`flex flex-col`;
const FooterHeading = tw.h4`text-gray-100 font-bold text-lg mb-2`;
const FooterItem = tw.p`mb-1`;

export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Heading>Contact Us</Heading>
       
            </HeadingInfoContainer>
          </TextColumn>
          
        </Row>

        {/* Footer Content */}
        <FooterContent>
          <FooterColumn>
            <FooterHeading>Contact Information</FooterHeading>
            <FooterItem>Head Office</FooterItem>
            <FooterItem>Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu</FooterItem>
            <FooterItem>Email: general@notchindiaprojects.com</FooterItem>
            <FooterItem>Phone: +91 -</FooterItem>
            <FooterItem>Phone: +91 -</FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Registered Office</FooterHeading>
            <FooterItem>Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu</FooterItem>
            <FooterItem>Email: contracts@notchindiaprojects.com</FooterItem>
            <FooterItem>Phone: +91 0</FooterItem>
            <FooterItem>Phone: +91 0</FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Useful Links</FooterHeading>
            <FooterItem>About Us</FooterItem>
            <FooterItem>Projects</FooterItem>
            <FooterItem>Careers</FooterItem>
            <FooterItem>Contact Us</FooterItem>
          </FooterColumn>
        </FooterContent>
      </Content>
    </Container>
  );
};
