import React from 'react';
import style from './style.module.css';

const Input = ({ label, caption, ...props }) => {
  return (
    <label>
      {label}
      <input className={style.input} {...props} />
      <span className={style.caption}>{caption}</span>
    </label>
  );
};

export default Input;
