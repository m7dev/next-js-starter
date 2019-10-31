import React from 'react';

import css from './Content.less';


const Content = ({ movie, onClose }) => (
  <div className={css.content}>
    <div className={css.content__background}>
      <div className={css.content__background__shadow} />
      <div
        className={css.content__background__image}
        style={{ 'background-image': `url(${movie.imageBg})` }}
      />
    </div>
    <div className={css.content__area}>
      <div className={css.content__area__container}>
        <div className={css.content__title}>{movie.title}</div>
        <div className={css.content__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div>
      </div>
      <button className={css.content__close} onClick={onClose}>
        onClose
      </button>
    </div>
  </div>
);

export default Content;
