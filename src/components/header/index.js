import React, { useContext } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Button, Switch, Row, Col, theme } from 'antd';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ColorModeContext } from 'helpers/theme';
import './index.scss';

export default function Index() {
  const { collapseSidebar, toggleSidebar } = useProSidebar();
  const { colorMode, palette } = useContext(ColorModeContext);
  const { useToken } = theme;
  const { token } = useToken();

  document.body.style = `background:${token.colorBgLayout}`;

  return (
    <header>
      <div className="">
        <div>
          <Button
            type="text"
            className="hamburger-btn--desktop"
            onClick={() => collapseSidebar()}
            icon={<RxHamburgerMenu />}
          />
          <Switch
            checkedChildren={<MdOutlineDarkMode />}
            unCheckedChildren={<MdOutlineLightMode />}
            defaultChecked
            onChange={colorMode.toggleColorMode}
          />
          <Button
            type="text"
            className="hamburger-btn--mobile"
            onClick={() => toggleSidebar()}
            icon={<RxHamburgerMenu />}
          />
        </div>
        <Row gutter={16}>
          <Col className="gutter-row" xxl={6} xl={6} xs={12} />
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
      </div>
    </header>
  );
}
