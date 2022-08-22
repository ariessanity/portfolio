import React from 'react';
import "../Styles/HeaderWrapper.scss";


function HeaderWrapper(props) {
  return (
    <div className='header-wrapper'>{props.children}</div>
  )
}

export default HeaderWrapper