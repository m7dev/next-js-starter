import React from 'react';

import css from './styles.less';


const Radio = ({ id = 'test', name = 'test', label = 'label' }) => {
  return (
    <div className={css.flat}>
      <input type="radio" className={css.radio} id={`radio-${id}`} name={`name-${name}`} />
      <label htmlFor={`radio-${id}`}>{label}</label>
    </div>
  );
};

export default Radio;
