import React, { useContext } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Button, Switch, Row, Col, theme } from 'antd';
import { ColorModeContext } from '../../helpers/theme';

const onChange = (checked) => {};

export default function Index() {
  const { collapseSidebar, toggleSidebar } = useProSidebar();
  const { colorMode, palette } = useContext(ColorModeContext);
  const { useToken } = theme;
  const { token } = useToken();

  document.body.style = `background:${token.colorBgLayout}`;

  return (
    <header style={{ backgroundColor: token.colorPrimary }}>
      Header
      <Row gutter={16}>
        <Col className="gutter-row" xxl={6} xl={6} xs={12}>
          col-1
        </Col>
        <Col xxl={6} xl={6} xs={12}>
          col-2
        </Col>
        <Col className="gutter-row" xxl={6} xl={6} xs={12}>
          col-3
        </Col>
        <Col xxl={6} xl={6} xs={12}>
          col-4
        </Col>
      </Row>
      <button
        type="button"
        className="sb-button"
        onClick={() => collapseSidebar()}
      >
        <AiOutlineAlignLeft />
      </button>
      <button
        type="button"
        className="sb-button"
        onClick={() => toggleSidebar()}
      >
        Toggle
      </button>
      <Switch defaultChecked onChange={onChange} />
      <Button
        type="primary"
        shape="circle"
        onClick={colorMode.toggleColorMode}
        icon={
          palette.mode === 'dark' ? (
            <MdOutlineDarkMode />
          ) : (
            <MdOutlineLightMode />
          )
        }
      />
    </header>
  );
}
