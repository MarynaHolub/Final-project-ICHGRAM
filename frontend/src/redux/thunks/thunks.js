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

export const fetchRegisterUser = createAsyncThunk(
  'auth/fetchRegisterUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Register failed');
    }
  },
);

export const fetchForgotPassword = createAsyncThunk(
  'auth/fetchForgotPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Operation failed');
    }
  },
);

export const fetchResetPassword = createAsyncThunk(
  'auth/fetchResetPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Operation Reset failed');
    }
  },
);

export const fetchUsers = createAsyncThunk(
  'auth/fetchResetPassword',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Operation Reset failed');
    }
  },
);