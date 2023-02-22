/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import './index.scss';
import { Tooltip } from 'antd';

export default function UMInput({
  id,
  name,
  label,
  error,
  type,
  placeholder,
  tooltip,
  touched,
  errors,
  handleChange,
  customValidate,
  handleBlur,
  ...inputProps

}) {

  let errorStatus = '';
  if (touched && errors) {
    errorStatus = touched[name] && errors[name] && (true);
  }

  return (
    <div className={`form-element-wrapper ${errorStatus && 'form-invalid'} `}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <div className="form-input-wrapper">
        <input
          type={type}
          className="form-input"
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {tooltip && (
          <Tooltip placement="left" title={tooltip}>
            <AiOutlineQuestionCircle className="icon" />
          </Tooltip>
        )}
      </div>

      {errorStatus && (
        <div className="error-message">{errors[name]}</div>
      )}
    </div>
  );
}

export const UMTextarea = ({
  id,
  name,
  label,
  error,
  type,
  placeholder,
  tooltip,
  touched,
  errors,
  ...inputProps
}) => {
  let errorStatus = '';
  if (touched && errors) {
    errorStatus = touched[name] && errors[name] && (true);
  }
  return (
    <div className={`form-element-wrapper ${errorStatus && 'form-invalid'} `}>
      <label className="form-label" htmlFor={id}>{label}</label>
      <div className="form-input-wrapper">
        <textarea className="form-input" id={id} rows={3} />
      </div>
      {errorStatus && (
        <div className="error-message">{errors[name]}</div>
      )}
    </div>
  );
}