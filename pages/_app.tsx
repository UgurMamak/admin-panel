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
import { AppProps } from 'next/app';

import { useState } from 'react';

interface CustomPageProps { // <--- your custom page props
   // your props
}


function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  const router = useRouter();
  const {collapsed, collapseSidebar} = useSidebar(false);



  const [themeType, colorMode, palette] = useThemeMode();
  const colorModeProviderValue = useMemo(
    () => ({ colorMode, palette }),
    [colorMode, palette]
  );


  if (router.pathname === '/404') return <Component {...pageProps} />;


  return (
    <Provider store={store}>
        <SidebarContext.Provider value={{collapsed, collapseSidebar}}>
          <ConfigProvider >
      
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </SidebarContext.Provider>

    </Provider>
  );
}

export default MyApp
