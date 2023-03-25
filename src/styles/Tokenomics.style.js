import styled from "styled-components";

export const Border = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid #4e464a;
  @media (min-width: 850px) {
    width: 0px;
    height: 414px;
    margin: auto;
    border: 1px solid #4e464a;
  }
`;

export const TokenomicsContainer = styled.div`
  margin-top: 10%;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    margin-top: 20%;
  }
  @media only screen and (max-height: 550px) {
    margin-top: 20%;
  }
`;

export const TokenomicsHeading = styled.h1`
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

export const TokenomicsText = styled.p`
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 1.75em;
  line-height: 34px;
  color: #f9f3f5;
  text-align: center;
`;

export const Rectangle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: auto;
  padding: 0.5% 1.5%;
  gap: 1%;
  width: 70%;
  height: 478px;
  background: #211b1e;
  border-radius: 16px;
  @media (max-width: 850px) {
    flex-direction: column;
    width: 60%;
    height: 100%;
  }
`;

export const TokenomicsCardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 4px;
  margin: 4px auto 0;
  width: 100%;
`;

export const TokenomicsCardHeader = styled.header`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
`;

export const TokenomicsCardHeading = styled.h1`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  /* font-size: 40px; */
  font-size: calc(32px + 0.4vw);
  letter-spacing: 0.01em;
  color: #ffffff;
  text-align: left;

  @media (min-width: 768px) and (max-width: 1165px) {
    font-size: calc(24px + 0.4vw);
  }
`;

export const TokenomicsCardBody = styled.div`
  padding-right: 8px;
  padding-left: 8px;
`;

export const TokenomicsCardText = styled.p`
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  /* font-size: 24px; */
  font-size: calc(12px + 0.65vw);
  margin-top: auto;
  color: #f9f3f5;
  text-align: left;
  @media (max-width: 850px) {
    font-size: calc(16px + 1.3vw);
  }
`;

export const TokenomicsCardInnerBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 35%;
  @media (max-width: 850px) {
    margin-top: 10%;
  }
`;

export const TokenomicsCardHorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 25%;
  @media (max-width: 850px) {
    flex-direction: row;
  }
`;
