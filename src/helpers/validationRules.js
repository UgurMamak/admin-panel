/* eslint-disable import/prefer-default-export */
export const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Custom Validate boş bırakmayınız';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};
