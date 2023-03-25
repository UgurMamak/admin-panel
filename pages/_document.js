import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import { theme } from 'antd';
export default function Document() {

    const { useToken } = theme;
    const { token } = useToken();
    
  return (
    <Html>
      <Head>
        <Script>
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}