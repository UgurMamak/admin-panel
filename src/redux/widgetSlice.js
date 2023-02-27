/* eslint no-param-reassign: "error" */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { widgetURL } from '../config/api';

const initialState = {
  widgetSchema: [],
  postLoading: false,
};

export const fetchWidgetSchema = createAsyncThunk(
  'widget/widget_schema',
  async () => {
    const response = await axios.get(widgetURL.fetchWidgetSchema);
    return response.data;
  }
);

export const postWidgetSchema = createAsyncThunk(
  'widget_schema/post',
  async (data) => {
    const payload = await axios
      .post(widgetURL.postWidgetSchema, data)
      .then((response) => response.data);
    return payload;
  }
);

export const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWidgetSchema.pending, (state, action) => {
        state.widgetSchema = action.payload;
      })
      .addCase(fetchWidgetSchema.fulfilled, (state, action) => {
        state.widgetSchema = action.payload;
      })
      .addCase(fetchWidgetSchema.rejected, (state, action) => {
        state.widgetSchema = action.payload;
      })
      .addCase(postWidgetSchema.pending, (state, payload) => {
        state.postLoading = true;
      })
      .addCase(postWidgetSchema.fulfilled, (state, action) => {
        state.postLoading = false;
      })
      .addCase(postWidgetSchema.rejected, (state, action) => {
        state.postLoading = false;
      });
  },
});

// export const allEmployees = (state) => state.employeeSlice.employees;

export default widgetSlice.reducer;
