import { createSlice } from '@reduxjs/toolkit';
import { initialAuthState } from '../../core/models/auth';
import { authApi } from '../../core/services/auth';

const slice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    clearToken: (state) => {
      state.token = '';
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload: { data: { token, username, password } } }) => {
        state.token = token;
        state.userInfo = {
          username: username,
          password: password
        };
        console.log('登录成功！！！',token);
      }
    );
  }
});

// export const { setCredentials } = slice.actions;

export default slice.reducer;

export const { clearToken } = slice.actions;
