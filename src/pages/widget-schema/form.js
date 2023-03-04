import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

// helpers
import { isObject } from 'helpers/typeControl';

// custom hooks
import useModal from 'hook/useModal';

import { createErrorObject } from '../../helpers/validationRules';

// Redux
import { postWidgetSchema } from '../../redux/widgetSlice';

// components
import UMInput, { UMTextarea } from '../../components/input';
import UMModal from '../../components/modal';
import UMButton from '../../components/button';

const validationSchema = Yup.object().shape({
  widget_type_name: Yup.string().required('Boş Bırakmayınız'),
  widget_schema: Yup.string().required('Boş Bırakmayınız'),
});

export default function Form() {
  const dispatch = useDispatch();
  const { isModalOpen, modalClose, modalOpen } = useModal();

  const widgetSchemaReducer = useSelector(
    (state) => state.widget_schema_reducer
  );

  const formik = useFormik({
    initialValues: {
      widget_type_name: '',
      widget_schema: '',
    },
    onSubmit: async (values, { resetForm }) => {
      if (isObject(values.widget_schema)) {
        const data = {
          ...values,
          widget_schema: JSON.stringify(JSON.parse(values.widget_schema)),
        };

        dispatch(postWidgetSchema(data)).then(() => {
          modalOpen();
          resetForm();
        });
      }else{
        modalOpen();
      }
    },
    validationSchema,
  });

  const { errors, touched, handleChange, values } = formik;

  return (
    <>
      <UMModal
        isModalOpen={isModalOpen}
        modalClose={modalClose}
        modalOpen={modalOpen}
      >
        <h1>{widgetSchemaReducer.post.message}</h1>
      </UMModal>
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
        <UMButton type="submit" className="btn btn-primary">
          Kaydet
        </UMButton>
      </form>
    </>
  );
}
