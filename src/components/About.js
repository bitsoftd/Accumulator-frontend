import React from "react";
import {
  AboutContainer,
  AboutHeading,
  AboutCardsContainer,
  ProfileCircle,
  CardWrapper,
  CardPersonRole,
  CardHeading,
  CardBody,
  CardPersonBio,
  CardViewBioText,
  Arrow,
} from "../styles/About.style";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowSVG } from "../assets/arrow.svg";
import blockchainBrainiacPicture from "../assets/blockchain_brainiac_profile_picture.png";
import baldurPicture from "../assets/Baldur_profile_picture.png";

// You can add to the cards array, and it will create a new card for you
const cards = [
  {
    name: "Baldur",
    role: "Project Lead",
    profilePictureSrc: baldurPicture,
    description:
      "Baldur is an experienced DeFi veteran with extensive knowledge on the principals of tokenomics. He’s been in the teams of rebase protocols, tomb forks, NFT projects, lending/borrowing platforms and more and has been around the block with regards to what can go wrong or right. You won’t recognize his name though as he’s chosen an anon approach for accumulator, though fully KYC’d with Truthseekers and known by that team. Baldur makes sure the Accumulator team runs smoothly and he runs a strict “no lies, no scams” policy. Accumulator is high risk high reward investment, but it’s guaranteed rug-free and will be a lot of fun. Let’s get to it, folks!",
  },
  {
    name: "Blockchain Brain",
    role: "Developer",
    profilePictureSrc: blockchainBrainiacPicture,
    description:
      "Blockchain Brain is a full stack engineer who has plenty of Software Engineering experiences from the Web 2.0 space and the Web 3.0 space. He has been in the cryptocurrency industry since 2017. He loves efficiency in his daily life, and he solves to see where efficiencies can be implemented. His passion is creating DeFi protocols that allows individuals to enable a new wave of financial freedom. He is a gigachad dev.",
  },
];

const dashcard = [
  {
    name: "Dennis",
    role: "Blockchain Developer",
    profilePictureSrc: baldurPicture,
    description:
      "Baldur is an experienced DeFi veteran with extensive knowledge on the principals of tokenomics. He’s been in the teams of rebase protocols, tomb forks, NFT projects, lending/borrowing platforms and more and has been around the block with regards to what can go wrong or right. You won’t recognize his name though as he’s chosen an anon approach for accumulator, though fully KYC’d with Truthseekers and known by that team. Baldur makes sure the Accumulator team runs smoothly and he runs a strict “no lies, no scams” policy. Accumulator is high risk high reward investment, but it’s guaranteed rug-free and will be a lot of fun. Let’s get to it, folks!",
  },
  {
    name: "Julia",
    role: "Full Stack Developer",
    profilePictureSrc: blockchainBrainiacPicture,
  }
]



const dashcard1 = [
  {
    name: "Dennis",
    role: "Blockchain Developer",
    profilePictureSrc: baldurPicture,
    description:
      "Baldur is an experienced DeFi veteran with extensive knowledge on the principals of tokenomics. He’s been in the teams of rebase protocols, tomb forks, NFT projects, lending/borrowing platforms and more and has been around the block with regards to what can go wrong or right. You won’t recognize his name though as he’s chosen an anon approach for accumulator, though fully KYC’d with Truthseekers and known by that team. Baldur makes sure the Accumulator team runs smoothly and he runs a strict “no lies, no scams” policy. Accumulator is high risk high reward investment, but it’s guaranteed rug-free and will be a lot of fun. Let’s get to it, folks!",
  },
  {
    name: "Julia",
    role: "Full Stack Developer",
    profilePictureSrc: blockchainBrainiacPicture,
  }
]

const CardItem = ({
  role,
  name,
  description,
  toggleModal,
  profilePictureSrc,
  setAboutModalState,
}) => {
  var characterCount = 156;
  let shortBio =
    description.slice(0, characterCount) +
    (description.length > characterCount ? "..." : "");
  return (
    <CardWrapper>
      <ProfileCircle src={profilePictureSrc} />
      <CardPersonRole>{role}</CardPersonRole>
      <CardHeading>{name}</CardHeading>
      <CardBody>
        <CardPersonBio>{shortBio}</CardPersonBio>
        <CardViewBioText
          onClick={() => {
            toggleModal();
            setAboutModalState({ name, description, role, profilePictureSrc });
          }}
        >
          View Bio
          <Arrow>
            <ArrowSVG />
          </Arrow>
        </CardViewBioText>
      </CardBody>
    </CardWrapper>
  );
};

export default function About({ toggleModal, setAboutModalState }) {
  let { sectionId } = useParams();
  return (
    <AboutContainer id={"team"}>
      <AboutHeading>WHO ARE WE? {sectionId} </AboutHeading>
      <AboutCardsContainer>
        {cards.map((card, index) => (
          <CardItem
            key={index}
            role={card.role}
            name={card.name}
            description={card.description}
            profilePictureSrc={card.profilePictureSrc}
            toggleModal={toggleModal}
            setAboutModalState={setAboutModalState}
          />
        ))}
      </AboutCardsContainer>
    </AboutContainer>
  );
}
