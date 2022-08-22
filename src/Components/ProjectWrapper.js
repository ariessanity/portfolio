import React from 'react';
import "../Styles/ProjectWrapper.scss"

function ProjectWrapper(props) {
  return (
    <div className='projectWrapper'>{props.children}</div>
  )
}

export default ProjectWrapper