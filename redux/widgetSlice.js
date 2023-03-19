/* eslint no-param-reassign: "error" */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { widgetURL } from '../config/api';

const initialState = {
  widgetSchema: [],
  postLoading: false,
  post: {
    errorStatus: false,
    message: '',
  },
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
  reducers: {
    postUpdate: (state, { payload }) => {
      state.post = {
        ...state.post,
        message: payload.message,
        errorStatus: payload.errorStatus,
      };
    },
  },
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
        state.post = {
          ...state.post,
          errorStatus: false,
        };
      })
      .addCase(postWidgetSchema.fulfilled, (state, action) => {
        state.postLoading = false;
        state.post = {
          ...state.post,
          errorStatus: true,
          message: 'Şema Eklendi',
        };
      })
      .addCase(postWidgetSchema.rejected, (state, action) => {
        state.postLoading = false;
        state.post = {
          ...state.post,
          errorStatus: false,
          message: 'Hata şema eklenmedi',
        };
      });
  },
});

// export const allEmployees = (state) => state.employeeSlice.employees;

export const { postUpdate } = widgetSlice.actions;

export default widgetSlice.reducer;
