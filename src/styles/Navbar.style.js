import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${({ extendNavbar }) => (extendNavbar ? "100vh" : "88px")};
  position: fixed;
  display: flex;
  flex-direction: column;
  background: rgba(15, 13, 17, 0.5);
  z-index: 1000;

  @media (min-width: 700px) {
    height: 88px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  padding-right: 0.625em;
  @media (max-width: 700px) {
    padding-right: 0%;
  }
`;

export const CenterRightContainer = styled.div`
  flex: 50%;
  display: flex;
  padding-left: 1%;
  justify-content: right;
  margin-right: 10%;
  @media (max-width: 700px) {
    margin-right: 0%;
    padding-left: 0%;
  }
`;

export const RightContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: flex-end;
  margin: auto;
  @media (max-width: 700px) {
    margin-right: 5%;
    padding-left: 5%;
  }
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  width: 70%;
  height: 88px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (min-width: 700px) and (max-width: 982px) {
    width: 50%;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8%;
  margin-left: 2%;
  @media (min-width: 700px) {
    justify-content: center;
    gap: 10%;
  }
`;

export const NavbarLinkContainerToURL = styled(Link)`
  display: flex;
  width: 1%;
  text-decoration: none;
`;

const reusableLinkCSS = css`
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.25em")};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : "normal")};
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : "none"};
  margin: ${({ margin }) => (margin ? margin : "2%")};

  @media (max-width: 982px) {
    display: ${({ mobileDisplay }) => (mobileDisplay ? mobileDisplay : "none")};
  }
`;

export const NavbarLink = styled(Link)`
  ${reusableLinkCSS}
`;

export const AnchorLink = styled.a`
  ${reusableLinkCSS};
`;

export const NavbarText = styled.div`
  color: ${({ color }) => (color ? color : "white")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.25em")};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : "normal")};
  text-decoration: ${({ textDecoration }) =>
    textDecoration ? textDecoration : "none"};
  margin: ${({ margin }) => (margin ? margin : "2%")};

  @media (max-width: 982px) {
    display: ${({ mobileDisplay }) => (mobileDisplay ? mobileDisplay : "none")};
  }
`;

const reusableLinkCSSMobile = css`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;

export const NavbarLinkMobileExtended = styled(Link)`
  ${reusableLinkCSSMobile};
`;
export const NavbarLinkAnchorMobileExtended = styled.a`
  ${reusableLinkCSSMobile};
`;

export const Logo = styled.img`
  margin: 10px;
  height: auto;
  @media (max-width: 800px) {
    margin-top: 20px;
    width: 45px;
    height: 46px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  border: none;
  background: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  padding-right: 8%;
  margin-top: auto;
  margin-right: 10%;
  margin-bottom: auto;

  @media (min-width: 982px) {
    display: none;
  }
`;

export const NavbarMobileExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(15, 13, 17);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 5%;
  width: 100%;

  @media (min-width: 982px) {
    display: none;
  }
`;

export const BuyTokenButton = styled.a`
  width: 184px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #326cff 0%, #0042e9 100%);
  border: none;
  border-radius: 48px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.01em;
  text-decoration: none;

  :hover {
    background: linear-gradient(180deg, #1d3d8d 0%, #0042e9 100%);
    border-radius: 48px;
  }

  @media (max-width: 982px) {
    margin-top: 20px;
    display: ${({ mobiledisplay }) => (mobiledisplay ? mobiledisplay : "none")};
  }
`;
