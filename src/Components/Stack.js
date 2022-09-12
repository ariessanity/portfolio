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
import mongodb from "../icons/icons8-mongodb.svg";
import node from "../icons/icons8-node-js.svg";
import redux from "../icons/icons8-redux.svg";

function Stack() {
  return (
    <div className="stack">
      <h2 className="about-me__title"> TechStack</h2>
      <div className="stack__icons">
        <Icons icon={html5} text="HTML"/>
        <Icons icon={css3} text="CSS"/>
        <Icons icon={react} text="React"/>
        <Icons icon={mongodb} text="MongoDB"/>
        <Icons icon={node} text="NodeJS"/>
        <Icons icon={sass} text="SASS"/>
        <Icons icon={redux} text="Redux"/>
        <Icons icon={npm} text="NPM"/>
        <Icons icon={firebase} text="Firebase"/>
        <Icons icon={git} text="Git"/>
      </div>
    </div>
  );
}

export default Stack;
