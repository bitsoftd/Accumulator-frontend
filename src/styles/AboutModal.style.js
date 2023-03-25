import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.15);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
`;

export const ModalContainer = styled.div`
  width: 854px;
  height: 604px;
  border-radius: 16px;
  background-color: #211b1e;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  overflow: hidden;

  @media (max-width: 820px) {
    width: 80%;
    height: 70%;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export const ProfileCircle = styled.div`
  background: #0d090b;
  background-image: ${({ src }) => `url(${src})`};
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-left: 5%;

  @media (max-width: 820px) {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const PersonRole = styled.h1`
  margin-left: 6%;
  text-align: left;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: rgba(250, 249, 234, 0.8);
`;

export const Header = styled.div`
  display: grid;
`;

export const Heading = styled.h1`
  margin-left: 6%;
  text-align: left;
  font-family: "Sofia Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.01em;
  color: #f9f3f5;
  @media (max-width: 820px) {
    font-size: 1.75em;
  }
`;

export const Body = styled.div`
  display: grid;
`;

export const PersonBio = styled.p`
  margin-left: 6%;
  text-align: left;
  font-family: "Sofia Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.01em;
  color: rgba(249, 243, 245, 0.8);
  @media (max-width: 820px) {
    font-size: 1em;
  }
`;
