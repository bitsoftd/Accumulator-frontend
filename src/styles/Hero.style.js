import styled from "styled-components";

export const HeroContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 10;

  @media (max-width: 800px) {
    transform: translate(-50%, -50%);
    width: 100%;
    margin-top: auto;
  }
`;
export const HeroHeadingContainer = styled.div`
  @media only screen and (min-device-width: 800px) and (max-device-width: 1024px) and (orientation: landscape) {
    margin-top: 50%;
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 30%;
  }
  @media (max-width: 800px) {
    margin-top: 30%;
  }
  @media only screen and (max-height: 550px) {
    margin-top: 40%;
  }
`;
export const HeroHeading = styled.h1`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 7.5em;
  font-size: 6.306vw;
  line-height: 5%;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f9f3f5;

  @media (max-width: 800px) {
    font-size: 3em;
    line-height: 0%;
  }
`;
export const HeroHeadingText = styled.p`
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1%;
  letter-spacing: 0.01em;
  color: #f9f3f5;

  @media (max-width: 800px) {
    font-size: 1.5em;
    padding-top: 0%;
    padding-bottom: 0%;
  }
`;
export const HeroBodyContainer = styled.div`
  padding-top: 8vw;
  @media (max-width: 900px) {
    padding-top: 5vw;
  }
`;
export const HeroBodyText = styled.p`
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 1.75em;
  text-align: center;
  color: #f9f3f5;
`;
export const HeroBodyHeader = styled.h2`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 3em;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f9f3f5;
  @media (max-width: 800px) {
    font-size: 2em;
  }
`;
