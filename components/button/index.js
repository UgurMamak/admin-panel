/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

export default function UMButton({
  type = 'button',
  children,
  disabled,
  className = 'btn',
  ...buttonprops
}) {
  return (
    <button
      type={type}
      className={`btn  ${className}`}
      disabled={disabled}
      {...buttonprops}
    >
      {children}
    </button>
  );
}
