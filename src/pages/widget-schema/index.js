import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchWidgetSchema } from '../../redux/widgetSlice';

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWidgetSchema());
  });

  return (
    <div>
      <Button onClick={() => navigate('form')} type="primary">
        Yeni Şema Ekle
      </Button>
    </div>
  );
}
