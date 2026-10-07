import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
  user: null,
  username: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    
    setUserProfile: (state, action) => {
      state.user = action.payload;
      state.username = action.payload.username;
    },
    
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      state.username = null;
    },
  },
});

export const { setToken, setUserProfile, logout } = userSlice.actions;
export default userSlice.reducer;