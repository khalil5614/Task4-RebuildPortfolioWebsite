import React from "react";
import "../styles/portfolio.css";

const AboutMe = ({ person }) => {
  return (
    <section class="about secondary-bg margin50">
      <h3 class="section-tile text-center">About Me</h3>
      <p class="section-description text-center">
        I, m a designer & developer with a passion for web design. I enjoy
        developing simple, clean and slick websites that provide real value to
        the end user. Thousands of clients have procured exceptional resulfs
        while working with me. Delivering work within time and budget which
        meets clients requirements in our mata.
      </p>

      <div class="about-items">
        <div class="about-item">
          <p class="item-title">Name:</p>
          <p class="item-description">{person.name}</p>
        </div>
        <div class="about-item">
          <p class="item-title">Email:</p>
          <p class="item-description">{person.email}</p>
        </div>
        <div class="about-item">
          <p class="item-title">Date of birth:</p>
          <p class="item-description">{person.dob}</p>
        </div>
        <div class="about-item">
          <p class="item-title">From:</p>
          <p class="item-description">{person.address}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
