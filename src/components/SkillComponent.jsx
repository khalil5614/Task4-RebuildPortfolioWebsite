import React from "react";
import "../styles/portfolio.css";

const SkillComponent = ({ skill }) => {
  return (
    <div class="skills-container">
      <div class="skill">
        <img src={skill.image} alt="" />
        <h4 class="skill-title">{skill.title}</h4>
        <p class="skill-description">{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillComponent;
