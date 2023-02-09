import React from 'react';
import Input from 'components/input';

export default function Index() {
  return (
    <div>
      Test Page
      <Input
        type="text"
        label="email"
        name="email"
        id="email"
        placeholder="olivia@untitledui.com"
        error="HATA MESAJI"
      />
      <Input
        type="text"
        label="email"
        name="email"
        id="email"
        placeholder="olivia@untitledui.com"
      />
    </div>
  );
}
