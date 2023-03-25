import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #211b1e;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: left;
  padding: 60px 100px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    padding: 0;
    margin-left: 10%;
  }
`;

export const LeftText = styled.div`
  width: 100%;
  margin-top: 5%;
  margin-left: 10px;
  padding-right: 20%;
  text-align: left;
`;

export const RightSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 5%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-left: 10%;
  }
  @media screen and (min-width: 768px) and (max-width: 1380px) {
    padding-top: 8%;
  }

  @media screen and (min-width: 1381px) {
    padding-top: 5%;
  }
`;

export const CommunityTitle = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #ffffff;
  opacity: 0.4;
`;

export const CommunitySectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CommunityLeft = styled.div`
  width: 100%;
  text-align: left;
`;

export const CommunityRight = styled.div`
  width: 100%;
  text-align: right;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  padding-top: 15%;
  padding-right: 50px;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  opacity: 0.8;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const SocialMediaLink = styled.a`
  color: ${({ color }) => (color ? color : "white")};
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : "none"};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 10px;
  width: 53px;
  height: 55px;
`;

export const FooterLogoText = styled.div`
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.25em")};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : "normal")};
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : "none"};
  margin: ${({ margin }) => (margin ? margin : "0%")};

  @media (max-width: 982px) {
    display: ${({ mobileDisplay }) => (mobileDisplay ? mobileDisplay : "none")};
  }
`;
