import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

export default function Index({
  isModalOpen,
  children,
  handleCancel,
  handleOk,
}) {
  const [modalShow, setModalShow] = useState(isModalOpen);

  useEffect(() => {
    setModalShow(isModalOpen);
  }, [isModalOpen]);

  return (
    <Modal
      title="Basic Modal"
      open={modalShow}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
}
