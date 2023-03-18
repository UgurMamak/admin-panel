import React from 'react';
import { Button } from "antd";
import { IoMdColorPalette } from "react-icons/io";
const Index = () => {
  return (
    <div className="theme-palette-wrapper">
      <Button type="primary" icon={<IoMdColorPalette />} />
      <div className="theme-palette-body">
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Index;