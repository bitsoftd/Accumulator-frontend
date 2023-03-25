import React from "react";
import {
  HeroContainer,
  HeroHeadingContainer,
  HeroHeading,
  HeroHeadingText,
  HeroBodyContainer,
  HeroBodyText,
  HeroBodyHeader,
} from "../styles/Hero.style";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroHeadingContainer>
        <HeroHeadingText>Take part in the revolution with</HeroHeadingText>
        <HeroHeading>ACCUMULATOR</HeroHeading>
      </HeroHeadingContainer>
      <HeroBodyContainer>
        <HeroBodyHeader>What is Accumulator?</HeroBodyHeader>
        <HeroBodyText>
          Accumulator is an experimental crypto revolution. Through the use of
          our price stability matrix (PSM), and daily rewards to all holders,
          Accumulator gives you the tools to take control of your financial
          future.
        </HeroBodyText>
      </HeroBodyContainer>
    </HeroContainer>
  );
}

export default HeroSection;
