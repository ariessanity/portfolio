import React from "react";
import "../Styles/Header.scss";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import ButtonLight from "./ButtonLight";

function Header() {
  return (
    <div className="header">
      <div className="header__main">
        <h3 className="header__intro">Hello! my name is</h3>

        <div className="header__type">
          <Typewriter
            options={{
              delay: 100,
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("ARIES")
                .pauseFor(5000)
                .deleteAll(.5)
                .typeString("ARIES")
                .pauseFor(5000)
                .start();
            }}
          />
        </div>

        <h3 className="header__description">
          <p>
            I am a self-taught <span>frontend developer</span>
          </p>
        </h3>
      </div>
      <div className="header__buttons">
        <a className="button" href="#contact">
          Hire Me
        </a>
        {/* <Button text="Hire Me" url={"#contact"} /> */}
        <ButtonLight
          text="Resume"
          url={
            "https://drive.google.com/file/d/1u6U673swB_LNXKplUBnKb4xJlhHUNsdM/view?usp=sharing"
          }
        />
      </div>
    </div>
  );
}

export default Header;
