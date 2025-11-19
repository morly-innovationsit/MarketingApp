import {configureStore} from '@reduxjs/toolkit';

import LoginReducer from '../screens/Login/Reducer/LoginReducer';

export const store = configureStore({
  reducer: {

    user : LoginReducer,

  },
});