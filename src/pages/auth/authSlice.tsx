import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { initialAuthState, UserResponseData } from '../../core/models/auth';

const slice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setCredentials: (state, { payload: { username, password, token } }: PayloadAction<UserResponseData>) => {
      if (state.userInfo && state.userInfo) {
        state.userInfo.username = username;
        state.userInfo.password = password;
      }
      state.token = token;
    }
  },
  extraReducers: (builder) => {}
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const authState = (state: RootState) => state.auth;
