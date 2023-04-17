import { useMemo } from 'react';
import '../styles/globals.css';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import { ConfigProvider } from 'antd';
import { useThemeMode, ColorModeContext } from '../helpers/theme';
import { SidebarContext } from '../context/sidebarContext';
import { useRouter } from "next/router";
import variables from '../styles/variables.module.scss';
import '../styles/index.scss';

import { useSidebar } from '../hooks/useSidebar';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [ collapsed, collapseSidebar ] = useSidebar();

  const [themeType, colorMode, palette] = useThemeMode();
  const colorModeProviderValue = useMemo(
    () => ({ colorMode, palette }),
    [colorMode, palette]
  );


  if (router.pathname === '/404') return <Component {...pageProps} />;


  return (
    <Provider store={store}>
      <ColorModeContext.Provider value={colorModeProviderValue}>
        <SidebarContext.Provider value={{collapsed, collapseSidebar}}>
          <ConfigProvider theme={themeType}>
      
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </SidebarContext.Provider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default MyApp
