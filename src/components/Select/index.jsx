import React from 'react';
import style from './style.module.css';

const Select = ({ label, options, ...props }) => {
  return (
    <label>
      {label}
      <select className={style.select} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
