import React from 'react';
import { useFormik } from 'formik';
import UMInput, { UMTextarea } from 'components/input';
import { validateEmail, createErrorObject } from 'helpers/validationRules';
import { UMCheck, UMRadio } from 'components/check-radio';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Geçersiz email').required('Boş Bırakmayınız'),
  check_1: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions to continue'
  ),
  radio_1: Yup.string().required('Please select an option'),
});

export default function Index() {
  const formik = useFormik({
    initialValues: {
      email: '',
      email2: '',
      email3: '',
      check_1: false,
      radio_1: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    validationSchema,
    validate: (values) => {
      console.log(values);
      const errors = {};
      if (validateEmail(values.email2)) {
        errors.email2 = validateEmail(values.email2);
      }
      return errors;
    },
  });

  const { errors, touched, values, handleChange } = formik;

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <UMInput
          type="text"
          label="email"
          name="email"
          id="email"
          placeholder="olivia@untitledui.com"
          tooltip="İçerik hakkında bilgi"
          error={createErrorObject(touched, errors, 'email')}
          handleChange={handleChange}
        />

        <UMInput
          type="text"
          label="email2"
          name="email2"
          id="email2"
          placeholder="olivia@untitledui.com"
          tooltip="İçerik hakkında bilgi"
          error={createErrorObject(touched, errors, 'email2')}
          handleChange={handleChange}
          customValidate={validateEmail}
        />

        <UMCheck
          name="check_1"
          id="check_1"
          text="check_1"
          value="check_1"
          error={createErrorObject(touched, errors, 'check_1')}
          checked={values.check_1}
          handleChange={handleChange}
        />

        <UMRadio
          name="radio_1"
          id="radio_11"
          text="check-2"
          value="radio-value-1"
          error={createErrorObject(touched, errors, 'radio_1')}
          checked={values.radio_1 === 'radio-value-1'}
          handleChange={handleChange}
        />

        <UMRadio
          name="radio_1"
          id="radio_2"
          text="check-2"
          value="radio-value-2"
          error={createErrorObject(touched, errors, 'radio_1')}
          checked={values.radio_1 === 'radio-value-2'}
          handleChange={handleChange}
        />

        <UMRadio
          name="radio_1"
          id="radio_3"
          text="check-3"
          value="radio-value-3"
          error={createErrorObject(touched, errors, 'radio_1')}
          checked={values.radio_1 === 'radio-value-3'}
          handleChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
