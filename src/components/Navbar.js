/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import {
  LeftContainer,
  CenterRightContainer,
  RightContainer,
  NavbarContainer,
  NavbarMobileExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  AnchorLink,
  NavbarLinkMobileExtended,
  NavbarLinkAnchorMobileExtended,
  Logo,
  OpenLinksButton,
  NavbarLinkContainerToURL,
  BuyTokenButton,
  NavbarText,
} from "../styles/Navbar.style";
import LogoImg from "../assets/logo.png";
import config from "../config/config.json";

// Update the links and content all in one place
const NavbarLinks = [
  {
    to: "https://linktr.ee/ACCUU",
    content: "Linktree",
    newTab: true,
    button: false,
  },
  {
    to: "/Account",
    content: "Account",
    newTab: false,
    button: false,
  },
  {
    to: "https://baldur-1.gitbook.io/accumulator/",
    content: "Whitepaper",
    newTab: true,
    button: false,
  },
  {
    to: "/#team",
    content: "Team",
    newTab: false,
    button: false,
  },
  {
    to: "https://commandswap.com/?tokenA=0xe9e7cea3dedca5984780bafc599bd69add087d56&tokenB=0x9cb949e8c256C3EA5395bbe883E6Ee6a20Db6045",
    content: `Buy ${config.TOKEN_SYMBOL}`,
    newTab: false,
    button: true,
  },
];

function scrollToSection(section) {
  if (section === "team") {
    const teamElement = document.getElementById(section);
    teamElement.scrollIntoView({ block: "center", behavior: "smooth" });
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

function Navbar({ tokenSymbol }) {
  const [mobileExtendNavbar, setMobileExtendNavbar] = useState(false);
  const links = NavbarLinks.filter((link) => link.button === false);
  const buyButton = NavbarLinks.filter((link) => link.button === true);

  return (
    <NavbarContainer extendNavbar={mobileExtendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainerToURL
            to="/"
            onClick={() => scrollToSection("Home")}
          >
            <Logo src={LogoImg}></Logo>
            <NavbarText
              fontSize={"1.25em"}
              fontStyle={"italic"}
              margin={"auto 5%"}
              mobileDisplay={"inline"}
            >
              ACCUMULATOR
            </NavbarText>
          </NavbarLinkContainerToURL>
        </LeftContainer>
        <CenterRightContainer>
          <NavbarLinkContainer>
            {links.map((link, index) =>
              !link.newTab ? (
                <NavbarLink
                  key={index}
                  to={link.to}
                  onClick={() =>
                    link.content === "Team" && scrollToSection("team")
                  }
                >
                  {link.content}
                </NavbarLink>
              ) : (
                <AnchorLink
                  key={index}
                  href={link.to}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.content}
                </AnchorLink>
              )
            )}
          </NavbarLinkContainer>
        </CenterRightContainer>
        <RightContainer>
          <OpenLinksButton
            onClick={() => {
              setMobileExtendNavbar((currentValue) => !currentValue);
            }}
          >
            {mobileExtendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
          {buyButton.map((link, index) => (
            <BuyTokenButton
              key={index}
              href={link.to}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.content}
            </BuyTokenButton>
          ))}
        </RightContainer>
      </NavbarInnerContainer>
      {mobileExtendNavbar && (
        <NavbarMobileExtendedContainer>
          <NavbarLinkMobileExtended to="/" reloadDocument>
            Home
          </NavbarLinkMobileExtended>
          {links.map((link, index) =>
            !link.newTab ? (
              <NavbarLinkMobileExtended
                key={index}
                to={link.to}
                onClick={() =>
                  link.content === "Team" && scrollToSection("team")
                }
              >
                {link.content}
              </NavbarLinkMobileExtended>
            ) : (
              <NavbarLinkAnchorMobileExtended
                key={index}
                href={link.to}
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.content}
              </NavbarLinkAnchorMobileExtended>
            )
          )}
          {buyButton.map((link, index) => (
            <BuyTokenButton
              key={index}
              href={link.to}
              target="_blank"
              rel="noreferrer noopener"
              mobiledisplay={"flex"}
            >
              {link.content}
            </BuyTokenButton>
          ))}
        </NavbarMobileExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
