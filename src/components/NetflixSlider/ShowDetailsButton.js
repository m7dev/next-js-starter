import React from 'react';

import css from './ShowDetailsButton.less';


const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className={css['show-details-button']}>
    <span>
    ShowDetailsButton
    </span>
  </button>
);

export default ShowDetailsButton;
