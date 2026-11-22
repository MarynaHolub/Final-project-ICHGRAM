import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/api';

export const fetchLoginUser = createAsyncThunk(
  'auth/fetchLoginUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  },
);
