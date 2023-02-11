/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import './index.scss'

export const UMCheck = ({
  id,
  name,
  value,
  text,
  error,
  tooltip,
  ...inputProps
}) => {
  return (
    <div className="form-check">
      <label className="form-check__label" htmlFor="defaultCheck1">
        <input className="form-check__input" type="checkbox" defaultValue id={id} name={name} value={value} />
        <div className='form-check__text'>
          {text}
        </div>
      </label>
    </div>
  );
}

export const UMRadio = () => {
  return (
    <div className="form-check">
      <label className="form-check__label" htmlFor="exampleRadios1">
        <input className="form-check__input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
        <div>
          Default radio<br />Default radio <br />Default radio
        </div>
      </label>
    </div>
  );
}