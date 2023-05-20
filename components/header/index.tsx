import React, { useContext, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Button, Switch, Row, Col, theme } from 'antd';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ColorModeContext } from '../../helpers/theme';
import { SidebarContext } from '../../context/sidebarContext';

//import './index.scss';


const style: React.CSSProperties = {  padding: '0 12px' };

const Header: React.FC = () => {

  const { colorMode, palette } = useContext(ColorModeContext);
  const { collapsed, collapseSidebar } = useContext(SidebarContext);
  const { useToken } = theme;
  const { token } = useToken();

  useEffect(() => {
    document.body.style.backgroundColor = token.colorBgLayout;
  }, [token.colorBgLayout]);


  return (
    <header style={style}>
      <div>
        <Button
          type="text"
          className="hamburger-btn--desktop"
          onClick={collapseSidebar}
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
          onClick={collapseSidebar}
          icon={<RxHamburgerMenu />}
        />
      </div>
      <Row gutter={24}>
        <Col className="gutter-row" xxl={6} xl={6} xs={12} >
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

    </header>
  );
}

export default Header;