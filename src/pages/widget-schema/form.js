import React from 'react';
import UMInput, { UMTextarea } from '../../components/input';

export default function Form() {
  return (
    <div>
      <UMInput
        type="text"
        label="Widget Tipi Ad"
        name="widget_type_name"
        id="widget_type_name"
        tooltip="İçerik hakkında bilgi"
      />
      <UMTextarea
        label="Widget Şema"
        name="widget_schema"
        id="widget_schema"
        tooltip="İçerik hakkında bilgi"
      />
      <button type="button" className="btn btn-primary">
        Kaydet
      </button>
    </div>
  );
}
