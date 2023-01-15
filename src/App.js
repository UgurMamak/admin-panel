import './App.css';
import style from './index.module.scss';
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { ConfigProvider } from 'antd';
import Dashboard from "./pages/dashboard";
import { useThemeMode, ColorModeContext } from './helpers/theme';

import {useProSidebar } from 'react-pro-sidebar';


const App = () => {
  const [theme, colorMode, palette] = useThemeMode();
  const {collapsed} = useProSidebar();

  return (
    <>
      <ColorModeContext.Provider value={{ colorMode, palette }}>
        <ConfigProvider theme={theme}>
          <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar />
            <div className={ style.layoutWrap + (collapsed ? ' collapsed' :'')} style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh', height: '100%' }}>
              <Header />
              <main style={{ flexGrow: 1 }}>
                Main
                <Dashboard />
              </main>
            </div>
          </div>
        </ConfigProvider>
      </ColorModeContext.Provider>
    </>

  );
}

export default App;
