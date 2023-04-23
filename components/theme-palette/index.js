import React from 'react';
import { Button } from "antd";
import { IoMdColorPalette } from "react-icons/io";
import style from './index.module.scss'
import { AiOutlineQuestionCircle } from 'react-icons/ai';

import UMButton from "components/button";
import { UMCheck, UMRadio } from "components/check-radio";
import UMInput from "components/input";


const Index = () => {
  return (
    <div className={style.themePaletteWrapper}>
      <Button type="primary" icon={<IoMdColorPalette />} />
      <div className="theme-palette-body">
        <div className={style.componentItem}>
          <h3>Button</h3>
          <UMButton>Deneme</UMButton>
          <UMButton className='btn-link'>Link</UMButton>
          <UMButton className='btn-primary'>Primary</UMButton>
          <UMButton className='btn-primary' disabled>Primary Disabled </UMButton>
          <UMButton className='btn-secondary'>Secondary</UMButton>
          <UMButton className='btn-secondary' disabled>Secondary Disabled</UMButton>
        </div>

        <div className={style.componentItem}>
          <h3>checkbox</h3>
          <UMCheck text={'text'} />
          <UMCheck text={'text'} />
          <UMCheck text={'default checked'} defaultChecked={true} />
          <UMCheck text={'Disabled'} disabled />
          <UMCheck text={'Error'} error={{ errorStatus: true, errorMessage: 'Hata mesajı' }} />
        </div>

        <div className={style.componentItem}>
          <h3>Radio</h3>
          <UMRadio text={'text'} />
          <UMRadio text={'text'} />
          <UMRadio text={'default checked'} defaultChecked={true} />
          <UMRadio text={'Disabled'} disabled />
          <UMRadio text={'Error'} error={{ errorStatus: true, errorMessage: 'Hata mesajı' }} />
        </div>

        <div className={style.componentItem}>
          <h3>Input</h3>
          <UMInput
            type="text"
            label="Normal"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
          />
          <UMInput
            type="text"
            label="icon input"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
            icon={<AiOutlineQuestionCircle />}
          />
          <UMInput
            type="text"
            label="Disabled"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
            disabled
          />
          <UMInput
            type="text"
            label="Error"
            name="email"
            id="email"
            placeholder="olivia@untitledui.com"
            tooltip="İçerik hakkında bilgi"
            icon={<AiOutlineQuestionCircle />}
            error={{
                errorStatus: true,
                errorMessage: 'Error Message'
              }}
          />
        </div>

      </div>
    </div>
  );
}

export default Index;