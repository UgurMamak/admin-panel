import React from 'react';
import UMInput from 'components/input';
import { UMCheck, UMRadio, UMTest } from 'components/check-radio';

export default function Index() {
  return (
    <div>
      Test Page
      <UMInput
        type="text"
        label="email"
        name="email"
        id="email"
        placeholder="olivia@untitledui.com"
        error="HATA MESAJI"
        tooltip="İçerik hakkında bilgi"
      />
      <UMCheck />
      <UMRadio />
    </div>
  );
}
