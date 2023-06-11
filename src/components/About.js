import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div>
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam
          dolores nesciunt itaque culpa nemo facilis sequi, molestias rem eius,
          aliquid corporis consectetur blanditiis laborum ipsa id nulla autem
          labore.
        </p>
      </div>
    </div>
  );
};
