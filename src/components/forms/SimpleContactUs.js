import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import emailjs from "emailjs-com"; // Import EmailJS

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input, textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

// Modal Styling
const ModalOverlay = tw.div`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center`;
const ModalContent = tw.div`bg-white p-6 rounded-lg shadow-lg text-center`;
const ModalCloseButton = tw.button`mt-4 py-2 px-4 bg-primary-500 text-white rounded-full font-bold tracking-wide shadow-lg transition duration-300 focus:outline-none hover:bg-primary-700`;

// Main Component
export default () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resumeLink: "", // For Google Drive link
  });

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      resume_link: formData.resumeLink, // Add the resume link to the template parameters
    };

    emailjs.send(
      'service_nymi1fv', // Replace with your service ID
      'template_vpjy7sp', // Replace with your template ID
      templateParams,
      'doEt3qvSV8t-m2C6i' // Replace with your user ID
    )
    .then((response) => {
      // Show modal on success
      setIsModalVisible(true);
      setFormData({ name: "", email: "", message: "", resumeLink: "" }); // Reset form
    })
    .catch((err) => {
      console.error('EmailJS Error:', err);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Careers</h2>
            <form onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="E.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="E.g. john@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="message-input">Your Message</Label>
                    <TextArea
                      id="message-input"
                      name="message"
                      placeholder="E.g. Details about your event"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="resume-input">Google Drive Link to Resume</Label>
                    <Input
                      id="resume-input"
                      type="text"
                      name="resumeLink"
                      placeholder="Paste your Google Drive link here"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      required
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>
              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>

      {/* Modal for Success Message */}
      {isModalVisible && (
        <ModalOverlay>
          <ModalContent>
            <h2 tw="text-2xl font-bold text-primary-500">We Got Your Application!</h2>
            <p tw="text-lg mt-2">Thank you for applying. We will get back to you shortly.</p>
            <ModalCloseButton onClick={() => setIsModalVisible(false)}>Close</ModalCloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};
