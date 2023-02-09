import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import './index.scss';

export default function Input({
  register,
  id,
  name,
  label,
  error,
  type,
  placeholder,
  ...inputProps
}) {
  return (
    <div className="form-element-wrapper">
      <label className="form-element-label" htmlFor={id}>
        {label}
      </label>
      <div className="form-element-input-wrapper">
        <input
          type={type}
          className="form-element-input"
          id={id}
          name={name}
          placeholder={placeholder}
        />
        <AiOutlineQuestionCircle className="icon" />
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
