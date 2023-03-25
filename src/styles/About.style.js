import styled from "styled-components";

export const AboutContainer = styled.div`
  margin: 10% 1%;
`;

export const Rectangle = styled.div`
  width: 407px;
  height: 537px;
  background: #211b1e;
  border-radius: 16px;
  @media (max-width: 1380px) {
  }
`;

export const AboutHeading = styled.h1`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f9f3f5;

  @media (max-width: 800px) {
    font-size: 3em;
  }
`;

export const AboutCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1380px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  margin: 0px 0.5em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background-color: #2d2a2a;

  // Small devices
  @media screen and (max-width: 767px) {
    overflow: hidden;
    width: 20em;
    height: 100%;
    margin-bottom: 4%;
    margin-left: 0px;
    margin-right: 0px;
  }

  // Medium devices
  @media screen and (min-width: 768px) and (max-width: 1380px) {
    width: 409px;
    height: 100%;
    margin-bottom: 1%;
  }

  // Large devices and bigger (tablets, 768px and up)
  @media screen and (min-width: 1381px) {
    width: 407px;
    height: 537px;
  }
`;

export const Arrow = styled.div`
  display: inline-block;
  margin-left: 3%;
  position: relative;
  top: 10%;
`;

export const ProfileCircle = styled.div`
  background: #0d090b;
  background-image: ${({ src }) => `url(${src})`};
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 6%;
`;

export const ProfileTitle = styled.p`
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: rgba(250, 249, 234, 0.8);
`;

export const ProfileName = styled.h4`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
  color: #f9f3f5;
`;

export const CardPersonRole = styled.h1`
  margin-left: 6%;
  text-align: left;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: rgba(250, 249, 234, 0.8);
`;

export const CardHeading = styled.h1`
  margin-left: 6%;
  text-align: left;
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;

  color: #f9f3f5;
`;
export const CardBody = styled.div`
  display: grid;
`;

export const CardPersonBio = styled.p`
  margin-left: 6%;
  text-align: left;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.01em;

  color: rgba(249, 243, 245, 0.8);
`;

export const CardViewBioText = styled.span`
  margin-left: 6%;
  text-align: left;
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #ff8e1c;
  cursor: pointer;
`;
