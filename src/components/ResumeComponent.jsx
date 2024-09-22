import React from "react";
import "../styles/portfolio.css";

const ResumeComponent = () => {
  const experienceList = [
    {
      type: "My Education",
      title: "Master in Computer Engineering",
      institution: "Harvard University / 2015 - 2017",
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      type: "My Experience",
      title: "Sr. Frontend Developer",
      institution: "Apple Inc / 2020 - Current",
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
    {
      type: "My Education",
      title: "Master in Computer Engineering",
      institution: "Harvard University / 2015 - 2017",
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },

    {
      type: "My Experience",
      title: "Sr. Frontend Developer",
      institution: "Apple Inc / 2020 - Current",
      description:
        "List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.",
    },
  ];

  return (
    <section class="resume margin50">
      <h3 class="section-title text-center">A summary of My Resume</h3>
      <div class="resume-container">
        {experienceList.map((exp) => (
          <div class="resume-column">
            <h3>{exp.type}</h3>
            <div>
              <h4>{exp.title}</h4>
              <h5 class="experience-sub-title">{exp.institution}</h5>
              <p>{exp.description}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div class="text-center resume-download-button">
        <button class="btn-primary">
          <i class="bi bi-download"></i> Download CV
        </button>
      </div>
    </section>
  );
};

export default ResumeComponent;
