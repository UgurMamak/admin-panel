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
  ...inputProps
}) {
  return (
    <div className="form-element-wrapper">
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
        />
        {tooltip && (
          <Tooltip placement="left" title={tooltip}>
            <AiOutlineQuestionCircle className="icon" />
          </Tooltip>
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
