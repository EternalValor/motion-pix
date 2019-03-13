import React from 'react';
import icons from '../sprite.svg';

const icon = props => (
  <svg className={props.className} style={props.style}>
    <use xlinkHref={`${icons}#icon-${props.name}`} />
  </svg>
);

export default icon;
