import React, { useState } from 'react';
import UMInput, { UMTextarea } from 'components/input';
import { UMCheck, UMRadio, UMTest } from 'components/check-radio';
import UMRichText from 'components/rich-text-editor';
import { Button } from 'antd';
import Form from './form';
import Modal from '../../components/modal';

import UMButton from '../../components/button';

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClick = () => {
    console.log('click event run');
  };

  return (
    <div>
      <UMButton type="submit" onClick={handleClick} className="btn-primary">
        Kaydet
      </UMButton>
      <br />
      <br />
      <UMButton type="submit" onClick={handleClick} className="btn-secondary">
        Kaydet
      </UMButton>
      <br />
      <br />
      <UMButton type="submit" onClick={handleClick} className="btn-secondary">
        Kaydet
      </UMButton>
      <br />
      <br />
      <UMButton type="submit" onClick={handleClick} disabled className="btn-secondary">
        Kaydet
      </UMButton>
      <br />
      <br />
      
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal isModalOpen={isModalOpen}>
        <h1>Modal Content</h1>
      </Modal>
      Test Page
      <Form />
      {/* <UMInput
        type="text"
        label="email"
        name="email"
        id="email"
        placeholder="olivia@untitledui.com"
        error="HATA MESAJI"
        tooltip="İçerik hakkında bilgi"
      />
      <UMInput
        type="text"
        label="email"
        name="email"
        id="email"
        placeholder="olivia@untitledui.com"
        error="HATA MESAJI"
        tooltip="İçerik hakkında bilgi"
      />
      <UMCheck name="check-1" id="check-1" text="check-1" value="check-1" />
      <UMRadio name="check-2" id="check-2" text="check-2" value="check-2" />
      <UMRadio name="check-2" id="check-3" text="check-3" value="check-3" />
      <UMRadio name="check-2" id="check-4" text="check-4" value="check-4" />
      <UMTextarea
        label="Content"
        name="check-5"
        id="check-5"
        text="check-5"
        value="check-5"
      />
      <UMRichText /> */}
    </div>
  );
}
