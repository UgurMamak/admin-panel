/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './index.scss'
import { BsCheck } from 'react-icons/bs'

export const UMCheck = ({
  id,
  name,
  value,
  text,
  error={},
  tooltip,
  checked,
  handleChange,
  ...inputProps
}) => {
  const { errorStatus = false, errorMessage = '' } = error;
  return (
    <div className="form-check">
      <label className="form-check__label" htmlFor={id}>
        <input className={`form-check__input ${errorStatus && 'form-invalid'} `} 
        type="checkbox" 
        checked={checked} 
        onChange={handleChange} 
        id={id} 
        name={name} 
        value={value} />
        <div className='form-check__text'>
          {text}
        </div>
      </label>
    </div>
  );
}

export const UMRadio = ({
  id,
  name,
  value,
  text,
  error={},
  tooltip,
  checked,
  handleChange,
  ...inputProps
}) => {
  const { errorStatus = false, errorMessage = '' } = error;

  return (
    <div className="form-check">
      <label className="form-check__label" htmlFor={id}>
        <input className={`form-check__input  ${errorStatus && 'form-invalid'}`}
          type="radio"
          id={id} 
          checked={checked}
          onChange={handleChange}
          name={name}
          value={value} />
        <div>
          {text}
        </div>
      </label>
    </div>
  );
}