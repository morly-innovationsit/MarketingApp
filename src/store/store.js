import { configureStore } from '@reduxjs/toolkit';

import LoginReducer from '../screens/Login/Reducer/LoginReducer';
import AddnewReducer from '../screens/AddNew/Reducer/AddnewReducer';
import ViewListReducer from '../screens/AddedList/Reducer/ViewListReducer'
const store = configureStore({
  reducer: {

    user : LoginReducer,
    addnew : AddnewReducer,
    viewlist : ViewListReducer
  },
});
export default store;