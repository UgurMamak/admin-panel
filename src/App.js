import './App.css';
import React, { useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { useProSidebar } from 'react-pro-sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useThemeMode, ColorModeContext } from './helpers/theme';
import Sidebar from './components/sidebar';
import Header from './components/header';

// pages
import Dashboard from './pages/dashboard';
import Widgets from './pages/widgets';

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
            className={style.layoutWrap + (collapsed ? ' collapsed' : '')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: '1',
              minHeight: '100vh',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Header />
            <main style={{ flexGrow: 1 }}>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/content-management/widgets" element={<Widgets />} />
              </Routes>
            </main>
          </div>
        </div>
      </ConfigProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
