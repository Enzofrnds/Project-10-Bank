import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isLoggedIn: false,
  user: null,
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
    },
    
    // Réinitialise le store à la déconnexion
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, setUserProfile, updateUserName, logout } = userSlice.actions;
export default userSlice.reducer;