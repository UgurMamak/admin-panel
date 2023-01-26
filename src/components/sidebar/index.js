/* eslint-disable consistent-return */
import React from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  useProSidebar,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { AiFillAlert, AiOutlineAlignLeft } from 'react-icons/ai';
import style from './index.module.scss';

export default function Index() {
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar
      rootStyles={{
        position: 'fixed',
        height: '100%',
      }}
      backgroundColor="#fff"
      customBreakPoint="767px"
    >
      <div className="sidebar-header">
        <button
          type="button"
          className="sb-button"
          onClick={() => collapseSidebar()}
        >
          <AiOutlineAlignLeft />
        </button>
      </div>
      <Menu
        rootStyles={{ [`.${menuClasses.icon}`]: { color: '#344cff' } }}
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? '#f5d9ff' : '#d359ff',
                backgroundColor: active ? '#eecef9' : undefined,
              };
          },
        }}
      >
        <MenuItem
          icon={<AiFillAlert />}
          routerLink={<Link to="/documentation" />}
        >
          {' '}
          Dashboard
        </MenuItem>
        <SubMenu
          icon={<AiFillAlert />}
          routerLink={<Link to="/content-management" />}
          label="İçerik Yönetimi"
        >
          <MenuItem routerLink={<Link to="/content-management/widgets" />}>
            Widget Yönetimi
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/content-management/widget-schema" />}
          >
            Widget Şema Yönetimi
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/navigation" />}>
            Navigasyon / Menu
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/static-pages" />}>
            Statik Sayfa Yönetimi
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/content-management/mail-templates" />}
          >
            Mail Şablonları
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/products" />}>
            Ürünler
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/shop-users" />}>
            Kullanıcılar
          </MenuItem>
        </SubMenu>
        <MenuItem
          active
          icon={<AiFillAlert />}
          routerLink={<Link to="/calendar" />}
        >
          {' '}
          Calendar
        </MenuItem>
        <MenuItem icon={<AiFillAlert />} routerLink={<Link to="/e-commerce" />}>
          {' '}
          E-commerce
        </MenuItem>
        <MenuItem
          disabled
          icon={<AiFillAlert />}
          routerLink={<Link to="/e-commerce" />}
        >
          {' '}
          Disabled
        </MenuItem>
        <SubMenu label="Maps">
          <MenuItem> Google maps</MenuItem>
          <MenuItem> Open street maps</MenuItem>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
            <SubMenu label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
      </Menu>
      <div className="sidebar-footer" />
    </Sidebar>
  );
}

export function Index2() {
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar
      rootStyles={{
        position: 'fixed',
      }}
      backgroundColor="#fff"
      customBreakPoint="767px"
    >
      <div className="sidebar-header">
        <button
          type="button"
          className="sb-button"
          onClick={() => collapseSidebar()}
        >
          <AiOutlineAlignLeft />
        </button>
      </div>
      <Menu
        rootStyles={{ [`.${menuClasses.icon}`]: { color: '#344cff' } }}
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? '#f5d9ff' : '#d359ff',
                backgroundColor: active ? '#eecef9' : undefined,
              };
          },
        }}
      >
        <MenuItem
          icon={<AiFillAlert />}
          routerLink={<Link to="/documentation" />}
        >
          {' '}
          Dashboard
        </MenuItem>
        <SubMenu
          icon={<AiFillAlert />}
          routerLink={<Link to="/content-management" />}
          label="İçerik Yönetimi"
        >
          <MenuItem routerLink={<Link to="/content-management/widgets" />}>
            Widget Yönetimi
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/content-management/widget-schema" />}
          >
            Widget Şema Yönetimi
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/navigation" />}>
            Navigasyon / Menu
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/static-pages" />}>
            Statik Sayfa Yönetimi
          </MenuItem>
          <MenuItem
            routerLink={<Link to="/content-management/mail-templates" />}
          >
            Mail Şablonları
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/products" />}>
            Ürünler
          </MenuItem>
          <MenuItem routerLink={<Link to="/content-management/shop-users" />}>
            Kullanıcılar
          </MenuItem>
        </SubMenu>
        <MenuItem
          active
          icon={<AiFillAlert />}
          routerLink={<Link to="/calendar" />}
        >
          {' '}
          Calendar
        </MenuItem>
        <MenuItem icon={<AiFillAlert />} routerLink={<Link to="/e-commerce" />}>
          {' '}
          E-commerce
        </MenuItem>
        <MenuItem
          disabled
          icon={<AiFillAlert />}
          routerLink={<Link to="/e-commerce" />}
        >
          {' '}
          Disabled
        </MenuItem>
        <SubMenu label="Maps">
          <MenuItem> Google maps</MenuItem>
          <MenuItem> Open street maps</MenuItem>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
            <SubMenu label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
      </Menu>
      <div className="sidebar-footer" />
    </Sidebar>
  );
}
