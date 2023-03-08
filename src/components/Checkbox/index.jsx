import React, { useState } from 'react';

const Checkbox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      {label}
    </label>
  );
};

export default Checkbox;
