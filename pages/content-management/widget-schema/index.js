import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// Components
import { Button } from 'antd';
import UMTable from 'components/table';

// Redux
import { fetchWidgetSchema } from 'redux/widgetSlice';

export default function Index() {
  const dispatch = useDispatch();
  const widgetSchema = useSelector((state) => state.widget_schema_reducer);
  const router = useRouter();
  useEffect(() => {
    dispatch(fetchWidgetSchema());
  }, []);

  return (
    <div>
      <Button onClick={() => router.push('widget-schema/form')} type="primary">
        Yeni Şema Ekle
      </Button>
      <h1>Var olan widget şemaları listelensin</h1>
      <h1>Tasarıma Figmadan bak.</h1>
      <h1>Tabloda seçilen şemanın detayı açılabilsin</h1>
      <UMTable/>
    </div>
  );
}
