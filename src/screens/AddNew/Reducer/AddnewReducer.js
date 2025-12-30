import { createSlice } from '@reduxjs/toolkit';
import {  AddnewAction } from '../../AddNew/Action/AddnewAction';

const initialState = {
  addnew : null, // Initially, no user is logged in
  loading: false,
  error: null,

}
const addnewSlice = createSlice({
  name: 'addnew',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddnewAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddnewAction.fulfilled, (state, action) => {
        state.loading = false;
        state.addnew = action.payload; 
        console.log("reducer",state.addnew)// Store the API response in the user state
      })
      .addCase(AddnewAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message if login fails
      })

  
  }
});

export default addnewSlice.reducer;