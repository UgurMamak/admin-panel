import React from 'react';
import UMButton from 'components/button';

export default function Index() {
  return (
    <>
      <UMButton type="submit" className="btn-primary">
        Kaydet
      </UMButton>
      <br />
      <br />
      <UMButton type="submit" className="btn-secondary">
        Kaydet
      </UMButton>
      <br />
      <br />
      <UMButton type="submit" className="btn-secondary">
        Kaydet
      </UMButton>
      <br />
      <br />
      <UMButton type="submit" disabled className="btn-secondary">
        Kaydet
      </UMButton>
      <br />
      <br />
      <UMButton type="submit" className="btn-link">
        Kaydet
      </UMButton>
    </>
  );
}
