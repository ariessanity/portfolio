import React from 'react';
import "../Styles/AboutWrapper.scss"

function AboutWrapper(props) {
  return (
    <div className='about-me-wrapper'>{props.children}</div>
  )
}

export default AboutWrapper