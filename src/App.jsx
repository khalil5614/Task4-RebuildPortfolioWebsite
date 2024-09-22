import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import AboutMe from "./components/AboutMeComponent";
import Skills from "./components/SkillsComponent";
import ResumeComponent from "./components/ResumeComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const user = {
    name: "Mary Hardy",
    email: "info@gmail.com",
    dob: "11 November 1987",
    address: "Los Angeles, USA",
  };

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <AboutMe person={user}></AboutMe>
      <Skills></Skills>
      <ResumeComponent></ResumeComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
