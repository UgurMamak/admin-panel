import React from 'react';
import { Modal } from 'antd';

export default function UMModal({
  isModalOpen,
  children,
  modalOpen,
  modalClose,
}) {
  if (isModalOpen) {
   return (<Modal open={isModalOpen} onOk={modalClose} onCancel={modalClose}>
        {children}
      </Modal>)
  }
  return null;
}
