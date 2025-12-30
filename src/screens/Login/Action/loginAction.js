
import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../../Config/axios';
import { storeUserData } from '../../../Config/AsyncStoarge';

export const loginAction = createAsyncThunk('login', async (resbody) => {
  
  console.log("fetch in redux",resbody);

  try{
  const res = await axiosInstance.post('login',resbody);
  console.log("data from reduxxx:",res)
  console.log("data from loginredux:",res.data)   
  return res.data;

} catch(error){
  console.error('Error fetching data:', error);
} 
});

export const currentuser = createAsyncThunk('currentuser' , async(body) => {
  try{
  const res = await axiosInstance.get( `company/${body.co_code}`);
  console.log("           mdbfdjhbhsdbhdsb          ", `company/${body.co_code}`)
  console.log("          mdbfdjhbhsdbhdsb           ", res.data)
  return res.data;
  }catch(error){
    console.error('Error fetching data:', error);
  }   
} )