import { createSlice } from '@reduxjs/toolkit';
import   { getList,getListbyName } from '../../AddedList/Action/ViewListAction';

const initialState = {
  getallitems : null, // Initially, no user is logged in
  loading: false,
  error: null,
  getitembyname:null

}
const viewlistSlice = createSlice({
  name: 'viewlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.loading = false;
        state.getallitems = action.payload; 
        console.log("reducer",state.addnew)// Store the API response in the user state
      })
      .addCase(getList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message if login fails
      })

     .addCase(getListbyName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getListbyName.fulfilled, (state, action) => {
        state.loading = false;
        state.getitembyname = action.payload; 
        console.log("reducer",state.getitembyname)// Store the API response in the user state
      })
      .addCase(getListbyName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message if login fails
      })
  }
});

export default viewlistSlice.reducer;