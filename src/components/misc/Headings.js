import tw from "twin.macro";
import styled from "styled-components";
// SectionHeading component remains unchanged
export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`;

// Updated Subheading component with the new color
export const Subheading = tw.h5`font-bold`;

// Styled Subheading with the specific color
export const StyledSectionHeading = styled(Subheading)`
  color: #32c5d2; // Custom color for Subheading
`;
