import styled from "styled-components";

export const TitleHeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleHeadlineStyle = styled.h1`
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 120px;
  line-height: 144px;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #f9f3f5;

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 60px;
  }
`;
