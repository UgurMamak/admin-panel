import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UMInput, { UMTextarea } from '../../components/input';
import {
  validateEmail,
  createErrorObject,
} from '../../helpers/validationRules';

const validationSchema = Yup.object().shape({
  widget_type_name: Yup.string().required('Boş Bırakmayınız'),
  widget_schema: Yup.string().required('Boş Bırakmayınız'),
});

export default function Form() {
  const formik = useFormik({
    initialValues: {
      widget_type_name: '',
      widget_schema: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    validationSchema,
  });

  const { errors, touched, handleChange } = formik;

  return (
    <form onSubmit={formik.handleSubmit}>
      <UMInput
        type="text"
        label="Widget Tip Adı"
        name="widget_type_name"
        id="widget_type_name"
        placeholder="Widget Tipi..."
        tooltip="İçerik hakkında bilgi"
        error={createErrorObject(touched, errors, 'widget_type_name')}
        handleChange={handleChange}
      />
      <UMTextarea
        label="Widget Şema"
        name="widget_schema"
        id="widget_schema"
        tooltip="İçerik hakkında bilgi"
        error={createErrorObject(touched, errors, 'widget_schema')}
        handleChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Kaydet
      </button>
    </form>
  );
}
