import React from "react";
import "../Styles/Stack.scss";
import Icons from "./Icons";
import css3 from "../icons/icons8-css3.svg";
import html5 from "../icons/icons8-html-5.svg";
import sass from "../icons/icons8-sass.svg";
import npm from "../icons/icons8-npm.svg";
import react from "../icons/icons8-react-native.svg";
import material from "../icons/icons8-material-ui.svg";
import firebase from "../icons/icons8-firebase.svg";
import git from "../icons/icons8-git.svg";
import vs from "../icons/icons8-visual-studio-code-2019.svg";

function Stack() {
  return (
    <div className="stack">
      <h2 className="about-me__title"> TechStack</h2>
      <div className="stack__icons">
        <Icons icon={html5} />
        <Icons icon={css3} />
        <Icons icon={react} />
        <Icons icon={sass} />
        <Icons icon={npm} />
        <Icons icon={material} />
        <Icons icon={firebase} />
        <Icons icon={git} />
        <Icons icon={vs} />
      </div>
    </div>
  );
}

export default Stack;
