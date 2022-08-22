import React from "react";
import "../Styles/Header.scss";
import Typewriter from "typewriter-effect";
import Button from "./Button";
import ButtonLight from "./ButtonLight";

function Header() {
  return (
    <div className="header">
      <div className="header__main">
        <h3 className="header__intro">Hi! my name is</h3>
        <h1 className="header__name">Aries Ian.</h1>

        <h3 className="header__description">
          I am a &nbsp;
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
                  .typeString("Frontend Web Developer")
                  .pauseFor(5000)
                  .deleteAll(0.5)
                  .typeString("Frontend Web Developer")
                  .pauseFor(5000)
                  .start();
              }}
            />
          </div>
        </h3>
      </div>
      <div className="header__buttons">
        <a className="button" href="#contact">
          Hire Me
        </a>
        {/* <Button text="Hire Me" url={"#contact"} /> */}
        <ButtonLight text="Resume" url={"https://drive.google.com/file/d/1EK-XnfvumyD9tpihtb0a3A0hoRm-HamO/view?usp=sharing"} />
      </div>
    </div>
  );
}

export default Header;
