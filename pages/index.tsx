import React from 'react';
import { Button, theme, Row, Col,} from 'antd';
import {  DoughnutChart, LineChart, StackedChart } from "../components/chart";

function Index() {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div>
      <Button type="primary" style={{ backgroundColor: token.colorPrimary }}>
        Primary Button
      </Button>
      
      <Row gutter={24}>
        <Col className="gutter-row" xxl={6} xl={6} xs={12} >
          <DoughnutChart/>
        </Col>
        <Col className="gutter-row" xxl={6} xl={6} xs={12} >
            <LineChart/>
        </Col>
        <Col className="gutter-row" xxl={12} xl={12} xs={12} >
        <StackedChart/>
        </Col>
      </Row>
    </div>
  );
}
export default Index;
