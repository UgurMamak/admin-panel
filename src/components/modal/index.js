import React from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'antd';

export default function UMModal({
  isModalOpen,
  children,
  modalOpen,
  modalClose,
}) {
  if (isModalOpen) {
    return createPortal(
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={modalClose}
        onCancel={modalClose}
      >
        {children}
      </Modal>,
      document.getElementById('second-root')
    );
  }
  return null;
}
