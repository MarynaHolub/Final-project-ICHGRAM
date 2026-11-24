import { createSlice } from '@reduxjs/toolkit';
import { fetchForgotPassword, fetchLoginUser, fetchRegisterUser, fetchResetPassword } from '../thunks/thunks';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  successMessage: null,
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
      })

      .addCase(fetchRegisterUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(fetchRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })

      .addCase(fetchForgotPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(fetchForgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(fetchForgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })

      .addCase(fetchResetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(fetchResetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload.message;
      })
      .addCase(fetchResetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default authSlice.reducer;

// action.payload	Значение, переданное через rejectWithValue
// action.error.message	Стандартное сообщение об ошибке Redux Toolkit
