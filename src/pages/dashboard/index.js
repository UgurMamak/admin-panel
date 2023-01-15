import React from 'react';
import { Button, theme } from 'antd';


const Index = () => {
    const { useToken } = theme;
    const { token } = useToken();
    return (
        <div>
            <Button type="primary" style={{backgroundColor:token.colorPrimary}}>Primary Button</Button>
        </div>
    );

};
export default Index;
