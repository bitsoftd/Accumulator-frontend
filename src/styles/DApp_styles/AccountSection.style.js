import styled from "styled-components";

export const AccountSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 15%;
  margin-bottom: 5%;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const AccountContainer = styled.div``;

export const AccountHeading = styled.div`
  margin-bottom: 1%;
`;

export const Header = styled.div`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.01em;
  color: #f9f3f5;
  text-align: left;

  @media (max-width: 850px) {
    font-size: 1.5em;
  }
`;

export const Subheader = styled.div`
  font-family: "Sofia Sans";
  font-style: italic;
  color: #f9f3f5;
  text-align: left;
`;

export const ButtonContainer = styled.div`
  margin: auto;
`;

export const CalculateContainer = styled.div`
  margin-left: 5%;
  @media (max-width: 850px) {
    margin-left: 0;
    margin-top: 5%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
  padding: 0px;
  gap: 12px;
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  justify-content: ${({ jc }) => (jc ? jc : "")};

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "407px")};
  height: ${({ height }) => (height ? height : "119px")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  justify-content: ${({ jc }) => (jc ? jc : "")};
  background: #211b1e;
  border-radius: 24px;
  padding: ${({ padding }) => (padding ? padding : "8% 8% 2%")};
  @media (max-width: 850px) {
    width: ${({ mobileWidth }) => (mobileWidth ? mobileWidth : "")};
    height: ${({ mobileHeight }) => (mobileHeight ? mobileHeight : "")};
    padding: 0;
  }
`;

export const CardHeader = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  color: #f9f3f5;
  text-align: left;
  @media (max-width: 850px) {
    font-size: 1.3em;
  }
`;

export const CardContent = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 40px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f9f3f5;
  text-align: left;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    font-size: 2em;
  }
`;

export const CardWrongNetwork = styled.p`
  font-family: "Sofia Sans";
  font-style: italic;
  font-size: 20px;
  color: red;
  text-align: left;
`;

export const Spacer = styled.div`
  margin-bottom: 52px;
`;

export const CardCalculateEarningsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const CardCalculateEarningsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  column-gap: 25px;
  row-gap: 50px;
`;

export const CardContainerAlt = styled.div`
  margin-right: 0%;
  @media (max-width: 850px) {
    padding: 5%;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 23px;
  gap: 18px;
  grid-gap: 18px;
  margin-top: 2%;
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 0;
    grid-gap: 0px;
    width: 80%;
  }
`;

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 850px) {
    padding: 5%;
    flex-direction: column;
  }
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 13px;
  background: rgb(230, 230, 230);
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 20px;

  position: relative;
  top: 3px;

  &:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 23px;
    height: 23px;
    background: #005ff9;
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }

  &::-moz-range-thumb {
    width: 23px;
    height: 23px;
    background: #005ff9;
    cursor: pointer;
    border-radius: 50%;
    border: none;
  }
`;

export const SliderLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const SliderLabel = styled.h1`
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  color: #f9f3f5;
`;

export const PrincipleAmountInput = styled.input`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 40px;
  line-height: 65px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f9f3f5;
  background: none;
  outline: none;
  border: none;
  text-align: left;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
