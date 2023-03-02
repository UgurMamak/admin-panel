/* eslint-disable react/button-has-type */
import React from 'react';
import './index.scss';

export default function UMButton({
  type = 'button',
  children,
  disabled,
  className = 'btn',
}) {
  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
