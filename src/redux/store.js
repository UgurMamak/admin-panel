import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import widgetReducer from './widgetSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    widget_schema_reducer: widgetReducer,
  },
});
