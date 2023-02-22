import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate('form')} type="primary">
        Yeni Şema Ekle
      </Button>
    </div>
  );
}
