import React from "react";
import "../Styles/AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title"> About Me </h2>

      <p className="about-me__sub"></p>

      <p className="about-me__introduction">
        {" "}
        Hello! I am Aries, an aspiring web developer, looking for a position to
        kickstart my career in the field of Frontend Development. I am a
        Registered Electrical Engineer based in the Philippines. I
        am always open for new learnings and strives to build a new skills.
      </p>
    </div>
  );
}

export default AboutMe;
