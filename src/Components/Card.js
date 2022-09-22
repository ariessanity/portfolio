import React from "react";
import "../Styles/Card.scss";
import Button from "./Button";
import Icons from "./Icons";
import html from "../icons/icons8-html-5.svg";
import css from "../icons/icons8-css3.svg";
import sass from "../icons/icons8-sass.svg";
import react from "../icons/icons8-react-native.svg";
import ButtonLight from "./ButtonLight";
import Tag from "./Tag";

function Card(props) {
  return (
    <div className="card">
      <div className="card__side">
        <div
          className="card__side--front"
          style={{
            backgroundImage: `linear-gradient(to right bottom, #2B4865, #002B5B), url(${props.bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <h2 className="card__side--front-title">{props.title}</h2>

          <div className="card__side--back-button">
            <Button text="Github" url={props.urlgit} />
            <ButtonLight text="Live" url={props.url} />
          </div>

          <div className="card__side--back-stack">
            {props.stacks?.map((item, index) => {
              return <Tag tag={item} key={index} />;
            })}
          </div>
        </div>

        {/* <div className="card__side--back">
          <p className="card__side--back-description">{props.description}</p>

          <div className="card__side--back-button">
            <Button text="Github" url={props.urlgit} />
            <ButtonLight text="Live" url={props.url} />
          </div>

          <div className="card__side--back-stack">
            {props.stacks?.map((item, index) => {
              return <Tag tag={item} key={index} />;
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
