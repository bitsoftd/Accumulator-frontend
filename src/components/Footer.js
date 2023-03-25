import React from "react";
import {
  FooterContainer,
  LeftText,
  LeftSection,
  RightSection,
  CommunityTitle,
  SocialMedia,
  LogoContainer,
  Logo,
  FooterLogoText,
  CommunityLeft,
  CommunityRight,
  CommunitySectionContainer,
  SocialMediaLink,
} from "../styles/Footer.style";
import LogoImg from "../assets/logo.png";

export default function Footer() {
  return (
    <FooterContainer>
      <LeftSection>
        <LogoContainer>
          <Logo src={LogoImg}></Logo>
          <FooterLogoText
            fontSize={"1.25em"}
            fontStyle={"italic"}
            mobileDisplay={"inline"}
          >
            ACCUMULATOR
          </FooterLogoText>
        </LogoContainer>
        <LeftText>
          The Accumulator team endeavors to combine the fun, volatile, high risk
          and high reward investment that rebasing protocols provide with a
          solid and safe tokenomics foundation and a strong marketing setup. Our
          PSM can sustain a floor price over long stretches of low buying
          pressure while maintaining a very attractive APY of 517.5%. Investing
          with our protocol will see your wealth accumulate!
        </LeftText>
      </LeftSection>
      <RightSection>
        <CommunityTitle>Our Community</CommunityTitle>
        <CommunitySectionContainer>
          <CommunityLeft>
            <SocialMedia>
              <SocialMediaLink
                href={"https://discord.com/invite/Wb4fX8ZAbs"}
                target="_blank"
                rel="noreferrer noopener"
              >
                {"Discord"}
              </SocialMediaLink>
              <SocialMediaLink
                href={"https://twitter.com/AccumulatorDEFI"}
                target="_blank"
                rel="noreferrer noopener"
              >
                {"Twitter"}
              </SocialMediaLink>
              <SocialMediaLink
                href={"https://t.me/AccumulatorDEFI"}
                target="_blank"
                rel="noreferrer noopener"
              >
                {"Telegram"}
              </SocialMediaLink>
            </SocialMedia>
          </CommunityLeft>
          <CommunityRight></CommunityRight>
        </CommunitySectionContainer>
      </RightSection>
    </FooterContainer>
  );
}
