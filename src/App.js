import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import HeroSection from "./components/HeroSection.js";
import Tokenomics from "./components/Tokenomics.js";
import About from "./components/About.js";
import AboutModal from "./components/AboutModal.js";
import Footer from "./components/Footer.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppBackground } from "./GlobalStyles";
import DApp from "./components/DApp_component/DApp";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [aboutModalState, setAboutModalState] = useState({
    name: "",
    description: "",
    role: "",
    profilePictureSrc: "",
  });
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AppBackground>
              <AboutModal
                isOpen={modalOpen}
                toggleModal={toggleModal}
                name={aboutModalState.name}
                description={aboutModalState.description}
                role={aboutModalState.role}
                profilePictureSrc={aboutModalState.profilePictureSrc}
              />
              <Header />
              <HeroSection />
              <Tokenomics />
              <About
                toggleModal={toggleModal}
                setAboutModalState={setAboutModalState}
              />
              <Footer />
            </AppBackground>
          }
        ></Route>
        <Route path="/Account" element={<DApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
