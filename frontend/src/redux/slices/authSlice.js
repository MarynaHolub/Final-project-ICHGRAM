import { createSlice } from '@reduxjs/toolkit';
import { fetchLoginUser } from '../thunks/thunks';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default authSlice.reducer;

// action.payload	Значение, переданное через rejectWithValue
// action.error.message	Стандартное сообщение об ошибке Redux Toolkit
