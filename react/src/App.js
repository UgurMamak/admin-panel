import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useProSidebar } from 'react-pro-sidebar';
import { useThemeMode, ColorModeContext } from './helpers/theme';
import Sidebar from './components/sidebar';
import Header from './components/header';

import style from './index.module.scss';
import './assets/styles/base.scss';

function App() {
  const [themeType, colorMode, palette] = useThemeMode();
  const { collapsed } = useProSidebar();
  const colorModeProviderValue = useMemo(
    () => ({ colorMode, palette }),
    [colorMode, palette]
  );

  return (
    <ColorModeContext.Provider value={colorModeProviderValue}>
      <ConfigProvider theme={themeType}>
        <div
          className={style.baseElement}
          style={{ display: 'flex', height: '100%' }}
        >
          <Sidebar />
          <div
            className={`container ${style.layoutWrap} ${
              collapsed ? ' collapsed' : ''
            }`}
          >
            <Header />
            <main style={{ flexGrow: 1 }}>
              <Outlet />
            </main>
          </div>
        </div>
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
