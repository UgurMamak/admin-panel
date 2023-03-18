import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import { Button } from 'antd';

// Redux
import { fetchWidgetSchema } from 'redux/widgetSlice';

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const widgetSchema = useSelector((state) => state.widget_schema_reducer);

  useEffect(() => {
    dispatch(fetchWidgetSchema());
  }, []);

  return (
    <div>
      <Button onClick={() => navigate('form')} type="primary">
        Yeni Şema Ekle
      </Button>
      <h1>Var olan widget şemaları listelensin</h1>
      <h1>Tasarıma Figmadan bak.</h1>
      <h1>Tabloda seçilen şemanın detayı açılabilsin</h1>
    </div>
  );
}
