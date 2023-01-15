import React, { useContext } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Switch } from 'antd';
import { ColorModeContext} from '../../helpers/theme';
import { Button } from 'antd';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
  if (checked) {

  } else {

  }
};

export default function Index2() {
  const { collapseSidebar, toggleSidebar } = useProSidebar();
  const {colorMode,palette} = useContext(ColorModeContext);

  return (
    <header>
      Header
      <button className="sb-button" onClick={() => collapseSidebar()}>
        <AiOutlineAlignLeft />
      </button>
      <button className="sb-button" onClick={() => toggleSidebar()}>
        Toggle
      </button>
      <Switch defaultChecked onChange={onChange} />
      <Button type="primary" shape="circle" onClick={colorMode.toggleColorMode} icon={
        palette.mode === "dark" ? (
          <MdOutlineDarkMode />
        ) : (
          <MdOutlineLightMode />
        )
        
      } />
    </header>
  )
}


