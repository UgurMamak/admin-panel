import { useMemo } from 'react';
import '../styles/globals.css';
import store from '../redux/store';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import { ConfigProvider } from 'antd';
import { useThemeMode, ThemeContext } from '../helpers/theme';
import { SidebarContext } from '../context/sidebarContext';
import { useRouter } from "next/router";
import variables from '../styles/variables.module.scss';
import '../styles/index.scss';
import { useSidebar } from '../hooks/useSidebar';
import { AppProps } from 'next/app';
import { useState } from 'react';
interface ICustomPageProps { // <--- your custom page props
  // your props
}

function MyApp({ Component, pageProps }: AppProps<ICustomPageProps>) {
  const router = useRouter();
  const { collapsed, collapseSidebar } = useSidebar(false);
  const themeContextValue = useThemeMode();

  if (router.pathname === '/404') return <Component {...pageProps} />;

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themeContextValue}>
        <SidebarContext.Provider value={{ collapsed, collapseSidebar }}>
          <ConfigProvider theme={themeContextValue.colorPalette} >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ConfigProvider>
        </SidebarContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default MyApp
