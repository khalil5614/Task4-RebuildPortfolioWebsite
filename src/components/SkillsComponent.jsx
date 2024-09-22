import React from "react";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import nodejs from "../assets/icons/nodejs.png";
import mongo from "../assets/icons/mongo.png";
import SkillComponent from "./SkillComponent";
import "../styles/portfolio.css";

const SkillsComponent = () => {
  const skillList = [
    {
      title: "Vanilla JavaScript",
      image: js,
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      title: "React",
      image: react,
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      title: "Node JS",
      image: nodejs,
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      title: "MongoDB",
      image: mongo,
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
  ];

  return (
    <section class="skills margin50">
      <h3 class="section-tile text-center">What I Do</h3>
      <p class="section-description text-center">
        I have more than 10 years experience building software for clients all
        over the world. Below is a quick overview of my main technical skill
        sets and technologies i use. Want to find out more about my experience?
        Check out my online resume and project portfolio.
      </p>
      <div class="skills-container">
        {skillList.map((skill) => (
          <SkillComponent skill={skill}></SkillComponent>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
