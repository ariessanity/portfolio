import React from "react";
import "../Styles/Icons.scss"

function Icons(props) {
  return (
    <div >
     <img className="icons" src={props.icon} alt="icons" />
    </div>
  );
}

export default Icons;
