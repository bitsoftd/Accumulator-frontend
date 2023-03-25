import React from "react";
import {
  ModalBackground,
  ModalContainer,
  TitleCloseBtn,
  CloseButton,
  ProfileCircle,
  PersonRole,
  Header,
  Heading,
  Body,
  PersonBio,
} from "../styles/AboutModal.style";

export default function AboutModal({
  role,
  name,
  description,
  profilePictureSrc,
  isOpen,
  toggleModal,
}) {
  // remember to use a prop to pass the properties!
  return isOpen ? (
    <ModalBackground
      onClick={(e) => {
        e.preventDefault();
        if (
          e.target.className.includes(
            ModalBackground.toString().replace(".", "")
          )
        ) {
          toggleModal(false);
        }
      }}
    >
      <ModalContainer>
        <TitleCloseBtn>
          <CloseButton onClick={() => toggleModal(false)}>X</CloseButton>
        </TitleCloseBtn>
        <Header>
          <ProfileCircle src={profilePictureSrc} />
          <PersonRole>{role}</PersonRole>
          <Heading>{name}</Heading>
        </Header>
        <Body>
          <PersonBio>{description}</PersonBio>
        </Body>
      </ModalContainer>
    </ModalBackground>
  ) : null;
}
