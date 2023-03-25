import React from "react";
import Navbar from "./Navbar";
import { BackgroundImage } from "../styles/Header.style";
import { useLocation } from "react-router-dom";
import HeroBackground from "../assets/hero_background_translucent.png";

function Header() {
  const location = useLocation();
  const BACKGROUND_HEIGHT = "100vh";
  let passBackgroundImage = location.pathname === "/" ? HeroBackground : null;
  let passBackgroundHeight =
    location.pathname === "/" ? BACKGROUND_HEIGHT : null;
  return (
    <>
      <BackgroundImage height={passBackgroundHeight} src={passBackgroundImage}>
        <Navbar />
      </BackgroundImage>
    </>
  );
}

export default Header;
