import Card from "./Card";
import React from "react";
import "../Styles/Project.scss";
import weather from "../img/weather.png";
import todo from "../img/todo.png";
import tour from "../img/ph-tours.png";
import ecom from "../img/ecom.png";

import css3 from "../icons/icons8-css3.svg";
import html5 from "../icons/icons8-html-5.svg";
import sass from "../icons/icons8-sass.svg";
import react from "../icons/icons8-react-native.svg";
import mongoDB from "../icons/icons8-mongodb.svg";
import node from "../icons/icons8-node-js.svg";
import redux from "../icons/icons8-redux.svg";

function Project() {
  return (
    <div className="project">
      <h2 className="project__title">Projects</h2>

      <div className="project__card">
        <Card
          title="ecom-app"
          bg={ecom}
          description="This personal project website is developed to practice my skills and knowledge in MERN stack."
          stacks={[react, mongoDB, node, redux]}
          url="https://aiso-shop.herokuapp.com"
          urlgit="https://github.com/ariessanity/ecom-app.git"
        />
        <Card
          title="weather-app"
          bg={weather}
          description="This application user can view the real time weather in his/her current location and the weather icon or background image will change depending on weather condition "
          stacks={[html5, css3, react, sass]}
          url="https://ariessanity.github.io/weather-app/"
          urlgit="https://github.com/ariessanity/weather-app.git"
        />
        <Card
          title="todo-app"
          bg={todo}
          description="ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do. It is helpful in planning our daily schedules"
          stacks={[html5, css3, react, sass]}
          url="https://ariessanity.github.io/to-do/"
          urlgit="https://github.com/ariessanity/to-do.git"
        />
        <Card
          title="ph-tours"
          bg={tour}
          description="I created this website inspired in udemy courses to practice my knowledge in Sass and responsive web design."
          stacks={[html5, sass]}
          url="https://ariessanity.github.io/ph-tours/"
          urlgit="https://github.com/ariessanity/ph-tours.git"
        />
      </div>

      <div></div>
    </div>
  );
}

export default Project;
