import React from 'react';

import css from './styles.less';


const Loader = () => {
  return (
    <div className={css.spin}>
      <div />
    </div>
  );
};

export default Loader;
