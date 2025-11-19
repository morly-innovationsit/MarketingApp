import { createSlice } from '@reduxjs/toolkit';
import { currentuser, loginAction } from '../../Login/Action/loginAction'; // Import your login action

const initialState = {
  user: null, // Initially, no user is logged in
  loading: false,
  error: null,
  current_user: null
};

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
        console.log("reducer",state.user)// Store the API response in the user state
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message if login fails
      })

      .addCase(currentuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(currentuser.fulfilled, (state, action) => {
        state.loading = false;
        state.current_user = action.payload; 
        console.log("reducer",state.current_user)// Store the API response in the user state
      })
      .addCase(currentuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message if login fails
      });
  }
});

export default loginSlice.reducer;