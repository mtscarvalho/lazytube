import React from 'react';
import style from './style.module.css';

const Input = ({ children, label, id, ...props }) => {
  return (
    <div className="field">
      <label htmlFor={id} className={style.label}>
        {label}
      </label>
      <input className={style.input} {...props} id={id}>
        {children}
      </input>
    </div>
  );
};

export default Input;
