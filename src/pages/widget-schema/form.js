import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import UMInput, { UMTextarea } from '../../components/input';
import { createErrorObject } from '../../helpers/validationRules';
import { postWidgetSchema } from '../../redux/widgetSlice';

const validationSchema = Yup.object().shape({
  widget_type_name: Yup.string().required('Boş Bırakmayınız'),
  widget_schema: Yup.string().required('Boş Bırakmayınız'),
});

export default function Form() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      widget_type_name: '',
      widget_schema: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const data = {
        ...values,
        widget_schema: JSON.stringify(JSON.parse(values.widget_schema)),
      };

      dispatch(postWidgetSchema(data)).then(() => {
        resetForm();
      });
    },
    validationSchema,
  });

  const { errors, touched, handleChange, values, isSubmitting } = formik;

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
        value={values.widget_type_name}
      />
      <UMTextarea
        label="Widget Şema"
        name="widget_schema"
        id="widget_schema"
        tooltip="İçerik hakkında bilgi"
        error={createErrorObject(touched, errors, 'widget_schema')}
        handleChange={handleChange}
        value={values.widget_schema}
      />
      <button type="submit" className="btn btn-primary">
        Kaydet
      </button>
      <button type="button" onClick={formik.resetForm} disabled={isSubmitting}>
        Reset
      </button>
    </form>
  );
}
