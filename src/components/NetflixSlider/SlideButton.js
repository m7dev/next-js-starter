import React from 'react';

import css from './SlideButton.less';


const SlideButton = ({ onClick, type }) => (
  <button className={`${css['slide-button']} ${css[`slide-button--${type}`]}`} onClick={onClick}>
    <span>
      Down
    </span>
  </button>
);

export default SlideButton;
