import './App.css';
import React, { useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { useProSidebar } from 'react-pro-sidebar';
import { useThemeMode, ColorModeContext } from './helpers/theme';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Dashboard from './pages/dashboard';

import style from './index.module.scss';

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
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar />
          <div
            className={style.layoutWrap + (collapsed ? ' collapsed' : '')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              minHeight: '100vh',
              height: '100%',
            }}
          >
            <Header />
            <main style={{ flexGrow: 1 }}>
              Main
              <Dashboard />
            </main>
          </div>
        </div>
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
