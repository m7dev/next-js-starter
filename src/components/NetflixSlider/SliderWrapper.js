import React from 'react';
import css from './SliderWrapper.less';


const SliderWrapper = ({ children }) => (
  <div className={css['slider-wrapper']}>
    {children}
  </div>
);

export default SliderWrapper;
