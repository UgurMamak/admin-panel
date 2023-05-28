import { BiHomeAlt, BiBookContent } from 'react-icons/bi';
import { Button, Menu } from 'antd';
import { useState, useContext } from 'react';
import Link from 'next/link';
import { SidebarContext, SidebarContextType } from '@/context/sidebarContext';
import { theme, MenuTheme } from 'antd';
import { ThemeContext } from '@/helpers/theme';

const items = [
  {
    label: (
      <Link href="/"> Dashboard </Link>
    ),
    key: 'dashboard',
    icon: <BiHomeAlt />,
  },
  {
    label: 'İçerik Yönetimi',
    key: 'icerik-yonetimi',
    icon: <BiBookContent />,
    children: [
      {
        label: (
          <Link href="/content-management/widgets"> Widget Yönetimi </Link>
        ),
        key: 'widget-yonetimi',
        icon: <BiHomeAlt />,
      },
      {
        label: (
          <Link href="/content-management/widget-schema"> Widget Şema Yönetimi </Link>
        ),
        key: 'widget-sema-yonetimi',
        icon: <BiHomeAlt />,
      },
      {
        label: (
          <Link href="/content-management/navigation"> Navigasyon / Menu</Link>
        ),
        key: 'navigation-menu',
        icon: <BiHomeAlt />,
      },
      {
        label: (
          <Link href="/content-management/static-pages"> Statik Sayfa Yönetimi </Link>
        ),
        key: 'statik-sayfa-yonetimi',
        icon: <BiHomeAlt />,
      },
      {
        label: (
          <Link href="/content-management/mail-templates"> Mail Şablonları </Link>
        ),
        key: 'mail-sablonlari',
        icon: <BiHomeAlt />,
      },
      {
        label: (
          <Link href="/content-management/mail-templates"> Kategori Şeması </Link>
        ),
        key: 'kategori-semasi',
        icon: <BiHomeAlt />,
      },
      {

        label: 'Item 1',
        children: [
          {
            label: (
              <Link href="/home"> Home</Link>
            ),
            key: 'alipay2',
          },
          {
            label: 'Option 2',
            key: 'setting:2:2',
          },
        ],
      },
      {

        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4:4',
          },
        ],
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  const { collapsed, collapseSidebar } = useContext(SidebarContext);
  const themeContext = useContext(ThemeContext);
  const { useToken } = theme;
  const { token } = useToken();
  const themeString: string = themeContext?.currentTheme;
  const menuTheme: MenuTheme = themeString as MenuTheme;

  return (
    <nav
      className={` sidebar ${collapsed ? 'collapsed' : ''} ${themeContext.currentTheme} `}
    >
      <Menu
        theme={menuTheme}
        defaultSelectedKeys={['1']}
        mode="inline"
        className='deneme'
        inlineCollapsed={collapsed}
        items={items}
      />
    </nav>
  );
};
export default Sidebar;