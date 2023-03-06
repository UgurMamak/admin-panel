import React from 'react';
import { Button, theme } from 'antd';
import Counter from 'components/counter';

function Index() {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div>
      <Button type="primary" style={{ backgroundColor: token.colorPrimary }}>
        Primary Button
      </Button>
      <Counter />
    </div>
  );
}
export default Index;
