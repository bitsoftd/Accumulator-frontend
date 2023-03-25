import styled from "styled-components";

export const GlobalMetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
`;

export const GlobalMetricsHeading = styled.div`
  margin-bottom: 1%;
`;

export const GlobalMetricsHeader = styled.div`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.01em;
  color: #f9f3f5;
  text-align: left;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 407px;
  height: 119px;
  background: #211b1e;
  border-radius: 24px;
  padding-top: 2%;
  padding-left: 2%;
  @media (max-width: 850px) {
    width: 80%;
    height: 100%;
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
  line-height: 65px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f9f3f5;
  text-align: left;
  @media (max-width: 850px) {
    font-size: 2em;
  }
`;
