import React from 'react';
import { Modal } from 'antd';
import  UMButton  from 'components/button';
import { BsCheckCircle} from 'react-icons/bs';
import style from './index.module.scss';

export default function UMModal({
  isModalOpen,
  children,
  modalOpen,
  modalClose,
  closeButton,
  okButton,
  icon
}) {

  const iconRender = ()=>{
    if(icon){
      switch (icon) {
        case 'success':
          return <span className={`${style.modalIcon} ${style.success}`}>< BsCheckCircle className={style.icon}/></span>;
        default: null;
      }
    }
  }

  if (isModalOpen) {
    return (
      <Modal className={style.umModal} open={isModalOpen} footer={null}>
       {iconRender()}
        {children}
        <div className='modal-footer'>
          {closeButton && <UMButton onClick = { modalClose } className="btn btn-secondary">İptal</UMButton> }
          {okButton && <UMButton onClick = { modalClose } className="btn btn-primary">Tamam</UMButton> }
        </div>
      </Modal>
    )
  }
  return null;
}
