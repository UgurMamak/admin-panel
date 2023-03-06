/* eslint-disable import/prefer-default-export */
export const isObject = (obj) =>
  obj !== undefined && obj !== null && obj.constructor == Object;
