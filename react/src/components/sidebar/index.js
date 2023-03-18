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
import { theme } from 'antd';
import { BiHomeAlt, BiBookContent } from 'react-icons/bi';
import './index.scss';

export default function Index() {
  const { collapseSidebar } = useProSidebar();
  const { useToken } = theme;
  const { token } = useToken();

  const sidebarData = [
    {
      label: 'Dashboard',
      link: '/',
      icon: <BiHomeAlt />,
      children: [],
    },
    {
      label: 'İçerik Yönetimi',
      link: '/content-management',
      icon: <BiBookContent />,
      children: [
        {
          label: 'Widget Yönetimi',
          icon: '',
          link: '/content-management/widgets',
          children: [],
        },
        {
          label: 'Widget Şema Yönetimi',
          icon: '',
          link: '/content-management/widget-schema',
          children: [],
        },
        {
          label: 'Navigasyon / Menu',
          icon: '',
          link: '/content-management/navigation',
          children: [],
        },
        {
          label: 'Statik Sayfa Yönetimi',
          icon: '',
          link: '/content-management/static-pages',
          children: [],
        },
        {
          label: 'Mail Şablonları',
          icon: '',
          link: '/content-management/mail-templates',
          children: [],
        },
        {
          label: 'Ürünler',
          icon: '',
          link: '',
          children: [],
        },
        {
          label: 'Kullanıcılar',
          icon: '',
          link: '',
          children: [],
        },
      ],
    },
  ];

  return (
    <Sidebar
      className="sidebar"
      rootStyles={{
        borderColor: `${token.colorSecondaryBg}`,
      }}
      backgroundColor={`${token.colorSecondaryBg}`}
      customBreakPoint="991px"
    >
      <div className="sidebar-header" />

      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => ({
            color: disabled && 'red',
            color: active
              ? `${token.colorSidebarIconHover}`
              : `${token.colorSidebarTextColor}`,
            backgroundColor: active
              ? `${token.colorSidebarIconHoverBg}`
              : undefined,
            '&:hover': {
              backgroundColor: `${token.colorSidebarIconHoverBg}`,
              color: `${token.colorSidebarIconHover}`,
            },
          }),
        }}
      >
        {sidebarData.map((item, index) =>
          item.children.length ? (
            <SubMenu
              key={index}
              icon={item.icon}
              routerLink={<Link to={item.link} />}
              label={item.label}
              rootStyles={{
                [`& > .${menuClasses.button}`]: {
                  '&:hover': {
                    backgroundColor: `${token.colorSidebarIconHoverBg}`,
                    color: `${token.colorSidebarIconHover}`,
                  },
                },
                [`.${menuClasses.subMenuContent}`]: {
                  backgroundColor: `${token.colorSecondaryBg}`,
                  color: `${token.colorSidebarTextColor}`,
                },
              }}
            >
              {item.children.map((subItem, subIndex) => (
                <MenuItem
                  key={subIndex}
                  icon={subItem.icon}
                  routerLink={<Link to={subItem.link} />}
                >
                  {subItem.label}
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem
              key={index}
              icon={<BiHomeAlt />}
              routerLink={<Link to={item.link} />}
            >
              {item.label}
            </MenuItem>
          )
        )}
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
