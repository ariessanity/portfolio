import React from "react";
import "../Styles/Icons.scss"

function Icons(props) {
  return (
    <div className="icons">
     <img className="icons__img" src={props.icon} alt="icons" />
     <p className="icons__text">{props.text}</p>
    </div>
  );
}

export default Icons;
